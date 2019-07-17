describe('BD Blockquote', () => {
    describe('BD Blockquote', () => {
        let $Blockquote = $('<blockquote class="c-blockquote"></blockquote>');

        before((done) => {
            $testContainer.append($Blockquote);
            done();
        });

        it('should have correct styles', () => {   
            expect($Blockquote.css('margin'), 'margin').to.equal('0px 0px 16px');
            expect($Blockquote.css('padding'), 'padding').to.equal('9px 20px 0px 19px');
            expect($Blockquote.css('font-size'), 'font-size').to.equal('20px');
            expect($Blockquote.css('font-weight'), 'font-weight').to.equal('400');
            expect($Blockquote.css('line-height'), 'line-height').to.equal('20px');
            expect($Blockquote.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($Blockquote.css('border-left'), 'border-left').to.equal('3px solid ' + toRgb('#0079bd'));
        });
    });

    describe('BD Cite', () => {
        let $Cite = $('<cite class="c-cite">Cite</cite>');

        before((done) => {
            $testContainer.append($Cite);
            done();
        });

        it('should have correct styles', () => {   
            expect($Cite.css('display'), 'display').to.equal('block');
            expect($Cite.css('padding'), 'padding').to.equal('10px 0px');
            expect($Cite.css('font-size'), 'font-size').to.equal('10px');
            expect($Cite.css('font-weight'), 'font-weight').to.equal('600');
            expect($Cite.css('line-height'), 'line-height').to.equal('15px');
            expect($Cite.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($Cite.css('letter-spacing'), 'letter-spacing').to.equal('0.83333px');
            expect($Cite.css('text-transform'), 'text-transform').to.equal('uppercase');
            expect(window.getComputedStyle(document.querySelector(".c-cite"), ':before').getPropertyValue('content'), 'content').to.equal('"— "');
        });
    });
})
