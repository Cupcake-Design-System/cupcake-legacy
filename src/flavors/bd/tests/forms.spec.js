describe('BD Forms', () => {
    describe('BD Select', () => {
        let $select = $('<select class="c-input"></select>');
    
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

        it('xs should have correct styles', () => {   
            $select.addClass('c-input-xs');
            expect($select.css('height'), 'height').to.equal('20px');
            expect($select.css('padding'), 'padding').to.equal('3px 22px 3px 10px');
            expect($select.css('font-size'), 'font-size').to.equal('10px');
        });

        it('sm should have correct styles', () => {   
            $select.addClass('c-input-sm');
            expect($select.css('height'), 'height').to.equal('25px');
            expect($select.css('padding'), 'padding').to.equal('3px 22px 3px 8px');
            expect($select.css('font-size'), 'font-size').to.equal('13px');
        });

        it('lg should have correct styles', () => {   
            $select.addClass('c-input-lg');
            expect($select.css('height'), 'height').to.equal('35px');
            expect($select.css('padding'), 'padding').to.equal('8px 22px 8px 8px');
            expect($select.css('font-size'), 'font-size').to.equal('15px');
        });

        it('xl should have correct styles', () => {   
            $select.addClass('c-input-xl');
            expect($select.css('height'), 'height').to.equal('40px');
            expect($select.css('padding'), 'padding').to.equal('10px 22px 10px 8px');
            expect($select.css('font-size'), 'font-size').to.equal('16px');
        });

        it('Error should have correct styles', () => {   
            $select.addClass('c-input-error');
            expect($select.css('color'), 'color').to.equal(toRgb('#965650'));
            expect($select.css('font-weight'), 'font-weight').to.equal('600');
            expect($select.css('border-color'), 'border-color').to.equal(toRgb('#e98f88'));
        });
    });

    describe('BD Select Disabled', () => {
        let $selectDisabled = $('<select class="c-input" disabled></select>');
    
        before((done) => {
            $testContainer.append($selectDisabled);
            done();
        });

        it('should have correct styles', () => {   
            expect($selectDisabled.css('color'), 'color').to.equal('rgba(65, 65, 82, 0.6)');
        });
    });

    describe('BD Input', () => {
        let $input = $('<input class="c-input">');
    
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

    describe('BD Input Sizes and Types', () => {
        let $input = $('<input class="c-input">');
    
        before((done) => {
            $testContainer.append($input);
            done();
        });

        it('sm should have correct styles', () => {   
            $input.addClass('c-input-sm');
            expect($input.css('height'), 'height').to.equal('25px');
        });

        it('lg should have correct styles', () => {   
            $input.addClass('c-input-lg');
            expect($input.css('height'), 'height').to.equal('35px');
        });

        it('xl should have correct styles', () => {   
            $input.addClass('c-input-xl');
            expect($input.css('height'), 'height').to.equal('40px');
        });

        it('Success should have correct styles', () => {   
            $input.addClass('c-input-success');
            expect($input.css('border-color'), 'border-color').to.equal(toRgb('#4daa0b'));
            expect($input.css('background-color'), 'background-color').to.equal(toRgb('#f3f8ef'));
        });

        it('Warning should have correct styles', () => {   
            $input.addClass('c-input-warning');
            expect($input.css('border-color'), 'border-color').to.equal(toRgb('#f8c000'));
            expect($input.css('background-color'), 'background-color').to.equal(toRgb('#fcfbe7'));
        });

        it('Error should have correct styles', () => {   
            $input.addClass('c-input-error');
            expect($input.css('border-color'), 'border-color').to.equal(toRgb('#e98f88'));
            expect($input.css('background-color'), 'background-color').to.equal(toRgb('#fff6f5'));
        });
    });

    describe('BD Input Disabled', () => {
        let $inputDisabled = $('<input class="c-input" disabled>');
    
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
        let $inputLabel = $('<label class="c-input-label"></label>');
    
        before((done) => {
            $testContainer.append($inputLabel);
            done();
        });

        it('should have correct styles', () => {   
            expect($inputLabel.css('display'), 'display').to.equal('block');
            expect($inputLabel.css('padding'), 'padding').to.equal('5px 0px');
            expect($inputLabel.css('color'), 'color').to.equal(toRgb('#212529'));
            expect($inputLabel.css('font-size'), 'font-size').to.equal('14px'); 
        });
    });

    describe('BD Hint', () => {
        let $inputHint = $('<span class="c-hint"></span>');
    
        before((done) => {
            $testContainer.append($inputHint);
            done();
        });

        it('should have correct styles', () => {
            expect($inputHint.css('position'), 'position').to.equal('absolute');
            expect($inputHint.css('transform'), 'transform').to.equal('matrix(0.8, 0, 0, 0.8, 0, 0)');
            expect($inputHint.css('transform-origin'), 'transform-origin').to.equal('0px 0px');
            expect($inputHint.css('margin-top'), 'margin-top').to.equal('8px'); 
            expect($inputHint.css('pointer-events'), 'pointer-events').to.equal('none');
            expect($inputHint.css('transition'), 'transition').to.equal('all 0.2s ease 0s');
        });

        it('Static should have correct styles', () => {
            $inputHint.addClass('c-hint-static');
            expect($inputHint.css('opacity'), 'opacity').to.equal('1');
            expect($inputHint.css('transform'), 'transform').to.equal('matrix(0.9, 0, 0, 0.9, 0, 0)');
        });

        it('Success should have correct styles', () => {
            $inputHint.addClass('c-hint-success');
            expect($inputHint.css('color'), 'color').to.equal(toRgb('#4daa0b'));
        });

        it('Warning should have correct styles', () => {
            $inputHint.addClass('c-hint-warning');
            expect($inputHint.css('color'), 'color').to.equal(toRgb('#f8c000'));
        });

        it('Error should have correct styles', () => {
            $inputHint.addClass('c-hint-error');
            expect($inputHint.css('color'), 'color').to.equal(toRgb('#e98f88'));
        });
    });

    describe('BD Input Group', () => {
        let $inputGroup = $('<div class="c-input-group"></div>');
    
        before((done) => {
            $testContainer.append($inputGroup);
            done();
        });
    
        it('should have correct styles', () => { 
            expect($inputGroup.css('display'), 'display').to.equal('flex');
        });

        describe('BD Input Addon', () => {
            let $inputAddon = $('<div class="c-input-addon">@</div>');
        
            before((done) => {
                $testContainer.append($inputAddon);
                done();
            });
        
            it('should have correct styles', () => { 
                expect($inputAddon.css('display'), 'display').to.equal('flex');
                expect($inputAddon.css('align-items'), 'align-items').to.equal('center');
                expect($inputAddon.css('padding'), 'padding').to.equal('0px 8px');
                expect($inputAddon.css('font-size'), 'font-size').to.equal('14px');
                expect(window.getComputedStyle(document.querySelector(".c-input-addon"), ':last-child').getPropertyValue('border-radius'), 'border-radius').to.equal('0px 2px 2px 0px');
                expect(window.getComputedStyle(document.querySelector(".c-input-addon"), ':last-child').getPropertyValue('margin-right'), 'margin-right').to.equal('0px');
                expect(window.getComputedStyle(document.querySelector(".c-input-addon"), ':last-child').getPropertyValue('border-left-width'), 'border-left-width').to.equal('0px');
            });
        });

        describe('BD Input Inline', () => {
            let $inputInline= $('<input class="c-input c-input-inline">');
        
            before((done) => {
                $testContainer.append($inputInline);
                done();
            });
        
            it('should have correct styles', () => { 
                expect($inputInline.css('display'), 'display').to.equal('inline');
            });
        });
    });
})
