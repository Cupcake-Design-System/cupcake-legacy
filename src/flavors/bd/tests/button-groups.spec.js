describe('BD Button Groups', () => {
  describe('BD Default Button Group', () => {
    let $defaultBtnGroup = $(`<div class="c-btn-group">
                                <button class="c-btn c-btn-primary">Button</button>
                                <button class="c-btn c-btn-primary">Button</button>
                                <button class="c-btn c-btn-primary">Button</button>
                              </div>`);

    before((done) => {
      $testContainer.append($defaultBtnGroup);
      done();
    });

    it('should have correct styles', () => {
      expect($defaultBtnGroup.css('display'), 'display').to.equal('inline-flex');
      expect($defaultBtnGroup.css('vertical-align'), 'vertical-align').to.equal('middle');

      //c-btn-group c-btn
      expect(window.getComputedStyle(document.querySelector('.c-btn-group .c-btn')).getPropertyValue('position'), 'position').to.equal('relative');

      //c-btn-group c-btn:first-child
      expect(window.getComputedStyle(document.querySelector('.c-btn-group .c-btn:first-child')).getPropertyValue('border-left-width'), 'border-left-width').to.equal('1px');
      expect(window.getComputedStyle(document.querySelector('.c-btn-group .c-btn:first-child')).getPropertyValue('border-top-right-radius'), 'border-top-right-radius').to.equal('0px');
      expect(window.getComputedStyle(document.querySelector('.c-btn-group .c-btn:first-child')).getPropertyValue('border-bottom-right-radius'), 'border-bottom-right-radius').to.equal('0px');

      //c-btn-group c-btn:not(:first-child):not(:last-child)
      expect(window.getComputedStyle(document.querySelector('.c-btn-group .c-btn:not(:first-child):not(:last-child)')).getPropertyValue('border-bottom-right-radius'), 'border-radius').to.equal('0px');

      //c-btn-group c-btn:last-child
      expect(window.getComputedStyle(document.querySelector('.c-btn-group .c-btn:last-child')).getPropertyValue('border-left-width'), 'border-left-width').to.equal('0px');
      expect(window.getComputedStyle(document.querySelector('.c-btn-group .c-btn:last-child')).getPropertyValue('border-top-left-radius'), 'border-top-left-radius').to.equal('0px');
      expect(window.getComputedStyle(document.querySelector('.c-btn-group .c-btn:last-child')).getPropertyValue('border-bottom-left-radius'), 'border-bottom-left-radius').to.equal('0px');
    });
  });
  
  describe('BD Vertical Button Group', () => {
    let $verticalBtnGroup = $(`<div class="c-btn-group-vertical">
                                <button class="c-btn c-btn-primary">Button</button>
                                <button class="c-btn c-btn-primary">Button</button>
                                <button class="c-btn c-btn-primary">Button</button>
                              </div>`);

    before((done) => {
      $testContainer.append($verticalBtnGroup);
      done();
    });

    it('should have correct styles', () => {
      expect($verticalBtnGroup.css('display'), 'display').to.equal('inline-flex');
      expect($verticalBtnGroup.css('flex-direction'), 'flex-direction').to.equal('column');

      //c-btn-group-vertical c-btn:first-child:not(:only-child)
      expect(window.getComputedStyle(document.querySelector('.c-btn-group-vertical .c-btn:first-child:not(:only-child)')).getPropertyValue('margin-top'), 'margin-top').to.equal('0px');
      expect(window.getComputedStyle(document.querySelector('.c-btn-group-vertical .c-btn:first-child:not(:only-child)')).getPropertyValue('border-bottom-right-radius'), 'border-bottom-right-radius').to.equal('0px');
      expect(window.getComputedStyle(document.querySelector('.c-btn-group-vertical .c-btn:first-child:not(:only-child)')).getPropertyValue('border-bottom-left-radius'), 'border-bottom-left-radius').to.equal('0px');

      //c-btn-group-vertical c-btn:not(:first-child):not(:last-child)
      expect(window.getComputedStyle(document.querySelector('.c-btn-group-vertical .c-btn:not(:first-child):not(:last-child)')).getPropertyValue('border-radius'), 'border-radius').to.equal('0px');


      //c-btn-group-vertical c-btn:last-child:not(:only-child)
      expect(window.getComputedStyle(document.querySelector('.c-btn-group-vertical .c-btn:last-child:not(:only-child)')).getPropertyValue('border-top-right-radius'), 'border-top-right-radius').to.equal('0px');
      expect(window.getComputedStyle(document.querySelector('.c-btn-group-vertical .c-btn:last-child:not(:only-child)')).getPropertyValue('border-top-left-radius'), 'border-top-left-radius').to.equal('0px');
    });
  });
});
