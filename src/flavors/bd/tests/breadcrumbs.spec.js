describe('BD Breadcrumb', () => {
    describe('BD Breadcrumb ul', () => {
        let $breadcrumb = $('<ul class="c-breadcrumb"></ul>');
    
        before((done) => {
            $testContainer.append($breadcrumb);
            done();
        });
    
        it('should have correct styles', () => {
            expect($breadcrumb.css('display'), 'display').to.equal('flex');
            expect($breadcrumb.css('flex-wrap'), 'flex-wrap').to.equal('wrap');
            expect($breadcrumb.css('padding'), 'padding').to.equal('0px');
            expect($breadcrumb.css('margin'), 'margin').to.equal('0px');
            expect($breadcrumb.css('list-style'), 'list-style').to.equal('none outside none');
            expect($breadcrumb.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
            expect($breadcrumb.css('font-size'), 'font-size').to.equal('12px');
            expect($breadcrumb.css('color'), 'color').to.equal(toRgb('#212529'));
        });
    });

    describe('BD Breadcrumb Item', () => {
        let $breadcrumbItem = $('<li class="c-breadcrumb-item"></li><li class="c-breadcrumb-item"></li>');
    
        before((done) => {
            $testContainer.append($breadcrumbItem);
            done();
        });
    
        it('Icon should have correct styles', () => {
            expect($breadcrumbItem.css('font-size'), 'font-size').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector(".c-breadcrumb-item").nextElementSibling, ':before').getPropertyValue('display'), 'display').to.equal('inline-block');
            expect(window.getComputedStyle(document.querySelector(".c-breadcrumb-item").nextElementSibling, ':before').getPropertyValue('font-family'), 'font-family').to.equal('FontAwesome');
            expect(window.getComputedStyle(document.querySelector(".c-breadcrumb-item").nextElementSibling, ':before').getPropertyValue('vertical-align'), 'vertical-align').to.equal('middle');
            expect(window.getComputedStyle(document.querySelector(".c-breadcrumb-item").nextElementSibling, ':before').getPropertyValue('font-size'), 'font-size').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector(".c-breadcrumb-item").nextElementSibling, ':before').getPropertyValue('color'), 'color').to.equal(toRgb('#dee2e6'));
            expect(window.getComputedStyle(document.querySelector(".c-breadcrumb-item").nextElementSibling, ':before').getPropertyValue('padding'), 'padding').to.equal('0px 12px');
        });

        it('Active should have correct styles', () => {
            $breadcrumbItem.addClass('c-breadcrumb-item-active');
            expect($breadcrumbItem.css('color'), 'color').to.equal(toRgb('#212529'));
        });
    });
})  