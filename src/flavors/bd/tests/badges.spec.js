describe('BD Badges', () => {
    describe('BD Base Badge', () => {
        let $badgeDefault = $('<div class="c-badge">Default badge</div>');
    
        before((done) => {
            $testContainer.append($badgeDefault);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($badgeDefault.css('padding'), 'padding').to.equal('2.75px 4.4px');
            expect($badgeDefault.css('text-align'), 'text-align').to.equal('center');
            expect($badgeDefault.css('vertical-align'), 'vertical-align').to.equal('middle');
            expect($badgeDefault.css('font-size'), 'font-size').to.equal('11px');
            expect($badgeDefault.css('line-height'), 'line-height').to.equal('11px');
            expect($badgeDefault.css('font-weight'), 'font-weight').to.equal('400');   
            expect($badgeDefault.css('background-color'), 'background-color').to.equal(toRgb('#212529'));  
            expect($badgeDefault.css('border-radius'), 'border-radius').to.equal('2px');
        });
    });

    describe('BD Empty Badge', () => {
        let $badgeEmpty = $('<div class="c-badge c-badge-rounded"></div>');
    
        before((done) => {
            $testContainer.append($badgeEmpty);
            done();
        });
    
        it('should have correct styles', () => {   
            expect(window.getComputedStyle(document.querySelector(".c-badge-rounded"), ':empty').getPropertyValue('border-radius'), 'border-radius').to.equal('100%');
        });
    });

    describe('BD Outline Badge types', () => {
        let $badgeOutline = $('<div class="c-badge">Outline badge</div>');
    
        before((done) => {
            $testContainer.append($badgeOutline);
            done();
        });
    
        it('Primary should have correct styles', () => {
            $badgeOutline.addClass('c-badge-primary-outline');
            expect($badgeOutline.css('color'), 'color').to.equal(toRgb('#0079bd'));
            expect($badgeOutline.css('border'), 'border').to.equal('1px solid ' + toRgb('#0079bd'));
            expect($badgeOutline.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
        });
    
        it('Success should have correct styles', () => {
            $badgeOutline.addClass('c-badge-success-outline');
            expect($badgeOutline.css('color'), 'color').to.equal(toRgb('#37b24d'));
            expect($badgeOutline.css('border'), 'border').to.equal('1px solid ' + toRgb('#37b24d'));
            expect($badgeOutline.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
        });

        it('Warning should have correct styles', () => {
            $badgeOutline.addClass('c-badge-warning-outline');
            expect($badgeOutline.css('color'), 'color').to.equal(toRgb('#f08c00'));
            expect($badgeOutline.css('border'), 'border').to.equal('1px solid ' + toRgb('#f08c00'));
            expect($badgeOutline.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)'); 
        });
    
        it('Danger should have correct styles', () => {
            $badgeOutline.addClass('c-badge-danger-outline');
            expect($badgeOutline.css('color'), 'color').to.equal(toRgb('#f03e3e'));
            expect($badgeOutline.css('border'), 'border').to.equal('1px solid ' + toRgb('#f03e3e'));
            expect($badgeOutline.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)'); 
        });
    });

    describe('BD Empty Badge sizes', () => {
        let $badgeDefault = $('<span class="c-badge"></span>');
    
        before((done) => {
            $testContainer.append($badgeDefault);
            done();
        });
    
        it('sm Empty Badge should have proper size', () => {
            $badgeDefault.addClass('c-badge-sm');
            expect(window.getComputedStyle(document.querySelector(".c-badge-sm"), ':empty').getPropertyValue('padding'), 'padding').to.equal('3px');
            expect($badgeDefault.css('font-size'), 'font-size').to.equal('9px');  
        });
    
        it('lg Empty Badge should have proper size', () => {
            $badgeDefault.addClass('c-badge-lg');
            expect(window.getComputedStyle(document.querySelector(".c-badge-sm"), ':empty').getPropertyValue('padding'), 'padding').to.equal('12px');
            expect($badgeDefault.css('font-size'), 'font-size').to.equal('18px');  
        });
    });

    describe('BD Badge types', () => {
        let $badgeDefault = $('<span class="c-badge">Badge</span>');
    
        before((done) => {
            $testContainer.append($badgeDefault);
            done();
        });
    
        it('Primary should have correct styles', () => {
            $badgeDefault.addClass('c-badge-primary');
            expect($badgeDefault.css('background-color'), 'background-color').to.equal(toRgb('#0079bd'));  
        });
    
        it('Success should have correct styles', () => {
            $badgeDefault.addClass('c-badge-success');
            expect($badgeDefault.css('background-color'), 'background-color').to.equal(toRgb('#37b24d'));  
        });

        it('Warning should have correct styles', () => {
            $badgeDefault.addClass('c-badge-warning');
            expect($badgeDefault.css('background-color'), 'background-color').to.equal(toRgb('#f08c00'));   
        });
    
        it('Danger should have correct styles', () => {
            $badgeDefault.addClass('c-badge-danger');
            expect($badgeDefault.css('background-color'), 'background-color').to.equal(toRgb('#f03e3e'));  
        });
    });
})
