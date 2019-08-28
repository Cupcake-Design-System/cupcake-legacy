describe('Footer', () => {
    describe('Footer transparent', () => {
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
            expect(window.getComputedStyle(document.querySelector('.c-footer.c-footer-transparent')).getPropertyValue('color'), 'color').to.equal(toRgb('#0a0a0a'));

            // c-footer-link a
            expect(window.getComputedStyle(document.querySelector('.c-footer.c-footer-transparent .c-footer-right .c-footer-link a')).getPropertyValue('color'), 'color').to.equal(toRgb('#0a0a0a'));
        });
    });
})
