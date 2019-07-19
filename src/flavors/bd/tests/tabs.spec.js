describe('BD Tabs styles', () => {
    describe('BD Tabs', () => {
        let $tabs = $(`<ul class="c-tabs"></ul>`);
    
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
        });
    });

    describe('BD Tabs Center', () => {
        let $tabs = $(`<ul class="c-tabs c-tabs-center"></ul>`);
    
        before((done) => {
            $testContainer.append($tabs);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabs.css('flex'), 'flex').to.equal('0 0 auto');
            expect($tabs.css('justify-content'), 'justify-content').to.equal('center');
        });
    });

    describe('BD Tabs Right', () => {
        let $tabs = $(`<ul class="c-tabs c-tabs-right"></ul>`);
    
        before((done) => {
            $testContainer.append($tabs);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabs.css('justify-content'), 'justify-content').to.equal('flex-end');
        });
    });
    
    describe('BD Tabs Item', () => {
        let $tabsItem = $(`<ul class="c-tabs">
                                <li class="c-tab-item"></li>
                            </ul>`);
    
        before((done) => {
            $testContainer.append($tabsItem);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsItem.find('li').css('display'), 'display').to.equal('flex');
            expect($tabsItem.find('li').css('align-items'), 'align-items').to.equal('center');
            expect($tabsItem.find('li').css('justify-content'), 'justify-content').to.equal('center');
            expect($tabsItem.find('li').css('color'), 'color').to.equal(toRgb('#0079bd'));
        });
    });
    
    describe('BD Tabs Link', () => {
        let $tabsLink = $(`<ul class="c-tabs">
                            <li class="c-tab-item">
                                <a class="c-tab-item-link" href="#">Tab A</a>
                            </li>
                        </ul>`);
    
        before((done) => {
            $testContainer.append($tabsLink);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsLink.find('a').css('margin'), 'margin').to.equal('0px 15px 0px 0px');
            expect($tabsLink.find('a').css('text-align'), 'text-align').to.equal('center');
            expect($tabsLink.find('a').css('text-decoration-line'), 'text-decoration-line').to.equal('none');
            expect($tabsLink.find('a').css('color'), 'color').to.equal(toRgb('#0079bd'));
            expect($tabsLink.find('a').css('flex-grow'), 'flex-grow').to.equal('1');
            expect($tabsLink.find('a').css('flex-shrink'), 'flex-shrink').to.equal('1');
            expect($tabsLink.find('a').css('flex-basis'), 'flex-basis').to.equal('auto');
            expect($tabsLink.find('a').css('justify-content'), 'justify-content').to.equal('center');
            expect($tabsLink.find('a').css('padding'), 'padding').to.equal('4px 0px');
            expect($tabsLink.find('a').css('border-bottom'), 'border-bottom').to.equal('2px solid rgba(0, 0, 0, 0)');
            expect($tabsLink.find('a').css('cursor'), 'cursor').to.equal('pointer');
        });
    });
    
    describe('BD Tabs Link active', () => {
        let $tabsLinkActive = $(`<ul class="c-tabs">
                                    <li class="c-tab-item">
                                        <a class="c-tab-item-link c-tab-item-link-active" href="#">Tab A</a>
                                    </li>
                                </ul>`);
    
        before((done) => {
            $testContainer.append($tabsLinkActive);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsLinkActive.find('a').css('border-bottom-style'), 'border-bottom-style').to.equal('solid');
            expect($tabsLinkActive.find('a').css('border-bottom-width'), 'border-bottom-width').to.equal('2px');
            expect($tabsLinkActive.find('a').css('border-bottom-color'), 'border-bottom-color').to.equal(toRgb('#0079bd'));
            expect($tabsLinkActive.find('a').css('color'), 'color').to.equal(toRgb('#414152'));
        });
    });
    
    describe('BD Tabs Link disabled', () => {
        let $tabsLinkDisabled = $(`<ul class="c-tabs">
                                        <li class="c-tab-item">
                                            <a class="c-tab-item-link c-tab-item-link-disabled" href="#">Tab A</a>
                                        </li>
                                    </ul>`);
    
        before((done) => {
            $testContainer.append($tabsLinkDisabled);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsLinkDisabled.find('a').css('border-bottom-style'), 'border-bottom-style').to.equal('solid');
            expect($tabsLinkDisabled.find('a').css('border-bottom-color'), 'border-bottom-color').to.equal('rgba(0, 0, 0, 0)');
            expect($tabsLinkDisabled.find('a').css('cursor'), 'cursor').to.equal('not-allowed');
            expect($tabsLinkDisabled.find('a').css('color'), 'color').to.equal(toRgb('#868e96'));
        });
    });
    
    describe('BD Tabs Link size', () => {
        let $tabsLink = $(`<ul class="c-tabs">
                                <li class="c-tab-item">
                                    <a class="c-tab-item-link" href="#">Tab A</a>
                                </li>
                            </ul>`);
    
        before((done) => {
            $testContainer.append($tabsLink);
            done();
        });
    
        it('Small should have correct styles', () => {
            $tabsLink.addClass('c-tabs-sm');
            expect($tabsLink.find('a').css('font-size'), 'font-size').to.equal('12px');
        });
    
        it('Large should have correct styles', () => {
            $tabsLink.addClass('c-tabs-lg');
            expect($tabsLink.find('a').css('font-size'), 'font-size').to.equal('20px');
        });
    });
    
    describe('BD Tabs Item fullwidth', () => {
        let $tabsLinkFullwidth = $(`<ul class="c-tabs c-tabs-fullwidth">
                                        <li class="c-tab-item"></li>
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

    describe('BD Tabs Toggle', () => {
        let $tabsToggle = $(`<ul class="c-tabs c-tabs-toggle"></ul>`);
    
        before((done) => {
            $testContainer.append($tabsToggle);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsToggle.css('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect($tabsToggle.css('box-shadow'), 'box-shadow').to.equal('none');
        });
    });
    
    describe('BD Tabs Toggle Item', () => {
        let $tabsToggleItem = $(`<ul class="c-tabs c-tabs-toggle">
                                    <li class="c-tab-item"></li>
                                    <li class="c-tab-item"></li>
                                    <li class="c-tab-item"></li>
                                </ul>`);
    
        before((done) => {
            $testContainer.append($tabsToggleItem);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-tabs-toggle .c-tab-item'), ':first-child').getPropertyValue('border-radius'), 'border-radius').to.equal('2px 0px 0px 2px');
            expect(window.getComputedStyle(document.querySelector('.c-tabs-toggle .c-tab-item'), ':first-child').getPropertyValue('margin-left'), 'margin-left').to.equal('0px');
            expect($tabsToggleItem.find('li').css('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsToggleItem.find('li').css('color'), 'color').to.equal(toRgb('#0079bd'));
            expect(window.getComputedStyle(document.querySelector('.c-tabs-toggle .c-tab-item:not(:first-child)')).getPropertyValue('margin-left'), 'margin-left').to.equal('-1px');
        });
    });
    
    describe('BD Tabs Toggle Link', () => {
        let $tabsToggleLink = $(`<ul class="c-tabs c-tabs-toggle">
                                    <li class="c-tab-item">
                                        <a class="c-tab-item-link" href="#">Tab A</a>
                                    </li>
                                </ul>`);
    
        before((done) => {
            $testContainer.append($tabsToggleLink);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsToggleLink.find('a').css('margin'), 'margin').to.equal('0px');
            expect($tabsToggleLink.find('a').css('padding'), 'padding').to.equal('6px 12px');
            expect($tabsToggleLink.find('a').css('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect($tabsToggleLink.find('a').css('text-align'), 'text-align').to.equal('center');
        });
    });
    
    describe('BD Tabs Toggle Link active', () => {
        let $tabsToggleLinkActive = $(`<ul class="c-tabs c-tabs-toggle">
                                            <li class="c-tab-item">
                                                <a class="c-tab-item-link c-tab-item-link-active" href="#">Tab A</a>
                                            </li>
                                        </ul>`);
    
        before((done) => {
            $testContainer.append($tabsToggleLinkActive);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsToggleLinkActive.find('a').css('border-width'), 'border-width').to.equal('0px');
            expect($tabsToggleLinkActive.find('a').css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
        });
    });

    describe('BD Tabs Bordered', () => {
        let $tabsBordered = $(`<ul class="c-tabs c-tabs-bordered"></ul>`);
    
        before((done) => {
            $testContainer.append($tabsBordered);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsBordered.css('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsBordered.css('box-shadow'), 'box-shadow').to.equal('none');
        });
    });
    
    describe('BD Tabs Bordered Last Item', () => {
        let $tabsBorderedLastItem = $(`<ul class="c-tabs c-tabs-bordered">
                                    <li class="c-tab-item"></li>
                                    <li class="c-tab-item"></li>
                                    <li class="c-tab-item"></li>
                                </ul>`);
    
        before((done) => {
            $testContainer.append($tabsBorderedLastItem);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-tabs-bordered .c-tab-item:last-child')).getPropertyValue('margin-right'), 'margin-right').to.equal('-3px');
        });
    });
    
    describe('BD Tabs Bordered Link', () => {
        let $tabsBorderedLink = $(`<ul class="c-tabs c-tabs-bordered">
                                        <li class="c-tab-item">
                                            <a class="c-tab-item-link" href=""></a>
                                        </li>
                                    </ul>`);
    
        before((done) => {
            $testContainer.append($tabsBorderedLink);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsBorderedLink.find('a').css('border-left'), 'border-left').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsBorderedLink.find('a').css('border-right'), 'border-right').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsBorderedLink.find('a').css('border-top'), 'border-top').to.equal('1px solid ' + toRgb('#ced4da'));
            expect($tabsBorderedLink.find('a').css('border-bottom-color'), 'border-bottom-color').to.equal('rgb(0, 121, 189)');
            expect($tabsBorderedLink.find('a').css('border-bottom-style'), 'border-bottom-style').to.equal('none');
            expect($tabsBorderedLink.find('a').css('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect($tabsBorderedLink.find('a').css('background-position'), 'background-position').to.equal('0px 0px');
            expect($tabsBorderedLink.find('a').css('color'), 'color').to.equal(toRgb('#0079bd'));
            expect($tabsBorderedLink.find('a').css('margin-right'), 'margin-right').to.equal('3px');
            expect($tabsBorderedLink.find('a').css('margin-bottom'), 'margin-bottom').to.equal('0px');
            expect($tabsBorderedLink.find('a').css('padding'), 'padding').to.equal('6px 12px');
            expect($tabsBorderedLink.find('a').css('border-radius'), 'border-radius').to.equal('2px 2px 0px 0px');
        });
    });
    
    describe('BD Tabs Bordered Link active', () => {
        let $tabsBorderedLinkActive = $(`<ul class="c-tabs c-tabs-bordered">
                                            <li class="c-tab-item">
                                                <a class="c-tab-item-link c-tab-item-link-active" href="#">Tab A</a>
                                            </li>
                                        </ul>`);
    
        before((done) => {
            $testContainer.append($tabsBorderedLinkActive);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tabsBorderedLinkActive.find('a').css('color'), 'color').to.equal(toRgb('#414152'));
            expect($tabsBorderedLinkActive.find('a').css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
        });
    });
})
