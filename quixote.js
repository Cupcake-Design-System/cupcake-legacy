
const assert = require('chai').assert;
const quixote = require('quixote');

describe("General element", function() {
    var frame;
    var myButton;
    var btnToTest;
    // var body;

    before(function(done){
        frame = quixote.createFrame({
            stylesheet: "/base/dist/default.css"
        }, done);
    });

    after(function(){
        frame.remove();
    });

    beforeEach(function(){
        frame.reset();
        // myButton = frame.add('<button class="c-btn c-btn-default" id="general-btn">Btn</button>');
        frame.add('<button class="c-btn c-btn-default" id="general-btn">Btn</button>');
        btnToTest = frame.get('#general-btn');
    });

    it("test css", function(){
        btnToTest.assert({
            height: 30
        });

        assert.equal(btnToTest.getRawStyle('font-size'), '12px', 'should be correct font-size (14px)');
        assert.equal(btnToTest.getRawStyle('color'), 'rgb(73, 80, 87)', 'should be have correct color rgb(73, 80, 87)');
        // assert.equal(btnToTest.getRawStyle('box-shadow'), 'rgba(33, 37, 41, 0.1) 0px 1px 0px 0px', 'should have correct shadow rgba(33, 37, 41, 0.1) 0px 1px 0px 0px');
        assert.equal(btnToTest.getRawStyle('height'), '30px', 'should be correct height (30px)');

        // expect(btnToTest.getRawStyle('height').to.equal('30px'));
    });

});



