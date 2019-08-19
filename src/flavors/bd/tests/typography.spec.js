describe('BD Typography', () => {

    // c-header sizes xs, sm, md, lg, xl, xxl
    describe('BD Header Sizes ', () => {
        let $headerSizes = {
            'xs': {
                'lineHeight': '20px',
                'fontSize': '12px',
                'fontWeight': '600'
            },
            'sm': {
                'lineHeight': '20px',
                'fontSize': '14px',
                'fontWeight': '600'
            },
            'md': {
                'lineHeight': '20px',
                'fontSize': '15px',
                'fontWeight': '600'
            },
            'lg': {
                'lineHeight': '25px',
                'fontSize': '18px',
                'fontWeight': '600'
            },
            'xl': {
                'lineHeight': '35px',
                'fontSize': '22px',
                'fontWeight': '400'
            },
            'xxl': {
                'lineHeight': '35px',
                'fontSize': '30px',
                'fontWeight': '400'
            }
        };

        for (let $size in $headerSizes) {
            let $header = $(`<div class="c-header-${$size}">c-header-${$size}</div>`),
                $headerStyles = $headerSizes[$size],
                $headerSize = $size,
                testParameters = [$header, $headerStyles, $headerSize];

            before((done) => {
                $testContainer.append($header);
                done();
            });

            testHeaderSizes(...testParameters);
        }

        function testHeaderSizes($header, $headerStyles, $headerSize) {
            it($headerSize + ' header should have correct styles', () => {
                expect($header.css('font-size'), 'font size').to.equal($headerStyles.fontSize);
                expect($header.css('line-height'), 'line-height').to.equal($headerStyles.lineHeight);
                expect($header.css('font-style'), 'font-style').to.equal('normal');
                expect($header.css('color'), 'color').to.equal(toRgb('#414152'));
                expect($header.css('font-weight'), 'font-weight').to.equal($headerStyles.fontWeight);
                expect($header.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
            });
        }
    });

    // c-body-text sizes xs, sm, md, lg, xl, xxl
    describe('BD Body Text Sizes ', () => {
        let $bodyTextSizes = {
            'xs': {
                'lineHeight': '15px',
                'fontSize': '12px'
            },
            'sm': {
                'lineHeight': '15px',
                'fontSize': '13px'
            },
            'md': {
                'lineHeight': '20px',
                'fontSize': '14px'
            },
            'lg': {
                'lineHeight': '25px',
                'fontSize': '18px'
            },
            'xl': {
                'lineHeight': '35px',
                'fontSize': '24px'
            },
            'xxl': {
                'lineHeight': '35px',
                'fontSize': '30px'
            }
        };

        for (let $size in $bodyTextSizes) {
            let $bodyText = $(`<div class="c-body-text-${$size}">c-body-text-${$size}</div>`),
                $bodyTextStyles = $bodyTextSizes[$size],
                $bodyTextSize = $size,
                testParameters = [$bodyText, $bodyTextStyles, $bodyTextSize];

            before((done) => {
                $testContainer.append($bodyText);
                done();
            });

            testbodyTextSizes(...testParameters);
        }

        function testbodyTextSizes($bodyText, $bodyTextStyles, $bodyTextSize) {
            it($bodyTextSize + ' body-text should have correct styles', () => {
                expect($bodyText.css('font-size'), 'font size').to.equal($bodyTextStyles.fontSize);
                expect($bodyText.css('line-height'), 'line-height').to.equal($bodyTextStyles.lineHeight);
                expect($bodyText.css('font-style'), 'font-style').to.equal('normal');
                expect($bodyText.css('color'), 'color').to.equal(toRgb('#414152'));
                expect($bodyText.css('font-weight'), 'font-weight').to.equal('400');
                expect($bodyText.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
            });
        }
    });

    // c-text-primary, c-text-success, c-text-warning, c-text-danger
    describe('BD Primary, Success, Warning, Danger Text', () => {

        let $textColors = {
            'primary': toRgb('#0079bd'),
            'success': toRgb('#37b24d'),
            'warning': toRgb('#f08c00'),
            'danger': toRgb('#f03e3e')
        };

        for (let $status in $textColors) {
            let $text = $(`<div class="c-body-text c-text-${$status}">${$status}-color text</div>`),
                $textColorValue = $textColors[$status],
                $textStatus = $status,
                testParameters = [$text, $textColorValue, $textStatus];

            before((done) => {
                $testContainer.append($text);
                done();
            });

            testText(...testParameters);
        }

        function testText($text, $textColorValues, $textStatus) {
            it($textStatus + ' text should have correct styles', () => {
                expect($text.css('color'), 'color').to.equal($textColorValues);
            });
        }
    });

    // c-text-left, c-text-center, c-text-right, c-text-justify
    describe('BD Left, Center, Right, Justify Text', () => {

        let $textAligns = {
            'left': 'left',
            'center': 'center',
            'right': 'right',
            'justify': 'justify'
        };

        for (let $status in $textAligns) {
            let $text = $(`<div class="c-body-text c-text-${$status}">${$status} aligned text</div>`),
                $textAlignValue = $textAligns[$status],
                $textStatus = $status,
                testParameters = [$text, $textAlignValue, $textStatus];

            before((done) => {
                $testContainer.append($text);
                done();
            });

            testText(...testParameters);
        }

        function testText($text, $textAlignValues, $textStatus) {
            it($textStatus + ' text should have correct styles', () => {
                expect($text.css('text-align'), 'text-align').to.equal($textAlignValues);
            });
        }
    });

    // c-text-lowercase, c-text-uppercase, c-text-capitalize
    describe('BD lowercase, uppercase, capitalize Text', () => {

        let $textTransforms = {
            'lowercase': 'lowercase',
            'uppercase': 'uppercase',
            'capitalize': 'capitalize'
        };

        for (let $status in $textTransforms) {
            let $text = $(`<div class="c-body-text c-text-${$status}">c-text-${$status}</div>`),
                $textTransformValue = $textTransforms[$status],
                $textStatus = $status,
                testParameters = [$text, $textTransformValue, $textStatus];

            before((done) => {
                $testContainer.append($text);
                done();
            });

            testText(...testParameters);
        }

        function testText($text, $textTransformValues, $textStatus) {
            it($textStatus + ' text should have correct styles', () => {
                expect($text.css('text-transform'), 'text-transform').to.equal($textTransformValues);
            });
        }
    });

    describe('BD Shadow Text', () => {
        let $text = $(`<div class="c-body-text c-text-shadow">c-text-shadow</div>`);

        before((done) => {
            $testContainer.append($text);
            done();
        });

        it('should have correct styles', () => {
            expect($text.css('text-shadow'), 'text-shadow').to.equal('rgba(0, 0, 0, 0.1) 0px 1px 0px');
        });
    });

    describe('BD Ellipsis Text', () => {
        let $text = $(`<div class="c-body-text c-text-ellipsis">c-text-ellipsis: lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse, sdfdsfewr
                            corporis cupiditate atque enim repellat distinctio expedita ex id dignissimos itaque assumenda modi. Saepe iure harum veritatis perferendis 
                            suscipit incidunt.Neque asdfdsf
                        </div>`);

        before((done) => {
            $testContainer.append($text);
            done();
        });

        it('should have correct styles', () => {
            expect($text.css('white-space'), 'white-space').to.equal('nowrap');
            expect($text.css('overflow'), 'overflow').to.equal('hidden');
            expect($text.css('text-overflow'), 'text-overflow').to.equal('ellipsis');
        });
    });

    describe('BD Nowrap Text', () => {
        let $text = $(`<div class="c-body-text c-text-nowrap">c-text-nowrap</div>`);

        before((done) => {
            $testContainer.append($text);
            done();
        });

        it('should have correct styles', () => {
            expect($text.css('white-space'), 'white-space').to.equal('nowrap');
        });
    });

    describe('BD Italic Text', () => {
        let $text = $(`<div class="c-body-text c-text-italic">c-text-italic</div>`);

        before((done) => {
            $testContainer.append($text);
            done();
        });

        it('should have correct styles', () => {
            expect($text.css('font-style'), 'font-style').to.equal('italic');
        });
    });

    describe('BD Bold Text', () => {
        let $text = $(`<div class="c-body-text c-text-bold">c-text-bold</div>`);

        before((done) => {
            $testContainer.append($text);
            done();
        });

        it('should have correct styles', () => {
            $text.addClass('c-text-bold');
            expect($text.css('font-weight'), 'font-weight').to.equal('600');
        });
    });

    describe('BD Ordered List', () => {
        let $OList = $(`<ol class="c-ol">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ol>`);

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
        let $UList = $(`<ul class="c-ul">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>`);

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
            expect($UList.find('li').css('list-style-type'), 'list-style-type').to.equal('disc');
        });
    });

    describe('BD Description  List', () => {
        let $DList = $(`<ul class="c-ol">
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>`);

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
