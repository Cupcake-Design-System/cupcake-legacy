describe('BD List Group', () => {
    describe('BD List Group', () => {
        let $listGroup = $(`<div class="c-list-group c-list-group-bordered">
                                <div class="c-list-group-item">
                                    <div class="c-list-group-body">							
                                    <div class="c-text-md c-text-bold">List Group</div>						
                                    <div class="c-text-sm c-text-gray-6 c-p-top-xs"> Consectetur adipiscing elit.  Consectetur adipiscing elit.  Consectetur adipiscing elit.</div>
                                    </div>
                                    <div href="" class="c-list-group-item-right">
                                        <i class="fa fa-grav fa-2x c-shake c-text-danger" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="c-list-group-item c-list-group-item-active">
                                    <div class="c-list-group-body">							
                                        <div class="c-text-md c-text-bold c-text-white">List Group</div>						
                                        <div class="c-text-sm c-text-gray-0 c-p-top-xs"> Consectetur adipiscing elit.  Consectetur adipiscing elit.  Consectetur adipiscing elit.</div>
                                    </div>
                                    <div href="" class="c-list-group-item-right">
                                        <i class="fa fa-connectdevelop c-spin fa-2x " aria-hidden="true"></i>
                                    </div>					
                                </div>
                                <div class="c-list-group-item">
                                    <div class="c-list-group-body">							
                                        <div class="c-text-md c-text-bold">List Group</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs"> Consectetur adipiscing elit.  Consectetur adipiscing elit.  Consectetur adipiscing elit.</div>
                                    </div>
                                    <div href="" class="c-list-group-item-right">
                                        <i class="fa fa-meetup fa-2x c-pulse c-text-success-9" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="c-list-group-item">
                                    <div class="c-list-group-body">							
                                        <div class="c-text-md c-text-bold">List Group</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs"> Consectetur adipiscing elit.  Consectetur adipiscing elit.  Consectetur adipiscing elit.</div>
                                    </div>
                                    <div href="" class="c-list-group-item-right">
                                        <i class="fa fa-ravelry fa-2x c-spin c-text-warning-9" aria-hidden="true"></i>
                                    </div>
                                </div>					
                            </div>`);

        before((done) => {
            $testContainer.append($listGroup);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-list-group')).getPropertyValue('padding-left'), 'padding-left').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group')).getPropertyValue('padding-right'), 'padding-right').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group')).getPropertyValue('border-top'), 'border-top').to.equal('1px solid ' + toRgb('#dee2e6'));
            expect(window.getComputedStyle(document.querySelector('.c-list-group')).getPropertyValue('border-left'), 'border-left').to.equal('1px solid ' + toRgb('#dee2e6'));
            expect(window.getComputedStyle(document.querySelector('.c-list-group')).getPropertyValue('border-right'), 'border-right').to.equal('1px solid ' + toRgb('#dee2e6'));
            expect(window.getComputedStyle(document.querySelector('.c-list-group')).getPropertyValue('color'), 'color').to.equal(toRgb('#868e96'));
            expect(window.getComputedStyle(document.querySelector('.c-list-group')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('none');

            // c-list-group-bordered
            expect(window.getComputedStyle(document.querySelector('.c-list-group-bordered:last-child')).getPropertyValue('border-radius'), 'border-radius').to.equal('0px 0px 2px 2px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-bordered:last-child')).getPropertyValue('border-bottom-width'), 'border-bottom-width').to.equal('0px');

            // c-list-group-item
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('display'), 'display').to.equal('flex');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('align-items'), 'align-items').to.equal('center');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('position'), 'position').to.equal('relative');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('padding'), 'padding').to.equal('12px 16px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item'), ':first-child').getPropertyValue('border-radius'), 'border-radius').to.equal('2px 2px 0px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-bordered .c-list-group-item')).getPropertyValue('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e9ecef'));

            // c-list-group-item-active
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item.c-list-group-item-active')).getPropertyValue('border-color'), 'border-color').to.equal(toRgb('#e9ecef'));
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item.c-list-group-item-active')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0079bd'));
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item.c-list-group-item-active')).getPropertyValue('color'), 'color').to.equal(toRgb('#ffffff'));
        
            // c-list-group-body
            expect(window.getComputedStyle(document.querySelector('.c-list-group-body')).getPropertyValue('font-size'), 'font-size').to.equal('16px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-body')).getPropertyValue('margin'), 'margin').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-body')).getPropertyValue('font-weight'), 'font-weight').to.equal('400');

            // c-list-group-item-right
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item-right')).getPropertyValue('padding-left'), 'padding-left').to.equal('15px');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item-right')).getPropertyValue('display'), 'display').to.equal('flex');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item-right')).getPropertyValue('flex-grow'), 'flex-grow').to.equal('1');
            expect(window.getComputedStyle(document.querySelector('.c-list-group-item-right')).getPropertyValue('justify-content'), 'justify-content').to.equal('flex-end');
        });
    });

    describe('BD Media List', () => {
        let $listMedia = $(`<div class="c-media-list c-media-list-hover c-media-list-divided c-media-list-bordered">
                                <div class="c-media">
                                    <div class="c-media-body">						
                                        <div class="c-text-md c-text-bold">Media List</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs"> Consectetur adipiscing elit.  Consectetur adipiscing elit.  Consectetur adipiscing elit.</div>
                                    </div>
                                        <i class="fa fa-grav fa-2x c-shake c-text-danger" aria-hidden="true"></i>
                                </div>
                                <div class="c-media">
                                    <div class="c-media-body">						
                                        <div class="c-text-md c-text-bold">Media List</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs"> Consectetur adipiscing elit.  Consectetur adipiscing elit.  Consectetur adipiscing elit.</div>
                                    </div>
                                        <i class="fa fa-connectdevelop c-spin fa-2x " aria-hidden="true"></i>					
                                </div>
                                <div class="c-media c-media-new">
                                    <div class="c-media-body">						
                                        <div class="c-text-md c-text-bold">Media List</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs"> Consectetur adipiscing elit.  Consectetur adipiscing elit.  Consectetur adipiscing elit.</div>
                                    </div>
                                        <i class="fa fa-meetup fa-2x c-pulse c-text-success-9" aria-hidden="true"></i>
                                </div>
                                <div class="c-media">
                                    <div class="c-media-body">						
                                        <div class="c-text-md c-text-bold">Media List</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs"> Consectetur adipiscing elit.  Consectetur adipiscing elit.  Consectetur adipiscing elit.</div>
                                    </div>
                                        <i class="fa fa-ravelry fa-2x c-spin c-text-warning-9" aria-hidden="true"></i>
                                </div>					
                            </div>`);

        before((done) => {
            $testContainer.append($listMedia);
            done();
        });

        it('should have correct styles', () => {
            expect($listMedia.css('padding-left'), 'padding-left').to.equal('0px');
            expect($listMedia.css('list-style-type'), 'list-style-type').to.equal('none');

            // c-media-list-bordered
            expect(window.getComputedStyle(document.querySelector('.c-media-list-bordered')).getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#e9ecef'));

            // c-media
            expect(window.getComputedStyle(document.querySelector('.c-media')).getPropertyValue('display'), 'display').to.equal('flex');
            expect(window.getComputedStyle(document.querySelector('.c-media')).getPropertyValue('align-items'), 'align-items').to.equal('flex-start');
            expect(window.getComputedStyle(document.querySelector('.c-media')).getPropertyValue('color'), 'color').to.equal(toRgb('#414152'));
            expect(window.getComputedStyle(document.querySelector('.c-media')).getPropertyValue('padding'), 'padding').to.equal('10px');
            expect(window.getComputedStyle(document.querySelector('.c-media-list > .c-media:not(.c-media-list-header):not(.c-media-list-footer)')).getPropertyValue('margin-bottom'), 'margin-bottom').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-media-list > .c-media:not(.c-media-list-header):not(.c-media-list-footer)')).getPropertyValue('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e9ecef'));
        
            // c-media-body
            expect(window.getComputedStyle(document.querySelector('.c-media-body')).getPropertyValue('flex-grow'), 'flex-grow').to.equal('1');
            expect(window.getComputedStyle(document.querySelector('.c-media-body')).getPropertyValue('min-width'), 'min-width').to.equal('1px');
            expect(window.getComputedStyle(document.querySelector('.c-media > *')).getPropertyValue('margin'), 'margin').to.equal('0px 5px 0px 0px');

            // c-media-new
            expect(window.getComputedStyle(document.querySelector('.c-media-new')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
        });
    });

    describe('BD Media Middle', () => {
        let $listMedia = $(`<div class="c-media-list c-media-list-bordered c-media-list-divided c-media-list-hover">
                                <div class="c-media c-media-middle">
                                    <div class="c-media-body">						
                                        <div class="c-text-md c-text-bold">Media Middle</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs">Media Middle</div>
                                    </div>
                                    
                                        <i class="fa fa-caret-right c-text-gray-5" aria-hidden="true"></i>
                                    
                                </div>
                                <div class="c-media c-media-middle">
                                    <div class="c-media-body">						
                                        <div class="c-text-md c-text-bold">Media Middle</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs">Media Middle</div>
                                    </div>
                                        <i class="fa fa-caret-right c-text-gray-5" aria-hidden="true"></i>					
                                </div>
                                <div class="c-media c-media-middle">
                                    <div class="c-media-body">						
                                        <div class="c-text-md c-text-bold">Media Middle</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs">Media Middle</div>
                                    </div>
                                        <i class="fa fa-caret-right c-text-gray-5" aria-hidden="true"></i>
                                </div>
                                <div class="c-media c-media-middle">
                                    <div class="c-media-body">						
                                        <div class="c-text-md c-text-bold">Media Middle</div>						
                                        <div class="c-text-sm c-text-gray-6 c-p-top-xs">Media Middle</div>
                                    </div>
                                        <i class="fa fa-caret-right c-text-gray-5" aria-hidden="true"></i>
                                </div>					
                            </div>`);

        before((done) => {
            $testContainer.append($listMedia);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-media-middle')).getPropertyValue('align-items'), 'align-items').to.equal('center');
        });
    });
})
