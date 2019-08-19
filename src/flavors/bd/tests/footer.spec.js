describe('BD Footer', () => {
    describe('BD Footer default', () => {
        let $footer = $(`<div class="c-footer">
                            <div class="c-footer-left">
                                © 2016 Ipreo. All Rights Reserved.
                            </div>
                            <div class="c-footer-right">
                                <div class="c-footer-link">
                                    <a href="javascript:void(0)" class="c-a">Third Party Data</a>
                                </div>
                                <div class="c-footer-link">
                                    <a href="javascript:void(0)" class="c-a">Privacy Policy</a>
                                </div>
                                <div class="c-footer-link">
                                    <a href="javascript:void(0)" class="c-a">Terms of Use</a>
                                </div>
                            </div>
                        </div>`);
    
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
            expect($footer.css('color'), 'color').to.equal(toRgb('#868e96'));

            // c-footer-link
            expect($footer.find('.c-footer-link').css('display'), 'display').to.equal('inline-block');
            expect($footer.find('.c-footer-link').css('margin-left'), 'margin-left').to.equal('10px');
            expect($footer.find('.c-footer-link').css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');

            // c-footer-link a
            expect(window.getComputedStyle(document.querySelector('.c-footer-link a')).getPropertyValue('color'), 'color').to.equal(toRgb('#868e96'));
        });
    });

    describe('BD Footer transparent', () => {
        let $footer = $(`<div class="c-footer c-footer-transparent">
                            <div class="c-footer-left">
                                © 2016 Ipreo. All Rights Reserved.
                            </div>
                            <div class="c-footer-right">
                                <div class="c-footer-link">
                                    <a href="javascript:void(0)" class="c-a">Third Party Data</a>
                                </div>
                                <div class="c-footer-link">
                                    <a href="javascript:void(0)" class="c-a">Privacy Policy</a>
                                </div>
                                <div class="c-footer-link">
                                    <a href="javascript:void(0)" class="c-a">Terms of Use</a>
                                </div>
                            </div>
                        </div>`);
    
        before((done) => {
            $testContainer.append($footer);
            done();
        });
    
        it('should have correct styles', () => {   
            expect(window.getComputedStyle(document.querySelector('.c-footer.c-footer-transparent')).getPropertyValue('font-size'), 'font-size').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-footer.c-footer-transparent')).getPropertyValue('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-footer.c-footer-transparent')).getPropertyValue('border-top-width'), 'border-top-width').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-footer.c-footer-transparent')).getPropertyValue('color'), 'color').to.equal(toRgb('#414152'));

            // c-footer-link a
            expect(window.getComputedStyle(document.querySelector('.c-footer.c-footer-transparent .c-footer-right .c-footer-link a')).getPropertyValue('color'), 'color').to.equal(toRgb('#414152'));
        });
    });
})
