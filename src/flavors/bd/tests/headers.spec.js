describe('BD Headers', () => {
    describe('BD Default Header', () => {
        let $defaultHeader = $(`<header class="c-header"></header>`);

        before((done) => {
            $testContainer.append($defaultHeader);
            done();
        });

        it('should have correct styles', () => {
            expect($defaultHeader.css('display'), 'display').to.equal('flex');
            expect($defaultHeader.css('justify-content'), 'justify-content').to.equal('space-between');
            expect($defaultHeader.css('align-items'), 'align-items').to.equal('center');
            expect($defaultHeader.css('height'), 'height').to.equal('50px');
            expect($defaultHeader.css('border-bottom'), 'border-bottom').to.equal('1px solid rgba(0, 0, 0, 0.06)');
        });

        it('Inverse should have correct styles', () => {
            $defaultHeader.addClass('c-header-inverse');
            expect($defaultHeader.css('background-color'), 'background-color').to.equal(toRgb('#495057'));
            expect($defaultHeader.css('border-color'), 'border-color').to.equal('rgba(255, 255, 255, 0.1)');
        });
    });

    describe('BD Legacy Header', () => {
        let $legacyHeader = $(`<div class="c-header-legacy">
                                    <header class="c-header"></header>
                                </div>`);

        before((done) => {
            $testContainer.append($legacyHeader);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-header')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0082de'));
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-header')).getPropertyValue('border-bottom-width'), 'border-bottom-width').to.equal('0px');
        });
    });

    describe('BD Header Left', () => {
        let $headerLeft = $(`<div class="c-header-left"></div>`);

        before((done) => {
            $testContainer.append($headerLeft);
            done();
        });

        it('should have correct styles', () => {
            expect($headerLeft.css('display'), 'display').to.equal('flex');
            expect($headerLeft.css('align-items'), 'align-items').to.equal('center');
        });
    });

    describe('BD Header Center', () => {
        let $headerCenter = $(`<div class="c-header-center"></div>`);

        before((done) => {
            $testContainer.append($headerCenter);
            done();
        });

        it('should have correct styles', () => {
            expect($headerCenter.css('display'), 'display').to.equal('flex');
            expect($headerCenter.css('flex-grow'), 'flex-grow').to.equal('1');
            expect($headerCenter.css('justify-content'), 'justify-content').to.equal('center');
        });
    });

    describe('BD Header Right', () => {
        let $headerRight = $(`<div class="c-header-right"></div>`);

        before((done) => {
            $testContainer.append($headerRight);
            done();
        });

        it('should have correct styles', () => {
            expect($headerRight.css('display'), 'display').to.equal('flex');
            expect($headerRight.css('align-items'), 'align-items').to.equal('center');
        });
    });

    describe('BD Header Left Item', () => {
        let $headerLeftItem = $(`<div class="c-header-left">
                                            <div class="c-header-item"></div>
                                        </div>`);

        before((done) => {
            $testContainer.append($headerLeftItem);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-header-left .c-header-item')).getPropertyValue('border-right'), 'border-right').to.equal('1px solid rgba(0, 0, 0, 0.06)');
        });
    });

    describe('BD Header Right Item', () => {
        let $headerRightItem = $(`<div class="c-header-right">
                                            <div class="c-header-item"></div>
                                        </div>`);

        before((done) => {
            $testContainer.append($headerRightItem);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-header-right .c-header-item')).getPropertyValue('border-left'), 'border-left').to.equal('1px solid rgba(0, 0, 0, 0.06)');
        });
    });

    describe('BD Header Link', () => {
        let $headerLink = $(`<a href="#" class="c-header-item-link"></a>`);

        before((done) => {
            $testContainer.append($headerLink);
            done();
        });

        it('should have correct styles', () => {
            expect($headerLink.css('display'), 'display').to.equal('flex');
            expect($headerLink.css('align-items'), 'align-items').to.equal('center');
            expect($headerLink.css('height'), 'height').to.equal('50px');
            expect($headerLink.css('padding'), 'padding').to.equal('0px 20px');
            expect($headerLink.css('white-space'), 'white-space').to.equal('nowrap');
            expect($headerLink.css('color'), 'color').to.equal(toRgb('#adb5bd'));
        });
    });

    describe('BD Header Link Image', () => {
        let $headerLinkImage = $(`<a href="#" class="c-header-item-link c-header-logo">
                                            <img src="./img/ipreo-logo.png">
                                        </a>`);

        before((done) => {
            $testContainer.append($headerLinkImage);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-header-logo img')).getPropertyValue('width'), 'width').to.equal('85px');
        });
    });

    describe('BD Header Tabs', () => {
        let $headerTab = $(`<ul class="c-tabs c-header-tabs"></ul>`);

        before((done) => {
            $testContainer.append($headerTab);
            done();
        });

        it('should have correct styles', () => {
            expect($headerTab.css('box-shadow'), 'box-shadow').to.equal(toRgb('#e6edf1') + ' 0px -1px 0px 0px inset');
            expect($headerTab.css('padding-left'), 'padding-left').to.equal('20px');
        });
    });

    describe('BD Header Legacy Tabs', () => {
        let $headerLegacyTab = $(`<div class="c-header-legacy"><ul class="c-tabs c-header-tabs"></ul></div>`);

        before((done) => {
            $testContainer.append($headerLegacyTab);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#324655'));
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs')).getPropertyValue('padding-left'), 'padding-left').to.equal('0px');
        });
    });
})
