describe('Pagination', () => {
    describe('Pagination', () => {
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
            // c-pagination c-pagination-current
            expect(window.getComputedStyle(document.querySelector('.c-pagination .c-pagination-current')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#1b6ec2'));
            expect(window.getComputedStyle(document.querySelector('.c-pagination .c-pagination-current')).getPropertyValue('border'), 'border').to.equal(`1px solid ${toRgb('#1964b0')}`);
        });
    });

    describe('Pagination Link Small', () => {
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
            expect(window.getComputedStyle(document.querySelector('.c-pagination-sm .c-pagination-current')).getPropertyValue('color'), 'color').to.equal(toRgb('#1b6ec2'));
        });
    });

    describe('Pagination Link Large', () => {
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
            // c-pagination-lg c-pagination-current
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('border'), 'border').to.equal(`1px solid ${toRgb('#1b6ec2')}`);
            expect(window.getComputedStyle(document.querySelector('.c-pagination-lg .c-pagination-current')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#1b6ec2'));
        });
    });
})
