describe('BD Button Groups', () => {
  describe('BD Default Button Group', () => {
    let $defaultBtnGroup = $(`<div class="c-btn-group">
                                <button>Button</button>
                                <button>Button</button>
                                <button>Button</button>
                              </div>`);

    before((done) => {
      $testContainer.append($defaultBtnGroup);
      done();
    });

    it('should have correct styles', () => {
      expect($defaultBtnGroup.css('display'), 'display').to.equal('inline-flex');
      expect($defaultBtnGroup.css('vertical-align'), 'vertical-align').to.equal('middle');
    });
  });
  
  describe('BD Vertical Button Group', () => {
    let $verticalBtnGroup = $(`<div class="c-btn-group-vertical">
                                <button>Button</button>
                                <button>Button</button>
                                <button>Button</button>
                              </div>`);

    before((done) => {
      $testContainer.append($verticalBtnGroup);
      done();
    });

    it('should have correct styles', () => {
      expect($verticalBtnGroup.css('display'), 'display').to.equal('inline-flex');
      expect($verticalBtnGroup.css('flex-direction'), 'flex-direction').to.equal('column');
    });
  });
});
