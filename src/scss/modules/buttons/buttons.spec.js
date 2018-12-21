describe('Buttons', () => {
    // c-btn base
    describe('Base Button', () =>  {
        let $btn = $('<button class="c-btn">Button</button>');

        before((done) => {
            $testContainer.append($btn);
            done();
        });

        it('should have correct styles', () => {
            expect($btn.css('padding'), 'padding').to.equal('8px 24px');
            expect($btn.css('line-height'), 'line-height').to.equal('12px');
            expect($btn.css('border-radius'), 'border-radius').to.equal('2px');
            expect($btn.css('font-size'), 'font-size').to.equal('12px');
            expect($btn.css('font-weight'), 'font-weight').to.equal('700');
        });
    });

    // c-btn c-btn-primary
    describe('Primary Button', () => {
        let $primaryBtn = $('<button class="c-btn c-btn-primary">Button</button>');

        before((done) => {
            $testContainer.append($primaryBtn);
            done();
        });

        it('should have correct styles', () => {
            expect($primaryBtn.css('height'), 'button height').to.equal('30px');
            expect($primaryBtn.css('color'), 'text-color').to.equal(toRgb('#ffffff'));
            expect($primaryBtn.css('background-color'), 'background').to.equal(toRgb('#1b6ec2'));
            expect($primaryBtn.css('border'), 'border').to.equal('1px solid ' + toRgb('#1862ab'));
        });
    });

    // c-btn c-btn-default
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
            expect($defaultBtn.css('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));
        });
    });

    // c-btn c-btn-success
    describe('Success button', () => {
        let $successBtn = $('<button class="c-btn c-btn-success">Button</button>');

        before((done) => {
            $testContainer.append($successBtn);
            done();
        });

        it('should have correct styles', () => {
            expect($successBtn.css('height'), 'button height').to.equal('30px');
            expect($successBtn.css('color'), 'text color').to.equal(toRgb('#ffffff'));
            expect($successBtn.css('background-color'), 'background').to.equal(toRgb('#2f9e44'));
            expect($successBtn.css('border'), 'border').to.equal('1px solid ' + toRgb('#2b8a3e'));
        });
    });

    // c-btn c-btn-warning
    describe('Warning button', () => {
        let $warningBtn = $('<button class="c-btn c-btn-warning">Button</button>');

        before((done) => {
            $testContainer.append($warningBtn);
            done();
        });

        it('should have correct styles', () => {
            expect($warningBtn.css('height'), 'button height').to.equal('30px');
            expect($warningBtn.css('color'), 'text color').to.equal(toRgb('#ffffff'));
            expect($warningBtn.css('background-color'), 'background').to.equal(toRgb('#e8590c'));
            expect($warningBtn.css('border'), 'border').to.equal('1px solid ' + toRgb('#d9480f'));
        });
    });

    // c-btn c-btn-danger
    describe('Danger Button', () => {
        let $dangerBtn = $('<button class="c-btn c-btn-danger">Button</button>');

        before((done) => {
            $testContainer.append($dangerBtn);
            done();
        });

        it('should have correct styles', () => {
            expect($dangerBtn.css('height'), 'button height').to.equal('30px');
            expect($dangerBtn.css('color'), 'text color').to.equal(toRgb('#ffffff'));
            expect($dangerBtn.css('background-color'), 'background').to.equal(toRgb('#e03131'));
            expect($dangerBtn.css('border'), 'border').to.equal('1px solid ' + toRgb('#c92a2a'));
        });
    });

    // c-btn c-btn-secondary
    describe('Secondary Button', () => {
        let $secondaryBtn = $('<button class="c-btn c-btn-secondary">Button</button>');

        before((done) => {
            $testContainer.append($secondaryBtn);
            done();
        });

        it('should have correct styles', () => {
            expect($secondaryBtn.css('height'), 'button height').to.equal('30px');
            expect($secondaryBtn.css('color'), 'text color').to.equal(toRgb('#212529'));
            expect($secondaryBtn.css('background-color'), 'background').to.equal(toRgb('#f1f3f5'));
            expect($secondaryBtn.css('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));
        });
    });
});
