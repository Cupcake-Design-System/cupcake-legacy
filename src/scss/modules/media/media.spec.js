describe('BD Media Objects', () => {
    describe('BD Media', () => {
        let $media = $(`<div class="c-media">
                            <span class="fa fa-address-book"></span>
                            <div class="c-media-body">
                            <span class="c-text-md c-text-bold">Have a Cupcake</span>
                            </div>
                        </div>`);

        before((done) => {
            $testContainer.append($media);
            done();
        });

        it('should have correct styles', () => {
            expect($media.css('color'), 'color').to.equal(toRgb('#495057'));
            expect($media.css('padding'), 'padding').to.equal('16px 12px');
        });
    });

    describe('BD Media Middle', () => {
        let $media = $(`<div class="c-media c-media-middle c-media-action-visible">
                            <div class="c-media-body">
                            <span class="c-text-md c-text-bold">Item with actions</span>
                            </div>
                            <a class="c-media-action" href="#"><i class="fa fa-pencil"></i></a>
                            <a class="c-media-action" href="#"><i class="fa fa-close"></i></a>
                        </div>`);

        before((done) => {
            $testContainer.append($media);
            done();
        });

        it('should have correct styles', () => {
            // c-media-action
            expect($media.find('.c-media-action').css('transition-duration'), 'transition-duration').to.equal('0.5s');
            expect($media.find('.c-media-action').css('color'), 'color').to.equal(toRgb('#868e96'));
        });
    });
})
