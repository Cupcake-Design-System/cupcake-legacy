describe('BD Progress', () => {

    // c-progress-primary c-progress-meter, c-progress-success c-progress-meter
    describe('BD Primary, Success meter', () => {

        let $progressColors = {
            'primary': { 
                'backgroundColor': toRgb('#0079bd'),
                'gradientStart': toRgb('#008ddc'),
                'gradientCenter': toRgb('#0079bd'),
                'gradientEnd': toRgb('#006ca9'),
                'borderColor': toRgb('#0069a4')
            },
            'success': { 
                'backgroundColor': toRgb('#37b24d'),
                'gradientStart': toRgb('#43c55a'),
                'gradientCenter': toRgb('#37b24d'),
                'gradientEnd': toRgb('#32a246'),
                'borderColor': toRgb('#319f45')
            }
        };

        for (let $status in $progressColors) {
            let $progress = $(`<div class="c-progress c-progress-${$status}"><div class="c-progress-meter" style="width: 30%"></div></div>`),
                $progressColorValue = $progressColors[$status],
                $progressStatus = $status,
                testParameters = [$progress, $progressColorValue, $progressStatus];

            before((done) => {
                $testContainer.append($progress);
                done();
            });

            testProgress(...testParameters);
        }

        function testProgress($progress, $progressColors, $progressStatus) {
            it($progressStatus + ' progress should have correct styles', () => {
                expect($progress.css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
                expect($progress.css('height'), 'height').to.equal('32px');
                expect($progress.css('border-radius'), 'border-radius').to.equal('2px');
                expect($progress.css('margin-bottom'), 'margin-bottom').to.equal('16px');
            
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter`)).getPropertyValue('display'), 'display').to.equal('block');
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter`)).getPropertyValue('position'), 'position').to.equal('relative');
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter`)).getPropertyValue('border-radius'), 'border-radius').to.equal('2px');
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter`)).getPropertyValue('background-image'), 'background-image').to.equal(`linear-gradient(${$progressColors.gradientStart}, ${$progressColors.gradientCenter} 66%, ${$progressColors.gradientEnd})`);
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter`)).getPropertyValue('background-color'), 'background-color').to.equal($progressColors.backgroundColor);
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter`)).getPropertyValue('border'), 'border').to.equal('1px solid ' + $progressColors.borderColor);
            });
        }
    });

    // c-progress-sm c-progress-meter, c-progress-lg c-progress-meter
    describe('BD Small, Large meter', () => {

        let $progressSizes = {
            'sm': '12px',
            'lg': '48px'
        };

        for (let $size in $progressSizes) {
            let $progress = $(`<div class="c-progress c-progress-primary c-progress-${$size}"><div class="c-progress-meter" style="width: 30%"></div></div>`),
                $progressStyles = $progressSizes[$size],
                $progressSize = $size,
                testParameters = [$progress, $progressStyles, $progressSize];
      
            before((done) => {
                $testContainer.append($progress);
                done();
            });
      
            testProgressSizes(...testParameters);
        }
      
        function testProgressSizes($progress, $progressStyleValues, $progressSize) {
            it($progressSize + ' progress should have correct styles', () => {
                expect($progress.css('height'), 'height').to.equal($progressStyleValues);
            });
        }
    });
    
    describe('BD Progress Meter Text', () => {
        let $progressMeterText = $(`<div class="c-progress c-progress-primary">
                                        <span class="c-progress-meter" style="width: 45%">
                                            <p class="c-progress-meter-text">45%</p>
                                        </span>
                                    </div>`);

        before((done) => {
            $testContainer.append($progressMeterText);
            done();
        });

        it('should have correct styles', () => {
            expect($progressMeterText.find('p').css('position'), 'position').to.equal('absolute');
            expect($progressMeterText.find('p').css('color'), 'color').to.equal(toRgb('#ffffff'));
            expect($progressMeterText.find('p').css('margin'), 'margin').to.equal('0px');
            expect($progressMeterText.find('p').css('font-size'), 'font-size').to.equal('12px');
            expect($progressMeterText.find('p').css('white-space'), 'white-space').to.equal('nowrap');
            expect($progressMeterText.find('p').css('border-radius'), 'border-radius').to.equal('2px');
        });
    });
    
    // c-progress-sm c-progress-meter-text, c-progress-lg c-progress-meter-text
    describe('BD Small, Large meter text', () => {

        let $progressSizes = {
            'sm': '8px',
            'lg': '16px'
        };

        for (let $size in $progressSizes) {
            let $progress = $(`<div class="c-progress c-progress-primary c-progress-${$size}">
                                    <div class="c-progress-meter" style="width: 45%">
                                        <p class="c-progress-meter-text">45%</p>
                                    </div>
                                </div>`),
                $progressStyles = $progressSizes[$size],
                $progressSize = $size,
                testParameters = [$progress, $progressStyles, $progressSize];
      
            before((done) => {
                $testContainer.append($progress);
                done();
            });
      
            testProgressSizes(...testParameters);
        }
      
        function testProgressSizes($progress, $progressStyleValues, $progressSize) {
            it($progressSize + ' progress should have correct styles', () => {
                expect($progress.find('p').css('font-size'), 'font-size').to.equal($progressStyleValues);
            });
        }
    });

    // c-progress-primary c-progress-meter-animated, c-progress-success c-progress-meter-animated
    describe('BD Primary, Success meter', () => {

        let $progressColors = {
            'primary': { 
                'gradientFirstColor': toRgb('#0079bd'),
                'gradientSecondColor': toRgb('#00588a')
            },
            'success': {
                'gradientFirstColor': toRgb('#37b24d'),
                'gradientSecondColor': toRgb('#2b8b3c')
            }
        };

        for (let $status in $progressColors) {
            let $progress = $(`<div class="c-progress c-progress-${$status}"><div class="c-progress-meter-animated" style="width: 65%"></div></div>`),
                $progressColorValue = $progressColors[$status],
                $progressStatus = $status,
                testParameters = [$progress, $progressColorValue, $progressStatus];

            before((done) => {
                $testContainer.append($progress);
                done();
            });

            testProgress(...testParameters);
        }

        function testProgress($progress, $progressColors, $progressStatus) {
            it($progressStatus + ' progress should have correct styles', () => {
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter-animated`)).getPropertyValue('height'), 'height').to.equal('32px');
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter-animated`)).getPropertyValue('background-size'), 'background-size').to.equal('48px 48px');
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter-animated`)).getPropertyValue('background-image'), 'background-image').to.equal(`linear-gradient(135deg, ${$progressColors.gradientFirstColor} 25%, ${$progressColors.gradientSecondColor} 25%, ${$progressColors.gradientSecondColor} 50%, ${$progressColors.gradientFirstColor} 50%, ${$progressColors.gradientFirstColor} 75%, ${$progressColors.gradientSecondColor} 75%)`);
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter-animated`)).getPropertyValue('animation-name'), 'animation-name').to.equal('stripes');
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter-animated`)).getPropertyValue('animation-duration'), 'animation-duration').to.equal('3s');
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter-animated`)).getPropertyValue('animation-timing-function'), 'animation-timing-function').to.equal('linear');
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressStatus} .c-progress-meter-animated`)).getPropertyValue('animation-iteration-count'), 'animation-iteration-count').to.equal('infinite');
            });
        }
    });
    
    // c-progress-sm c-progress-meter-animated, c-progress-lg c-progress-meter-animated
    describe('BD Small, Large meter animated', () => {

        let $progressSizes = {
            'sm': {
                'height': '12px',
                'backgroundSize': '12px 12px'
            },
            'lg': {
                'height': '48px',
                'backgroundSize': '48px 48px'
            },
        };

        for (let $size in $progressSizes) {
            let $progress = $(`<div class="c-progress c-progress-primary c-progress-${$size}">
                                    <div class="c-progress-meter-animated" style="width: 65%"></div>
                                </div>`),
                $progressStyles = $progressSizes[$size],
                $progressSize = $size,
                testParameters = [$progress, $progressStyles, $progressSize];
      
            before((done) => {
                $testContainer.append($progress);
                done();
            });
      
            testProgressSizes(...testParameters);
        }
      
        function testProgressSizes($progress, $progressStyles, $progressSize) {
            it($progressSize + ' progress should have correct styles', () => {
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressSize} .c-progress-meter-animated`)).getPropertyValue('height'), 'height').to.equal($progressStyles.height);
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${$progressSize} .c-progress-meter-animated`)).getPropertyValue('background-size'), 'background-size').to.equal($progressStyles.backgroundSize);
            });
        }
    });
})
