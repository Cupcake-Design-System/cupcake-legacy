describe('BD Footer', () => {
    describe('BD Footer', () => {
        let $footer = $('<div class="c-footer"></div>');
    
        before((done) => {
            $testContainer.append($footer);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($footer.css('display'), 'display').to.equal('flex');
            expect($footer.css('flex-wrap'), 'flex-wrap').to.equal('wrap');
            expect($footer.css('justify-content'), 'justify-content').to.equal('space-between');
            expect($footer.css('height'), 'height').to.equal('50px');
            expect($footer.css('padding'), 'padding').to.equal('18px 15px');   
            expect($footer.css('background-color'), 'background-color').to.equal(toRgb('#f8f9fa'));
            expect($footer.css('font-size'), 'font-size').to.equal('12px');
            expect($footer.css('line-height'), 'line-height').to.equal('12px');
            expect($footer.css('border-top'), 'border-top').to.equal('1px solid ' + toRgb('#dee2e6'));
        });

        it('Transparent should have correct styles', () => {   
            $footer.addClass('c-footer-transparent')
            expect($footer.css('font-size'), 'font-size').to.equal('12px');
            expect($footer.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
            expect($footer.css('border-top-width'), 'border-top-width').to.equal('0px');
            expect($footer.css('color'), 'color').to.equal(toRgb('#414152'));
        });
    });

    describe('BD Footer Link', () => {
        let $footerLink = $('<div class="c-footer-link"></div>');
    
        before((done) => {
            $testContainer.append($footerLink);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($footerLink.css('display'), 'display').to.equal('inline-block');
            expect($footerLink.css('margin-left'), 'margin-left').to.equal('10px');
            expect($footerLink.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
        });
    });
})
