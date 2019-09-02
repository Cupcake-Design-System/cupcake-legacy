describe('Tabs styles', () => {
    describe('Tabs', () => {
        let $tabs = $(`<ul class="c-tabs">
                            <li class="c-tab-item">
                                <a class="c-tab-item-link" href="#">Tab A</a>
                            </li>
                            <li class="c-tab-item">
                                <a class="c-tab-item-link" href="#">Tab D</a>
                            </li>
                            <li class="c-tab-item">
                                <a class="c-tab-item-link c-tab-item-link-disabled" href="#">Tab C</a>
                            </li>
                            <li class="c-tab-item">
                                <a class="c-tab-item-link c-tab-item-link-active" href="#">Tab B</a>
                            </li>
                        </ul>`);
    
        before((done) => {
            $testContainer.append($tabs);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabs.css('font-weight'), 'font-weight').to.equal('700');
        });

        describe('Tabs-item', () => {
            it('should have correct styles', () => {
                expect($tabs.find('.c-tab-item').css('color'), 'color').to.equal(toRgb('#adb5bd'));
            });
        });

        describe('Tabs-item-link', () => {
            it('should have correct styles', () => {
                expect($tabs.find('.c-tab-item-link').css('margin'), 'margin').to.equal('0px');
                expect($tabs.find('.c-tab-item-link').css('color'), 'color').to.equal(toRgb('#adb5bd'));
                expect($tabs.find('.c-tab-item-link').css('padding'), 'padding').to.equal('10px 12px');
            });

            describe('Tabs-item-link active/disabled', () => {
                it('should have correct styles', () => {    
                    // c-tab-item-link-active
                    expect($tabs.find('.c-tab-item-link-active').css('border-bottom-color'), 'border-bottom-color').to.equal(toRgb('#1b6ec2'));
                    expect($tabs.find('.c-tab-item-link-active').css('color'), 'color').to.equal(toRgb('#1b6ec2'));
        
                    // c-tab-item-link-disabled
                    expect($tabs.find('.c-tab-item-link-disabled').css('color'), 'color').to.equal(toRgb('#dee2e6'));
                });
            });
        });
    });

    describe('Tabs Center', () => {
        let $tabs = $(`<ul class="c-tabs c-tabs-center">
                            <li class="c-tab-item">
                                <a class="c-tab-item-link c-tab-item-link-active" href="#">Tab A</a>
                            </li>
                            <li class="c-tab-item">
                                <a class="c-tab-item-link" href="#">Tab B</a>
                            </li>
                            <li class="c-tab-item">
                                <a class="c-tab-item-link" href="#">Tab C</a>
                            </li>
                            <li class="c-tab-item">
                                <a class="c-tab-item-link" href="#">Tab D</a>
                            </li>
                            <li class="c-tab-item">
                                <a class="c-tab-item-link c-tab-item-link-disabled" href="#">Tab E</a>
                            </li>
                        </ul>`);
    
        before((done) => {
            $testContainer.append($tabs);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabs.css('flex'), 'flex').to.equal('0 0 auto');
            expect($tabs.css('justify-content'), 'justify-content').to.equal('center');
        });
    });

    describe('Tabs Toggle', () => {
        let $tabsToggle = $(`<ul class="c-tabs c-tabs-toggle">
                                <li class="c-tab-item">
                                    <a class="c-tab-item-link" href="#">
                                        <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Rock</span>
                                    </a>
                                </li>
                                <li class="c-tab-item">
                                    <a class="c-tab-item-link c-tab-item-link-active" href="#">
                                        <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Paper</span>
                                    </a>
                                </li>
                                <li class="c-tab-item">
                                    <a class="c-tab-item-link" href="#">
                                        <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Scissors</span>
                                    </a>
                                </li>
                            </ul>`);
    
        before((done) => {
            $testContainer.append($tabsToggle);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsToggle.find('.c-tab-item').css('border'), 'border').to.equal(`1px solid ${toRgb('#ced4da')}`);
            expect($tabsToggle.find('.c-tab-item').css('color'), 'color').to.equal(toRgb('#adb5bd'));
            expect(window.getComputedStyle(document.querySelector('.c-tabs-toggle .c-tab-item:last-child')).getPropertyValue('border-radius'), 'border-radius').to.equal('0px 2px 2px 0px');
        });

        describe('Tabs Toggle active link', () => {
            it('should have correct styles', () => {
                expect($tabsToggle.find('.c-tab-item-link-active').css('background-color'), 'background-color').to.equal(toRgb('#ffffff'));
            });
        });
    });
    
    describe('Tabs Bordered', () => {
        let $tabsBordered = $(`<ul class="c-tabs c-tabs-bordered">
                                    <li class="c-tab-item">
                                        <a class="c-tab-item-link" href="#">
                                            <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Rock</span>
                                        </a>
                                    </li>
                                    <li class="c-tab-item">
                                        <a class="c-tab-item-link c-tab-item-link-active" href="#">
                                            <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Paper</span>
                                        </a>
                                    </li>
                                    <li class="c-tab-item">
                                        <a class="c-tab-item-link" href="#">
                                            <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Scissors</span>
                                        </a>
                                    </li>
                                </ul>`);
    
        before((done) => {
            $testContainer.append($tabsBordered);
            done();
        });
    
        it('should have correct styles', () => {
            // c-tab-item-link
            expect($tabsBordered.find('.c-tab-item-link').css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
            expect($tabsBordered.find('.c-tab-item-link').css('border-bottom-color'), 'border-bottom-color').to.equal('rgb(173, 181, 189)');
            expect($tabsBordered.find('.c-tab-item-link').css('border-bottom-style'), 'border-bottom-style').to.equal('none');
            expect($tabsBordered.find('.c-tab-item-link').css('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect($tabsBordered.find('.c-tab-item-link').css('color'), 'color').to.equal(toRgb('#adb5bd'));
        });

        describe('Tabs Bordered Link active', () => {
            it('should have correct styles', () => {
                expect($tabsBordered.find('.c-tab-item-link-active').css('color'), 'color').to.equal(toRgb('#1b6ec2'));
                expect($tabsBordered.find('.c-tab-item-link-active').css('background-color'), 'background-color').to.equal(toRgb('#ffffff'));
            });
        })
    });
});
