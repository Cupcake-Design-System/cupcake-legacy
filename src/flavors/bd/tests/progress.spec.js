describe('BD Progress', () => {
    describe('BD Progress Wrapper', () => {
        let $progressWrapper = $(`<div class="c-progress"></div>`);

        before((done) => {
            $testContainer.append($progressWrapper);
            done();
        });

        it('should have correct styles', () => {
            expect($progressWrapper.css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
            expect($progressWrapper.css('height'), 'height').to.equal('32px');
            expect($progressWrapper.css('border-radius'), 'border-radius').to.equal('2px');
            expect($progressWrapper.css('margin-bottom'), 'margin-bottom').to.equal('16px');
        });

        it('Small should have correct styles', () => {
            $progressWrapper.addClass('c-progress-sm');
            expect($progressWrapper.css('height'), 'height').to.equal('12px');
        });

        it('Large should have correct styles', () => {
            $progressWrapper.addClass('c-progress-lg');
            expect($progressWrapper.css('height'), 'height').to.equal('48px');
        });
    });
    
    describe('BD Progress Meter', () => {
        let $progressMeter = $(`<div class="c-progress"><div class="c-progress-meter"></div></div>`);

        before((done) => {
            $testContainer.append($progressMeter);
            done();
        });

        it('Primary should have correct styles', () => {
            $progressMeter.addClass('c-progress-primary');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('position'), 'position').to.equal('relative');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('border-radius'), 'border-radius').to.equal('2px');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0079bd'));
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('background-image'), 'background-image').to.equal('linear-gradient(' + toRgb('#008ddc') + ', ' + toRgb('#0079bd') + ' 66%, ' + toRgb('#006ca9') + ')');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#0069a4'));
        });

        it('Success should have correct styles', () => {
            $progressMeter.addClass('c-progress-success');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('position'), 'position').to.equal('relative');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('border-radius'), 'border-radius').to.equal('2px');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#37b24d'));
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('background-image'), 'background-image').to.equal('linear-gradient(' + toRgb('#43c55a') + ', ' + toRgb('#37b24d') + ' 66%, ' + toRgb('#32a246') + ')');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#319f45'));
        });

        it('Small should have correct styles', () => {
            $progressMeter.addClass('c-progress-sm');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('height'), 'height').to.equal('12px');
        });

        it('large should have correct styles', () => {
            $progressMeter.addClass('c-progress-lg');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter')).getPropertyValue('height'), 'height').to.equal('48px');
        });
    });
    
    describe('BD Progress Meter Text', () => {
        let $progressMeterText = $(`<div class="c-progress"><span class="c-progress-meter"><p class="c-progress-meter-text"></p></span></div>`);

        before((done) => {
            $testContainer.append($progressMeterText);
            done();
        });

        it('should have correct styles', () => {
            $progressMeterText.addClass('c-progress-primary');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-text')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-text')).getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-text')).getPropertyValue('margin'), 'margin').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-text')).getPropertyValue('font-size'), 'font-size').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-text')).getPropertyValue('white-space'), 'white-space').to.equal('nowrap');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-text')).getPropertyValue('border-radius'), 'border-radius').to.equal('2px');
        });

        it('Small should have correct styles', () => {
            $progressMeterText.addClass('c-progress-sm');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-text')).getPropertyValue('font-size'), 'font-size').to.equal('8px');
        });

        it('Large should have correct styles', () => {
            $progressMeterText.addClass('c-progress-lg');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-text')).getPropertyValue('font-size'), 'font-size').to.equal('16px');
        });
    });
    
    describe('BD Progress Meter Animated', () => {
        let $progressMeterAnimated = $(`<div class="c-progress"><div class="c-progress-meter-animated"></div></div>`);

        before((done) => {
            $testContainer.append($progressMeterAnimated);
            done();
        });

        it('Primary should have correct styles', () => {
            $progressMeterAnimated.addClass('c-progress-primary');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('background-size'), 'background-size').to.equal('48px 48px');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('background-image'), 'background-image').to.equal('linear-gradient(135deg, ' + toRgb('#0079bd') + ' 25%, ' + toRgb('#00588a') + ' 25%, ' + toRgb('#00588a') + ' 50%, ' + toRgb('#0079bd') + ' 50%, ' + toRgb('#0079bd') + ' 75%, ' + toRgb('#00588a') + ' 75%)');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('animation-name'), 'animation-name').to.equal('stripes');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('animation-duration'), 'animation-duration').to.equal('3s');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('animation-timing-function'), 'animation-timing-function').to.equal('linear');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('animation-iteration-count'), 'animation-iteration-count').to.equal('infinite');
        });

        it('Success should have correct styles', () => {
            $progressMeterAnimated.addClass('c-progress-success');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('background-size'), 'background-size').to.equal('48px 48px');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('background-image'), 'background-image').to.equal('linear-gradient(135deg, ' + toRgb('#37b24d') + ' 25%, ' + toRgb('#2b8b3c') + ' 25%, ' + toRgb('#2b8b3c') + ' 50%, ' + toRgb('#37b24d') + ' 50%, ' + toRgb('#37b24d') + ' 75%, ' + toRgb('#2b8b3c') + ' 75%)');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('animation-name'), 'animation-name').to.equal('stripes');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('animation-duration'), 'animation-duration').to.equal('3s');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('animation-timing-function'), 'animation-timing-function').to.equal('linear');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('animation-iteration-count'), 'animation-iteration-count').to.equal('infinite');
        });

        it('Small should have correct styles', () => {
            $progressMeterAnimated.addClass('c-progress-sm');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('height'), 'height').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('background-size'), 'background-size').to.equal('12px 12px');
        });

        it('Large should have correct styles', () => {
            $progressMeterAnimated.addClass('c-progress-lg');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('height'), 'height').to.equal('48px');
            expect(window.getComputedStyle(document.querySelector('.c-progress-meter-animated')).getPropertyValue('background-size'), 'background-size').to.equal('48px 48px');
        });
    });
})
