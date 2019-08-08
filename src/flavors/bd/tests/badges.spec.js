describe('BD Badges', () => {
    describe('BD Base Badge', () => {
        let $badgeDefault = $('<div class="c-badge">v.1.0.5</div>');
    
        before((done) => {
            $testContainer.append($badgeDefault);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($badgeDefault.css('padding'), 'padding').to.equal('2.75px 4.4px');
            expect($badgeDefault.css('text-align'), 'text-align').to.equal('center');
            expect($badgeDefault.css('vertical-align'), 'vertical-align').to.equal('middle');
            expect($badgeDefault.css('font-size'), 'font-size').to.equal('11px');
            expect($badgeDefault.css('line-height'), 'line-height').to.equal('11px');
            expect($badgeDefault.css('font-weight'), 'font-weight').to.equal('400');   
            expect($badgeDefault.css('background-color'), 'background-color').to.equal(toRgb('#212529'));  
            expect($badgeDefault.css('border-radius'), 'border-radius').to.equal('2px');
        });
    });
    
    describe('BD Base Rounded Badge', () => {
        let $badgeRounded = $('<div class="c-badge c-badge-rounded">v.1.0.5</div>');
    
        before((done) => {
            $testContainer.append($badgeRounded);
            done();
        });

        it('should have correct styles', () => {   
            expect($badgeRounded.css('border-radius'), 'border-radius').to.equal('330px');
            expect($badgeRounded.css('padding-right'), 'padding-right').to.equal('5.5px');
            expect($badgeRounded.css('padding-left'), 'padding-left').to.equal('5.5px');
        });
    });
    
    describe('BD Badge link', () => {
        let $badgeLink = $(`<div class="c-badge">
                                Information
                                <a class="c-badge-link" href="#"><i class="fa fa-close"></i></a>
                            </div>`);
    
        before((done) => {
            $testContainer.append($badgeLink);
            done();
        });

        it('should have correct styles', () => {
            expect($badgeLink.find('a').css('color'), 'color').to.equal(toRgb('#f1f3f5'));
        });
    });
    
    describe('BD Secondary Badge', () => {
        let $badgeSecondary = $('<div class="c-badge c-badge-secondary">Secondary</div>');
    
        before((done) => {
            $testContainer.append($badgeSecondary);
            done();
        });

        it('should have correct styles', () => {   
            expect($badgeSecondary.css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));
            expect($badgeSecondary.css('color'), 'color').to.equal(toRgb('#212529'));
            expect($badgeSecondary.css('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));
        });
    });

    describe('BD Badge sizes', () => {
        let $badgeSizes = {
            'sm': {
                'fontSize': '9px'
            },
            'lg': {
                'fontSize': '18px'
            },
            'xl': {
                'fontSize': '20px'
            }
        };
      
        for (let $size in $badgeSizes) {
            let $badge = $(`<div class="c-badge c-badge-${$size}">${$size} information
                                <a class="c-badge-link" href="#"><i class="fa fa-close"></i></a>
                            </div>`),
                $badgeStyles = $badgeSizes[$size],
                $badgeSize = $size,
                testParameters = [$badge, $badgeStyles, $badgeSize];
      
            before((done) => {
                $testContainer.append($badge);
                done();
            });
      
            testBtnSizes(...testParameters);
        }
      
        function testBtnSizes($badge, $badgeStyles, $badgeSize) {
            it($badgeSize + ' badge should have correct styles', () => {
                expect($badge.css('font-size'), 'font size').to.equal($badgeStyles.fontSize);
            });
        }
    });

    describe('BD Empty Badge', () => {
        let $badgeEmpty = $('<div class="c-badge c-badge-rounded"></div>');
    
        before((done) => {
            $testContainer.append($badgeEmpty);
            done();
        });
    
        it('should have correct styles', () => {   
            expect(window.getComputedStyle(document.querySelector(".c-badge-rounded:empty")).getPropertyValue('border-radius'), 'border-radius').to.equal('100%');
            expect(window.getComputedStyle(document.querySelector(".c-badge-rounded:empty")).getPropertyValue('padding'), 'padding').to.equal('7px');
        });
    });

    describe('BD Empty Badge sizes', () => {
        let $badgeSizes = {
            'sm': {
                'padding': '3px',
                'fontSize': '9px'
            },
            'lg': {
                'padding': '12px',
                'fontSize': '18px'
            }
        };
      
        for (let $size in $badgeSizes) {
            let $badge = $(`<div class="c-badge c-badge-rounded c-badge-${$size}"></div>`),
                $badgeStyles = $badgeSizes[$size],
                $badgeSize = $size,
                testParameters = [$badge, $badgeStyles, $badgeSize];
      
            before((done) => {
                $testContainer.append($badge);
                done();
            });
      
            testBtnSizes(...testParameters);
        }
      
        function testBtnSizes($badge, $badgeStyles, $badgeSize) {
            it($badgeSize + ' badge should have correct styles', () => {
                expect($badge.css('padding'), 'padding').to.equal($badgeStyles.padding);
                expect($badge.css('font-size'), 'font size').to.equal($badgeStyles.fontSize);
            });
        }
    });

    describe('BD Base Badge types', () => {
        let $badgeColors = {
            'primary': toRgb('#0079bd'),
            'success': toRgb('#37b24d'),
            'warning': toRgb('#f08c00'),
            'danger': toRgb('#f03e3e')
        };
      
        for (let $status in $badgeColors) {
            let $badge = $(`<div class="c-badge c-badge-${$status}">${$status}</div>`),
                $badgeColorValue = $badgeColors[$status],
                $badgeStatus = $status,
                testParameters = [$badge, $badgeColorValue, $badgeStatus];
      
            before((done) => {
                $testContainer.append($badge);
                done();
            });
      
            testBadges(...testParameters);
        }
      
        function testBadges($badge, $badgeColorValues, $badgeStatus) {
            it($badgeStatus + ' badge should have correct styles', () => {
                expect($badge.css('background-color'), 'background').to.equal($badgeColorValues);
            });
        }
    });

    describe('BD Empty Badge types', () => {
        let $badgeColors = {
            'primary': toRgb('#0079bd'),
            'success': toRgb('#37b24d'),
            'warning': toRgb('#f08c00'),
            'danger': toRgb('#f03e3e')
        };
      
        for (let $status in $badgeColors) {
            let $badge = $(`<div class="c-badge c-rounded c-badge-${$status}"></div>`),
                $badgeColorValue = $badgeColors[$status],
                $badgeStatus = $status,
                testParameters = [$badge, $badgeColorValue, $badgeStatus];
      
            before((done) => {
                $testContainer.append($badge);
                done();
            });
      
            testBadges(...testParameters);
        }
      
        function testBadges($badge, $badgeColorValues, $badgeStatus) {
            it($badgeStatus + ' badge should have correct styles', () => {
                expect($badge.css('background-color'), 'background').to.equal($badgeColorValues);
            });
        }
    });

    describe('BD Outline Badge types', () => {
        let $badgeOutline = {
            'primary': toRgb('#0079bd'),
            'success': toRgb('#37b24d'),
            'warning': toRgb('#f08c00'),
            'danger': toRgb('#f03e3e')
        };
      
        for (let $status in $badgeOutline) {
            let $badge = $(`<div class="c-badge c-badge-${$status}-outline">${$status} outline</div>`),
                $badgeColorValue = $badgeOutline[$status],
                $badgeStatus = $status,
                testParameters = [$badge, $badgeColorValue, $badgeStatus];
      
            before((done) => {
                $testContainer.append($badge);
                done();
            });
      
            testBadges(...testParameters);
        }
      
        function testBadges($badge, $badgeColorValues, $badgeStatus) {
            it($badgeStatus + ' badge should have correct styles', () => {
                expect($badge.css('color'), 'color').to.equal($badgeColorValues);
                expect($badge.css('border'), 'border').to.equal('1px solid ' + $badgeColorValues);
                expect($badge.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
            });
        }
    });

    describe('BD Empty Badge, aligned to the top', () => {
        let $badgeAlingTop = $('<div class="c-body-text-xl"> Information <span class="c-badge c-badge-rounded c-badge-primary c-badge-top">8</span></div>');
    
        before((done) => {
            $testContainer.append($badgeAlingTop);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($badgeAlingTop.find('.c-badge-top').css('vertical-align'), 'vertical-align').to.equal('top');
        });
    });
})
