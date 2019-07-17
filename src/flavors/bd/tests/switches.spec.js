describe('BD Switches', () => {
    describe('BD Switch', () => {
      let $switch = $(`<label class="c-switch"></label>`);
  
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
        });
    
        it('Extra small should have correct styles', () => {
            $switch.addClass('c-switch-xs');
            expect($switch.css('width'), 'width').to.equal('30px');
            expect($switch.css('height'), 'height').to.equal('15px');
        });
    
        it('Small should have correct styles', () => {
            $switch.addClass('c-switch-sm');
            expect($switch.css('width'), 'width').to.equal('40px');
            expect($switch.css('height'), 'height').to.equal('20px');
        });
    
        it('Large should have correct styles', () => {
            $switch.addClass('c-switch-lg');
            expect($switch.css('width'), 'width').to.equal('80px');
            expect($switch.css('height'), 'height').to.equal('40px');
        });
    });
    
    describe('BD Switch Input', () => {
        let $switchInput = $(`<input class="c-switch-input" type="checkbox">`);
    
        before((done) => {
            $testContainer.append($switchInput);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switchInput.css('position'), 'position').to.equal('absolute');
            expect($switchInput.css('top'), 'top').to.equal('0px');
            expect($switchInput.css('left'), 'left').to.equal('0px');
            expect($switchInput.css('opacity'), 'opacity').to.equal('0');
        });
    });
    
    describe('BD Switch Label', () => {
        let $switchLabel = $(`<span class="c-switch-label"></span>`);
    
        before((done) => {
            $testContainer.append($switchLabel);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switchLabel.css('position'), 'position').to.equal('relative');
            expect($switchLabel.css('display'), 'display').to.equal('block');
            expect($switchLabel.css('text-transform'), 'text-transform').to.equal('uppercase');
            expect($switchLabel.css('border'), 'border').to.equal('1px solid rgba(51, 51, 51, 0.1)');
            expect($switchLabel.css('box-shadow'), 'box-shadow').to.equal('none');
            expect($switchLabel.css('transition-duration'), 'transition-duration').to.equal('0.25s');
            expect($switchLabel.css('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
        });
    });
    
    describe('BD Switch Label Primary', () => {
        let $switchLabelPrimary = $(`<label class="c-switch c-switch-primary">
                                        <input type="checkbox" class="c-switch-input" checked=""><span class="c-switch-label"></span>
                                    </label>`);
    
        before((done) => {
            $testContainer.append($switchLabelPrimary);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-switch-primary > .c-switch-input:checked ~ .c-switch-label')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0079bd'));
        });
    });
    
    describe('BD Switch Label Success', () => {
        let $switchLabelSuccess = $(`<label class="c-switch c-switch-success">
                                        <input type="checkbox" class="c-switch-input" checked=""><span class="c-switch-label"></span>
                                    </label>`);
    
        before((done) => {
            $testContainer.append($switchLabelSuccess);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-switch-success > .c-switch-input:checked ~ .c-switch-label')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#37b24d'));
        });
    });
    
    describe('BD Switch Label Warning', () => {
        let $switchLabelWarning = $(`<label class="c-switch c-switch-warning">
                                        <input type="checkbox" class="c-switch-input" checked=""><span class="c-switch-label"></span>
                                    </label>`);
    
        before((done) => {
            $testContainer.append($switchLabelWarning);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-switch-warning > .c-switch-input:checked ~ .c-switch-label')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f08c00'));
        });
    });
    
    describe('BD Switch Label Danger', () => {
        let $switchLabelDanger = $(`<label class="c-switch c-switch-danger">
                                        <input type="checkbox" class="c-switch-input" checked=""><span class="c-switch-label"></span>
                                    </label>`);
    
        before((done) => {
            $testContainer.append($switchLabelDanger);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-switch-danger > .c-switch-input:checked ~ .c-switch-label')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f03e3e'));
        });
    });
    
    describe('BD Switch Label Disabled', () => {
        let $switchLabelDisabled = $(`<label class="c-switch c-switch-disabled">
                                        <span class="c-switch-label"></span><span class="c-switch-handle"></span>
                                    </label>`);
    
        before((done) => {
            $testContainer.append($switchLabelDisabled);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switchLabelDisabled.css('pointer-events'), 'pointer-events').to.equal('none');
            expect($switchLabelDisabled.css('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
            expect($switchLabelDisabled.css('opacity'), 'opacity').to.equal('0.5');
            expect($switchLabelDisabled.find('span').css('pointer-events'), 'pointer-events').to.equal('none');
            expect($switchLabelDisabled.find('span').css('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
        });
    });
    
    describe('BD Switch Label PseudoElements', () => {
        let $switchLabel = $(`<label class="c-switch"><span class="c-switch-label"></span></label>`);
    
        before((done) => {
            $testContainer.append($switchLabel);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':before').getPropertyValue('right'), 'right').to.equal('5px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':before').getPropertyValue('text-shadow'), 'text-shadow').to.equal('rgba(255, 255, 255, 0.5) 0px 1px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':before').getPropertyValue('opacity'), 'opacity').to.equal('1');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after').getPropertyValue('left'), 'left').to.equal('8px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after').getPropertyValue('text-shadow'), 'text-shadow').to.equal('rgba(0, 0, 0, 0.2) 0px 1px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after').getPropertyValue('opacity'), 'opacity').to.equal('1');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after', ':before').getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after', ':before').getPropertyValue('margin-top'), 'margin-top').to.equal('-6.3px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-label'), ':after', ':before').getPropertyValue('line-height'), 'line-height').to.equal('14px');
        });

        it('Extra small should have correct styles', () => {
            $switchLabel.addClass('c-switch-xs');
            expect($switchLabel.find('span').css('font-size'), 'font-size').to.equal('5px');
        });

        it('Small should have correct styles', () => {
            $switchLabel.addClass('c-switch-sm');
            expect($switchLabel.find('span').css('font-size'), 'font-size').to.equal('8px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-sm .c-switch-label'), ':after').getPropertyValue('left'), 'left').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-sm .c-switch-label'), ':after').getPropertyValue('margin-top'), 'margin-top').to.equal('-2.8px');
        });

        it('Large should have correct styles', () => {
            $switchLabel.addClass('c-switch-lg');
            $switchLabel.removeClass('c-switch-sm');
            expect($switchLabel.find('span').css('font-size'), 'font-size').to.equal('13.3333px');
        });
    });
    
    describe('BD Switch Handle', () => {
        let $switchHandle = $(`<span class="c-switch-handle"></span>`);
    
        before((done) => {
            $testContainer.append($switchHandle);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switchHandle.css('position'), 'position').to.equal('absolute');
            expect($switchHandle.css('width'), 'width').to.equal('28px');
            expect($switchHandle.css('height'), 'height').to.equal('27.1875px');
            expect($switchHandle.css('border-radius'), 'border-radius').to.equal('50px');
            expect($switchHandle.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 1px 1px 5px 0px');
            expect($switchHandle.css('transition-property'), 'transition-property').to.equal('left');
            expect($switchHandle.css('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect($switchHandle.css('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
        });
    });
    
    describe('BD Switch Checked', () => {
        let $switchChecked = $(`<label class="c-switch"> 
                                        <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span> 
                                    </label>`);
    
        before((done) => {
            $testContainer.append($switchChecked);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switchChecked.find('span').css('left'), 'left').to.equal('32px');
            expect($switchChecked.find('span').css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.3) -1px 1px 5px 0px');
        });
    });
    
    describe('BD Switch Handle Sizes', () => {
        let $switchHandleDefault = $(`<label class="c-switch">
                                            <input class="c-switch-input" type="checkbox" checked> <span class="c-switch-handle"></span>
                                        </label>`);
    
        before((done) => {
            $testContainer.append($switchHandleDefault);
            done();
        });
    
        it('Extra small should have correct styles', () => {
            $switchHandleDefault.addClass('c-switch-xs');
            expect($switchHandleDefault.find('span').css('position'), 'position').to.equal('absolute');
            expect($switchHandleDefault.find('span').css('width'), 'width').to.equal('11.7969px');
            expect($switchHandleDefault.find('span').css('height'), 'height').to.equal('11px');
            expect($switchHandleDefault.find('span').css('left'), 'left').to.equal('16.6px');
        });
    
        it('Small should have correct styles', () => {
            $switchHandleDefault.addClass('c-switch-sm');
            expect($switchHandleDefault.find('span').css('position'), 'position').to.equal('absolute');
            expect($switchHandleDefault.find('span').css('width'), 'width').to.equal('16.7969px');
            expect($switchHandleDefault.find('span').css('height'), 'height').to.equal('16px');
            expect($switchHandleDefault.find('span').css('left'), 'left').to.equal('21.6px');
        });
    });
    
    describe('BD Switch Square', () => {
        let $switchSquare = $(`<label class="c-switch-square"></label>`);
    
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
        });
    
        it('Small should have correct styles', () => {
            $switchSquare.addClass('c-switch-sm');
            expect($switchSquare.css('width'), 'width').to.equal('40px');
            expect($switchSquare.css('height'), 'height').to.equal('20px');
        });
    
        it('Large should have correct styles', () => {
            $switchSquare.addClass('c-switch-lg');
            expect($switchSquare.css('width'), 'width').to.equal('80px');
            expect($switchSquare.css('height'), 'height').to.equal('40px');
        });
    });
    
    describe('BD Switch Square Handle', () => {
        let $switchHandleSquare = $(`<label class="c-switch-square">
                                            <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span>
                                        </label>`);
    
        before((done) => {
            $testContainer.append($switchHandleSquare);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switchHandleSquare.find('span').css('position'), 'position').to.equal('absolute');
            expect($switchHandleSquare.find('span').css('width'), 'width').to.equal('20px');
            expect($switchHandleSquare.find('span').css('height'), 'height').to.equal('20px');
            expect($switchHandleSquare.find('span').css('left'), 'left').to.equal('36px');
            expect($switchHandleSquare.find('span').css('transition-property'), 'transition-property').to.equal('left');
            expect($switchHandleSquare.find('span').css('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect($switchHandleSquare.find('span').css('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
            expect($switchHandleSquare.find('span').css('border-radius'), 'border-radius').to.equal('2px');
            expect($switchHandleSquare.find('span').css('box-shadow'), 'box-shadow').to.equal('none');
            expect($switchHandleSquare.find('span').css('background-color'), 'background-color').to.equal(toRgb('#fbfbfb'));
            expect($switchHandleSquare.find('span').css('border'), 'border').to.equal('1px solid rgba(51, 51, 51, 0.2)');
        });

        it('Small should have correct styles', () => {
            $switchHandleSquare.addClass('c-switch-sm');
            expect($switchHandleSquare.find('span').css('width'), 'width').to.equal('16.7969px');
            expect($switchHandleSquare.find('span').css('height'), 'height').to.equal('16px');
            expect($switchHandleSquare.find('span').css('left'), 'left').to.equal('21.6px');
        });

        it('Large should have correct styles', () => {
            $switchHandleSquare.addClass('c-switch-lg');
            expect($switchHandleSquare.find('span').css('width'), 'width').to.equal('32px');
            expect($switchHandleSquare.find('span').css('height'), 'height').to.equal('31.1875px');
            expect($switchHandleSquare.find('span').css('left'), 'left').to.equal('41.6px');
        });
    });
    
    describe('BD Switch Square Handle before', () => {
        let $switchHandleSquareBefore = $(`<label class="c-switch-square"><span class="c-switch-handle"></span></label>`);
    
        before((done) => {
            $testContainer.append($switchHandleSquareBefore);
            done();
        });
    
        it('should have correct styles', () => {
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
    
    describe('BD Switch Material', () => {
        let $switchMaterial = $(`<label class="c-switch-material"></label>`);
    
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
        });

        it('Small should have correct styles', () => {
            $switchMaterial.addClass('c-switch-sm');
            expect($switchMaterial.css('width'), 'width').to.equal('32px');
            expect($switchMaterial.css('height'), 'height').to.equal('8px');
        });
    });

    describe('BD Switch Material Large', () => {
        let $switchMaterial = $(`<label class="c-switch-material c-switch-lg"></label>`);
    
        before((done) => {
            $testContainer.append($switchMaterial);
            done();
        });

        it('should have correct styles', () => {
            expect($switchMaterial.css('width'), 'width').to.equal('80px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material + .c-switch-lg')).getPropertyValue('height'), 'height').to.equal('16px');
        });
    });

    describe('BD Switch Material Handle', () => {
        let $switchMaterialHandle = $(`<label class="c-switch-material"><span class="c-switch-handle"></span></label>`);
    
        before((done) => {
            $testContainer.append($switchMaterialHandle);
            done();
        });

        it('should have correct styles', () => {
            expect($switchMaterialHandle.find('span').css('position'), 'position').to.equal('absolute');
            expect($switchMaterialHandle.find('span').css('transition-property'), 'transition-property').to.equal('left');
            expect($switchMaterialHandle.find('span').css('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect($switchMaterialHandle.find('span').css('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
            expect($switchMaterialHandle.find('span').css('width'), 'width').to.equal('17px');
            expect($switchMaterialHandle.find('span').css('height'), 'height').to.equal('17px');
            expect($switchMaterialHandle.find('span').css('border-radius'), 'border-radius').to.equal('50px');
            expect($switchMaterialHandle.find('span').css('border'), 'border').to.equal('1px solid rgba(51, 51, 51, 0.15)');
            expect($switchMaterialHandle.find('span').css('box-shadow'), 'box-shadow').to.equal('none');
        });
    });
    
    describe('BD Switch Material Checked', () => {
        let $switchMaterialChecked = $(`<label class="c-switch-material">
                                                <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span>
                                            </label>`);
    
        before((done) => {
            $testContainer.append($switchMaterialChecked);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switchMaterialChecked.find('span').css('left'), 'left').to.equal('17px');
        });
    });

    describe('BD Switch Material Checked Small', () => {
        let $switchMaterialCheckedSmall = $(`<label class="c-switch-material c-switch-sm">
                                                    <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span>
                                                </label>`);
    
        before((done) => {
            $testContainer.append($switchMaterialCheckedSmall);
            done();
        });

        it('should have correct styles', () => {
            expect($switchMaterialCheckedSmall.find('span').css('left'), 'left').to.equal('16px');
        });
    });

    describe('BD Switch Material Checked Large', () => {
        let $switchMaterialCheckedLarge = $(`<label class="c-switch-material c-switch-lg">
                                                    <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span>
                                                </label>`);
    
        before((done) => {
            $testContainer.append($switchMaterialCheckedLarge);
            done();
        });

        it('should have correct styles', () => {
            expect($switchMaterialCheckedLarge.find('span').css('left'), 'left').to.equal('48px');
        });
    });
})
