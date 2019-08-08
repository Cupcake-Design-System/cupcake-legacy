describe('BD Forms', () => {
    describe('BD Select', () => {
        let $select = $(`<select class="c-input">
                            <option>Select</option>
                            <option>Option</option>
                            <option>Option</option>
                        </select>`);
    
        before((done) => {
            $testContainer.append($select);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($select.css('display'), 'display').to.equal('block');
            expect($select.css('height'), 'height').to.equal('30px');
            expect($select.css('padding'), 'padding').to.equal('6px 22px 6px 8px');
            expect($select.css('background'), 'background').to.equal('url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAxNSAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5pY19jYXJldF9kb3duPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxnIGlkPSJJY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+ICAgICAgICAgICAgPHJlY3QgaWQ9IkJveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIwIj48L3JlY3Q+ICAgICAgICAgICAgPHBvbHlnb24gaWQ9Ik1hc2siIGZpbGw9IiM0MTQxNTIiIHBvaW50cz0iMTIgOSA4IDEzIDQgOSI+PC9wb2x5Z29uPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+") no-repeat scroll right 6px top 50% / auto padding-box border-box, rgba(0, 0, 0, 0) linear-gradient(white, rgb(241, 243, 245) 66%, rgb(229, 233, 237)) repeat scroll 0% 0% / auto padding-box border-box');
            expect($select.css('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($select.css('border-radius'), 'border-radius').to.equal('2px');   
            expect($select.css('outline-width'), 'outline-width').to.equal('0px');
            expect($select.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0) 0px 0px 0px 0px');
            expect($select.css('font-size'), 'font-size').to.equal('14px');
            expect($select.css('line-height'), 'line-height').to.equal('16.1px');
            expect($select.css('font-weight'), 'font-weight').to.equal('400');
            expect($select.css('text-align'), 'text-align').to.equal('left');
            expect($select.css('cursor'), 'cursor').to.equal('pointer');
            expect($select.css('color'), 'color').to.equal(toRgb('#414152'));
        });
    });

    // select c-input xs, sm, lg, xl
    describe('BD Select Sizes ', () => {
        let $selectSizes = {
            'xs': {
                'height': '20px',
                'padding': '3px 22px 3px 10px',
                'fontSize': '10px'
            },
            'sm': {
                'height': '25px',
                'padding': '3px 22px 3px 8px',
                'fontSize': '13px'
            },
            'lg': {
                'height': '35px',
                'padding': '8px 22px 8px 8px',
                'fontSize': '15px'
            },
            'xl': {
                'height': '40px',
                'padding': '10px 22px 10px 8px',
                'fontSize': '16px'
            }
        };
    
        for (let $size in $selectSizes) {
            let $select = $('<select class="c-input c-input-' + $size + '">' +
                                '<option>' + $size + ' Select</option>' +
                                '<option>Option</option>' +
                                '<option>Option</option>' +
                            '</select>'),
                $selectStyles = $selectSizes[$size],
                $selectSize = $size,
                testParameters = [$select, $selectStyles, $selectSize];
        
            before((done) => {
                $testContainer.append($select);
                done();
            });
        
            testSelectSizes(...testParameters);
        }
    
        function testSelectSizes($select, $selectStyles, $selectSize) {
            it($selectSize + ' select should have correct styles', () => {
                expect($select.css('height'), 'height').to.equal($selectStyles.height);
                expect($select.css('padding'), 'padding').to.equal($selectStyles.padding);
                expect($select.css('font-size'), 'font size').to.equal($selectStyles.fontSize);
            });
        }
    });
    
    describe('BD Select with icon', () => {
        let $select = $(`<div class="c-input-container">
                            <i class="c-input-icon fa fa-exclamation-circle"></i>
                            <select class="c-input">
                                <option>Select with an icon</option>
                                <option>Option</option>
                                <option>Option</option>
                            </select>
                        </div>`);
    
        before((done) => {
            $testContainer.append($select);
            done();
        });
    
        it('should have correct styles', () => {   

            //c-input-container
            expect($select.css('position'), 'position').to.equal('relative');

            //c-input-icon
            expect($select.find('i').css('position'), 'position').to.equal('absolute');
            expect($select.find('i').css('left'), 'left').to.equal('8px');
            expect($select.find('i').css('color'), 'color').to.equal(toRgb('#8d8d97'));

            //c-input
            expect(window.getComputedStyle(document.querySelector(".c-input-icon + .c-select, .c-input-icon + select.c-input:not([multiple])")).getPropertyValue('padding-left'), 'padding-left').to.equal('26px');
        });
    });

    describe('BD Select Disabled', () => {
        let $selectDisabled = $(`<select class="c-input" disabled>
                                    <option>Disabled select</option>
                                    <option>Option</option>
                                    <option>Option</option>
                                </select>`);
    
        before((done) => {
            $testContainer.append($selectDisabled);
            done();
        });

        it('should have correct styles', () => {   
            expect($selectDisabled.css('color'), 'color').to.equal('rgba(65, 65, 82, 0.6)');
        });
    });

    describe('BD Select Error', () => {
        let $selectError = $(`<select class="c-input c-input-error">
                                <option>I'm error</option>
                                <option>Option</option>
                                <option>Option</option>
                            </select>`);
    
        before((done) => {
            $testContainer.append($selectError);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector("select.c-input-error:not([multiple])")).getPropertyValue('color'), 'color').to.equal(toRgb('#965650'));
            expect(window.getComputedStyle(document.querySelector("select.c-input-error:not([multiple])")).getPropertyValue('font-weight'), 'font-weight').to.equal('600');
            expect(window.getComputedStyle(document.querySelector("select.c-input-error:not([multiple])")).getPropertyValue('border-color'), 'border-color').to.equal(toRgb('#e98f88'));
        });
    });

    describe('BD Input', () => {
        let $input = $('<input class="c-input" type="text" placeholder="General input">');
    
        before((done) => {
            $testContainer.append($input);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($input.css('display'), 'display').to.equal('block');
            expect($input.css('height'), 'height').to.equal('30px');
            expect($input.css('padding'), 'padding').to.equal('6px 8px');
            expect($input.css('border'), 'border').to.equal('1px solid ' + toRgb('#dee2e6'));
            expect($input.css('border-radius'), 'border-radius').to.equal('2px');   
            expect($input.css('outline-width'), 'outline-width').to.equal('0px');
            expect($input.css('color'), 'color').to.equal(toRgb('#212529'));
            expect($input.css('font-size'), 'font-size').to.equal('14px');
            expect($input.css('line-height'), 'line-height').to.equal('16.1px');
            expect($input.css('font-weight'), 'font-weight').to.equal('400');
            expect($input.css('resize'), 'resize').to.equal('vertical');
            expect($input.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.13) 0px 1px 2px 0px inset');
            expect($input.css('transition'), 'transition').to.equal('border-color 0.1s ease-in 0s, color 0.1s ease-in 0s, background 0.1s ease-in 0s');
            expect(window.getComputedStyle(document.querySelector(".c-input"), ':placeholder').getPropertyValue('transition'), 'transition').to.equal('border-color 0.1s ease-in 0s, color 0.1s ease-in 0s, background 0.1s ease-in 0s');
        });
    });

    // c-input sm, lg, xl
    describe('BD Select Sizes ', () => {
        let $selectSizes = {
            'sm': {
                'height': '25px'
            },
            'lg': {
                'height': '35px'
            },
            'xl': {
                'height': '40px'
            }
        };
    
        for (let $size in $selectSizes) {
            let $select = $('<input class="c-input c-input-' + $size + ' type="text" placeholder="' + $size + ' input">'),
                $selectStyles = $selectSizes[$size],
                $selectSize = $size,
                testParameters = [$select, $selectStyles, $selectSize];
        
            before((done) => {
                $testContainer.append($select);
                done();
            });
        
            testSelectSizes(...testParameters);
        }
    
        function testSelectSizes($select, $selectStyles, $selectSize) {
            it($selectSize + ' select should have correct styles', () => {
                expect($select.css('height'), 'height').to.equal($selectStyles.height);
            });
        }
    });

    // c-input-success, c-input-warning, c-input-error
    describe('BD Success, Warning, Error Inputs', () => {
        let $inputColors = {
            'success': {
                'borderColor': toRgb('#4daa0b'),
                'backgroundColor': toRgb('#f3f8ef')
            },
            'warning': {
                'borderColor': toRgb('#f8c000'),
                'backgroundColor': toRgb('#fcfbe7')
            },
            'error': {
                'borderColor': toRgb('#e98f88'),
                'backgroundColor': toRgb('#fff6f5')
            },
        };
    
        for (let $status in $inputColors) {
            let $input = $('<input class="c-input c-input-' + $status + ' type="text" placeholder="' + $status + '">'),
                $inputColorValue = $inputColors[$status],
                $inputStatus = $status,
                testParameters = [$input, $inputColorValue, $inputStatus];
    
            before((done) => {
                $testContainer.append($input);
                done();
            });
    
            testInputs(...testParameters);
        }
    
        function testInputs($input, $inputColorValues, $inputStatus) {
            it($inputStatus + ' input should have correct styles', () => {
                expect($input.css('border-color'), 'border-color').to.equal($inputColorValues.borderColor);
                expect($input.css('background-color'), 'background-color').to.equal($inputColorValues.backgroundColor);
            });
        }
    });

    describe('BD Input Disabled', () => {
        let $inputDisabled = $('<input class="c-input" type="text" placeholder="Disabled" disabled>');
    
        before((done) => {
            $testContainer.append($inputDisabled);
            done();
        });

        it('should have correct styles', () => {   
            expect($inputDisabled.css('cursor'), 'cursor').to.equal('not-allowed');
            expect($inputDisabled.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.13) 0px 1px 2px 0px inset');
        });
    });

    describe('BD Input Label', () => {
        let $inputLabel = $(`<div class="c-row">
                                <div class="c-col c-col-md-3 c-text-right">
                                    <label class="c-input-label" for="size-input-2-sm">Default Label: <sup class="c-text-danger">*</sup></label>
                                </div>
                                <div class="c-col">
                                    <input class="c-input c-input-sm" type="text" id="size-input-2-sm" placeholder="Small input">
                                </div>
                            </div>`);
    
        before((done) => {
            $testContainer.append($inputLabel);
            done();
        });

        it('should have correct styles', () => {   
            expect($inputLabel.find('label').css('display'), 'display').to.equal('block');
            expect($inputLabel.find('label').css('padding'), 'padding').to.equal('5px 0px');
            expect($inputLabel.find('label').css('color'), 'color').to.equal(toRgb('#212529'));
            expect($inputLabel.find('label').css('font-size'), 'font-size').to.equal('14px'); 
        });
    });

    describe('BD Hint', () => {
        let $inputHint = $(`<div class="c-input-container">
                                <input class="c-input c-input-success" type="text" placeholder="Text input" value="$J-Money$">
                                <span class="c-hint c-hint-success">
                                    <i class="fa fa-check"></i> This username is silly but available!
                                </span>
                            </div>`);
    
        before((done) => {
            $testContainer.append($inputHint);
            done();
        });

        it('should have correct styles', () => {
            expect($inputHint.find('span').css('position'), 'position').to.equal('absolute');
            expect($inputHint.find('span').css('transform-origin'), 'transform-origin').to.equal('0px 0px');
            expect($inputHint.find('span').css('margin-top'), 'margin-top').to.equal('8px'); 
            expect($inputHint.find('span').css('pointer-events'), 'pointer-events').to.equal('none');
            expect($inputHint.find('span').css('transition'), 'transition').to.equal('all 0.2s ease 0s');
            expect($inputHint.find('span').css('opacity'), 'opacity').to.equal('0');
        });
    });

    // c-hint-success, c-hint-warning, c-hint-error
    describe('BD Success, Warning, Error Input hints', () => {
        let $inputColors = {
            'success': toRgb('#4daa0b'),
            'warning': toRgb('#f8c000'),
            'error': toRgb('#e98f88')
        };
    
        for (let $status in $inputColors) {
            let $input = $('<div class="c-input-container">' +
                                '<input class="c-input c-input-' + $status + '" type="text" placeholder="Text input" value="$J-Money$">' +
                                '<span class="c-hint c-hint-' + $status + '">' +
                                    '<i class="fa fa-check"></i> This username is silly but available!' +
                                '</span>' +
                            '</div>'),
                $inputColorValue = $inputColors[$status],
                $inputStatus = $status,
                testParameters = [$input, $inputColorValue, $inputStatus];
    
            before((done) => {
                $testContainer.append($input);
                done();
            });
    
            testInputs(...testParameters);
        }
    
        function testInputs($input, $inputColorValues, $inputStatus) {
            it($inputStatus + ' input should have correct styles', () => {
                expect($input.find('span').css('color'), 'color').to.equal($inputColorValues);
            });
        }
    });

    describe('BD Hint static', () => {
        let $inputHint = $(`<div class="c-input-container">
                                <input class="c-input c-input-success" type="text" placeholder="Text input" value="$J-Money$">
                                <span class="c-hint c-hint-static c-hint-success">
                                    <i class="fa fa-check"></i> This username is silly but available!
                                </span>
                            </div>`);
    
        before((done) => {
            $testContainer.append($inputHint);
            done();
        });

        it('should have correct styles', () => {
            expect($inputHint.find('span').css('opacity'), 'opacity').to.equal('1');
        });
    });

    describe('BD Input Group left', () => {
        let $inputGroup = $(`<div class="c-input-group">
                                <button class="c-btn c-btn-primary">Action</button>
                                <div class="c-input-container">
                                    <input type="text" class="c-input" placeholder="text" id="input-group-1">
                                </div>
                            </div>`);
    
        before((done) => {
            $testContainer.append($inputGroup);
            done();
        });
    
        it('should have correct styles', () => { 
            expect($inputGroup.css('display'), 'display').to.equal('flex');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-btn:first-child")).getPropertyValue('border-top-right-radius'), 'border-top-right-radius').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-btn:first-child")).getPropertyValue('border-bottom-right-radius'), 'border-bottom-right-radius').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-input-container:not(:first-child)")).getPropertyValue('margin-left'), 'margin-left').to.equal('-1px');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-input-container")).getPropertyValue('flex'), 'flex').to.equal('1 0 auto');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-input-container")).getPropertyValue('z-index'), 'z-index').to.equal('1');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-input-container:last-child .c-input")).getPropertyValue('border-top-left-radius'), 'border-top-left-radius').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-input-container:last-child .c-input")).getPropertyValue('border-bottom-left-radius'), 'border-bottom-left-radius').to.equal('0px');
        });
    });

    describe('BD Input Group right', () => {
        let $inputGroup = $(`<div class="c-input-group">
                                <div class="c-input-container">
                                    <input type="text" class="c-input" placeholder="text">
                                </div>
                                <button class="c-btn c-btn-primary c-btn-xs">Action</button>
                                <button class="c-btn c-btn-primary c-btn-xs c-btn-box"><i class="fa fa-caret-down"></i></button>
                            </div>`);
    
        before((done) => {
            $testContainer.append($inputGroup);
            done();
        });
    
        it('should have correct styles', () => { 
            expect($inputGroup.css('display'), 'display').to.equal('flex');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-btn:not(:first-child):not(:last-child)")).getPropertyValue('border-radius'), 'border-radius').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-btn:not(:first-child)")).getPropertyValue('margin-left'), 'margin-left').to.equal('-1px');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-btn:last-child")).getPropertyValue('border-top-left-radius'), 'border-top-left-radius').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-btn:last-child")).getPropertyValue('border-bottom-left-radius'), 'border-bottom-left-radius').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-input-container:first-child .c-input")).getPropertyValue('border-top-right-radius'), 'border-top-right-radius').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector(".c-input-group .c-input-container:first-child .c-input")).getPropertyValue('border-bottom-right-radius'), 'border-bottom-right-radius').to.equal('0px');
        });
    });

    describe('BD Input Addon', () => {
        let $inputAddon = $(`<div class="c-input-group">
                                <div class="c-input-addon">@</div>
                                <div class="c-input-container">
                                    <input type="text" class="c-input">
                                </div>
                                <div class="c-input-addon">.00</div>
                            </div>`);
    
        before((done) => {
            $testContainer.append($inputAddon);
            done();
        });
    
        it('should have correct styles', () => { 
            expect(window.getComputedStyle(document.querySelector(".c-input-addon")).getPropertyValue('display'), 'display').to.equal('flex');
            expect(window.getComputedStyle(document.querySelector(".c-input-addon")).getPropertyValue('align-items'), 'align-items').to.equal('center');
            expect(window.getComputedStyle(document.querySelector(".c-input-addon")).getPropertyValue('padding'), 'padding').to.equal('0px 8px');
            expect(window.getComputedStyle(document.querySelector(".c-input-addon")).getPropertyValue('font-size'), 'font-size').to.equal('14px');
            expect(window.getComputedStyle(document.querySelector(".c-input-addon")).getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#dee2e6'));
            expect(window.getComputedStyle(document.querySelector(".c-input-addon:first-child")).getPropertyValue('border-radius'), 'border-radius').to.equal('2px 0px 0px 2px');
            expect(window.getComputedStyle(document.querySelector(".c-input-addon:last-child")).getPropertyValue('border-radius'), 'border-radius').to.equal('0px 2px 2px 0px');
            expect(window.getComputedStyle(document.querySelector(".c-input-addon:last-child")).getPropertyValue('margin-right'), 'margin-right').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector(".c-input-addon:last-child")).getPropertyValue('border-left-width'), 'border-left-width').to.equal('0px');
        });
    });

    describe('BD Input Inline', () => {
        let $inputInline= $('<input class="c-input c-input-inline" type="text" placeholder="Inline input">');
    
        before((done) => {
            $testContainer.append($inputInline);
            done();
        });
    
        it('should have correct styles', () => { 
            expect($inputInline.css('display'), 'display').to.equal('inline');
        });
    });
})
