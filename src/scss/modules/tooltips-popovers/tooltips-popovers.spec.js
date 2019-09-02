describe('Tooltips and Popovers', () => {
    describe('Tooltip default', () => {
        let $tooltipDefault = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md">
                                    <i class="fa fa-hand-o-up" aria-hidden="true"></i>
                                    Default
                                </span>`);

        before((done) => {
            $testContainer.append($tooltipDefault);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('border-radius'), 'border-radius').to.equal('3px');
        });
    });

    describe('Tooltip shadow', () => {
        let $tooltipShadow = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="shadow">
                                <i class="fa fa-hand-o-up" aria-hidden="true"></i>
                                Shadow
                            </span>`);

        before((done) => {
            $testContainer.append($tooltipShadow);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="shadow"]'), ':after').getPropertyValue('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 0px 0px 9px 0px');
        });
    });

    describe('Tooltip types', () => {
        let tooltipTypes = {
            'primary': {
                'color': toRgb("#ffffff"),
                'backgroundColor': toRgb("#1b6ec2"),
                'borderTopColor': toRgb("#1b6ec2")
            },
            'success': {
                'color': toRgb("#ffffff"),
                'backgroundColor': toRgb("#2f9e44"),
                'borderTopColor': toRgb("#2f9e44")
            },
            'warning': {
                'color': toRgb('#ffffff'),
                'backgroundColor': toRgb('#e8590c'),
                'borderTopColor': toRgb("#e8590c")
            },
            'danger': {
                'color': toRgb('#ffffff'),
                'backgroundColor': toRgb('#e03131'),
                'borderTopColor': toRgb("#e03131")
            }
        };
      
        for (let type in tooltipTypes) {
            let $tooltip = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="${type}">
                                    <i class="fa fa-hand-o-up" aria-hidden="true"></i>${type}
                                </span>`),
                tooltipStyles = tooltipTypes[type];
      
            before((done) => {
                $testContainer.append($tooltip);
                done();
            });
      
            it(`${type} tooltip should have correct styles`, () => {
                expect(window.getComputedStyle(document.querySelector(`[data-tooltip][data-tooltip-conf*="${type}"]`), ':after').getPropertyValue('color'), 'color').to.equal(tooltipStyles.color);
                expect(window.getComputedStyle(document.querySelector(`[data-tooltip][data-tooltip-conf*="${type}"]`), ':after').getPropertyValue('background-color'), 'background-color').to.equal(tooltipStyles.backgroundColor);
                expect(window.getComputedStyle(document.querySelector(`[data-tooltip][data-tooltip-conf*="${type}"]`), ':before').getPropertyValue('border-top-color'), 'border-top-color').to.equal(tooltipStyles.borderTopColor);
            });
        }
    });

    describe('Popover', () => {
        let $popover = $(`<div class="c-popover">
                                <div class="c-popover-arrow"></div>
                                <div class="c-popover-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
                                </div>
                            </div>`);

        before((done) => {
            $testContainer.append($popover);
            done();
        });

        it('should have correct styles', () => {
            expect($popover.css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
            expect($popover.css('line-height'), 'line-height').to.equal('15px');
            expect($popover.css('color'), 'color').to.equal(toRgb('#495057'));
            expect($popover.css('border'), 'border').to.equal(`1px solid ${toRgb('#ced4da')}`);
            expect($popover.css('border-radius'), 'border-radius').to.equal('3px');
            expect($popover.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 0px 0px 9px 0px');
        });
    });

    describe('Popover arrow color', () => {
        let arrowTypeColor = {
            'top': toRgb('#ced4da'),
            'right': toRgb('#ced4da'),
            'left': toRgb('#ced4da'),
            'bottom': toRgb('#ced4da')
        };

        for (type in arrowTypeColor) {
            let $popover = $(`<div class="c-popover c-popover-${type}" x-placement="${type}">
                                    <div class="c-popover-arrow"></div>
                                    <div class="c-popover-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
                                    </div>
                                </div>`),
                arrowColor = arrowTypeColor[type]

            before((done) => {
                $testContainer.append($popover);
                done();
            });

            it(`${type}-arrow should have correct styles`, () => {
                expect(window.getComputedStyle(document.querySelector(`.c-popover-${type} > .c-popover-arrow`, `.c-popover[x-placement^="${type}"] > .c-popover-arrow`)).getPropertyValue(`border-${type}-color`), `border-${type}-color`).to.equal(arrowColor);
            });
        }
    });
})
