describe('BD Typography', () => {
    describe('BD Body Text XXL', () => {
        let $bodyTextXXL = $(`<div class="c-body-text-xxl">Text</div>`);

        before((done) => {
            $testContainer.append($bodyTextXXL);
            done();
        });

        it('should have correct styles', () => {
            expect($bodyTextXXL.css('font-size'), 'font-size').to.equal('30px');
            expect($bodyTextXXL.css('line-height'), 'line-height').to.equal('35px');
            expect($bodyTextXXL.css('font-weight'), 'font-weight').to.equal('400');
            expect($bodyTextXXL.css('font-style'), 'font-style').to.equal('normal');
            expect($bodyTextXXL.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($bodyTextXXL.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Body Text XL', () => {
        let $bodyTextXL = $(`<div class="c-body-text-xl">Text</div>`);

        before((done) => {
            $testContainer.append($bodyTextXL);
            done();
        });

        it('should have correct styles', () => {
            expect($bodyTextXL.css('font-size'), 'font-size').to.equal('24px');
            expect($bodyTextXL.css('line-height'), 'line-height').to.equal('35px');
            expect($bodyTextXL.css('font-weight'), 'font-weight').to.equal('400');
            expect($bodyTextXL.css('font-style'), 'font-style').to.equal('normal');
            expect($bodyTextXL.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($bodyTextXL.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Body Text LG', () => {
        let $bodyTextLG = $(`<div class="c-body-text-lg">Text</div>`);

        before((done) => {
            $testContainer.append($bodyTextLG);
            done();
        });

        it('should have correct styles', () => {
            expect($bodyTextLG.css('font-size'), 'font-size').to.equal('18px');
            expect($bodyTextLG.css('line-height'), 'line-height').to.equal('25px');
            expect($bodyTextLG.css('font-weight'), 'font-weight').to.equal('400');
            expect($bodyTextLG.css('font-style'), 'font-style').to.equal('normal');
            expect($bodyTextLG.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($bodyTextLG.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Body Text MD', () => {
        let $bodyTextMD = $(`<div class="c-body-text-md">Text</div>`);

        before((done) => {
            $testContainer.append($bodyTextMD);
            done();
        });

        it('should have correct styles', () => {
            expect($bodyTextMD.css('font-size'), 'font-size').to.equal('14px');
            expect($bodyTextMD.css('line-height'), 'line-height').to.equal('20px');
            expect($bodyTextMD.css('font-weight'), 'font-weight').to.equal('400');
            expect($bodyTextMD.css('font-style'), 'font-style').to.equal('normal');
            expect($bodyTextMD.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($bodyTextMD.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Body Text', () => {
        let $bodyText = $(`<div class="c-body-text">Text</div>`);

        before((done) => {
            $testContainer.append($bodyText);
            done();
        });

        it('should have correct styles', () => {
            expect($bodyText.css('font-size'), 'font-size').to.equal('14px');
            expect($bodyText.css('line-height'), 'line-height').to.equal('20px');
            expect($bodyText.css('font-weight'), 'font-weight').to.equal('400');
            expect($bodyText.css('font-style'), 'font-style').to.equal('normal');
            expect($bodyText.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($bodyText.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });

        it('Primary should have correct styles', () => {
            $bodyText.addClass('c-text-primary');
            expect($bodyText.css('color'), 'color').to.equal(toRgb('#0079bd'));
        });

        it('Success should have correct styles', () => {
            $bodyText.addClass('c-text-success');
            expect($bodyText.css('color'), 'color').to.equal(toRgb('#37b24d'));
        });

        it('Warning should have correct styles', () => {
            $bodyText.addClass('c-text-warning');
            expect($bodyText.css('color'), 'color').to.equal(toRgb('#f08c00'));
        });

        it('Danger should have correct styles', () => {
            $bodyText.addClass('c-text-danger');
            expect($bodyText.css('color'), 'color').to.equal(toRgb('#f03e3e'));
        });

        it('Left should have correct styles', () => {
            $bodyText.addClass('c-text-left');
            expect($bodyText.css('text-align'), 'text-align').to.equal('left');
        });

        it('Center should have correct styles', () => {
            $bodyText.addClass('c-text-center');
            expect($bodyText.css('text-align'), 'text-align').to.equal('center');
        });

        it('Right should have correct styles', () => {
            $bodyText.removeClass('c-text-center');
            $bodyText.addClass('c-text-right');
            expect($bodyText.css('text-align'), 'text-align').to.equal('right');
        });

        it('Italic should have correct styles', () => {
            $bodyText.addClass('c-text-italic');
            expect($bodyText.css('font-style'), 'font-style').to.equal('italic');
        });

        it('Bold should have correct styles', () => {
            $bodyText.addClass('c-text-bold');
            expect($bodyText.css('font-weight'), 'font-weight').to.equal('600');
        });
    });

    describe('BD Body Text SM', () => {
        let $bodyTextSM = $(`<div class="c-body-text-sm">Text</div>`);

        before((done) => {
            $testContainer.append($bodyTextSM);
            done();
        });

        it('should have correct styles', () => {
            expect($bodyTextSM.css('font-size'), 'font-size').to.equal('13px');
            expect($bodyTextSM.css('line-height'), 'line-height').to.equal('15px');
            expect($bodyTextSM.css('font-weight'), 'font-weight').to.equal('400');
            expect($bodyTextSM.css('font-style'), 'font-style').to.equal('normal');
            expect($bodyTextSM.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($bodyTextSM.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Body Text XS', () => {
        let $bodyTextXS = $(`<div class="c-body-text-xs">Text</div>`);

        before((done) => {
            $testContainer.append($bodyTextXS);
            done();
        });

        it('should have correct styles', () => {
            expect($bodyTextXS.css('font-size'), 'font-size').to.equal('12px');
            expect($bodyTextXS.css('line-height'), 'line-height').to.equal('15px');
            expect($bodyTextXS.css('font-weight'), 'font-weight').to.equal('400');
            expect($bodyTextXS.css('font-style'), 'font-style').to.equal('normal');
            expect($bodyTextXS.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($bodyTextXS.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Header XXL', () => {
        let $headerXXL = $(`<div class="c-header-xxl">Text</div>`);

        before((done) => {
            $testContainer.append($headerXXL);
            done();
        });

        it('should have correct styles', () => {
            expect($headerXXL.css('font-size'), 'font-size').to.equal('30px');
            expect($headerXXL.css('line-height'), 'line-height').to.equal('35px');
            expect($headerXXL.css('font-weight'), 'font-weight').to.equal('400');
            expect($headerXXL.css('font-style'), 'font-style').to.equal('normal');
            expect($headerXXL.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Header XL', () => {
        let $headerXL = $(`<div class="c-header-xl">Text</div>`);

        before((done) => {
            $testContainer.append($headerXL);
            done();
        });

        it('should have correct styles', () => {
            expect($headerXL.css('font-size'), 'font-size').to.equal('22px');
            expect($headerXL.css('line-height'), 'line-height').to.equal('35px');
            expect($headerXL.css('font-weight'), 'font-weight').to.equal('400');
            expect($headerXL.css('font-style'), 'font-style').to.equal('normal');
            expect($headerXL.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Header LG', () => {
        let $headerLG = $(`<div class="c-header-lg">Text</div>`);

        before((done) => {
            $testContainer.append($headerLG);
            done();
        });

        it('should have correct styles', () => {
            expect($headerLG.css('font-size'), 'font-size').to.equal('18px');
            expect($headerLG.css('line-height'), 'line-height').to.equal('25px');
            expect($headerLG.css('font-weight'), 'font-weight').to.equal('600');
            expect($headerLG.css('font-style'), 'font-style').to.equal('normal');
            expect($headerLG.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Header MD', () => {
        let $headerMD = $(`<div class="c-header-md">Text</div>`);

        before((done) => {
            $testContainer.append($headerMD);
            done();
        });

        it('should have correct styles', () => {
            expect($headerMD.css('font-size'), 'font-size').to.equal('15px');
            expect($headerMD.css('line-height'), 'line-height').to.equal('20px');
            expect($headerMD.css('font-weight'), 'font-weight').to.equal('600');
            expect($headerMD.css('font-style'), 'font-style').to.equal('normal');
            expect($headerMD.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Header SM', () => {
        let $headerSM = $(`<div class="c-header-sm">Text</div>`);

        before((done) => {
            $testContainer.append($headerSM);
            done();
        });

        it('should have correct styles', () => {
            expect($headerSM.css('font-size'), 'font-size').to.equal('14px');
            expect($headerSM.css('line-height'), 'line-height').to.equal('20px');
            expect($headerSM.css('font-weight'), 'font-weight').to.equal('600');
            expect($headerSM.css('font-style'), 'font-style').to.equal('normal');
            expect($headerSM.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Header XS', () => {
        let $headerXS = $(`<div class="c-header-xs">Text</div>`);

        before((done) => {
            $testContainer.append($headerXS);
            done();
        });

        it('should have correct styles', () => {
            expect($headerXS.css('font-size'), 'font-size').to.equal('12px');
            expect($headerXS.css('line-height'), 'line-height').to.equal('20px');
            expect($headerXS.css('font-weight'), 'font-weight').to.equal('600');
            expect($headerXS.css('font-style'), 'font-style').to.equal('normal');
            expect($headerXS.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
        });
    });

    describe('BD Ordered List', () => {
        let $OList = $(`<ol class="c-ol"><li>Text</li></ol>`);

        before((done) => {
            $testContainer.append($OList);
            done();
        });

        it('should have correct styles', () => {
            expect($OList.css('font-size'), 'font-size').to.equal('14px');
            expect($OList.css('line-height'), 'line-height').to.equal('20px');
            expect($OList.css('font-weight'), 'font-weight').to.equal('400');
            expect($OList.css('font-style'), 'font-style').to.equal('normal');
            expect($OList.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
            expect($OList.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($OList.css('margin'), 'margin').to.equal('0px 0px 16px');
            expect($OList.css('padding'), 'padding').to.equal('0px');
            expect($OList.css('list-style-position'), 'list-style-position').to.equal('outside');
            expect($OList.find('li').css('margin-left'), 'margin-left').to.equal('20px');
        });
    });

    describe('BD Unordered List', () => {
        let $UList = $(`<ul class="c-ul"><li>Text</li></ul>`);

        before((done) => {
            $testContainer.append($UList);
            done();
        });

        it('should have correct styles', () => {
            expect($UList.css('font-size'), 'font-size').to.equal('14px');
            expect($UList.css('line-height'), 'line-height').to.equal('20px');
            expect($UList.css('font-weight'), 'font-weight').to.equal('400');
            expect($UList.css('font-style'), 'font-style').to.equal('normal');
            expect($UList.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
            expect($UList.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($UList.css('margin'), 'margin').to.equal('0px 0px 16px');
            expect($UList.css('padding'), 'padding').to.equal('0px');
            expect($UList.css('list-style-position'), 'list-style-position').to.equal('outside');
            expect($UList.find('li').css('margin-left'), 'margin-left').to.equal('20px');
            expect($UList.css('list-style-type'), 'list-style-type').to.equal('disc');
        });
    });

    describe('BD Description  List', () => {
        let $DList = $(`<ul class="c-ol"><li>Text</li></ul>`);

        before((done) => {
            $testContainer.append($DList);
            done();
        });

        it('should have correct styles', () => {
            expect($DList.css('font-size'), 'font-size').to.equal('14px');
            expect($DList.css('line-height'), 'line-height').to.equal('20px');
            expect($DList.css('font-weight'), 'font-weight').to.equal('400');
            expect($DList.css('font-style'), 'font-style').to.equal('normal');
            expect($DList.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
            expect($DList.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($DList.css('margin'), 'margin').to.equal('14px 0px 14px 20px');
            expect($DList.css('padding'), 'padding').to.equal('0px 0px 0px 40px');
            expect($DList.css('list-style-position'), 'list-style-position').to.equal('outside');
        });
    });
})
