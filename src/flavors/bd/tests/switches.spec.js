describe('BD Switches', () => {
    describe('BD Switch', () => {
      let $switch = $(`<label class="c-switch c-switch-primary">
                            <input class="c-switch-input" type="checkbox">
                            <span class="c-switch-label"></span>
                            <span class="c-switch-handle"></span>
                        </label>`);
  
        before((done) => {
            $testContainer.append($switch);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switch.css('display'), 'display').to.equal('inline-block');
            expect($switch.css('position'), 'position').to.equal('relative');
            expect($switch.css('margin'), 'margin').to.equal('4px 0px');
            expect($switch.css('width'), 'width').to.equal('62.3906px');
            expect($switch.css('height'), 'height').to.equal('31.1875px');
            expect($switch.css('cursor'), 'cursor').to.equal('pointer');
            expect($switch.css('border-radius'), 'border-radius').to.equal('50px');
            expect($switch.css('box-shadow'), 'box-shadow').to.equal('rgb(255, 255, 255) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px inset');

            //c-switch-input
            expect($switch.find('input').css('position'), 'position').to.equal('absolute');
            expect($switch.find('input').css('top'), 'top').to.equal('0px');
            expect($switch.find('input').css('left'), 'left').to.equal('0px');
            expect($switch.find('input').css('opacity'), 'opacity').to.equal('0');
            
            //c-switch-label
            expect(window.getComputedStyle(document.querySelector('.c-switch-label')).getPropertyValue('position'), 'position').to.equal('relative');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label')).getPropertyValue('text-transform'), 'text-transform').to.equal('uppercase');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label')).getPropertyValue('border'), 'border').to.equal('1px solid rgba(51, 51, 51, 0.1)');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label')).getPropertyValue('transition-duration'), 'transition-duration').to.equal('0.25s');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label')).getPropertyValue('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');

            //c-switch-label pseudoelements
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':before').getPropertyValue('right'), 'right').to.equal('5px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':before').getPropertyValue('text-shadow'), 'text-shadow').to.equal('rgba(255, 255, 255, 0.5) 0px 1px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':before').getPropertyValue('opacity'), 'opacity').to.equal('1');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after').getPropertyValue('left'), 'left').to.equal('8px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after').getPropertyValue('text-shadow'), 'text-shadow').to.equal('rgba(0, 0, 0, 0.2) 0px 1px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after').getPropertyValue('opacity'), 'opacity').to.equal('1');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after', ':before').getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after', ':before').getPropertyValue('margin-top'), 'margin-top').to.equal('-4.5px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after', ':before').getPropertyValue('line-height'), 'line-height').to.equal('10px');

            //c-switch-handle
            expect(window.getComputedStyle(document.querySelector('.c-switch-handle')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-switch-handle')).getPropertyValue('width'), 'width').to.equal('28px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-handle')).getPropertyValue('height'), 'height').to.equal('27.1875px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-handle')).getPropertyValue('border-radius'), 'border-radius').to.equal('50px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-handle')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 1px 1px 5px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-handle')).getPropertyValue('transition-property'), 'transition-property').to.equal('left');
            expect(window.getComputedStyle(document.querySelector('.c-switch-handle')).getPropertyValue('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect(window.getComputedStyle(document.querySelector('.c-switch-handle')).getPropertyValue('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
        });
    });

    describe('BD Switch checked', () => {
        let $switchChecked = $(`<label class="c-switch c-switch-primary">
                                    <input class="c-switch-input" type="checkbox" checked="">
                                    <span class="c-switch-label"></span>
                                    <span class="c-switch-handle"></span>
                                </label>`);
    
          before((done) => {
              $testContainer.append($switchChecked);
              done();
          });
      
          it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-switch .c-switch-input:checked ~ .c-switch-handle')).getPropertyValue('left'), 'left').to.equal('32px');
            expect(window.getComputedStyle(document.querySelector('.c-switch .c-switch-input:checked ~ .c-switch-handle')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.3) -1px 1px 5px 0px');
        });
    });
    
    describe('BD Switch Label Disabled', () => {
        let $switchLabelDisabled = $(`<label class="c-switch c-switch-disabled">
                                        <input class="c-switch-input" type="checkbox">
                                        <span class="c-switch-label"></span>
                                        <span class="c-switch-handle"></span>
                                    </label>`);
    
        before((done) => {
            $testContainer.append($switchLabelDisabled);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switchLabelDisabled.css('pointer-events'), 'pointer-events').to.equal('none');
            expect($switchLabelDisabled.css('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
            expect($switchLabelDisabled.css('opacity'), 'opacity').to.equal('0.5');
            expect(window.getComputedStyle(document.querySelector('.c-switch-disabled .c-switch-handle')).getPropertyValue('pointer-events'), 'pointer-events').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('.c-switch-disabled .c-switch-handle')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
        });
    });
    // c-switch sizes xs, sm, lg
    describe('BD Switch Sizes ', () => {
        let $switchSizes = {
            'xs': {
                'width': '30px',
                'height': '15px'
            },
            'sm': {
                'width': '40px',
                'height': '20px'
            },
            'lg': {
                'width': '80px',
                'height': '40px'
            }
        };

        for (let $size in $switchSizes) {
            let $switch = $('<label class="c-switch c-switch-' + $size + ' c-switch-primary">' +
                                '<input class="c-switch-input" type="checkbox" checked="">' +
                                '<span class="c-switch-label"></span>' +
                                '<span class="c-switch-handle"></span>' +
                            '</label>'),
                $switchStyles = $switchSizes[$size],
                $switchSize = $size,
                testParameters = [$switch, $switchStyles, $switchSize];

            before((done) => {
                $testContainer.append($switch);
                done();
            });

            testBtnSizes(...testParameters);
            }

            function testBtnSizes($switch, $switchStyles, $switchSize) {
            it($switchSize + ' switch should have correct styles', () => {
                expect($switch.css('width'), 'width').to.equal($switchStyles.width);
                expect($switch.css('height'), 'height').to.equal($switchStyles.height);
            });
        }
    });

    // c-switch c-switch-handle sizes xs, sm
    describe('BD Switch Handle Sizes ', () => {
        let $switchSizes = {
            'xs': {
                'width': '11.7969px',
                'height': '11px',
                'left': '16.6px'
            },
            'sm': {
                'width': '16.7969px',
                'height': '16px',
                'left': '21.6px'
            }
        };

        for (let $size in $switchSizes) {
            let $switch = $('<label class="c-switch c-switch-' + $size + ' c-switch-primary">' +
                                '<input class="c-switch-input" type="checkbox" checked="">' +
                                '<span class="c-switch-label"></span>' +
                                '<span class="c-switch-handle"></span>' +
                            '</label>'),
                $switchStyles = $switchSizes[$size],
                $switchSize = $size,
                testParameters = [$switch, $switchStyles, $switchSize];

            before((done) => {
                $testContainer.append($switch);
                done();
            });

            testBtnSizes(...testParameters);
            }

            function testBtnSizes($switch, $switchStyles, $switchSize) {
            it($switchSize + ' switch should have correct styles', () => {
                expect(window.getComputedStyle(document.querySelector('.c-switch-' + $switchSize + ' .c-switch-handle')).getPropertyValue('position'), 'position').to.equal('absolute');
                expect(window.getComputedStyle(document.querySelector('.c-switch-' + $switchSize + ' .c-switch-handle')).getPropertyValue('width'), 'width').to.equal($switchStyles.width);
                expect(window.getComputedStyle(document.querySelector('.c-switch-' + $switchSize + ' .c-switch-handle')).getPropertyValue('height'), 'height').to.equal($switchStyles.height);
                expect(window.getComputedStyle(document.querySelector('.c-switch-' + $switchSize + ' .c-switch-handle')).getPropertyValue('left'), 'height').to.equal($switchStyles.left);
            });
        }
    });

    // c-switch-primary, c-switch-success, c-switch-warning, c-switch-danger
    describe('BD Primary, Success, Warning, Danger Switches', () => {

        let $switchColors = {
            'primary': toRgb('#0079bd'),
            'success': toRgb('#37b24d'),
            'warning': toRgb('#f08c00'),
            'danger': toRgb('#f03e3e')
        };

        for (let $status in $switchColors) {
            let $switch = $('<label class="c-switch c-switch-' + $status + '">' +
                                '<input class="c-switch-input" type="checkbox" checked="">' +
                                '<span class="c-switch-label"></span>' +
                                '<span class="c-switch-handle"></span>' +
                            '</label>'),
            $switchColorValue = $switchColors[$status],
            $switchStatus = $status,
            testParameters = [$switch, $switchColorValue, $switchStatus];

        before((done) => {
            $testContainer.append($switch);
            done();
        });

        testDisabledButtons(...testParameters);
        }

        function testDisabledButtons($switch, $switchColorValues, $switchStatus) {
            it($switchStatus + ' switch should have correct styles', () => {
                expect(window.getComputedStyle(document.querySelector('.c-switch-' + $switchStatus + ' > .c-switch-input:checked ~ .c-switch-label')).getPropertyValue('background-color'), 'background').to.equal($switchColorValues);
            });
        }
    });
    
    // c-switch c-switch-label sizes xs, sm, lg
    describe('BD Switch Label font-sizes ', () => {
        let $switchSizes = {
            'xs': {
                'fontSize': '5px'
            },
            'sm': {
                'fontSize': '8px'
            },
            'lg': {
                'fontSize': '13.3333px'
            }
        };

        for (let $size in $switchSizes) {
            let $switch = $('<label class="c-switch c-switch-' + $size + ' c-switch-primary">' +
                                '<input class="c-switch-input" type="checkbox" checked="">' +
                                '<span class="c-switch-label"></span>' +
                                '<span class="c-switch-handle"></span>' +
                            '</label>'),
                $switchStyles = $switchSizes[$size],
                $switchSize = $size,
                testParameters = [$switch, $switchStyles, $switchSize];

            before((done) => {
                $testContainer.append($switch);
                done();
            });

            testBtnSizes(...testParameters);
            }

            function testBtnSizes($switch, $switchStyles, $switchSize) {
            it($switchSize + ' switch should have correct styles', () => {
                expect(window.getComputedStyle(document.querySelector('.c-switch-' + $switchSize + ' .c-switch-label')).getPropertyValue('font-size'), 'font-size').to.equal($switchStyles.fontSize);
            });
        }
    });
    
    describe('BD Switch Square', () => {
        let $switchSquare = $(`<label class="c-switch-square c-switch-primary">
                                <input class="c-switch-input" type="checkbox">
                                <span class="c-switch-label"></span>
                                <span class="c-switch-handle"></span>
                            </label>`);
    
        before((done) => {
            $testContainer.append($switchSquare);
            done();
        });
      
        it('should have correct styles', () => {
            expect($switchSquare.css('position'), 'position').to.equal('relative');
            expect($switchSquare.css('display'), 'display').to.equal('inline-block');
            expect($switchSquare.css('margin'), 'margin').to.equal('4px 0px');
            expect($switchSquare.css('cursor'), 'cursor').to.equal('pointer');
            expect($switchSquare.css('font-size'), 'font-size').to.equal('10px');
            expect($switchSquare.css('width'), 'width').to.equal('62.3906px');
            expect($switchSquare.css('height'), 'height').to.equal('31.1875px');
            expect($switchSquare.css('border-radius'), 'border-radius').to.equal('2px');
            expect($switchSquare.css('background-color'), 'background-color').to.equal(toRgb('#fbfbfb'));

            //c-switch-square c-switch-handle
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('width'), 'width').to.equal('20px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('height'), 'height').to.equal('20px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('left'), 'left').to.equal('5.6px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('transition-property'), 'transition-property').to.equal('left');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('border-radius'), 'border-radius').to.equal('2px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#fbfbfb'));
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle')).getPropertyValue('border'), 'border').to.equal('1px solid rgba(51, 51, 51, 0.2)');
       
            //c-switch-square c-switch-handle::before
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#495057'));
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('box-shadow'), 'box-shadow').to.equal(toRgb('#495057') + ' -4px 0px 0px 0px, ' + toRgb('#495057') + ' 4px 0px 0px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('height'), 'height').to.equal('10px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('left'), 'left').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('right'), 'right').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('top'), 'top').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('bottom'), 'bottom').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('transition-property'), 'transition-property').to.equal('all');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('transition-timing-function'), 'transition-timing-function').to.equal('ease');
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-handle'), ':before').getPropertyValue('width'), 'width').to.equal('2px');
        });
    });

    describe('BD Switch Square checked', () => {
        let $switchSquareChecked = $(`<label class="c-switch-square c-switch-primary">
                                            <input class="c-switch-input" type="checkbox" checked="">
                                            <span class="c-switch-label"></span>
                                            <span class="c-switch-handle"></span>
                                        </label>`);
    
        before((done) => {
            $testContainer.append($switchSquareChecked);
            done();
        });
      
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-switch-square .c-switch-input:checked ~ .c-switch-handle')).getPropertyValue('left'), 'left').to.equal('36px');
        });
    });
    
    // c-switch-square c-switch-handle sizes sm, lg
    describe('BD Switch Square Sizes ', () => {
        let $switchSizes = {
            'sm': {
                'width': '16.7969px',
                'height': '16px',
                'left': '21.6px'
            },
            'lg': {
                'width': '32px',
                'height': '31.1875px',
                'left': '41.6px'
            }
        };

        for (let $size in $switchSizes) {
            let $switch = $('<label class="c-switch-square c-switch-' + $size + ' c-switch-primary">' +
                                '<input class="c-switch-input" type="checkbox" checked="">' +
                                '<span class="c-switch-label"></span>' +
                                '<span class="c-switch-handle"></span>' +
                            '</label>'),
                $switchStyles = $switchSizes[$size],
                $switchSize = $size,
                testParameters = [$switch, $switchStyles, $switchSize];

            before((done) => {
                $testContainer.append($switch);
                done();
            });

            testBtnSizes(...testParameters);
            }

            function testBtnSizes($switch, $switchStyles, $switchSize) {
            it($switchSize + ' square switch should have correct styles', () => {
                expect(window.getComputedStyle(document.querySelector('.c-switch-square.c-switch-' + $switchSize + ' .c-switch-handle')).getPropertyValue('width'), 'width').to.equal($switchStyles.width);
                expect(window.getComputedStyle(document.querySelector('.c-switch-square.c-switch-' + $switchSize + ' .c-switch-handle')).getPropertyValue('height'), 'height').to.equal($switchStyles.height);
                expect(window.getComputedStyle(document.querySelector('.c-switch-' + $switchSize + ' .c-switch-input:checked ~ .c-switch-handle')).getPropertyValue('left'), 'left').to.equal($switchStyles.left);
            });
        }
    });

    describe('BD Switch Small Label ::after', () => {
        let $switchSmallLabel = $(`<label class="c-switch-square c-switch-sm c-switch-primary">
                                        <input class="c-switch-input" type="checkbox" checked="">
                                        <span class="c-switch-label"></span>
                                        <span class="c-switch-handle"></span>
                                    </label>`);
    
        before((done) => {
            $testContainer.append($switchSmallLabel);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-switch-sm .c-switch-label'), ':after').getPropertyValue('left'), 'left').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-sm .c-switch-label'), ':after').getPropertyValue('margin-top'), 'margin-top').to.equal('-2.8px');
        });
    });

    describe('BD Switch Material', () => {
        let $switchMaterial = $(`<label class="c-switch-material c-switch-primary">
                                    <input class="c-switch-input" type="checkbox">
                                    <span class="c-switch-label"></span>
                                    <span class="c-switch-handle"></span>
                                </label>`);
    
        before((done) => {
            $testContainer.append($switchMaterial);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switchMaterial.css('position'), 'position').to.equal('relative');
            expect($switchMaterial.css('display'), 'display').to.equal('inline-block');
            expect($switchMaterial.css('margin'), 'margin').to.equal('4px 0px');
            expect($switchMaterial.css('cursor'), 'cursor').to.equal('pointer');
            expect($switchMaterial.css('font-size'), 'font-size').to.equal('10px');
            expect($switchMaterial.css('width'), 'width').to.equal('33px');
            expect($switchMaterial.css('height'), 'height').to.equal('15px');
            expect($switchMaterial.css('background-color'), 'background-color').to.equal('rgba(51, 51, 51, 0.02)');
            expect($switchMaterial.css('border-radius'), 'border-radius').to.equal('50px');

            //c-switch-material c-switch-handle
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-handle')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-handle')).getPropertyValue('transition-property'), 'transition-property').to.equal('left');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-handle')).getPropertyValue('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-handle')).getPropertyValue('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-handle')).getPropertyValue('width'), 'width').to.equal('17px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-handle')).getPropertyValue('height'), 'height').to.equal('17px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-handle')).getPropertyValue('border-radius'), 'border-radius').to.equal('50px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-handle')).getPropertyValue('border'), 'border').to.equal('1px solid rgba(51, 51, 51, 0.15)');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-handle')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('none');
        });
    });

    describe('BD Switch Material Checked', () => {
        let $switchMaterialChecked = $(`<label class="c-switch-material c-switch-primary">
                                            <input class="c-switch-input" type="checkbox" checked="">
                                            <span class="c-switch-label"></span>
                                            <span class="c-switch-handle"></span>
                                        </label>`);
    
        before((done) => {
            $testContainer.append($switchMaterialChecked);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-switch-material .c-switch-input:checked ~ .c-switch-handle')).getPropertyValue('left'), 'left').to.equal('17px');
        });
    });

    // c-switch-material sizes sm, lg
    describe('BD Switch Material Sizes ', () => {
        let $switchSizes = {
            'sm': {
                'width': '32px',
                'height': '8px',
                'left': '16px'
            },
            'lg': {
                'width': '80px',
                'height': '16px',
                'left': '48px'
            }
        };

        for (let $size in $switchSizes) {
            let $switch = $('<label class="c-switch-material c-switch-' + $size + ' c-switch-primary">' +
                                '<input class="c-switch-input" type="checkbox" checked="">' +
                                '<span class="c-switch-label"></span>' +
                                '<span class="c-switch-handle"></span>' +
                            '</label>'),
                $switchStyles = $switchSizes[$size],
                $switchSize = $size,
                testParameters = [$switch, $switchStyles, $switchSize];

            before((done) => {
                $testContainer.append($switch);
                done();
            });

            testBtnSizes(...testParameters);
            }

            function testBtnSizes($switch, $switchStyles, $switchSize) {
            it($switchSize + ' switch should have correct styles', () => {
                expect($switch.css('width'), 'width').to.equal($switchStyles.width);
                expect($switch.css('height'), 'height').to.equal($switchStyles.height);
                expect(window.getComputedStyle(document.querySelector('.c-switch-material.c-switch-' + $switchSize + ' .c-switch-input:checked ~ .c-switch-handle')).getPropertyValue('left'), 'left').to.equal($switchStyles.left);
            });
        }
    });
})
