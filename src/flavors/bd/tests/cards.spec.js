describe.only('BD Card', () => {
    describe('BD Base Card ', () => {
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
    
        describe('BD Card wrapper', () => {
            before((done) => {
                $testContainer.append($card);
                done();
            });
        
            it('should have correct styles', () => {
                expect($card.css('border-style'), 'border-style').to.equal('none');
                expect($card.css('border-radius'), 'border-radius').to.equal('1px');
                expect($card.css('color'), 'color').to.equal(toRgb('#414152'));
                expect($card.css('box-shadow'), 'box-shadow').to.equal('rgba(65, 65, 81, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0.14) 0px 1px 2px 0px');
                expect($card.css('transition'), 'transition').to.equal('box-shadow 0.15s ease-in 0s, -webkit-box-shadow 0.15s ease-in 0s');
                expect($card.css('position'), 'position').to.equal('relative');
                expect($card.css('display'), 'display').to.equal('flex');
                expect($card.css('flex-direction'), 'flex-direction').to.equal('column');
                expect($card.css('min-width'), 'min-width').to.equal('0px');
                expect($card.css('word-wrap'), 'word-wrap').to.equal('break-word');
                expect($card.css('background-clip'), 'background-clip').to.equal('border-box');
            });
        });

        describe('BD Card Header', () => {
            before((done) => {
                $testContainer.append($card);
                done();
            });
            
            it('should have correct styles', () => {
                expect($card.find('.c-card-header').css('display'), 'display').to.equal('flex');
                expect($card.find('.c-card-header').css('align-items'), 'align-items').to.equal('stretch');
                expect($card.find('.c-card-header').css('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e6e6e6'));
                expect($card.find('.c-card-header').css('border-radius'), 'border-radius').to.equal('1px 1px 0px 0px');
            });

            describe('BD Card Header Title', () => {
                before((done) => {
                    $testContainer.append($card);
                    done();
                });
            
                it('should have correct styles', () => {
                    expect($card.find('.c-card-header-title').css('display'), 'display').to.equal('flex');
                    expect($card.find('.c-card-header-title').css('align-items'), 'align-items').to.equal('center');
                    expect($card.find('.c-card-header-title').css('flex-grow'), 'flex-grow').to.equal('1');
                    expect($card.find('.c-card-header-title').css('padding'), 'padding').to.equal('10px 15px');
                    expect($card.find('.c-card-header-title').css('font-weight'), 'font-weight').to.equal('600');
                });
            });

            describe('BD Card Header Menu', () => {
                before((done) => {
                    $testContainer.append($card);
                    done();
                });
            
                it('should have correct styles', () => {
                    expect($card.find('.c-card-header-menu').css('display'), 'display').to.equal('flex');
                    expect($card.find('.c-card-header-menu').css('align-items'), 'align-items').to.equal('center');
                    expect($card.find('.c-card-header-menu').css('justify-content'), 'justify-content').to.equal('center');
                    expect($card.find('.c-card-header-menu').css('padding'), 'padding').to.equal('10px 15px');
                    expect($card.find('.c-card-header-menu').css('font-size'), 'font-size').to.equal('14px');
                    expect($card.find('.c-card-header-menu').css('cursor'), 'cursor').to.equal('pointer');
                });
            });
        });

        describe('BD Card Content', () => {
            before((done) => {
                $testContainer.append($card);
                done();
            });
            
            it('should have correct styles', () => {
                expect($card.find('.c-card-content').css('flex'), 'flex').to.equal('1 1 auto');
                expect($card.find('.c-card-content').css('padding'), 'padding').to.equal('10px 15px');
                expect($card.find('.c-card-content').css('font-weight'), 'font-weight').to.equal('400');
            });

            describe('BD Card Content Title', () => {
                before((done) => {
                    $testContainer.append($card);
                    done();
                });
                
                it('should have correct styles', () => {
                    expect($card.find('.c-card-content-title').css('margin'), 'margin').to.equal('0px 0px 11px');
                    expect($card.find('.c-card-content-title').css('font-size'), 'font-size').to.equal('14px');           
                    expect($card.find('.c-card-content-title').css('font-weight'), 'font-weight').to.equal('600');
                    expect($card.find('.c-card-content-title').css('line-height'), 'line-height').to.equal('14px');
                });
            });

            describe('BD Card Content Subtitle', () => {
                before((done) => {
                    $testContainer.append($card);
                    done();
                });
                
                it('should have correct styles', () => {
                    expect($card.find('.c-card-content-subtitle').css('margin'), 'margin').to.equal('0px 0px 11px');
                    expect($card.find('.c-card-content-subtitle').css('font-size'), 'font-size').to.equal('16px');
                });
            });

            describe('BD Card Content Body', () => {
                before((done) => {
                    $testContainer.append($card);
                    done();
                });
                
                it('should have correct styles', () => {
                    expect($card.find('.c-card-content-body').css('font-size'), 'font-size').to.equal('14px');
                });
            });
        });
    
        describe('BD Card Footer', () => {
            before((done) => {
                $testContainer.append($card);
                done();
            });
            
            it('should have correct styles', () => {
                expect($card.find('.c-card-footer').css('padding'), 'padding').to.equal('10px 15px');
                expect($card.find('.c-card-footer').css('border-top-style'), 'border-top-style').to.equal('none');
                expect($card.find('.c-card-footer').css('border-radius'), 'border-radius').to.equal('0px 0px 1px 1px');
            });
        });
    });

    describe('BD Card Group', () => {
        let $cardGroup = $(`<div class="c-card-group">
                                <div class="c-card">
                                    <div class="c-card-content">
                                        <div class="c-card-content-title">Lorem ipsum dolor sit amet consecteur.</div>
                                        <div class="c-card-content-subtitle">Lorem ipsum dolor sit amet consectetur.</div>
                                        <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
                                        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna.</div>
                                    </div>
                                    <div class="c-card-footer">Footer if needed</div>
                                </div>
                                <div class="c-card">
                                    <div class="c-card-content">
                                        <div class="c-card-content-title">Lorem ipsum dolor sit amet consecteur.</div>
                                        <div class="c-card-content-subtitle">Lorem ipsum dolor sit amet consectetur.</div>
                                        <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
                                        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna.</div>
                                    </div>
                                    <div class="c-card-footer">Footer if needed</div>
                                </div>
                                <div class="c-card">
                                    <div class="c-card-content">
                                        <div class="c-card-content-title">Lorem ipsum dolor sit amet consecteur.</div>
                                        <div class="c-card-content-subtitle">Lorem ipsum dolor sit amet consectetur.</div>
                                        <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
                                        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna.</div>
                                    </div>
                                    <div class="c-card-footer">Footer if needed</div>
                                </div>
                            </div>`);
    
        before((done) => {
            $testContainer.append($cardGroup);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardGroup.css('display'), 'display').to.equal('flex');
            expect($cardGroup.css('flex-flow'), 'flex-flow').to.equal('row wrap');
            expect($cardGroup.css('margin-right'), 'margin-right').to.equal('-15px');
            expect($cardGroup.css('margin-left'), 'margin-left').to.equal('-15px');
        });

        describe('BD Card in Card Group', () => {
            before((done) => {
                $testContainer.append($cardGroup);
                done();
            });
        
            it('should have correct styles', () => {
                expect(window.getComputedStyle(document.querySelector('.c-card-group .c-card')).getPropertyValue('margin-bottom'), 'margin-bottom').to.equal('15px'); 
            });
        });

    });

    describe.only('BD Card Types', () => {
        let $wrapper = $(`<div class="c-card-group-collapsed"></div>`),
            cardTypes = {
            'primary': {
                'background-color': toRgb('#0079bd'),
                'color': toRgb('#ffffff')
            },
            'secondary': {
                'background-color': toRgb('#f1f3f5'),
                'color': toRgb('#495057')
            },
            'success': {
                'background-color': toRgb('#37b24d'),
                'color': toRgb('#ffffff')
            },
            'danger': {
                'background-color': toRgb('#f03e3e'),
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
                            </div>`)

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

    describe('BD Card Deck', () => {
        let $cardDeck = $(`<div class="c-card-deck">
                                <div class="c-card">
                                <header class="c-card-header">
                                    <div class="c-card-header-title">Component</div>
                                    <div class="c-card-header-menu">
                                        <a class="c-btn c-btn-box c-btn-secondary" href="#">
                                            <i class="fa fa-cog" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </header>
                                <div class="c-card-content">
                                    <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros.</div>
                                </div>
                                <div class="c-card-footer">Footer if needed</div>
                                </div>
                                <div class="c-card">
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
                                </div>
                                <div class="c-card-footer">Footer if needed</div>
                                </div>
                            </div>`);
    
        before((done) => {
            $testContainer.append($cardDeck);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardDeck.css('display'), 'display').to.equal('flex');
            expect($cardDeck.css('flex-wrap'), 'flex-wrap').to.equal('wrap');
            expect($cardDeck.css('margin-right'), 'margin-right').to.equal('-15px');
            expect($cardDeck.css('margin-left'), 'margin-left').to.equal('-15px');
        });
    });

   
})
