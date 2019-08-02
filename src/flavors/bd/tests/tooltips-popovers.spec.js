describe('BD Tooltips and Popovers', () => {
    describe('BD Tooltip default', () => {
        let $tooltipDefault = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md">
                                    <i class="fa fa-hand-o-up" aria-hidden="true"></i>
                                    Default
                                </span>`);

        before((done) => {
            $testContainer.append($tooltipDefault);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]')).getPropertyValue('position'), 'position').to.equal('relative');

            //[data-tooltip] pseudoelements
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('border-style'), 'border-style').to.equal('solid');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('border-top-width'), 'border-top-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('border-left-width'), 'border-left-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('border-right-width'), 'border-right-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before', ':after').getPropertyValue('opacity'), 'opacity').to.equal('0');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('top'), 'top').to.equal('-2px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before', ':after').getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, -4, -8)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('z-index'), 'z-index').to.equal('110000');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before', ':after').getPropertyValue('backface-visibility'), 'backface-visibility').to.equal('hidden');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before', ':after').getPropertyValue('transition'), 'transition').to.equal('opacity 0.1s cubic-bezier(0.73, 0.01, 0, 1) 0s, transform 0.6s cubic-bezier(0.73, 0.01, 0, 1) 0s, -webkit-transform 0.6s cubic-bezier(0.73, 0.01, 0, 1) 0s');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('border-top-color'), 'border-top-color').to.equal(toRgb('#212529'));
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('border-right-color'), 'border-right-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':before').getPropertyValue('border-left-color'), 'border-left-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('padding'), 'padding').to.equal('6px 10px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('border-radius'), 'border-radius').to.equal('6px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('max-width'), 'max-width').to.equal('300px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('line-height'), 'line-height').to.equal('15px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('font-size'), 'font-size').to.equal('14px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('box-sizing'), 'box-sizing').to.equal('border-box');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('font-style'), 'font-style').to.equal('normal');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('overflow'), 'overflow').to.equal('hidden');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('pointer-events'), 'pointer-events').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('text-align'), 'text-align').to.equal('center');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, -45, 12)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('white-space'), 'white-space').to.equal('nowrap');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('z-index'), 'z-index').to.equal('100000');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip]'), ':after').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#212529'));
        });
    });

    
    describe('BD Tooltip bottom', () => {
        let $tooltipDown = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="bottom">
                                <i class="fa fa-hand-o-up" aria-hidden="true"></i>
                                Down
                            </span>`);

        before((done) => {
            $testContainer.append($tooltipDown);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('border-style'), 'border-style').to.equal('solid');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('border-top-width'), 'border-top-width').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('border-left-width'), 'border-left-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('border-right-width'), 'border-right-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('border-bottom-width'), 'border-bottom-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('bottom'), 'bottom').to.equal('-6px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('border-top-color'), 'border-top-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('border-right-color'), 'border-right-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal(toRgb('#212529'));
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('border-left-color'), 'border-left-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':before').getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, -4, 4)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="bottom"]'), ':after').getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, -45.5, -12)');
        });
    });

    describe('BD Tooltip right', () => {
        let $tooltipRight = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="right">
                                <i class="fa fa-hand-o-up" aria-hidden="true"></i>
                                Right
                            </span>`);

        before((done) => {
            $testContainer.append($tooltipRight);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('border-style'), 'border-style').to.equal('solid');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('border-top-width'), 'border-top-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('border-left-width'), 'border-left-width').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('border-right-width'), 'border-right-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('border-bottom-width'), 'border-bottom-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('right'), 'right').to.equal('-6px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('border-top-color'), 'border-top-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('border-right-color'), 'border-right-color').to.equal(toRgb('#212529'));
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('border-left-color'), 'border-left-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':before').getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, 5, -4)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="right"]'), ':after').getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, -12, -13.5)');
        });
    });

    describe('BD Tooltip left', () => {
        let $tooltipLeft = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="left">
                                <i class="fa fa-hand-o-up" aria-hidden="true"></i>
                                Left
                            </span>`);

        before((done) => {
            $testContainer.append($tooltipLeft);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('border-style'), 'border-style').to.equal('solid');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('border-top-width'), 'border-top-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('border-left-width'), 'border-left-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('border-right-width'), 'border-right-width').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('border-bottom-width'), 'border-bottom-width').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('left'), 'left').to.equal('-2px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('border-top-color'), 'border-top-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('border-right-color'), 'border-right-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('border-left-color'), 'border-left-color').to.equal(toRgb('#212529'));
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':before').getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, -10, -4)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="left"]'), ':after').getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, 12, -13.5)');
        });
    });

    describe('BD Tooltip shadow', () => {
        let $tooltipShadow = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="shadow">
                                <i class="fa fa-hand-o-up" aria-hidden="true"></i>
                                Shadow
                            </span>`);

        before((done) => {
            $testContainer.append($tooltipShadow);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="shadow"]'), ':after').getPropertyValue('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 0px 4px 9px 0px');
        });
    });

    describe('BD Tooltip invert', () => {
        let $tooltipInvert = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="invert">
                                <i class="fa fa-hand-o-up" aria-hidden="true"></i>
                                Invert
                            </span>`);

        before((done) => {
            $testContainer.append($tooltipInvert);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="invert"]'), ':after').getPropertyValue('color'), 'color').to.equal(toRgb('#212529'));
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="invert"]'), ':before').getPropertyValue('border-left-color'), 'border-left-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="invert"]'), ':before').getPropertyValue('border-right-color'), 'border-right-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="invert"]'), ':before').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
        });
    });

    describe('BD Tooltip types', () => {
        let $tooltipTypes = {
            'primary': {
                'color': toRgb("#1c7cd6"),
                'backgroundColor': toRgb("#e8f7ff"),
                'borderTopColor': toRgb("#e8f7ff")
            },
            'success': {
                'color': toRgb("#42721f"),
                'backgroundColor': toRgb("#e6f8dd"),
                'borderTopColor': toRgb("#e6f8dd")
            },
            'warning': {
                'color': toRgb('#866c28'),
                'backgroundColor': toRgb('#fef7e3'),
                'borderTopColor': toRgb("#fef7e3")
            },
            'danger': {
                'color': toRgb('#965650'),
                'backgroundColor': toRgb('#fde9e8'),
                'borderTopColor': toRgb("#fde9e8")
            }
        };
      
        for (let $type in $tooltipTypes) {
            let $tooltip = $('<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="' + $type + '">' +
                                '<i class="fa fa-hand-o-up" aria-hidden="true"></i>' + $type + 
                            '</span>'),
                $tooltipStyles = $tooltipTypes[$type],
                $tooltipType = $type,
                testParameters = [$tooltip, $tooltipStyles, $tooltipType];
      
            before((done) => {
                $testContainer.append($tooltip);
                done();
            });
      
            testTooltipTypes(...testParameters);
        }
      
        function testTooltipTypes($tooltip, $tooltipStyles, $tooltipType) {
            it($tooltipType + ' tooltip should have correct styles', () => {
                expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="' + $tooltipType + '"]'), ':after').getPropertyValue('color'), 'color').to.equal($tooltipStyles.color);
                expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="' + $tooltipType + '"]'), ':after').getPropertyValue('background-color'), 'background-color').to.equal($tooltipStyles.backgroundColor);
                expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="' + $tooltipType + '"]'), ':before').getPropertyValue('border-top-color'), 'border-top-color').to.equal($tooltipStyles.borderTopColor);
                expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="' + $tooltipType + '"]'), ':before').getPropertyValue('border-left-color'), 'border-left-color').to.equal('rgba(0, 0, 0, 0)');
                expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="' + $tooltipType + '"]'), ':before').getPropertyValue('border-right-color'), 'border-right-color').to.equal('rgba(0, 0, 0, 0)');
                expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="' + $tooltipType + '"]'), ':before').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
            });
        }
    });

    describe('BD Tooltip multiline', () => {
        let $tooltipMultiline = $(`<span data-tooltip="A pure CSS Tooltip. Super easy to use, No JavaScript required." class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="multiline">
                                        Multiline
                                    </span>`);

        before((done) => {
            $testContainer.append($tooltipMultiline);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="multiline"]'), ':after').getPropertyValue('min-width'), 'min-width').to.equal('180px');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="multiline"]'), ':after').getPropertyValue('text-overflow'), 'text-overflow').to.equal('clip');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="multiline"]'), ':after').getPropertyValue('white-space'), 'white-space').to.equal('normal');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="multiline"]'), ':after').getPropertyValue('word-break'), 'word-break').to.equal('break-word');
        });
    });

    describe('BD Tooltip no fade', () => {
        let $tooltipNoFade = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="no-fade">
                                    No Fade
                                </span>`);

        before((done) => {
            $testContainer.append($tooltipNoFade);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="no-fade"]'), ':before').getPropertyValue('transition'), 'transition').to.equal('none 0s ease 0s');
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="no-fade"]'), ':after').getPropertyValue('transition'), 'transition').to.equal('none 0s ease 0s');
        });
    });

    describe('BD Tooltip no arrow', () => {
        let $tooltipNoArrow = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="no-arrow">
                                    No Arrow
                                </span>`);

        before((done) => {
            $testContainer.append($tooltipNoArrow);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="no-arrow"]'), ':before').getPropertyValue('display'), 'display').to.equal('none');
        });
    });

    describe('BD Tooltip square', () => {
        let $tooltipSquare = $(`<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md" data-tooltip-conf="square">
                                    Square
                                </span>`);

        before((done) => {
            $testContainer.append($tooltipSquare);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('[data-tooltip][data-tooltip-conf*="square"]'), ':after').getPropertyValue('border-radius'), 'border-radius').to.equal('0px');
        });
    });

    describe('BD Popover', () => {
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
            expect($popover.css('position'), 'position').to.equal('absolute');
            expect($popover.css('text-align'), 'text-align').to.equal('left');
            expect($popover.css('max-width'), 'max-width').to.equal('300px');
            expect($popover.css('padding'), 'padding').to.equal('6px 10px');
            expect($popover.css('font-size'), 'font-size').to.equal('14px');
            expect($popover.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
            expect($popover.css('line-height'), 'line-height').to.equal('20px');
            expect($popover.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($popover.css('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0.18)');
            expect($popover.css('border-radius'), 'border-radius').to.equal('6px');
            expect($popover.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 0px 4px 9px 0px');
            expect($popover.css('z-index'), 'z-index').to.equal('1');
        });
    });

    describe('BD Popover Top', () => {
        let $popoverTop = $(`<div class="c-popover c-popover-top" x-placement="top">
                                <div class="c-popover-arrow"></div>
                                <div class="c-popover-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
                                </div>
                            </div>`);

        before((done) => {
            $testContainer.append($popoverTop);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-popover-top', '.c-popover[x-placement^="top"]')).getPropertyValue('margin-bottom'), 'margin-bottom').to.equal('10px');

            // c-popover-top c-popover-arrow
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow')).getPropertyValue('bottom'), 'bottom').to.equal('-10px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow')).getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow')).getPropertyValue('border-style'), 'border-style').to.equal('solid inset inset');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow')).getPropertyValue('border-width'), 'border-width').to.equal('10px 10px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow')).getPropertyValue('border-color'), 'border-color').to.equal('rgba(0, 0, 0, 0.18) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)');

            // c-popover-top c-popover-arrow::after
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow'), ':after').getPropertyValue('bottom'), 'bottom').to.equal('1px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow'), ':after').getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow'), ':after').getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow'), ':after').getPropertyValue('border-style'), 'border-style').to.equal('solid inset inset');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow'), ':after').getPropertyValue('border-width'), 'border-width').to.equal('9px 9px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow'), ':after').getPropertyValue('border-left-color'), 'border-left-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow'), ':after').getPropertyValue('border-right-color'), 'border-right-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-top > .c-popover-arrow', '.c-popover[x-placement^="top"] > .c-popover-arrow'), ':after').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
        });
    });

    describe('BD Popover Right', () => {
        let $popoverRight = $(`<div class="c-popover c-popover-right" x-placement="right">
                                    <div class="c-popover-arrow"></div>
                                    <div class="c-popover-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
                                    </div>
                                </div>`);

        before((done) => {
            $testContainer.append($popoverRight);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-popover-right', '.c-popover[x-placement^="right"]')).getPropertyValue('margin-left'), 'margin-left').to.equal('10px');

            // c-popover-right c-popover-arrow
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow')).getPropertyValue('left'), 'left').to.equal('-10px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow')).getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow')).getPropertyValue('border-style'), 'border-style').to.equal('inset solid inset inset');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow')).getPropertyValue('border-width'), 'border-width').to.equal('10px 10px 10px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow')).getPropertyValue('border-color'), 'border-color').to.equal('rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.18) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)');

            // c-popover-right c-popover-arrow::after
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow'), ':after').getPropertyValue('left'), 'left').to.equal('1px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow'), ':after').getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow'), ':after').getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow'), ':after').getPropertyValue('border-style'), 'border-style').to.equal('inset solid inset inset');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow'), ':after').getPropertyValue('border-width'), 'border-width').to.equal('9px 9px 9px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow'), ':after').getPropertyValue('border-left-color'), 'border-left-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow'), ':after').getPropertyValue('border-right-color'), 'border-right-color').to.equal('rgb(255, 255, 255)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow'), ':after').getPropertyValue('border-top-color'), 'border-top-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-right > .c-popover-arrow', '.c-popover[x-placement^="right"] > .c-popover-arrow'), ':after').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
        });
    });

    describe('BD Popover Bottom', () => {
        let $popoverBottom = $(`<div class="c-popover c-popover-bottom" x-placement="bottom">
                                    <div class="c-popover-arrow"></div>
                                    <div class="c-popover-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
                                    </div>
                                </div>`);

        before((done) => {
            $testContainer.append($popoverBottom);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom', '.c-popover[x-placement^="bottom"]')).getPropertyValue('margin-top'), 'margin-top').to.equal('10px');

            // c-popover-bottom c-popover-arrow
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow')).getPropertyValue('top'), 'top').to.equal('-10px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow')).getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow')).getPropertyValue('border-style'), 'border-style').to.equal('inset inset solid');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow')).getPropertyValue('border-width'), 'border-width').to.equal('0px 10px 10px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow')).getPropertyValue('border-color'), 'border-color').to.equal('rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.18)');

            // c-popover-bottom c-popover-arrow::after
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow'), ':after').getPropertyValue('top'), 'top').to.equal('1px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow'), ':after').getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow'), ':after').getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow'), ':after').getPropertyValue('border-style'), 'border-style').to.equal('inset inset solid');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow'), ':after').getPropertyValue('border-width'), 'border-width').to.equal('0px 9px 9px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow'), ':after').getPropertyValue('border-left-color'), 'border-left-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow'), ':after').getPropertyValue('border-right-color'), 'border-right-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow'), ':after').getPropertyValue('border-top-color'), 'border-top-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-bottom > .c-popover-arrow', '.c-popover[x-placement^="bottom"] > .c-popover-arrow'), ':after').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal('rgb(255, 255, 255)');
        });
    });

    describe('BD Popover Left', () => {
        let $popoverLeft = $(`<div class="c-popover c-popover-left" x-placement="left">
                                <div class="c-popover-arrow"></div>
                                <div class="c-popover-content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
                                </div>
                            </div>`);

        before((done) => {
            $testContainer.append($popoverLeft);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-popover-left', '.c-popover[x-placement^="left"]')).getPropertyValue('margin-right'), 'margin-right').to.equal('10px');

            // c-popover-left c-popover-arrow
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow')).getPropertyValue('right'), 'right').to.equal('-10px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow')).getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow')).getPropertyValue('border-style'), 'border-style').to.equal('inset inset inset solid');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow')).getPropertyValue('border-width'), 'border-width').to.equal('10px 0px 10px 10px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow')).getPropertyValue('border-color'), 'border-color').to.equal('rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.18)');

            // c-popover-left c-popover-arrow::after
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow'), ':after').getPropertyValue('right'), 'right').to.equal('1px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow'), ':after').getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow'), ':after').getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow'), ':after').getPropertyValue('border-style'), 'border-style').to.equal('inset inset inset solid');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow'), ':after').getPropertyValue('border-width'), 'border-width').to.equal('9px 0px 9px 9px');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow'), ':after').getPropertyValue('border-left-color'), 'border-left-color').to.equal('rgb(255, 255, 255)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow'), ':after').getPropertyValue('border-right-color'), 'border-right-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow'), ':after').getPropertyValue('border-top-color'), 'border-top-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-popover-left > .c-popover-arrow', '.c-popover[x-placement^="left"] > .c-popover-arrow'), ':after').getPropertyValue('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
        });
    });
})
