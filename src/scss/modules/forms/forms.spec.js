describe('Forms', () => {
    describe('Select', () => {
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
            expect($select.css('padding'), 'padding').to.equal('7px 22px 7px 10px');
            expect($select.css('background'), 'background').to.equal('url("data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==") no-repeat scroll right 6px top 50% / auto padding-box border-box, rgb(241, 243, 245) none repeat scroll 0% 0% / auto padding-box border-box');
            expect($select.css('border'), 'border').to.equal(`1px solid ${toRgb('#ced4da')}`);
            expect($select.css('box-shadow'), 'box-shadow').to.equal('none');
            expect($select.css('font-size'), 'font-size').to.equal('12px');
            expect($select.css('line-height'), 'line-height').to.equal('14px');
            expect($select.css('font-weight'), 'font-weight').to.equal('400');
            expect($select.css('color'), 'color').to.equal(toRgb('#212529'));
        });
    });

    describe('Select Sizes ', () => {
        let $selectSizes = {
            'xs': {
                'height': '20px',
                'padding': '3px 22px 3px 10px',
                'fontSize': '10px'
            },
            'sm': {
                'height': '25px',
                'padding': '3px 22px 3px 10px',
                'fontSize': '11px'
            },
            'lg': {
                'height': '40px',
                'padding': '9px 22px 9px 20px',
                'fontSize': '14px'
            },
            'xl': {
                'height': '50px',
                'padding': '11px 22px 11px 20px',
                'fontSize': '18px'
            }
        };
    
        for (let $size in $selectSizes) {
            let $select = $(`<select class="c-input c-input-${$size}">
                                <option>${$size} Select</option>
                                <option>Option</option>
                                <option>Option</option>
                            </select>`),

                $selectStyles = $selectSizes[$size];
        
            before((done) => {
                $testContainer.append($select);
                done();
            });
        
            it(`${$size} select should have correct styles`, () => {
                expect($select.css('height'), 'height').to.equal($selectStyles.height);
                expect($select.css('padding'), 'padding').to.equal($selectStyles.padding);
                expect($select.css('font-size'), 'font size').to.equal($selectStyles.fontSize);
            });
        }
    });
    
    describe('Select with icon', () => {
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
            expect($select.find('i').css('color'), 'color').to.equal(toRgb('#212529'));
        });
    });

    describe('Select Disabled', () => {
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
            expect($selectDisabled.css('color'), 'color').to.equal(toRgb('#adb5bd'));
        });
    });

    describe('Select Error', () => {
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
            expect(window.getComputedStyle(document.querySelector("select.c-input-error:not([multiple])")).getPropertyValue('color'), 'color').to.equal(toRgb('#e03131'));
            expect(window.getComputedStyle(document.querySelector("select.c-input-error:not([multiple])")).getPropertyValue('font-weight'), 'font-weight').to.equal('400');
            expect(window.getComputedStyle(document.querySelector("select.c-input-error:not([multiple])")).getPropertyValue('border-color'), 'border-color').to.equal(toRgb('#e03131'));
        });
    });

    describe('Input', () => {
        let $input = $('<input class="c-input" type="text" placeholder="General input">');
    
        before((done) => {
            $testContainer.append($input);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($input.css('padding'), 'padding').to.equal('7px 8px');
            expect($input.css('border'), 'border').to.equal(`1px solid ${toRgb('#ced4da')}`);
            expect($input.css('font-size'), 'font-size').to.equal('12px');
            expect($input.css('box-shadow'), 'box-shadow').to.equal('none');
            expect(window.getComputedStyle(document.querySelector(".c-input"), ':placeholder').getPropertyValue('transition'), 'transition').to.equal('border-color 0.1s ease-in 0s');
        });
    });

    describe('Select Sizes ', () => {
        let selectSizes = {
            'sm': {
                'height': '25px'
            },
            'lg': {
                'height': '40px'
            },
            'xl': {
                'height': '50px'
            }
        };
    
        for (let size in selectSizes) {
            let $select = $(`<input class="c-input c-input-${size}" type="text" placeholder=" ${size} input">`),
                selectStyles = selectSizes[size];
        
            before((done) => {
                $testContainer.append($select);
                done();
            });
        
            it(`${size} select should have correct styles`, () => {
                expect($select.css('height'), 'height').to.equal(selectStyles.height);
            });
        }
    });

    describe('Success, Warning, Error Inputs', () => {
        let inputColors = {
            'success': {
                'borderColor': toRgb('#2f9e44')
            },
            'warning': {
                'borderColor': toRgb('#e8590c')
            },
            'error': {
                'borderColor': toRgb('#e03131')
            },
        };
    
        for (let status in inputColors) {
            let $input = $(`<input class="c-input c-input-${status} type="text" placeholder="${status}">`),
                inputColorValues = inputColors[status];
    
            before((done) => {
                $testContainer.append($input);
                done();
            });
    
            it(`${status} input should have correct styles`, () => {
                expect($input.css('border-color'), 'border-color').to.equal(inputColorValues.borderColor);
            });
        }
    });

    describe('Input Disabled', () => {
        let $inputDisabled = $('<input class="c-input" type="text" placeholder="Disabled" disabled>');
    
        before((done) => {
            $testContainer.append($inputDisabled);
            done();
        });

        it('should have correct styles', () => {   
            expect($inputDisabled.css('box-shadow'), 'box-shadow').to.equal('none');
        });
    });

    describe('Input Label', () => {
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
            expect($inputLabel.find('label').css('padding'), 'padding').to.equal('7px 0px');
            expect($inputLabel.find('label').css('font-size'), 'font-size').to.equal('12px'); 
        });
    });

    describe('Success, Warning, Error Input hints', () => {
        let inputColors = {
            'success': toRgb('#2f9e44'),
            'warning': toRgb('#e8590c'),
            'error': toRgb('#e03131')
        };
    
        for (let status in inputColors) {
            let $input = $(`<div class="c-input-container">
                                <input class="c-input c-input-${status}" type="text" placeholder="Text input" value="$J-Money$">
                                <span class="c-hint c-hint-${status}">
                                    <i class="fa fa-check"></i> This username is silly but available!
                                </span>
                            </div>`),
                inputColorValues = inputColors[status];
    
            before((done) => {
                $testContainer.append($input);
                done();
            });
    
            it(`${status} input should have correct styles`, () => {
                expect($input.find('span').css('color'), 'color').to.equal(inputColorValues);
            });
        }
    });

    describe('Input Addon', () => {
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
            expect(window.getComputedStyle(document.querySelector(".c-input-addon")).getPropertyValue('font-size'), 'font-size').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector(".c-input-addon")).getPropertyValue('border'), 'border').to.equal(`1px solid ${toRgb('#ced4da')}`);
        });
    });
})
