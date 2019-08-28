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
        expect($quote.css('color'), 'color').to.equal(toRgb('#495057'));
        expect($quote.css('border-left'), 'border-left').to.equal('3px solid ' + toRgb('#1b6ec2'));

        //c-cite
        expect($quote.find('cite').css('font-weight'), 'font-weight').to.equal('700');
        expect($quote.find('cite').css('color'), 'color').to.equal(toRgb('#495057'));
    });
})
