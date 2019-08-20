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
            expect($media.css('display'), 'display').to.equal('flex');
            expect($media.css('align-items'), 'align-items').to.equal('flex-start');
            expect($media.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($media.css('padding'), 'padding').to.equal('10px');

            // c-media-body
            expect($media.find('.c-media-body').css('flex-grow'), 'flex-grow').to.equal('1');
            expect($media.find('.c-media-body').css('min-width'), 'min-width').to.equal('1px');

            // c-media-body > *
            expect(window.getComputedStyle(document.querySelector('.c-media-body > *')).getPropertyValue('margin-bottom'), 'margin-bottom').to.equal('0px');
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
            expect($media.css('align-items'), 'align-items').to.equal('center');

            // c-media-action-visible, c-media-action-visible c-media-action
            expect(window.getComputedStyle(document.querySelector('.c-media-action-visible, .c-media-action-visible .c-media-action')).getPropertyValue('opacity'), 'opacity').to.equal('1');
            
            // c-media-action
            expect($media.find('.c-media-action').css('transition-duration'), 'transition-duration').to.equal('0.5s');
            expect($media.find('.c-media-action').css('color'), 'color').to.equal(toRgb('#414152'));
            expect($media.find('.c-media-action').css('width'), 'width').to.equal('18px');
            expect($media.find('.c-media-action').css('height'), 'height').to.equal('18px');
            expect($media.find('.c-media-action').css('line-height'), 'line-height').to.equal('18px');
            expect($media.find('.c-media-action').css('text-align'), 'text-align').to.equal('center');
        });
    });

    describe('BD Media New', () => {
        let $media = $(`<div class="c-media c-media-new">
                            <span class="c-avatar c-avatar-success" data-text="AB">
                            </span>
                            <div class="c-media-body">
                            <div class="c-text-md c-text-bold">Item to delete
                                <time class="c-text-xs c-text-muted c-pull-right" datetime="2017-07-14 20:00">24 min ago</time>
                            </div>
                            <div class="c-text-sm c-p-top-xs">You need to update the changelog in documentation before we release the current version.</div>
                            </div>
                        </div>`);

        before((done) => {
            $testContainer.append($media);
            done();
        });

        it('should have correct styles', () => {
            expect($media.css('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
        });
    });

    describe('BD Media Middle', () => {
        let $media = $(`<div class="c-media c-media-bottom">
                            <span class="c-avatar c-avatar-success" data-text="AC">
                            </span>
                            <div class="c-media-body">
                            <span class="c-media-body">Maryam Amiri</span>
                            <time class="c-pull-right c-text-xs" datetime="2017-07-14 20:00">24 min ago</time>
                            <div class="c-text-sm c-p-top-xs">You need to update the changelog in documentation before we release the current version.</div>
                            <div class="c-media-block-actions">
                                <nav class="c-text-sm">
                                    <a class="c-a" href="#">Comments (2)</a>
                                    <a class="c-a" href="#">likes (7)</a>
                                </nav>
                            </div>
                            </div>
                        </div>`);

        before((done) => {
            $testContainer.append($media);
            done();
        });

        it('should have correct styles', () => {
            expect($media.css('align-items'), 'align-items').to.equal('flex-end');

            // c-media-block-actions
            expect($media.find('.c-media-block-actions').css('display'), 'display').to.equal('flex');
            expect($media.find('.c-media-block-actions').css('justify-content'), 'justify-content').to.equal('space-between');
            expect($media.find('.c-media-block-actions').css('align-items'), 'align-items').to.equal('center');
            expect($media.find('.c-media-block-actions').css('margin-top'), 'margin-top').to.equal('8px');
            expect($media.find('.c-media-block-actions').css('transition-duration'), 'transition-duration').to.equal('0.5s');
        });
    });
    
    describe('BD Media List', () => {
        let $mediaList = $(`<div class="c-media-list c-media-list-bordered">
                                <div class="c-media">
                                <span class="c-avatar c-avatar-primary" data-text="AA"></span>
                                <div class="c-media-body">
                                    <div class="c-text-md c-text-bold">Annabelle Admin</div>
                                    <div class="c-text-sm c-text-muted c-p-top-xs">IR Administrator</div>
                                </div>
                                </div>
                                <div class="c-media">
                                <span class="c-avatar c-avatar-success" data-text="SL"></span>
                                <div class="c-media-body">
                                    <div class="c-text-md c-text-bold">Siante Lisso</div>
                                    <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
                                </div>
                                </div>
                                <div class="c-media">
                                <span class="c-avatar c-avatar-danger" data-text="MB"></span>
                                <div class="c-media-body">
                                    <div class="c-text-md c-text-bold">Martin Board</div>
                                    <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director &amp; Board member</div>
                                </div>
                                </div>
                                <div class="c-media">
                                <span class="c-avatar c-avatar-warning" data-text="RR"></span>
                                <div class="c-media-body">
                                    <div class="c-text-md c-text-bold">Reggie Research</div>
                                    <div class="c-text-sm c-text-muted c-p-top-xs">Research Salesperson</div>
                                </div>
                                </div>
                            </div>`);

        before((done) => {
            $testContainer.append($mediaList);
            done();
        });

        it('should have correct styles', () => {
            expect($mediaList.css('padding-left'), 'padding-left').to.equal('0px');
            expect($mediaList.css('list-style-type'), 'list-style-type').to.equal('none')
            expect(window.getComputedStyle(document.querySelector('.c-media-list-bordered')).getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#e9ecef'));
            expect(window.getComputedStyle(document.querySelector('.c-media-list > .c-media:not(.c-media-list-header):not(.c-media-list-footer)')).getPropertyValue('margin-bottom'), 'margin-bottom').to.equal('0px');
        });
    });
    
    describe('BD Media List Stripped', () => {
        let $mediaListStripped = $(`<div class="c-media-list c-media-list-striped">
                                        <div class="c-media c-media-middle c-media-action-visible">
                                        <div class="c-media-body">
                                            <div class="c-text-md c-text-bold">Annabelle Admin</div>
                                            <div class="c-text-sm c-text-muted c-p-top-xs">IR Administrator</div>
                                        </div>
                                        <a class="c-media-action c-text-success" href="#">
                                            <span class="fa fa-phone"></span>
                                        </a>
                                        <a class="c-media-action c-text-primary" href="#">
                                            <span class="fa fa-envelope-o "></span>
                                        </a>
                                        </div>
                                        <div class="c-media c-media-middle c-media-action-visible">
                                        <div class="c-media-body">
                                            <div class="c-text-md c-text-bold">Siante Lisso</div>
                                            <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
                                        </div>
                                        <a class="c-media-action c-text-success" href="#">
                                            <span class="fa fa-phone"></span>
                                        </a>
                                        <a class="c-media-action c-text-primary" href="#">
                                            <span class="fa fa-envelope-o "></span>
                                        </a>
                                        </div>
                                        <div class="c-media c-media-middle c-media-action-visible">
                                        <div class="c-media-body">
                                            <div class="c-text-md c-text-bold">Martin Board</div>
                                            <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
                                        </div>
                                        <a class="c-media-action c-text-success" href="#">
                                            <span class="fa fa-phone"></span>
                                        </a>
                                        <a class="c-media-action c-text-primary" href="#">
                                            <span class="fa fa-envelope-o "></span>
                                        </a>
                                        </div>
                                        <div class="c-media c-media-middle c-media-action-visible">
                                        <div class="c-media-body">
                                            <div class="c-text-md c-text-bold">Reggie Research</div>
                                            <div class="c-text-sm c-text-muted c-p-top-xs">Research Salesperson</div>
                                        </div>
                                        <a class="c-media-action c-text-success" href="#">
                                            <span class="fa fa-phone"></span>
                                        </a>
                                        <a class="c-media-action c-text-primary" href="#">
                                            <span class="fa fa-envelope-o "></span>
                                        </a>
                                        </div>
                                    </div>`);

        before((done) => {
            $testContainer.append($mediaListStripped);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-media-list-striped .c-media:not(.c-media-list-header):not(.c-media-list-footer):nth-child(2n)')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f8f9fa'));
        });
    });
    
    describe('BD Media List Divided with header and footer', () => {
        let $mediaListDivided = $(`<div class="c-media-list c-media-list-divided c-media-list-hover">
                                        <header class="c-media-list-header">
                                        <div class="c-media">
                                            <div class="c-text-md c-text-bold">Media Header w/ actions on hover</div>
                                        </div>
                                        </header>
                                        <div class="c-media-list-body">
                                            <div class="c-media c-media-middle">
                                            <span class="c-avatar c-avatar-primary" data-text="AA"></span>
                                            <div class="c-media-body">
                                                <div class="c-text-md c-text-bold">Annabelle Admin</div>
                                                <div class="c-text-sm c-text-muted c-p-top-xs">IR Administrator</div>
                                            </div>
                                            <a class="c-media-action c-text-success" href="#"><i class="fa fa-pencil"></i></a>
                                            <a class="c-media-action c-text-danger" href="#"><i class="fa fa-close"></i></a>
                                            </div>
                                            <div class="c-media c-media-middle">
                                            <span class="c-avatar c-avatar-success" data-text="SL"></span>
                                            <div class="c-media-body">
                                                <div class="c-text-md c-text-bold">Siante Lisso</div>
                                                <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
                                            </div>
                                            <a class="c-media-action c-text-success" href="#"> <i class="fa fa-pencil"></i></a>
                                            <a class="c-media-action c-text-danger" href="#"><i class="fa fa-close"></i></a>
                                            </div>
                                            <div class="c-media c-media-middle">
                                            <span class="c-avatar c-avatar-danger" data-text="MB"></span>
                                            <div class="c-media-body">
                                                <div class="c-text-md c-text-bold">Martin Board</div>
                                                <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
                                            </div>
                                            <a class="c-media-action c-text-success" href="#"><i class="fa fa-pencil"></i></a>
                                            <a class="c-media-action c-text-danger" href="#"><i class="fa fa-close"></i></a>
                                            </div>
                                            <div class="c-media c-media-middle">
                                            <span class="c-avatar c-avatar-warning" data-text="RR"></span>
                                            <div class="c-media-body">
                                                <div class="c-text-md c-text-bold">Reggie Research</div>
                                                <div class="c-text-sm c-text-muted c-p-top-xs">Research Salesperson</div>
                                            </div>
                                            <a class="c-media-action c-text-success" href="#"><i class="fa fa-pencil"></i></a>
                                            <a class="c-media-action c-text-danger" href="#"><i class="fa fa-close"></i></a>
                                            </div>
                                        </div>
                                        <footer class="c-media-list-footer">
                                            <div class="c-media">
                                            <div class="c-text-md c-text-bold">Media footer</div>
                                            </div>
                                        </footer>`);

        before((done) => {
            $testContainer.append($mediaListDivided);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-media-list-divided .c-media-list-body > .c-media')).getPropertyValue('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e9ecef'));
            expect(window.getComputedStyle(document.querySelector('.c-media-list-divided .c-media-list-body > .c-media')).getPropertyValue('margin-bottom'), 'margin-bottom').to.equal('0px');
        
            // c-media-list-header
            expect($mediaListDivided.find('.c-media-list-header').css('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e9ecef'));
            expect($mediaListDivided.find('.c-media-list-header').css('background-color'), 'background-color').to.equal(toRgb('#f8f9fa'));

            // c-media-list-footer
            expect($mediaListDivided.find('.c-media-list-footer').css('border-top'), 'border-top').to.equal('1px solid ' + toRgb('#e9ecef'));
            expect($mediaListDivided.find('.c-media-list-footer').css('background-color'), 'background-color').to.equal(toRgb('#f8f9fa'));
        });
    });
})
