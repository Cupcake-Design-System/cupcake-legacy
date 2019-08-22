describe('Blockquote', () => {
    let $quote = $(`<blockquote class="c-blockquote">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui ligula, lobortis at sapien ac, commodo varius ipsum. Nulla non est ac nisl tristique elementum.
                        <cite class="c-cite">Ian Rob Lambert</cite>
                    </blockquote>`);

    before((done) => {
        $testContainer.append($quote);
        done();
    });

    it('should have correct styles', () => {   
        //c-blockquote
        expect($quote.css('margin'), 'margin').to.equal('0px 0px 16px');
        expect($quote.css('padding'), 'padding').to.equal('9px 20px 0px 19px');
        expect($quote.css('font-size'), 'font-size').to.equal('20px');
        expect($quote.css('font-weight'), 'font-weight').to.equal('400');
        expect($quote.css('line-height'), 'line-height').to.equal('20px');
        expect($quote.css('color'), 'color').to.equal(toRgb('#495057'));
        expect($quote.css('border-left'), 'border-left').to.equal('3px solid ' + toRgb('#1b6ec2'));

        //c-cite
        expect($quote.find('cite').css('display'), 'display').to.equal('block');
        expect($quote.find('cite').css('padding'), 'padding').to.equal('10px 0px');
        expect($quote.find('cite').css('font-size'), 'font-size').to.equal('10px');
        expect($quote.find('cite').css('font-weight'), 'font-weight').to.equal('700');
        expect($quote.find('cite').css('line-height'), 'line-height').to.equal('15px');
        expect($quote.find('cite').css('color'), 'color').to.equal(toRgb('#495057'));
        expect($quote.find('cite').css('letter-spacing'), 'letter-spacing').to.equal('0.83333px');
        expect($quote.find('cite').css('text-transform'), 'text-transform').to.equal('uppercase');
        expect(window.getComputedStyle(document.querySelector(".c-cite"), ':before').getPropertyValue('content'), 'content').to.equal('"— "');
    });
})
