

describe('Default Button', () => {   
    let $defaultBtn = $('<button class="c-btn c-btn-default">Button</button>');
    
    before((done) => {
        $testContainer.append($defaultBtn);
        done();
    });

    it('should have correct styles', () => {
        expect($defaultBtn.css('height'), 'button height').to.equal('30px');
        expect($defaultBtn.css('color'), 'text color').to.equal(toRgb('#212529'));
        expect($defaultBtn.css('background-color'), 'background').to.equal(toRgb('#f1f3f5'));
    });
});


describe('Primary Button', () => {    
    let $primaryBtn = $('<button class="c-btn c-btn-primary">Button</button>');
    
    before((done) => {
        $testContainer.append($primaryBtn);      
        done();
    });   
    
    it('should have correct styles', () => {
        expect($primaryBtn.css('color'), 'text-color').to.equal(toRgb('#ffffff'));
        expect($primaryBtn.css('background-color'), 'background').to.equal(toRgb('#1b6ec2'));
    });
});

