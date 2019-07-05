describe('BD Media Objects', () => {
    describe('BD Media', () => {
        let $media = $(`<div class="c-media"></div>`);

        before((done) => {
            $testContainer.append($media);
            done();
        });

        it('should have correct styles', () => {
            expect($media.css('display'), 'display').to.equal('flex');
            expect($media.css('align-items'), 'align-items').to.equal('flex-start');
            expect($media.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($media.css('padding'), 'padding').to.equal('10px');
        });

        it('Middle should have correct styles', () => {
            $media.addClass('c-media-middle');
            expect($media.css('align-items'), 'align-items').to.equal('center');
        });

        it('Action Visible should have correct styles', () => {
            $media.addClass('c-media-action-visible');
            expect($media.css('opacity'), 'opacity').to.equal('1');
        });

        it('New should have correct styles', () => {
            $media.addClass('c-media-new');
            expect($media.css('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
        });
    });
    
    describe('BD Media Body', () => {
        let $mediaBody = $(`<div class="c-media-body"></div>`);

        before((done) => {
            $testContainer.append($mediaBody);
            done();
        });

        it('should have correct styles', () => {
            expect($mediaBody.css('flex-grow'), 'flex-grow').to.equal('1');
            expect($mediaBody.css('min-width'), 'min-width').to.equal('1px');
        });
    });
    
    describe('BD Media Block Actions', () => {
        let $mediaBlockActions = $(`<div class="c-media-block-actions"></div>`);

        before((done) => {
            $testContainer.append($mediaBlockActions);
            done();
        });

        it('should have correct styles', () => {
            expect($mediaBlockActions.css('display'), 'display').to.equal('flex');
            expect($mediaBlockActions.css('justify-content'), 'justify-content').to.equal('space-between');
            expect($mediaBlockActions.css('align-items'), 'align-items').to.equal('center');
            expect($mediaBlockActions.css('margin-top'), 'margin-top').to.equal('8px');
            expect($mediaBlockActions.css('transition-duration'), 'transition-duration').to.equal('0.5s');
        });
    });
    
    describe('BD Media List', () => {
        let $mediaList = $(`<div class="c-media-list"></div>`);

        before((done) => {
            $testContainer.append($mediaList);
            done();
        });

        it('should have correct styles', () => {
            expect($mediaList.css('padding-left'), 'padding-left').to.equal('0px');
            expect($mediaList.css('list-style-type'), 'list-style-type').to.equal('none');
        });

        it('Bordered should have correct styles', () => {
            $mediaList.addClass('c-media-list-bordered');
            expect($mediaList.css('border'), 'border').to.equal('1px solid ' + toRgb('#e9ecef'));
        });
    });
    
    describe('BD Media List Stripped', () => {
        let $mediaListStripped = $(`<div class="c-media-list c-media-list-striped">
                                        <div class="c-media c-media-middle c-media-action-visible></div>
                                        <div class="c-media c-media-middle c-media-action-visible></div>
                                        <div class="c-media c-media-middle c-media-action-visible></div>
                                        <div class="c-media c-media-middle c-media-action-visible></div>
                                    </div>`);

        before((done) => {
            $testContainer.append($mediaListStripped);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-media-list-striped .c-media:not(.c-media-list-header):not(.c-media-list-footer):nth-child(2n)')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f8f9fa'));
        });
    });
    
    describe('BD Media Action', () => {
        let $mediaAction = $(`<a href="#" class="c-media-action"></a>`);

        before((done) => {
            $testContainer.append($mediaAction);
            done();
        });

        it('should have correct styles', () => {
            expect($mediaAction.css('width'), 'width').to.equal('18px');
            expect($mediaAction.css('height'), 'height').to.equal('18px');
            expect($mediaAction.css('line-height'), 'line-height').to.equal('18px');
            expect($mediaAction.css('text-align'), 'text-align').to.equal('center');
            expect($mediaAction.css('transition-duration'), 'transition-duration').to.equal('0.5s');
            expect($mediaAction.css('opacity'), 'opacity').to.equal('0');
        });
    });
    
    describe('BD Media List Header', () => {
        let $mediaListHeader = $(`<header class="c-media-list-header"></header>`);

        before((done) => {
            $testContainer.append($mediaListHeader);
            done();
        });

        it('should have correct styles', () => {
            expect($mediaListHeader.css('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e9ecef'));
            expect($mediaListHeader.css('background-color'), 'background-color').to.equal(toRgb('#f8f9fa'));
        });
    });
    
    describe('BD Media List Body', () => {
        let $mediaListBody = $(`<div class="c-media-list c-media-list-divided">
                                    <div class="c-media-list-body">
                                        <div class="c-media c-media-middle></div>
                                        <div class="c-media c-media-middle></div>
                                        <div class="c-media c-media-middle></div>
                                        <div class="c-media c-media-middle></div>
                                    </div>
                                </div>`);

        before((done) => {
            $testContainer.append($mediaListBody);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-media-list-divided .c-media-list-body > .c-media')).getPropertyValue('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e9ecef'));
            expect(window.getComputedStyle(document.querySelector('.c-media-list-divided .c-media-list-body > .c-media')).getPropertyValue('margin-bottom'), 'margin-bottom').to.equal('0px');
        });
    });
    
    describe('BD Media List Footer', () => {
        let $mediaListFooter = $(`<footer class="c-media-list-footer"></footer>`);

        before((done) => {
            $testContainer.append($mediaListFooter);
            done();
        });

        it('should have correct styles', () => {
            expect($mediaListFooter.css('border-top'), 'border-top').to.equal('1px solid ' + toRgb('#e9ecef'));
            expect($mediaListFooter.css('background-color'), 'background-color').to.equal(toRgb('#f8f9fa'));
        });
    });
})
