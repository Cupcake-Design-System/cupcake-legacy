describe('Card', () => {
    describe('Base Card ', () => {
        let $card = $(`<div class="c-card">
                            <header class="c-card-header">
                                <div class="c-card-header-title">Component</div>
                                <div class="c-card-header-menu">
                                    <a class="c-btn c-btn-box c-btn-secondary" href="#">
                                        <i class="fa fa-cog" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </header>
                            <div class="c-card-content">
                                <div class="c-card-content-title">Lorem ipsum dolor sit amet consecteur.</div>
                                <div class="c-card-content-subtitle">Lorem ipsum dolor sit amet consectetur.</div>
                                <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros.
                                Praesent fringilla, enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. 
                            </div>
                            <div class="c-card-footer">Footer if needed</div>
                        </div>`);
    
        describe('Card wrapper', () => {
            before((done) => {
                $testContainer.append($card);
                done();
            });
        
            it('should have correct styles', () => {
                expect($card.css('border'), 'border').to.equal(`1px solid ${toRgb('#e9ecef')}`);
                expect($card.css('border-radius'), 'border-radius').to.equal('2px');
                expect($card.css('color'), 'color').to.equal(toRgb('#495057'));
                expect($card.css('box-shadow'), 'box-shadow').to.equal('rgba(33, 37, 41, 0.05) 0px 2px 4px 0px');
                expect($card.css('transition'), 'transition').to.equal('none 0s ease 0s');
            });
        });

        describe('Card Header', () => {
            before((done) => {
                $testContainer.append($card);
                done();
            });
            
            it('should have correct styles', () => {
                expect($card.find('.c-card-header').css('display'), 'display').to.equal('flex');
                expect($card.find('.c-card-header').css('align-items'), 'align-items').to.equal('stretch');
                expect($card.find('.c-card-header').css('border-bottom'), 'border-bottom').to.equal('1px solid rgba(177, 177, 177, 0.15)');
                expect($card.find('.c-card-header').css('border-radius'), 'border-radius').to.equal('2px 2px 0px 0px');
            });

            describe('Card Header Title', () => {
                before((done) => {
                    $testContainer.append($card);
                    done();
                });
            
                it('should have correct styles', () => {
                    expect($card.find('.c-card-header-title').css('font-weight'), 'font-weight').to.equal('700');
                });
            });

            describe('Card Header Menu', () => {
                before((done) => {
                    $testContainer.append($card);
                    done();
                });
            
                it('should have correct styles', () => {
                    expect($card.find('.c-card-header-menu').css('font-size'), 'font-size').to.equal('12px');
                });
            });
        });

        describe('Card Content', () => {
            before((done) => {
                $testContainer.append($card);
                done();
            });

            describe('Card Content Title', () => {
                before((done) => {
                    $testContainer.append($card);
                    done();
                });
                
                it('should have correct styles', () => {
                    expect($card.find('.c-card-content-title').css('font-size'), 'font-size').to.equal('18px');           
                    expect($card.find('.c-card-content-title').css('font-weight'), 'font-weight').to.equal('700');
                });
            });

            describe('Card Content Body', () => {
                before((done) => {
                    $testContainer.append($card);
                    done();
                });
                
                it('should have correct styles', () => {
                    expect($card.find('.c-card-content-body').css('font-size'), 'font-size').to.equal('12px');
                });
            });
        });
    
        describe('Card Footer', () => {
            before((done) => {
                $testContainer.append($card);
                done();
            });
            
            it('should have correct styles', () => {
                expect($card.find('.c-card-footer').css('border-top'), 'border-top').to.equal(`1px solid ${toRgb('#e9ecef')}`);
                expect($card.find('.c-card-footer').css('border-radius'), 'border-radius').to.equal('0px 0px 2px 2px');
            });
        });
    });

    describe('Card Types', () => {
        let $wrapper = $(`<div class="c-card-group-collapsed"></div>`),
            cardTypes = {
            'primary': {
                'background-color': toRgb('#1b6ec2'),
                'color': toRgb('#ffffff')
            },
            'secondary': {
                'background-color': toRgb('#f1f3f5'),
                'color': toRgb('#495057')
            },
            'success': {
                'background-color': toRgb('#2f9e44'),
                'color': toRgb('#ffffff')
            },
            'danger': {
                'background-color': toRgb('#e03131'),
                'color': toRgb('#ffffff')
            },
        };

        for (let type in cardTypes) {
            let styles = cardTypes[type],
                $card = $(`<div class="c-card c-card-${type}">
                                <div class="c-card-content">
                                    <div class="c-card-content-body">I'm a large amount of text. <strong>But all cards are the same height.</strong><br><br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros.
                                </div>
                            </div>`);

            before((done) => {
                $wrapper.append($card)
                $testContainer.append($wrapper);
                done();
            });
            
            it(`${type} should have correct styles`, () => {
                expect($card.css('background-color'), 'background-color').to.equal(styles['background-color']);
                expect($card.css('color'), 'color').to.equal(styles['color']);
            });
        }
    });
})
