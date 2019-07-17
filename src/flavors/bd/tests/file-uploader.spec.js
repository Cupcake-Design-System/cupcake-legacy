describe('BD File uploader', () => {
    let $fileUpload = $('<div class="c-file-upload"></div>');

    before((done) => {
        $testContainer.append($fileUpload);
        done();
    });

    it('should have correct styles', () => {   
        expect($fileUpload.css('display'), 'display').to.equal('flex');
        expect($fileUpload.css('flex-direction'), 'flex-direction').to.equal('row');
        expect($fileUpload.css('justify-content'), 'justify-content').to.equal('center');
        expect($fileUpload.css('align-items'), 'align-items').to.equal('center');
        expect($fileUpload.css('border'), 'border').to.equal('2px dashed ' + toRgb('#0079bd'));
        expect($fileUpload.css('border-radius'), 'border-radius').to.equal('6px');   
        expect($fileUpload.css('background-color'), 'background-color').to.equal('rgba(0, 121, 189, 0.09)');
        expect($fileUpload.css('padding'), 'padding').to.equal('8px 16px');
        expect($fileUpload.css('font-size'), 'font-size').to.equal('12.8px');
        expect($fileUpload.css('color'), 'color').to.equal(toRgb('#0079bd'));
    });
})