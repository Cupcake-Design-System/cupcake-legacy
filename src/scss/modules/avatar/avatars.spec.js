describe('Avatars', () => {
    describe('Base Avatar', () => {
        let $avatarDefault = $('<span class="c-avatar"><img src="https://unsplash.it/200?image=1011"></span>');
    
        before((done) => {
            $testContainer.append($avatarDefault);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($avatarDefault.css('width'), 'width').to.equal('40px');  
            expect($avatarDefault.css('height'), 'height').to.equal('40px');  
            expect($avatarDefault.css('font-size'), 'font-size').to.equal('12px');  
            expect($avatarDefault.css('line-height'), 'line-height').to.equal('40px');
            expect($avatarDefault.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.06) 1px 2px 5px 1px');   
            expect($avatarDefault.css('border-radius'), 'border-radius').to.equal('50%');  
            expect($avatarDefault.css('white-space'), 'white-space').to.equal('nowrap');
            expect($avatarDefault.css('text-align'), 'text-align').to.equal('center');
            expect($avatarDefault.css('vertical-align'), 'vertical-align').to.equal('middle');
            expect($avatarDefault.css('position'), 'position').to.equal('relative');
            expect($avatarDefault.css('display'), 'display').to.equal('inline-block');
            expect($avatarDefault.css('margin'), 'margin').to.equal('0px');
            expect($avatarDefault.css('color'), 'color').to.equal(toRgb('#ffffff'));
        });
    });

    describe('Avatar with image', () => {
        let $avatarImage = $('<span class="c-avatar"><img src="https://unsplash.it/200?image=1011"></span>');
    
        before((done) => {
            $testContainer.append($avatarImage);
            done();
        });
    
        it('should have correct styles', () => {
            expect($avatarImage.find('img').css('border-radius'), 'border-radius').to.equal('50%'); 
        });
    });

    describe('Secondary Avatar', () => {
        let $avatarSecondary = $('<span class="c-avatar c-avatar-secondary" data-text="AB"></span>');
    
        before((done) => {
            $testContainer.append($avatarSecondary);
            done();
        });
    
        it('should have correct styles', () => {
            expect($avatarSecondary.css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5')); 
            expect($avatarSecondary.css('color'), 'color').to.equal(toRgb('#495057')); 
        });
    });

    // c-avatar-primary, c-avatar-success, c-avatar-warning, c-avatar-danger; data-status-primary, data-status-success, data-status-warning, data-status-danger
    describe('Avatar with data-status', () => {
        let $avatarColors = {
            'primary': toRgb('#1b6ec2'),
            'success': toRgb('#2f9e44'),
            'warning': toRgb('#e8590c'),
            'danger': toRgb('#e03131')
        };

        for (let $status in $avatarColors) {
            let $avatar = $(`<span class="c-avatar c-avatar-${$status}" data-text="AB" data-status="${$status}"></span>`),
            $avatarColorValue = $avatarColors[$status],
            $avatarStatus = $status,
            testParameters = [$avatar, $avatarColorValue, $avatarStatus];

        before((done) => {
            $testContainer.append($avatar);
            done();
        });

        testAvatars(...testParameters);
        }

        function testAvatars($avatar, $avatarColorValues, $avatarStatus) {
            it($avatarStatus + ' avatar should have correct styles', () => {
                expect($avatar.css('background-color'), 'background-color').to.equal($avatarColorValues);
                expect(window.getComputedStyle(document.querySelector(`[data-status='${$avatarStatus}']`), ':before').getPropertyValue('background-color'), 'background-color').to.equal($avatarColorValues);

                //data-status
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('content'), 'content').to.equal('""');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('position'), 'position').to.equal('absolute');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('top'), 'top').to.equal('0px');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('right'), 'right').to.equal('0px');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('margin'), 'margin').to.equal('1px');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('width'), 'width').to.equal('8px');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('height'), 'height').to.equal('8px');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('background-clip'), 'background-clip').to.equal('padding-box');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('box-shadow'), 'box-shadow').to.equal(toRgb('#ffffff') + ' 0px 0px 0px 1.6px');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('border-radius'), 'border-radius').to.equal('50px');
                expect(window.getComputedStyle(document.querySelector("[data-status]"), ':before').getPropertyValue('color'), 'color').to.equal(toRgb('#ffffff'));

                //data-text
                expect(window.getComputedStyle(document.querySelector("[data-text]"), ':after').getPropertyValue('position'), 'position').to.equal('absolute');
            });
        }
    });

    // c-avatar sizes sm, lg, xl
    describe('Avatar sizes', () => {
        let $avatarSizes = {
            'sm': {
                'width': '32px',
                'height': '32px',
                'lineHeight': '32px',
                'fontSize': '12.8px'
            },
            'lg': {
                'width': '48px',
                'height': '48px',
                'lineHeight': '48px',
                'fontSize': '16px'
            },
            'xl': {
                'width': '80px',
                'height': '80px',
                'lineHeight': '80px',
                'fontSize': '22.4px'
            },
        };

        for (let $size in $avatarSizes) {
            let $avatar = $(`<span class="c-avatar c-avatar-${$size} c-avatar-success" data-text="EF" data-status="primary"></span>`),
                $avatarStyles = $avatarSizes[$size],
                $avatarSize = $size,
                testParameters = [$avatar, $avatarStyles, $avatarSize];

            before((done) => {
                $testContainer.append($avatar);
                done();
            });

            testAvatarSizes(...testParameters);
            }

            function testAvatarSizes($avatar, $avatarStyles, $avatarSize) {
            it($avatarSize + ' avatar should have correct styles', () => {
                expect($avatar.css('width'), 'width').to.equal($avatarStyles.width);
                expect($avatar.css('height'), 'height').to.equal($avatarStyles.height);
                expect($avatar.css('line-height'), 'line-height').to.equal($avatarStyles.lineHeight);
                expect($avatar.css('font-size'), 'font-size').to.equal($avatarStyles.fontSize);
            });
        }
    });

    // c-avatar data-status::before sizes sm, lg, xl
    describe('Avatar data-status::before sizes', () => {
        let $avatarSizes = {
            'sm': {
                'width': '6px',
                'height': '6px'
            },
            'lg': {
                'width': '10px',
                'height': '10px'
            },
            'xl': {
                'width': '18px',
                'height': '18px'
            },
        };

        for (let $size in $avatarSizes) {
            let $avatar = $(`<span class="c-avatar c-avatar-${$size} c-avatar-success" data-text="GH" data-status="primary""></span>`),
                $avatarStyles = $avatarSizes[$size],
                $avatarSize = $size,
                testParameters = [$avatar, $avatarStyles, $avatarSize];

            before((done) => {
                $testContainer.append($avatar);
                done();
            });

            testAvatarSizes(...testParameters);
            }

            function testAvatarSizes($avatar, $avatarStyles, $avatarSize) {
            it($avatarSize + ' avatar data-status::before should have correct styles', () => {
                expect(window.getComputedStyle(document.querySelector(`.c-avatar-${$avatarSize}[data-status]`), ':before').getPropertyValue('width'), 'width').to.equal($avatarStyles.width);
                expect(window.getComputedStyle(document.querySelector(`.c-avatar-${$avatarSize}[data-status]`), ':before').getPropertyValue('height'), 'height').to.equal($avatarStyles.height);
            });
        }
    });

    // c-avatar icon sizes sm, lg, xl
    describe('Avatar icon sizes', () => {
        let $avatarSizes = {
            'sm': {
                'lineHeight': '32px',
                'fontSize': '16px'
            },
            'lg': {
                'lineHeight': '48px',
                'fontSize': '20px'
            },
            'xl': {
                'lineHeight': '80px',
                'fontSize': '28.8px'
            },
        };

        for (let $size in $avatarSizes) {
            let $avatar = $(`<span class="c-avatar c-avatar-${$size} c-avatar-success"><i class="fa fa-cloud-download"></i></span>`),
                $avatarStyles = $avatarSizes[$size],
                $avatarSize = $size,
                testParameters = [$avatar, $avatarStyles, $avatarSize];

            before((done) => {
                $testContainer.append($avatar);
                done();
            });

            testAvatarSizes(...testParameters);
            }

            function testAvatarSizes($avatar, $avatarStyles, $avatarSize) {
            it($avatarSize + ' avatar icon should have correct styles', () => {
                expect($avatar.find('.fa').css('line-height'), 'line-height').to.equal($avatarStyles.lineHeight);
                expect($avatar.find('.fa').css('font-size'), 'font-size').to.equal($avatarStyles.fontSize);
            });
        }
    });
})
