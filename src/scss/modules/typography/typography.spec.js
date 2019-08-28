describe('Typography', () => {
    describe('Header Sizes ', () => {
        let headerSizes = {
            'xs': {
                'fontSize': '18px',
                'lineHeight': '25px',
                'fontWeight': '700'
            },
            'sm': {
                'fontSize': '20px',
                'lineHeight': '30px',
                'fontWeight': '700'
            },
            'md': {
                'fontSize': '24px',
                'lineHeight': '35px',
                'fontWeight': '700'
            },
            'lg': {
                'fontSize': '36px',
                'lineHeight': '45px',
                'fontWeight': '700'
            },
            'xl': {
                'fontSize': '48px',
                'lineHeight': '60px',
                'fontWeight': '700'
            },
            'xxl': {
                'fontSize': '64px',
                'lineHeight': '75px',
                'fontWeight': '700'
            }
        };

        for (let size in headerSizes) {
            let $header = $(`<div class="c-header-${size}">c-header-${size}</div>`),
                headerStyles = headerSizes[size];

            before((done) => {
                $testContainer.append($header);
                done();
            });
            it(`${size} header should have correct styles`, () => {
                expect($header.css('font-size'), 'font size').to.equal(headerStyles.fontSize);
                expect($header.css('line-height'), 'line-height').to.equal(headerStyles.lineHeight);
                expect($header.css('color'), 'color').to.equal(toRgb('#495057'));
                expect($header.css('font-weight'), 'font-weight').to.equal(headerStyles.fontWeight);
                expect($header.css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
            });
        }
    });

    describe('Body Text Sizes ', () => {
        let bodyTextSizes = {
            'xs': {
                'fontSize': '10px',
                'lineHeight': '15px'
            },
            'sm': {
                'fontSize': '12px',
                'lineHeight': '15px'
            },
            'md': {
                'fontSize': '14px',
                'lineHeight': '20px'
            },
            'lg': {
                'fontSize': '18px',
                'lineHeight': '25px'
            },
            'xl': {
                'fontSize': '20px',
                'lineHeight': '25px'
            },
            'xxl': {
                'fontSize': '34px',
                'lineHeight': '40px'
            }
        };

        for (let size in bodyTextSizes) {
            let $bodyText = $(`<div class="c-body-text-${size}">c-body-text-${size}</div>`),
                bodyTextStyles = bodyTextSizes[size];

            before((done) => {
                $testContainer.append($bodyText);
                done();
            });

            it(`${size} body-text should have correct styles`, () => {
                expect($bodyText.css('font-size'), 'font size').to.equal(bodyTextStyles.fontSize);
                expect($bodyText.css('line-height'), 'line-height').to.equal(bodyTextStyles.lineHeight);
                expect($bodyText.css('color'), 'color').to.equal(toRgb('#495057'));
                expect($bodyText.css('font-weight'), 'font-weight').to.equal('400');
                expect($bodyText.css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
            });
        }
    });

    describe('Primary, Success, Warning, Danger Text', () => {
        let textColors = {
            'primary': toRgb('#1b6ec2'),
            'success': toRgb('#2f9e44'),
            'warning': toRgb('#e8590c'),
            'danger': toRgb('#e03131')
        };

        for (let status in textColors) {
            let $text = $(`<div class="c-body-text c-text-${status}">${status}-color text</div>`),
                textColorValue = textColors[status];

            before((done) => {
                $testContainer.append($text);
                done();
            });

            it(`${status} text should have correct styles`, () => {
                expect($text.css('color'), 'color').to.equal(textColorValue);
            });
        }
    });

    describe('Left, Center, Right, Justify Text', () => {

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

    describe('lowercase, uppercase, capitalize Text', () => {

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

    describe('Ordered List', () => {
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
            expect($OList.css('font-size'), 'font-size').to.equal('12px');
            expect($OList.css('color'), 'color').to.equal(toRgb('#495057'));
            expect($OList.css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
        });
    });

    describe('Unordered List', () => {
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
            expect($UList.css('font-size'), 'font-size').to.equal('12px');
            expect($UList.css('color'), 'color').to.equal(toRgb('#495057'));
            expect($UList.css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
        });
    });

    describe('Description  List', () => {
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
            expect($DList.css('font-size'), 'font-size').to.equal('12px');
            expect($DList.css('line-height'), 'line-height').to.equal('15px');
            expect($DList.css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
            expect($DList.css('color'), 'color').to.equal(toRgb('#495057'));
            expect($DList.css('margin'), 'margin').to.equal('12px 0px 12px 20px');
        });
    });
})
