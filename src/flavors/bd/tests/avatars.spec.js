describe('BD Avatars', () => {
    describe('BD Base Avatar', () => {
        let $avatarDefault = $('<span class="c-avatar"></span>');
    
        before((done) => {
            $testContainer.append($avatarDefault);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($avatarDefault.css('width'), 'width').to.equal('40px');  
            expect($avatarDefault.css('height'), 'height').to.equal('40px');  
            expect($avatarDefault.css('font-size'), 'font-size').to.equal('12px');   
            expect($avatarDefault.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.06) 1px 2px 5px 1px');   
            expect($avatarDefault.css('border-radius'), 'border-radius').to.equal('50%');  
        });
    });

    describe('BD Primary Avatar', () => {
        let $avatarPrimary = $('<span class="c-avatar c-avatar-primary"></span>');
    
        before((done) => {
            $testContainer.append($avatarPrimary);
            done();
        });
    
        it('should have correct styles', () => {
            expect($avatarPrimary.css('background-color'), 'background').to.equal(toRgb('#0079bd'));
        });
    });

    describe('BD Secondary Avatar', () => {
        let $avatarSecondary = $('<span class="c-avatar c-avatar-secondary"></span>');
    
        before((done) => {
            $testContainer.append($avatarSecondary);
            done();
        });
    
        it('should have correct styles', () => {
            expect($avatarSecondary.css('color'), 'color').to.equal(toRgb('#495057')); 
            expect($avatarSecondary.css('background-color'), 'background').to.equal(toRgb('#f1f3f5'));
        });
    });

    describe('BD Success Avatar', () => {
        let $avatarSuccess = $('<span class="c-avatar c-avatar-success"></span>');
    
        before((done) => {
            $testContainer.append($avatarSuccess);
            done();
        });
    
        it('should have correct styles', () => {
            expect($avatarSuccess.css('background-color'), 'background').to.equal(toRgb('#37b24d'));
        });
    });

    describe('BD Warning Avatar', () => {
        let $avatarWarning = $('<span class="c-avatar c-avatar-warning"></span>');
    
        before((done) => {
            $testContainer.append($avatarWarning);
            done();
        });
    
        it('should have correct styles', () => {
            expect($avatarWarning.css('background-color'), 'background').to.equal(toRgb('#f08c00'));
        });
    });

    describe('BD Danger Avatar', () => {
        let $avatarDanger = $('<span class="c-avatar c-avatar-danger"></span>');
    
        before((done) => {
            $testContainer.append($avatarDanger);
            done();
        });
    
        it('should have correct styles', () => {
            expect($avatarDanger.css('background-color'), 'background').to.equal(toRgb('#f03e3e'));
        });
    });

    describe('BD Avatar with data-status', () => {
        let $avatarDataStatus = $('<span class="c-avatar" data-status></span>');
    
        before((done) => {
            $testContainer.append($avatarDataStatus);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('top'), 'top').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('right'), 'right').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('margin'), 'margin').to.equal('1px');
            expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('width'), 'width').to.equal('8px');
            expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('height'), 'height').to.equal('8px');
            expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('border-radius'), 'border-radius').to.equal('50px');    
        });

        it('Primary should have correct styles', () => {
            $avatarDataStatus.attr("data-status", "primary")
            expect(window.getComputedStyle(document.querySelector("[data-status='primary']"), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0079bd'));    
        })

        it('Success should have correct styles', () => {
            $avatarDataStatus.attr("data-status", "success")
            expect(window.getComputedStyle(document.querySelector("[data-status='success']"), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#37b24d'));    
        })

        it('Warning should have correct styles', () => {
            $avatarDataStatus.attr("data-status", "warning")
            expect(window.getComputedStyle(document.querySelector("[data-status='warning']"), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f08c00'));    
        })

        it('Danger should have correct styles', () => {
            $avatarDataStatus.attr("data-status", "danger")
            expect(window.getComputedStyle(document.querySelector("[data-status='danger']"), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f03e3e'));    
        })
    });

    describe('BD Avatar with Primary data-status', () => {
        let $avatarPrimaryDataStatus = $('<span class="c-avatar" data-status="primary"></span>');
    
        before((done) => {
            $testContainer.append($avatarPrimaryDataStatus);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector("[data-status='primary']"), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0079bd'));    
        });
    });

    describe('BD Avatar with any data-text', () => {
        let $avatarDataText = $('<span class="c-avatar" data-text></span>');
    
        before((done) => {
            $testContainer.append($avatarDataText);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector("[data-text]"), ':after').getPropertyValue('top'), 'top').to.equal('20px');
            expect(window.getComputedStyle(document.querySelector("[data-text]"), ':after').getPropertyValue('left'), 'left').to.equal('20px');
            expect(window.getComputedStyle(document.querySelector("[data-text]"), ':after').getPropertyValue('transform'), 'transform').to.equal('matrix(1, 0, 0, 1, 0, 0)');
        });
    });

    describe('BD Avatar sizes', () => {
        let $avatarDefault = $('<span class="c-avatar"></span>');
    
        before((done) => {
            $testContainer.append($avatarDefault);
            done();
        });
    
        it('sm Avatar should have proper size', () => {
            $avatarDefault.addClass('c-avatar-sm');
            expect($avatarDefault.css('width'), 'width').to.equal('32px');  
            expect($avatarDefault.css('height'), 'height').to.equal('32px'); 
            expect($avatarDefault.css('line-height'), 'line-height').to.equal('32px');  
            expect($avatarDefault.css('font-size'), 'font-size').to.equal('12.8px');  
        });
    
        it('lg Avatar should have proper size', () => {
            $avatarDefault.addClass('c-avatar-lg');
            expect($avatarDefault.css('width'), 'width').to.equal('48px');  
            expect($avatarDefault.css('height'), 'height').to.equal('48px');  
            expect($avatarDefault.css('line-height'), 'line-height').to.equal('48px');  
            expect($avatarDefault.css('font-size'), 'font-size').to.equal('16px'); 
        });
    
        it('xl Avatar should have proper size', () => {
            $avatarDefault.addClass('c-avatar-xl');
            expect($avatarDefault.css('width'), 'width').to.equal('80px');  
            expect($avatarDefault.css('height'), 'height').to.equal('80px');  
            expect($avatarDefault.css('line-height'), 'line-height').to.equal('80px');  
            expect($avatarDefault.css('font-size'), 'font-size').to.equal('22.4px'); 
        });
    });
})
