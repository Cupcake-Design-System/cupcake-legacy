describe('Progress', () => {
    describe('Primary, Success meter', () => {
        let progressColors = {
            'primary': { 
                'backgroundColor': toRgb('#1b6ec2'),
                'gradientStart': toRgb('#1f7ddd'),
                'gradientCenter': toRgb('#1b6ec2'),
                'gradientEnd': toRgb('#1964b0'),
                'borderColor': toRgb('#1861ac')
            },
            'success': { 
                'backgroundColor': toRgb('#2f9e44;'),
                'gradientStart': toRgb('#36b64e'),
                'gradientCenter': toRgb('#2f9e44;'),
                'gradientEnd': toRgb('#2a8e3d'),
                'borderColor': toRgb('#298a3c')
            }
        };

        for (let status in progressColors) {
            let $progress = $(`<div class="c-progress c-progress-${status}"><div class="c-progress-meter" style="width: 30%"></div></div>`),
                progressColorValue = progressColors[status];

            before((done) => {
                $testContainer.append($progress);
                done();
            });

            it(`${status} progress should have correct styles`, () => {
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${status} .c-progress-meter`)).getPropertyValue('background-image'), 'background-image').to.equal(`linear-gradient(${progressColorValue.gradientStart}, ${progressColorValue.gradientCenter} 66%, ${progressColorValue.gradientEnd})`);
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${status} .c-progress-meter`)).getPropertyValue('background-color'), 'background-color').to.equal(progressColorValue.backgroundColor);
                expect(window.getComputedStyle(document.querySelector(`.c-progress-${status} .c-progress-meter`)).getPropertyValue('border'), 'border').to.equal(`1px solid ${progressColorValue.borderColor}`);
            });
        }
    });

    describe('Primary, Success meter animated', () => {
        let progressColors = {
            'primary': { 
                'gradientFirstColor': toRgb('#1b6ec2'),
                'gradientSecondColor': toRgb('#155595')
            },
            'success': {
                'gradientFirstColor': toRgb('#2f9e44'),
                'gradientSecondColor': toRgb('#237733')
            }
        };

        for (let status in progressColors) {
            let $progress = $(`<div class="c-progress c-progress-${status}"><div class="c-progress-meter-animated" style="width: 65%"></div></div>`),
                progressColorValue = progressColors[status];

            before((done) => {
                $testContainer.append($progress);
                done();
            });

            it(`${status} progress should have correct styles`, () => {
                expect($progress.find('.c-progress-meter-animated').css('background-image'), 'background-image').to.equal(`linear-gradient(135deg, ${progressColorValue.gradientFirstColor} 25%, ${progressColorValue.gradientSecondColor} 25%, ${progressColorValue.gradientSecondColor} 50%, ${progressColorValue.gradientFirstColor} 50%, ${progressColorValue.gradientFirstColor} 75%, ${progressColorValue.gradientSecondColor} 75%)`);
            });
        }
    });
})
