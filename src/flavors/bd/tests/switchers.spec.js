describe('BD Switchers', () => {
    describe('BD Switcher', () => {
      let $switcher = $(`<label class="c-switch"></label>`);
  
        before((done) => {
            $testContainer.append($switcher);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switcher.css('display'), 'display').to.equal('inline-block');
            expect($switcher.css('position'), 'position').to.equal('relative');
            expect($switcher.css('margin'), 'margin').to.equal('4px 0px');
            expect($switcher.css('width'), 'width').to.equal('62.3906px');
            expect($switcher.css('height'), 'height').to.equal('31.1875px');
            expect($switcher.css('cursor'), 'cursor').to.equal('pointer');
            expect($switcher.css('border-radius'), 'border-radius').to.equal('50px');
            expect($switcher.css('box-shadow'), 'box-shadow').to.equal('rgb(255, 255, 255) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px inset');
        });
    
        it('Extra small should have correct styles', () => {
            $switcher.addClass('c-switch-xs');
            expect($switcher.css('width'), 'width').to.equal('30px');
            expect($switcher.css('height'), 'height').to.equal('15px');
        });
    
        it('Small should have correct styles', () => {
            $switcher.addClass('c-switch-sm');
            expect($switcher.css('width'), 'width').to.equal('40px');
            expect($switcher.css('height'), 'height').to.equal('20px');
        });
    
        it('Large should have correct styles', () => {
            $switcher.addClass('c-switch-lg');
            expect($switcher.css('width'), 'width').to.equal('80px');
            expect($switcher.css('height'), 'height').to.equal('40px');
        });
    });
    
    describe('BD Switcher Input', () => {
        let $switcherInput = $(`<input class="c-switch-input" type="checkbox">`);
    
        before((done) => {
            $testContainer.append($switcherInput);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switcherInput.css('position'), 'position').to.equal('absolute');
            expect($switcherInput.css('top'), 'top').to.equal('0px');
            expect($switcherInput.css('left'), 'left').to.equal('0px');
            expect($switcherInput.css('opacity'), 'opacity').to.equal('0');
        });
    });
    
    describe('BD Switcher Label', () => {
        let $switcherLabel = $(`<span class="c-switch-label"></span>`);
    
        before((done) => {
            $testContainer.append($switcherLabel);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switcherLabel.css('position'), 'position').to.equal('relative');
            expect($switcherLabel.css('display'), 'display').to.equal('block');
            expect($switcherLabel.css('text-transform'), 'text-transform').to.equal('uppercase');
            expect($switcherLabel.css('border'), 'border').to.equal('1px solid rgba(51, 51, 51, 0.1)');
            expect($switcherLabel.css('box-shadow'), 'box-shadow').to.equal('none');
            expect($switcherLabel.css('transition-duration'), 'transition-duration').to.equal('0.25s');
            expect($switcherLabel.css('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
        });
    });
    
    describe('BD Switcher Label PseudoElements', () => {
        let $switcherLabel = $(`<label class="c-switch"><span class="c-switch-label"></span></label>`);
    
        before((done) => {
            $testContainer.append($switcherLabel);
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
            $switcherLabel.addClass('c-switch-xs');
            expect($switcherLabel.find('span').css('font-size'), 'font-size').to.equal('5px');
        });

        it('Small should have correct styles', () => {
            $switcherLabel.addClass('c-switch-sm');
            expect($switcherLabel.find('span').css('font-size'), 'font-size').to.equal('8px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-sm .c-switch-label'), ':after').getPropertyValue('left'), 'left').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-sm .c-switch-label'), ':after').getPropertyValue('margin-top'), 'margin-top').to.equal('-2.8px');
        });

        it('Large should have correct styles', () => {
            $switcherLabel.addClass('c-switch-lg');
            $switcherLabel.removeClass('c-switch-sm');
            expect($switcherLabel.find('span').css('font-size'), 'font-size').to.equal('13.3333px');
        });
    });
    
    describe('BD Switcher Handle', () => {
        let $switcherHandle = $(`<span class="c-switch-handle"></span>`);
    
        before((done) => {
            $testContainer.append($switcherHandle);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switcherHandle.css('position'), 'position').to.equal('absolute');
            expect($switcherHandle.css('width'), 'width').to.equal('28px');
            expect($switcherHandle.css('height'), 'height').to.equal('27.1875px');
            expect($switcherHandle.css('border-radius'), 'border-radius').to.equal('50px');
            expect($switcherHandle.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 1px 1px 5px 0px');
            expect($switcherHandle.css('transition-property'), 'transition-property').to.equal('left');
            expect($switcherHandle.css('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect($switcherHandle.css('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
        });
    });
    
    describe('BD Switcher Checked', () => {
        let $switcherChecked = $(`<label class="c-switch"> 
                                        <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span> 
                                    </label>`);
    
        before((done) => {
            $testContainer.append($switcherChecked);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switcherChecked.find('span').css('left'), 'left').to.equal('32px');
            expect($switcherChecked.find('span').css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.3) -1px 1px 5px 0px');
        });
    });
    
    describe('BD Switcher Handle Sizes', () => {
        let $switcherHandleDefault = $(`<label class="c-switch">
                                            <input class="c-switch-input" type="checkbox" checked> <span class="c-switch-handle"></span>
                                        </label>`);
    
        before((done) => {
            $testContainer.append($switcherHandleDefault);
            done();
        });
    
        it('Extra small should have correct styles', () => {
            $switcherHandleDefault.addClass('c-switch-xs');
            expect($switcherHandleDefault.find('span').css('position'), 'position').to.equal('absolute');
            expect($switcherHandleDefault.find('span').css('width'), 'width').to.equal('11.7969px');
            expect($switcherHandleDefault.find('span').css('height'), 'height').to.equal('11px');
            expect($switcherHandleDefault.find('span').css('left'), 'left').to.equal('16.6px');
        });
    
        it('Small should have correct styles', () => {
            $switcherHandleDefault.addClass('c-switch-sm');
            expect($switcherHandleDefault.find('span').css('position'), 'position').to.equal('absolute');
            expect($switcherHandleDefault.find('span').css('width'), 'width').to.equal('16.7969px');
            expect($switcherHandleDefault.find('span').css('height'), 'height').to.equal('16px');
            expect($switcherHandleDefault.find('span').css('left'), 'left').to.equal('21.6px');
        });
    });
    
    describe('BD Switcher Square', () => {
        let $switcherSquare = $(`<label class="c-switch-square"></label>`);
    
        before((done) => {
            $testContainer.append($switcherSquare);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switcherSquare.css('position'), 'position').to.equal('relative');
            expect($switcherSquare.css('display'), 'display').to.equal('inline-block');
            expect($switcherSquare.css('margin'), 'margin').to.equal('4px 0px');
            expect($switcherSquare.css('cursor'), 'cursor').to.equal('pointer');
            expect($switcherSquare.css('font-size'), 'font-size').to.equal('10px');
            expect($switcherSquare.css('width'), 'width').to.equal('62.3906px');
            expect($switcherSquare.css('height'), 'height').to.equal('31.1875px');
            expect($switcherSquare.css('border-radius'), 'border-radius').to.equal('2px');
            expect($switcherSquare.css('background-color'), 'background-color').to.equal(toRgb('#fbfbfb'));
        });
    
        it('Small should have correct styles', () => {
            $switcherSquare.addClass('c-switch-sm');
            expect($switcherSquare.css('width'), 'width').to.equal('40px');
            expect($switcherSquare.css('height'), 'height').to.equal('20px');
        });
    
        it('Large should have correct styles', () => {
            $switcherSquare.addClass('c-switch-lg');
            expect($switcherSquare.css('width'), 'width').to.equal('80px');
            expect($switcherSquare.css('height'), 'height').to.equal('40px');
        });
    });
    
    describe('BD Switcher Square Handle', () => {
        let $switcherHandleSquare = $(`<label class="c-switch-square">
                                            <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span>
                                        </label>`);
    
        before((done) => {
            $testContainer.append($switcherHandleSquare);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switcherHandleSquare.find('span').css('position'), 'position').to.equal('absolute');
            expect($switcherHandleSquare.find('span').css('width'), 'width').to.equal('20px');
            expect($switcherHandleSquare.find('span').css('height'), 'height').to.equal('20px');
            expect($switcherHandleSquare.find('span').css('left'), 'left').to.equal('36px');
            expect($switcherHandleSquare.find('span').css('transition-property'), 'transition-property').to.equal('left');
            expect($switcherHandleSquare.find('span').css('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect($switcherHandleSquare.find('span').css('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
            expect($switcherHandleSquare.find('span').css('border-radius'), 'border-radius').to.equal('2px');
            expect($switcherHandleSquare.find('span').css('box-shadow'), 'box-shadow').to.equal('none');
            expect($switcherHandleSquare.find('span').css('background-color'), 'background-color').to.equal(toRgb('#fbfbfb'));
            expect($switcherHandleSquare.find('span').css('border'), 'border').to.equal('1px solid rgba(51, 51, 51, 0.2)');
        });

        it('Small should have correct styles', () => {
            $switcherHandleSquare.addClass('c-switch-sm');
            expect($switcherHandleSquare.find('span').css('width'), 'width').to.equal('16.7969px');
            expect($switcherHandleSquare.find('span').css('height'), 'height').to.equal('16px');
            expect($switcherHandleSquare.find('span').css('left'), 'left').to.equal('21.6px');
        });

        it('Large should have correct styles', () => {
            $switcherHandleSquare.addClass('c-switch-lg');
            expect($switcherHandleSquare.find('span').css('width'), 'width').to.equal('32px');
            expect($switcherHandleSquare.find('span').css('height'), 'height').to.equal('31.1875px');
            expect($switcherHandleSquare.find('span').css('left'), 'left').to.equal('41.6px');
        });
    });
    
    describe('BD Switcher Square Handle before', () => {
        let $switcherHandleSquareBefore = $(`<label class="c-switch-square"><span class="c-switch-handle"></span></label>`);
    
        before((done) => {
            $testContainer.append($switcherHandleSquareBefore);
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
    
    describe('BD Switcher Material', () => {
        let $switcherMaterial = $(`<label class="c-switch-material"></label>`);
    
        before((done) => {
            $testContainer.append($switcherMaterial);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switcherMaterial.css('position'), 'position').to.equal('relative');
            expect($switcherMaterial.css('display'), 'display').to.equal('inline-block');
            expect($switcherMaterial.css('margin'), 'margin').to.equal('4px 0px');
            expect($switcherMaterial.css('cursor'), 'cursor').to.equal('pointer');
            expect($switcherMaterial.css('font-size'), 'font-size').to.equal('10px');
            expect($switcherMaterial.css('width'), 'width').to.equal('33px');
            expect($switcherMaterial.css('height'), 'height').to.equal('15px');
            expect($switcherMaterial.css('background-color'), 'background-color').to.equal('rgba(51, 51, 51, 0.02)');
            expect($switcherMaterial.css('border-radius'), 'border-radius').to.equal('50px');
        });

        it('Small should have correct styles', () => {
            $switcherMaterial.addClass('c-switch-sm');
            expect($switcherMaterial.css('width'), 'width').to.equal('32px');
            expect($switcherMaterial.css('height'), 'height').to.equal('8px');
        });
    });

    describe('BD Switcher Material Large', () => {
        let $switcherMaterial = $(`<label class="c-switch-material c-switch-lg"></label>`);
    
        before((done) => {
            $testContainer.append($switcherMaterial);
            done();
        });

        it('should have correct styles', () => {
            expect($switcherMaterial.css('width'), 'width').to.equal('80px');
            expect(window.getComputedStyle(document.querySelector('.c-switch-material + .c-switch-lg')).getPropertyValue('height'), 'height').to.equal('16px');
        });
    });

    describe('BD Switcher Material Handle', () => {
        let $switcherMaterialHandle = $(`<label class="c-switch-material"><span class="c-switch-handle"></span></label>`);
    
        before((done) => {
            $testContainer.append($switcherMaterialHandle);
            done();
        });

        it('should have correct styles', () => {
            expect($switcherMaterialHandle.find('span').css('position'), 'position').to.equal('absolute');
            expect($switcherMaterialHandle.find('span').css('transition-property'), 'transition-property').to.equal('left');
            expect($switcherMaterialHandle.find('span').css('transition-duration'), 'transition-duration').to.equal('0.15s');
            expect($switcherMaterialHandle.find('span').css('transition-timing-function'), 'transition-timing-function').to.equal('ease-out');
            expect($switcherMaterialHandle.find('span').css('width'), 'width').to.equal('17px');
            expect($switcherMaterialHandle.find('span').css('height'), 'height').to.equal('17px');
            expect($switcherMaterialHandle.find('span').css('border-radius'), 'border-radius').to.equal('50px');
            expect($switcherMaterialHandle.find('span').css('border'), 'border').to.equal('1px solid rgba(51, 51, 51, 0.15)');
            expect($switcherMaterialHandle.find('span').css('box-shadow'), 'box-shadow').to.equal('none');
        });
    });
    
    describe('BD Switcher Material Checked', () => {
        let $switcherMaterialChecked = $(`<label class="c-switch-material">
                                                <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span>
                                            </label>`);
    
        before((done) => {
            $testContainer.append($switcherMaterialChecked);
            done();
        });
    
        it('should have correct styles', () => {
            expect($switcherMaterialChecked.find('span').css('left'), 'left').to.equal('17px');
        });
    });

    describe('BD Switcher Material Checked Small', () => {
        let $switcherMaterialCheckedSmall = $(`<label class="c-switch-material c-switch-sm">
                                                    <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span>
                                                </label>`);
    
        before((done) => {
            $testContainer.append($switcherMaterialCheckedSmall);
            done();
        });

        it('should have correct styles', () => {
            expect($switcherMaterialCheckedSmall.find('span').css('left'), 'left').to.equal('16px');
        });
    });

    describe('BD Switcher Material Checked Large', () => {
        let $switcherMaterialCheckedLarge = $(`<label class="c-switch-material c-switch-lg">
                                                    <input class="c-switch-input" type="checkbox" checked><span class="c-switch-handle"></span>
                                                </label>`);
    
        before((done) => {
            $testContainer.append($switcherMaterialCheckedLarge);
            done();
        });

        it('should have correct styles', () => {
            expect($switcherMaterialCheckedLarge.find('span').css('left'), 'left').to.equal('48px');
        });
    });
})
