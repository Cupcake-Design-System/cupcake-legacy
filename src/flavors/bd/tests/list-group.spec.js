describe('BD List Group', () => {
    describe('BD List Group', () => {
        let $listGroup = $(`<div class="c-list-group">
                                <div class="c-list-group-item">Item</div>
                                <div class="c-list-group-item">Item</div>
                            </div>`);

        before((done) => {
            $testContainer.append($listGroup);
            done();
        });

        it('should have correct styles', () => {
            expect($listGroup.css('padding-left'), 'padding-left').to.equal('0px');
            expect($listGroup.css('padding-right'), 'padding-right').to.equal('0px');
            expect($listGroup.css('border'), 'border').to.equal('1px solid ' + toRgb('#dee2e6'));
            expect($listGroup.css('color'), 'color').to.equal(toRgb('#868e96'));
            expect($listGroup.css('box-shadow'), 'box-shadow').to.equal('none');
        });
    });

    describe('BD List Group bordered', () => {
        let $listGroupBordered = $(`<div class="c-list-group c-list-group-bordered">
                                        <div class="c-list-group-item">Item</div>
                                        <div class="c-list-group-item">Item</div>
                                    </div>`);

        before((done) => {
            $testContainer.append($listGroupBordered);
            done();
        });

        it('should have correct styles', () => {
            expect($listGroupBordered.css('border-radius'), 'border-radius').to.equal('0px 0px 2px 2px');
            expect($listGroupBordered.css('border-bottom-width'), 'border-bottom-width').to.equal('0px');
        });
    });

    describe('BD List Group Item', () => {
        let $listGroupItem = $(`<div class="c-list-group c-list-group-bordered">
                                    <div class="c-list-group-item">Item</div>
                                    <div class="c-list-group-item c-list-group-item-active">Item</div>
                                </div>`);

        before((done) => {
            $testContainer.append($listGroupItem);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('display'), 'display').to.equal('flex');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('align-items'), 'align-items').to.equal('center');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('position'), 'position').to.equal('relative');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('padding'), 'padding').to.equal('12px 16px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('border-radius'), 'border-radius').to.equal('2px 2px 0px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-bordered .c-list-group-item')).getPropertyValue('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e9ecef'));
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item.c-list-group-item-active')).getPropertyValue('border-color'), 'border-color').to.equal(toRgb('#e9ecef'));
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item.c-list-group-item-active')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0079bd'));
        });
    });

    describe('BD List Group Body', () => {
        let $listGroupBody = $(`<div class="c-list-group-body"></div>`);

        before((done) => {
            $testContainer.append($listGroupBody);
            done();
        });

        it('should have correct styles', () => {
            expect($listGroupBody.css('font-size'), 'font-size').to.equal('16px');
            expect($listGroupBody.css('margin'), 'margin').to.equal('0px');
            expect($listGroupBody.css('font-weight'), 'font-weight').to.equal('400');
        });
    });

    describe('BD List Group Item Right', () => {
        let $listGroupItemRight = $(`<div class="c-list-group-item-right"></div>`);

        before((done) => {
            $testContainer.append($listGroupItemRight);
            done();
        });

        it('should have correct styles', () => {
            expect($listGroupItemRight.css('padding-left'), 'padding-left').to.equal('15px');
            expect($listGroupItemRight.css('display'), 'display').to.equal('flex');
            expect($listGroupItemRight.css('flex-grow'), 'flex-grow').to.equal('1');
            expect($listGroupItemRight.css('justify-content'), 'justify-content').to.equal('flex-end');
        });
    });

    describe('BD Media List', () => {
        let $listMediaList = $(`<div class="c-media-list">
                                    <div class="c-media">Item</div>
                                    <div class="c-media">Item</div>
                                </div>`);

        before((done) => {
            $testContainer.append($listMediaList);
            done();
        });

        it('should have correct styles', () => {
            expect($listMediaList.css('padding-left'), 'padding-left').to.equal('0px');
            expect($listMediaList.css('list-style-type'), 'list-style-type').to.equal('none');
        });

        it('Bordered should have correct styles', () => {
            $listMediaList.addClass('c-media-list-bordered');
            expect($listMediaList.css('border'), 'border').to.equal('1px solid ' + toRgb('#e9ecef'));
        });
    });

    describe('BD Media', () => {
        let $listMedia = $(`<div class="c-media"></div>`);

        before((done) => {
            $testContainer.append($listMedia);
            done();
        });

        it('should have correct styles', () => {
            expect($listMedia.css('display'), 'display').to.equal('flex');
            expect($listMedia.css('align-items'), 'align-items').to.equal('flex-start');
            expect($listMedia.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($listMedia.css('padding'), 'padding').to.equal('10px');
        });

        it('New should have correct styles', () => {
            $listMedia.addClass('c-media-new');
            expect($listMedia.css('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
        });

        it('Middle should have correct styles', () => {
            $listMedia.addClass('c-media-middle');
            expect($listMedia.css('align-items'), 'align-items').to.equal('center');
        });
    });

    describe('BD Media Body', () => {
        let $listMediaBody = $(`<div class="c-media-body"></div>`);

        before((done) => {
            $testContainer.append($listMediaBody);
            done();
        });

        it('should have correct styles', () => {
            expect($listMediaBody.css('flex-grow'), 'flex-grow').to.equal('1');
            expect($listMediaBody.css('min-width'), 'min-width').to.equal('1px');
        });
    });
})