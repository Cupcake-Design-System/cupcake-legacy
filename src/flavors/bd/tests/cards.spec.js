describe('BD Card', () => {
    describe('BD Card wrapper', () => {
        let $card = $('<div class="c-card"></div>');
    
        before((done) => {
            $testContainer.append($card);
            done();
        });
    
        it('should have correct styles', () => {
            expect($card.css('display'), 'display').to.equal('flex');
            expect($card.css('flex-direction'), 'flex-direction').to.equal('column');
            expect($card.css('min-width'), 'min-width').to.equal('0px');
            expect($card.css('position'), 'position').to.equal('relative');
            expect($card.css('border-style'), 'border-style').to.equal('none');
            expect($card.css('border-radius'), 'border-radius').to.equal('1px');
            expect($card.css('box-shadow'), 'box-shadow').to.equal('rgba(65, 65, 81, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0.14) 0px 1px 2px 0px');
            expect($card.css('transition'), 'transition').to.equal('box-shadow 0.15s ease-in 0s, -webkit-box-shadow 0.15s ease-in 0s');
            expect($card.css('word-wrap'), 'word-wrap').to.equal('break-word');
            expect($card.css('background-clip'), 'background-clip').to.equal('border-box');
            expect($card.css('color'), 'color').to.equal(toRgb('#414152'));
        });
    });

    describe('BD Card Header', () => {
        let $cardHeader = $('<div class="c-card-header"></div>');
    
        before((done) => {
            $testContainer.append($cardHeader);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardHeader.css('display'), 'display').to.equal('flex');
            expect($cardHeader.css('align-items'), 'align-items').to.equal('stretch');
            expect($cardHeader.css('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e6e6e6'));
            expect($cardHeader.css('border-radius'), 'border-radius').to.equal('1px 1px 0px 0px');
        });
    });
    
    describe('BD Card Header Title', () => {
        let $cardHeaderTitle = $('<div class="c-card-header-title"></div>');
    
        before((done) => {
            $testContainer.append($cardHeaderTitle);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardHeaderTitle.css('display'), 'display').to.equal('flex');
            expect($cardHeaderTitle.css('align-items'), 'align-items').to.equal('center');
            expect($cardHeaderTitle.css('flex-grow'), 'flex-grow').to.equal('1');
            expect($cardHeaderTitle.css('padding'), 'padding').to.equal('10px 15px');
            expect($cardHeaderTitle.css('font-size'), 'font-size').to.equal('15px');
            expect($cardHeaderTitle.css('font-weight'), 'font-weight').to.equal('600');
        });
    });

    describe('BD Card Header Menu', () => {
        let $cardHeaderMenu = $('<div class="c-card-header-menu"></div>');
    
        before((done) => {
            $testContainer.append($cardHeaderMenu);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardHeaderMenu.css('display'), 'display').to.equal('flex');
            expect($cardHeaderMenu.css('align-items'), 'align-items').to.equal('center');
            expect($cardHeaderMenu.css('justify-content'), 'justify-content').to.equal('center');
            expect($cardHeaderMenu.css('padding'), 'padding').to.equal('10px 15px');
            expect($cardHeaderMenu.css('font-size'), 'font-size').to.equal('14px');
            expect($cardHeaderMenu.css('cursor'), 'cursor').to.equal('pointer');
        });
    });

    describe('BD Card Menu Button', () => {
        let $cardMenuButton = $('<a class="c-btn c-btn-box"></a>');
    
        before((done) => {
            $testContainer.append($cardMenuButton);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardMenuButton.css('width'), 'width').to.equal('35px');
            expect($cardMenuButton.css('padding-left'), 'padding-left').to.equal('0px');
            expect($cardMenuButton.css('padding-right'), 'padding-right').to.equal('0px');
            expect($cardMenuButton.css('text-align'), 'text-align').to.equal('center');
        });
    });

    describe('BD Card Content', () => {
        let $cardContent = $('<div class="c-card-content"></div>');
    
        before((done) => {
            $testContainer.append($cardContent);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardContent.css('flex'), 'flex').to.equal('1 1 auto');
            expect($cardContent.css('padding'), 'padding').to.equal('10px 15px');
            expect($cardContent.css('font-weight'), 'font-weight').to.equal('400');
        });
    });

    describe('BD Card Content Title', () => {
        let $cardContentTitle = $('<div class="c-card-content-title"></div>');
    
        before((done) => {
            $testContainer.append($cardContentTitle);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardContentTitle.css('margin'), 'margin').to.equal('0px 0px 11px');
            expect($cardContentTitle.css('font-size'), 'font-size').to.equal('14px');           
            expect($cardContentTitle.css('font-weight'), 'font-weight').to.equal('600');
            expect($cardContentTitle.css('line-height'), 'line-height').to.equal('14px');
        });
    });

    describe('BD Card Content Subtitle', () => {
        let $cardContentSubtitle = $('<div class="c-card-content-subtitle"></div>');
    
        before((done) => {
            $testContainer.append($cardContentSubtitle);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardContentSubtitle.css('margin'), 'margin').to.equal('0px 0px 11px');
            expect($cardContentSubtitle.css('font-size'), 'font-size').to.equal('16px');
        });
    });

    describe('BD Card Content Body', () => {
        let $cardContentBody = $('<div class="c-card-content-body"></div>');
    
        before((done) => {
            $testContainer.append($cardContentBody);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardContentBody.css('font-size'), 'font-size').to.equal('14px');
        });
    });

    describe('BD Card Footer', () => {
        let $cardFooter = $('<div class="c-card-footer"></div>');
    
        before((done) => {
            $testContainer.append($cardFooter);
            done();
        });
        
        it('should have correct styles', () => {
            expect($cardFooter.css('padding'), 'padding').to.equal('10px 15px');
            expect($cardFooter.css('border-top-style'), 'border-top-style').to.equal('none');
            expect($cardFooter.css('border-radius'), 'border-radius').to.equal('0px 0px 1px 1px');
        });
    });

    describe('BD Card Group', () => {
        let $cardGroup = $('<div class="c-card-group"></div>');
    
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
    });

    describe('BD Card Deck', () => {
        let $cardDeck = $('<div class="c-card-deck"></div>');
    
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

    describe('BD Card Types', () => {
        let $cardType = $('<div class="c-card"></div>');
    
        before((done) => {
            $testContainer.append($cardType);
            done();
        });

        it('Primary should have correct styles', () => {
            $cardType.addClass('c-card-primary');
            expect($cardType.css('background-color'), 'background-color').to.equal(toRgb('#0079bd'));
            expect($cardType.css('border-color'), 'border-color').to.equal(toRgb('#0079bd'));
        });
        
        it('Success should have correct styles', () => {
            $cardType.addClass('c-card-success');
            expect($cardType.css('background-color'), 'background-color').to.equal(toRgb('#37b24d'));
            expect($cardType.css('border-color'), 'border-color').to.equal(toRgb('#37b24d'));
        });

        it('Danger should have correct styles', () => {
            $cardType.addClass('c-card-danger');
            expect($cardType.css('background-color'), 'background-color').to.equal(toRgb('#f03e3e'));
            expect($cardType.css('border-color'), 'border-color').to.equal(toRgb('#f03e3e'));
        });
    });
})
