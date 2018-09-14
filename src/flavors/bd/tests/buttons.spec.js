// c-btn c-btn-primary
describe('BD Primary Button', () => {
    let $primaryBtn = $('<button class="c-btn c-btn-primary">Button</button>');

    before((done) => {
        $testContainer.append($primaryBtn);
        done();
    });

    it('should have correct styles', () => {
        expect($primaryBtn.css('height'), 'button height').to.equal('29.6px');
        expect($primaryBtn.css('color'), 'text-color').to.equal(toRgb('#ffffff'));
        expect($primaryBtn.css('background-color'), 'background').to.equal(toRgb('#0079bd'));
    });
});

// c-btn c-btn-default
describe('BD Default Button', () => {
    let $defaultBtn = $('<button class="c-btn c-btn-default">Button</button>');

    before((done) => {
        $testContainer.append($defaultBtn);
        done();
    });

    it('should have correct styles', () => {
        expect($defaultBtn.css('height'), 'button height').to.equal('29.6px');
        expect($defaultBtn.css('color'), 'text color').to.equal(toRgb('#414152'));
        expect($defaultBtn.css('background-color'), 'background').to.equal(toRgb('#f1f3f5'));
    });
});

// c-btn c-btn-success
describe('BD success button', () => {
    let $successBtn = $('<button class="c-btn c-btn-success">Button</button>');

    before((done) => {
        $testContainer.append($successBtn);
        done();
    });

    it('should have correct styles', () => {
        expect($successBtn.css('height'), 'button height').to.equal('29.6px');
        expect($successBtn.css('color'), 'text color').to.equal(toRgb('#ffffff'));
        expect($successBtn.css('background-color'), 'background').to.equal(toRgb('#37b24d'));
    });
});

// c-btn c-btn-warning
// c-btn c-btn-danger