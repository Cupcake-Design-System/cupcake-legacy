describe('BD Tabs styles', () => {
    describe('BD Tabs', () => {
        let $tabs = $(`<ul class="c-tabs">
                            <li class="c-tab-item">
                                <a class="c-tab-item-link" href="#">Tab A</a>
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
                                <a class="c-tab-item-link" href="#">Tab E</a>
                            </li>
                        </ul>`);
    
        before((done) => {
            $testContainer.append($tabs);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabs.css('display'), 'display').to.equal('flex');
            expect($tabs.css('align-items'), 'align-items').to.equal('stretch');
            expect($tabs.css('white-space'), 'white-space').to.equal('nowrap');
            expect($tabs.css('font-size'), 'font-size').to.equal('14px');
            expect($tabs.css('font-weight'), 'font-weight').to.equal('600');
            expect($tabs.css('margin'), 'margin').to.equal('0px');
            expect($tabs.css('padding'), 'padding').to.equal('0px');
            expect($tabs.css('overflow'), 'overflow').to.equal('hidden');
        
            // c-tab-item
    
            expect($tabs.find('li').css('display'), 'display').to.equal('flex');
            expect($tabs.find('li').css('align-items'), 'align-items').to.equal('center');
            expect($tabs.find('li').css('justify-content'), 'justify-content').to.equal('center');
            expect($tabs.find('li').css('color'), 'color').to.equal(toRgb('#0079bd'));

            // c-tab-item-link

            expect($tabs.find('a').css('margin'), 'margin').to.equal('0px 15px 0px 0px');
            expect($tabs.find('a').css('text-align'), 'text-align').to.equal('center');
            expect($tabs.find('a').css('text-decoration-line'), 'text-decoration-line').to.equal('none');
            expect($tabs.find('a').css('color'), 'color').to.equal(toRgb('#0079bd'));
            expect($tabs.find('a').css('flex-grow'), 'flex-grow').to.equal('1');
            expect($tabs.find('a').css('flex-shrink'), 'flex-shrink').to.equal('1');
            expect($tabs.find('a').css('flex-basis'), 'flex-basis').to.equal('auto');
            expect($tabs.find('a').css('justify-content'), 'justify-content').to.equal('center');
            expect($tabs.find('a').css('padding'), 'padding').to.equal('4px 0px');
            expect($tabs.find('a').css('border-bottom'), 'border-bottom').to.equal('2px solid rgba(0, 0, 0, 0)');
            expect($tabs.find('a').css('cursor'), 'cursor').to.equal('pointer');
        });
    });
    
    describe('BD Tabs link styles', () => {
        let $tabsLink = $(`<ul class="c-tabs">
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
            $testContainer.append($tabsLink);
            done();
        });
    
        it('should have correct styles', () => {    

            // c-tab-item-link-active

            expect($tabsLink.find('.c-tab-item-link-active').css('border-bottom-style'), 'border-bottom-style').to.equal('solid');
            expect($tabsLink.find('.c-tab-item-link-active').css('border-bottom-width'), 'border-bottom-width').to.equal('2px');
            expect($tabsLink.find('.c-tab-item-link-active').css('border-bottom-color'), 'border-bottom-color').to.equal(toRgb('#0079bd'));
            expect($tabsLink.find('.c-tab-item-link-active').css('color'), 'color').to.equal(toRgb('#414152'));

            // c-tab-item-link-disabled
            
            expect($tabsLink.find('.c-tab-item-link-disabled').css('border-bottom-style'), 'border-bottom-style').to.equal('solid');
            expect($tabsLink.find('.c-tab-item-link-disabled').css('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
            expect($tabsLink.find('.c-tab-item-link-disabled').css('cursor'), 'cursor').to.equal('not-allowed');
            expect($tabsLink.find('.c-tab-item-link-disabled').css('color'), 'color').to.equal(toRgb('#868e96'));
        });
    });

    // c-tabs sizes sm, lg
    describe('BD Tabs Sizes ', () => {
        let $tabsSizes = {
            'sm': {
                'fontSize': '12px'
            },
            'lg': {
                'fontSize': '20px'
            }
        };
  
        for (let $size in $tabsSizes) {
            let $tabs = $(`<ul class="c-tabs c-tabs-${$size}">
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
                            </ul>`),
                $tabsStyles = $tabsSizes[$size],
                $tabsSize = $size,
                testParameters = [$tabs, $tabsStyles, $tabsSize];
    
            before((done) => {
                $testContainer.append($tabs);
                done();
            });
    
            testTabsSizes(...testParameters);
        }
    
        function testTabsSizes($tabs, $tabsStyles, $tabsSize) {
            it($tabsSize + ' tabs should have correct styles', () => {
                expect($tabs.find('.c-tab-item-link').css('font-size'), 'font size').to.equal($tabsStyles.fontSize);
            });
        }
    });
    
    // c-tabs c-tabs-fullwidth
    describe('BD Tabs Fullwidth', () => {
        let $tabsLinkFullwidth = $(`<ul class="c-tabs c-tabs-fullwidth">
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
            $testContainer.append($tabsLinkFullwidth);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsLinkFullwidth.find('li').css('flex-grow'), 'flex-grow').to.equal('1');
            expect($tabsLinkFullwidth.find('li').css('flex-shrink'), 'flex-shrink').to.equal('1');
            expect($tabsLinkFullwidth.find('li').css('flex-basis'), 'flex-basis').to.equal('0%');
        });
    });

    // c-tabs c-tabs-center
    describe('BD Tabs Center', () => {
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

    // c-tabs c-tabs-right
    describe('BD Tabs Right', () => {
        let $tabs = $(`<ul class="c-tabs c-tabs-right">
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
            expect($tabs.css('justify-content'), 'justify-content').to.equal('flex-end');
        });
    });

    // c-tabs c-tabs-toggle
    describe('BD Tabs Toggle', () => {
        let $tabsToggle = $(`<ul class="c-tabs c-tabs-toggle">
                                <li class="c-tab-item">
                                    <a class="c-tab-item-link" href="#">
                                        <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Rock</span>
                                    </a>
                                </li>
                                <li class="c-tab-item">
                                    <a class="c-tab-item-link" href="#">
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
            expect($tabsToggle.css('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect($tabsToggle.css('box-shadow'), 'box-shadow').to.equal('none');

            // c-tab-item

            expect(window.getComputedStyle(document.querySelector('.c-tabs-toggle .c-tab-item'), ':first-child').getPropertyValue('border-radius'), 'border-radius').to.equal('2px 0px 0px 2px');
            expect(window.getComputedStyle(document.querySelector('.c-tabs-toggle .c-tab-item'), ':first-child').getPropertyValue('margin-left'), 'margin-left').to.equal('0px');
            expect($tabsToggle.find('li').css('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsToggle.find('li').css('color'), 'color').to.equal(toRgb('#0079bd'));
            expect(window.getComputedStyle(document.querySelector('.c-tabs-toggle .c-tab-item:not(:first-child)')).getPropertyValue('margin-left'), 'margin-left').to.equal('-1px');
        
            // c-tab-link

            expect($tabsToggle.find('a').css('margin'), 'margin').to.equal('0px');
            expect($tabsToggle.find('a').css('padding'), 'padding').to.equal('6px 12px');
            expect($tabsToggle.find('a').css('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect($tabsToggle.find('a').css('text-align'), 'text-align').to.equal('center');
        });
    });
    
    describe('BD Tabs Toggle with active link', () => {
        let $tabsToggleLinkActive = $(`<ul class="c-tabs c-tabs-toggle">
                                            <li class="c-tab-item">
                                                <a class="c-tab-item-link c-tab-item-link-active" href="#">
                                                    <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Rock</span>
                                                </a>
                                            </li>
                                            <li class="c-tab-item">
                                                <a class="c-tab-item-link" href="#">
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
            $testContainer.append($tabsToggleLinkActive);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsToggleLinkActive.find('.c-tab-item-link-active').css('border-width'), 'border-width').to.equal('0px');
            expect($tabsToggleLinkActive.find('.c-tab-item-link-active').css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
        });
    });

    // c-tabs c-tabs-bordered
    describe('BD Tabs Bordered', () => {
        let $tabsBordered = $(`<ul class="c-tabs c-tabs-bordered">
                                    <li class="c-tab-item">
                                        <a class="c-tab-item-link" href="#">
                                            <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Rock</span>
                                        </a>
                                    </li>
                                    <li class="c-tab-item">
                                        <a class="c-tab-item-link" href="#">
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
            expect($tabsBordered.css('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsBordered.css('box-shadow'), 'box-shadow').to.equal('none');

            // c-tab-item:last-child

            expect(window.getComputedStyle(document.querySelector('.c-tabs-bordered .c-tab-item:last-child')).getPropertyValue('margin-right'), 'margin-right').to.equal('-3px');
       
            // c-tab-item-link

            expect($tabsBordered.find('a').css('border-left'), 'border-left').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsBordered.find('a').css('border-right'), 'border-right').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsBordered.find('a').css('border-top'), 'border-top').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsBordered.find('a').css('border-bottom-color'), 'border-bottom-color').to.equal('rgb(0, 121, 189)');
            expect($tabsBordered.find('a').css('border-bottom-style'), 'border-bottom-style').to.equal('none');
            expect($tabsBordered.find('a').css('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect($tabsBordered.find('a').css('background-position'), 'background-position').to.equal('0px 0px');
            expect($tabsBordered.find('a').css('color'), 'color').to.equal(toRgb('#0079bd'));
            expect($tabsBordered.find('a').css('margin-right'), 'margin-right').to.equal('3px');
            expect($tabsBordered.find('a').css('margin-bottom'), 'margin-bottom').to.equal('0px');
            expect($tabsBordered.find('a').css('padding'), 'padding').to.equal('6px 12px');
            expect($tabsBordered.find('a').css('border-radius'), 'border-radius').to.equal('2px 2px 0px 0px');
        });
    });

    describe('BD Tabs Bordered with active link', () => {
        let $tabsBorderedLinkActive = $(`<ul class="c-tabs c-tabs-bordered">
                                            <li class="c-tab-item">
                                                <a class="c-tab-item-link c-tab-item-link-active" href="#">
                                                    <span><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Rock</span>
                                                </a>
                                            </li>
                                            <li class="c-tab-item">
                                                <a class="c-tab-item-link" href="#">
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
            $testContainer.append($tabsBorderedLinkActive);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsBorderedLinkActive.find('.c-tab-item-link-active').css('color'), 'color').to.equal(toRgb('#414152'));
            expect($tabsBorderedLinkActive.find('.c-tab-item-link-active').css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
        });
    });
})
