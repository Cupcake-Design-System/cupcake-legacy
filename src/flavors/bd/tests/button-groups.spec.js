describe('BD Button Groups', () => {
  describe('BD Button Group', () => {
    let $defaultBtnGroup = $('<div class="c-btn-group"><button>Button</button></div>');

    before((done) => {
      $testContainer.append($defaultBtnGroup);
      done();
    });

    it('should have correct styles', () => {
      expect($defaultBtnGroup.css('display'), 'display').to.equal('inline-flex');
      expect($defaultBtnGroup.css('vertical-align'), 'vertical-align').to.equal('middle');
    });
  });

  describe('BD Button Primary Outline', () => {
    let $primaryBtnOutline = $('<button class="c-btn c-btn-primary-outline">Button</button>');

    before((done) => {
      $testContainer.append($primaryBtnOutline);
      done();
    });

    it('should have correct styles', () => {
      expect($primaryBtnOutline.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
      expect($primaryBtnOutline.css('color'), 'color').to.equal(toRgb('#0079bd'));
      expect($primaryBtnOutline.css('border'), 'border').to.equal('1px solid ' + toRgb('#0079bd'));
      expect($primaryBtnOutline.css('box-shadow'), 'box-shadow').to.equal('none');
    });
  });

  describe('BD Default Button Disabled', () => {
    let $defaultBtnBlock = $('<button class="c-btn c-btn-block">Button</button>');

    before((done) => {
      $testContainer.append($defaultBtnBlock);
      done();
    });

    it('should have correct styles', () => {
      expect($defaultBtnBlock.css('display'), 'display').to.equal('block');
      expect($defaultBtnBlock.css('text-align'), 'text-align').to.equal('center');
    });
  });
});
