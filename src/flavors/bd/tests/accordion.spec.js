describe('BD Accordions', () => {
  describe('BD Accordion', () => {
    let $Accordion = $('<div class="accordion c-accordion-bordered"></div>');

    before((done) => {
      $testContainer.append($Accordion);
      done();
    });

    it('should have correct styles', () => {
      expect($Accordion.css('padding-left'), 'padding-left').to.equal('0px');
      expect($Accordion.css('padding-right'), 'padding-right').to.equal('0px');
    })
  });

  describe('BD Accordion-trigger-group', () => {
    let $AccordionTriggerGroup = $(`<div>
                                      <input class="c-accordion-trigger" checked=""><div class="c-accordion-item-content"></div>
                                    </div>`);
    before((done) => {
      $testContainer.append($AccordionTriggerGroup);
      done();
    });

    it.only('should have correct styles', () => {
      expect($AccordionTriggerGroup.find('.c-accordion-trigger').css('position'), 'position').to.equal('absolute');
      expect($AccordionTriggerGroup.find('.c-accordion-trigger').css('top'), 'top').to.equal('0px');
      expect($AccordionTriggerGroup.find('.c-accordion-trigger').css('left'), 'left').to.equal('0px');
      expect($AccordionTriggerGroup.find('.c-accordion-trigger').css('opacity'), 'opacity').to.equal('0');
      expect(window.getComputedStyle(document.querySelector('.c-accordion-trigger:checked ~ .c-accordion-item-content').getPropertyValue('height'), 'height').to.equal('auto'));
      // expect(window.getComputedStyle(document.querySelector('.c-accordion-trigger:checked ~ .c-accordion-item-content').getPropertyValue('overflow'), 'overflow').to.equal('auto'));
      // expect(window.getComputedStyle(document.querySelector('.c-accordion-trigger:checked ~ .c-accordion-item-content').getPropertyValue('max-height'), 'max-height').to.equal('500em'));
    })
  })

  describe('BD Accordion-panel', () => {
    let $AccordionPanel = $('<div class="c-accordion-item-panel"></div>');

    before((done) => {
      $testContainer.append($AccordionPanel);
      done();
    });

    it('should have correct styles', () => {
      expect($AccordionPanel.css('display'), 'display').to.equal('flex');
      expect($AccordionPanel.css('align-items'), 'align-items').to.equal('center');
      expect($AccordionPanel.css('padding'), 'padding').to.equal('10px');
    });
  });

  describe('BD Accordion-panel-bordered', () => {
    let $AccordionPanelBordered = $(`<div class="c-accordion c-accordion-bordered">
                                        <label class="c-accordion-item">
                                            <div class="c-accordion-item-panel"></div>
                                        </label>
                                      </div>`);

    before((done) => {
      $testContainer.append($AccordionPanelBordered);
      done();
    });
    
    it('should have correct styles', () => {
      expect($AccordionPanelBordered.find('.c-accordion-item-panel').css('border-top'), 'border-top').to.equal('1px solid ' + toRgb('#dee2e6'));
    });
  });

  describe('BD Accordion-content', () => {
    let $AccordionContent = $('<div class="c-accordion-item-content"></div>');

    before((done) => {
      $testContainer.append($AccordionContent);
      done();
    });

    it('should have correct styles', () => {
      expect($AccordionContent.css('padding'), 'padding').to.equal('0px 16px');
      expect($AccordionContent.css('overflow'), 'overflow').to.equal('hidden');
      expect($AccordionContent.css('max-height'), 'max-height').to.equal('0px');
      expect($AccordionContent.css('height'), 'height').to.equal('0px');
    });
  });

  describe('BD Accordion-item-right', () => {
    let $AccordionItemRight = $(`<div class="c-accordion-item-right">
                                    <span class="c-accordion-caret">
                                      <i class="fa fa-caret-right" aria-hidden="true"></i>
                                    </span>
                                  </div>`);

    before((done) => {
      $testContainer.append($AccordionItemRight);
      done();
    });

    it('should have correct styles', () => {
      expect($AccordionItemRight.css('display'), 'display').to.equal('flex');
      expect($AccordionItemRight.css('flex-grow'), 'flex-grow').to.equal('1');
      expect($AccordionItemRight.css('justify-content'), 'justify-content').to.equal('flex-end');
      expect($AccordionItemRight.css('align-items'), 'align-items').to.equal('center');
      expect($AccordionItemRight.css('padding-left'), 'padding-left').to.equal('15px');
      expect($AccordionItemRight.css('color'), 'color').to.equal(toRgb('#495057'));
      expect($AccordionItemRight.find('*').css('margin-left'), 'margin-left').to.equal('15px');
    });
  });

  
});
