describe('BD Pagination', () => {
    describe('BD Pagination', () => {
        let $pagination = $(`<ul class="c-pagination">
                                <li>
                                    <a href="#" aria-label="Previous" class="c-pagination-previous c-pagination-link"></a>
                                </li>
                                <li> 
                                    <a href="#" aria-label="Previous" class="c-pagination-link c-pagination-current">1</a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Page 2" class="c-pagination-link">2</a>
                                </li>
                                <li>
                                    <a href="#" class="c-pagination-link c-pagination-ellipsis"></a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Page 12" class="c-pagination-link">12</a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Page 13" class="c-pagination-link">13</a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Next page" class="c-pagination-next c-pagination-link"></a>
                                </li>
                            </ul>`);

        before((done) => {
            $testContainer.append($pagination);
            done();
        });

        it('should have correct styles', () => {
            expect($pagination.css('display'), 'display').to.equal('flex');
            expect($pagination.css('list-style-type'), 'list-style-type').to.equal('none');
            expect($pagination.css('margin-left'), 'margin-left').to.equal('0px');
            expect($pagination.css('margin-bottom'), 'margin-bottom').to.equal('15px');
            expect($pagination.css('padding'), 'padding').to.equal('0px');

            // c-pagination a, c-pagination-link
            expect(window.getComputedStyle(document.querySelector('.c-pagination a, .c-pagination-link')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-pagination a, .c-pagination-link')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination a, .c-pagination-link')).getPropertyValue('margin-right'), 'margin-right').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination a, .c-pagination-link')).getPropertyValue('border-radius'), 'border-radius').to.equal('2px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination a, .c-pagination-link')).getPropertyValue('padding'), 'padding').to.equal('3px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination a, .c-pagination-link')).getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#e5e9ed'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination a, .c-pagination-link')).getPropertyValue('min-width'), 'min-width').to.equal('20px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination a, .c-pagination-link')).getPropertyValue('font-size'), 'font-size').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination a, .c-pagination-link')).getPropertyValue('text-align'), 'text-align').to.equal('center');
        
            // c-pagination c-pagination-current
            expect(window.getComputedStyle(document.querySelector('.c-pagination .c-pagination-current')).getPropertyValue('min-width'), 'min-width').to.equal('20px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination .c-pagination-current')).getPropertyValue('padding'), 'padding').to.equal('3px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination .c-pagination-current')).getPropertyValue('text-align'), 'text-align').to.equal('center');
            expect(window.getComputedStyle(document.querySelector('.c-pagination .c-pagination-current')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0079bd'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination .c-pagination-current')).getPropertyValue('color'), 'color').to.equal(toRgb('#ffffff'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination .c-pagination-current')).getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#006ca9'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination .c-pagination-current')).getPropertyValue('cursor'), 'cursor').to.equal('default');

            // c-pagination-ellipsis
            expect(window.getComputedStyle(document.querySelector('.c-pagination-ellipsis'), ':after').getPropertyValue('content'), 'content').to.equal('"…"');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-ellipsis'), ':after').getPropertyValue('padding'), 'padding').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-ellipsis'), ':after').getPropertyValue('color'), 'color').to.equal(toRgb('#0a0a0a'));

            // c-pagination-next.disabled::after, c-pagination-next::after
            expect(window.getComputedStyle(document.querySelector('.c-pagination-next.disabled, .c-pagination-next'), ':after').getPropertyValue('font-family'), 'font-family').to.equal('fontawesome');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-next.disabled, .c-pagination-next'), ':after').getPropertyValue('display'), 'display').to.equal('inline-block');

            // c-pagination-previous.disabled::before, c-pagination-previous::before
            expect(window.getComputedStyle(document.querySelector('.c-pagination-previous.disabled, .c-pagination-previous'), ':before').getPropertyValue('font-family'), 'font-family').to.equal('fontawesome');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-previous.disabled, .c-pagination-previous'), ':before').getPropertyValue('display'), 'display').to.equal('inline-block');
        });
    });

    describe('BD Pagination Link Small', () => {
        let $paginationLinkSmall = $(`<ul class="c-pagination-sm">
                                        <li>
                                            <a href="#" class="c-pagination-previous c-pagination-link"> </a>
                                        </li>
                                        <li>
                                            <a href="#" class="c-pagination-link">1</a>
                                        </li>
                                        <li>
                                            <a href="#" class="c-pagination-link c-pagination-current">2</a>
                                        </li>
                                        <li>
                                            <a href="#" class="c-pagination-link">3</a>
                                        </li>
                                        <li><a href="#" class="c-pagination-link">4</a>
                                        </li>
                                        <li>
                                            <a href="#" class="c-pagination-link c-pagination-ellipsis"></a>
                                        </li>
                                        <li>
                                            <a href="#" class="c-pagination-link">12</a>
                                        </li>
                                        <li>
                                            <a href="#" class="c-pagination-link">13</a>
                                        </li>
                                        <li>
                                            <a href="#" class="c-pagination-link c-pagination-next"></a>
                                        </li>
                                    </ul>`);

        before((done) => {
            $testContainer.append($paginationLinkSmall);
            done();
        });

        it('should have correct styles', () => {

            // c-pagination-sm a, c-pagination-sm-link
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm a, .c-pagination-sm-link')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm a, .c-pagination-sm-link')).getPropertyValue('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm a, .c-pagination-sm-link')).getPropertyValue('background-position'), 'background-position').to.equal('0px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm a, .c-pagination-sm-link')).getPropertyValue('border-width'), 'border-width').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm a, .c-pagination-sm-link')).getPropertyValue('min-width'), 'min-width').to.equal('15px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm a, .c-pagination-sm-link')).getPropertyValue('color'), 'color').to.equal(toRgb('#0a0a0a'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm a, .c-pagination-sm-link')).getPropertyValue('padding'), 'padding').to.equal('1px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm a, .c-pagination-sm-link')).getPropertyValue('font-size'), 'font-size').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm a, .c-pagination-sm-link')).getPropertyValue('text-align'), 'text-align').to.equal('center');
        
            // c-pagination-sm c-pagination-current
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm .c-pagination-current')).getPropertyValue('min-width'), 'min-width').to.equal('15px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm .c-pagination-current')).getPropertyValue('padding'), 'padding').to.equal('1px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm .c-pagination-current')).getPropertyValue('text-align'), 'text-align').to.equal('center');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm .c-pagination-current')).getPropertyValue('color'), 'color').to.equal(toRgb('#0079bd'));

            // c-pagination-sm c-pagination-ellipsis
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm .c-pagination-ellipsis'), ':after').getPropertyValue('content'), 'content').to.equal('"…"');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm .c-pagination-ellipsis'), ':after').getPropertyValue('padding'), 'padding').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm .c-pagination-ellipsis'), ':after').getPropertyValue('color'), 'color').to.equal(toRgb('#0a0a0a'));
        });
    });

    describe('BD Pagination Link Large', () => {
        let $paginationLinkLarge = $(`<ul class="c-pagination-lg">
                                            <li>
                                                <a href="#" class="c-pagination-link c-pagination-previous"> </a>
                                            </li>
                                            <li>
                                                <a href="#" class="c-pagination-link"> 1</a>
                                            </li>
                                            <li>
                                                <a href="" class="c-pagination-current c-pagination-link">2</a>
                                            </li>
                                            <li>
                                                <a href="#" class="c-pagination-link">3</a>
                                            </li>
                                            <li><a href="#" class="c-pagination-link">4</a>
                                            </li>
                                            <li>
                                                <a href="#" class="c-pagination-link c-pagination-ellipsis"></a>
                                            </li>
                                            <li>
                                                <a href="#" class="c-pagination-link">12</a>
                                            </li>
                                            <li>
                                                <a href="#" class="c-pagination-link">13</a>
                                            </li>
                                            <li>
                                                <a href="#" class="c-pagination-link c-pagination-next"></a>
                                            </li>
                                        </ul>`);

        before((done) => {
            $testContainer.append($paginationLinkLarge);
            done();
        });

        it('should have correct styles', () => {

            // c-pagination-lg a, c-pagination-lg-link
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg a, .c-pagination-lg-link')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg a, .c-pagination-lg-link')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg a, .c-pagination-lg-link')).getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#e5e9ed'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg a, .c-pagination-lg-link')).getPropertyValue('min-width'), 'min-width').to.equal('30px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg a, .c-pagination-lg-link')).getPropertyValue('color'), 'color').to.equal(toRgb('#0a0a0a'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg a, .c-pagination-lg-link')).getPropertyValue('border-radius'), 'border-radius').to.equal('2px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg a, .c-pagination-lg-link')).getPropertyValue('padding'), 'padding').to.equal('5px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg a, .c-pagination-lg-link')).getPropertyValue('font-size'), 'font-size').to.equal('14px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg a, .c-pagination-lg-link')).getPropertyValue('text-align'), 'text-align').to.equal('center');
        
            // c-pagination-lg c-pagination-current
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('min-width'), 'min-width').to.equal('30px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('padding'), 'padding').to.equal('5px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('text-align'), 'text-align').to.equal('center');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('color'), 'color').to.equal(toRgb('#ffffff'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#0079bd'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('border-radius'), 'border-radius').to.equal('2px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('cursor'), 'cursor').to.equal('default');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0079bd'));
            
            // c-pagination-sm c-pagination-ellipsis
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-ellipsis'), ':after').getPropertyValue('content'), 'content').to.equal('"…"');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-ellipsis'), ':after').getPropertyValue('padding'), 'padding').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-ellipsis'), ':after').getPropertyValue('color'), 'color').to.equal(toRgb('#0a0a0a'));
        });
    });
})
