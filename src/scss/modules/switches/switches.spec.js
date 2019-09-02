describe('Switches', () => {
    describe('Primary, Success, Warning, Danger Switches', () => {
        let switchColors = {
            'primary': toRgb('#1b6ec2'),
            'success': toRgb('#2f9e44'),
            'warning': toRgb('#e8590c'),
            'danger': toRgb('#e03131')
        };

        for (let status in switchColors) {
            let $switch = $(`<label class="c-switch c-switch-${status}">
                                <input class="c-switch-input" type="checkbox" checked="">
                                <span class="c-switch-label"></span>
                                <span class="c-switch-handle"></span>
                            </label>`),
            switchColorValues = switchColors[status];

            before((done) => {
                $testContainer.append($switch);
                done();
            });

            it(`${status} switch should have correct styles`, () => {
                expect(window.getComputedStyle(document.querySelector(`.c-switch-${status} > .c-switch-input:checked ~ .c-switch-label`)).getPropertyValue('background-color'), 'background').to.equal(switchColorValues);
            });
        }
    });
})
