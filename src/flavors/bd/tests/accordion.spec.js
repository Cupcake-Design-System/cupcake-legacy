describe('BD Accordions', () => {
  describe('BD Accordion label toggle', () => {
    let $AccordionLabelToggle = $(` <div class="c-accordion c-accordion-bordered">
                                      <div class="c-accordion-item-group">
                                        <input type="checkbox" class="c-accordion-trigger" id="accordion-item-1"/>
                                        <label class="c-accordion-item" for="accordion-item-1">
                                          <div class="c-accordion-item-panel">
                                            <div class="c-accordion-item-body">
                                              <div class="c-text-md c-text-bold">Joseph Santos</div>
                                              <div class="c-text-sm c-p-top-xs">Systems Administrator</div>
                                            </div>
                                            <div class="c-accordion-item-right">
                                              <i class="fa fa-envelope c-text-muted" aria-hidden="true"></i>
                                              <i class="fa fa-pencil" aria-hidden="true"></i>
                                              <span class="c-accordion-caret">
                                                <i class="fa fa-caret-right" aria-hidden="true"></i>
                                              </span>
                                            </div>
                                          </div>
                                        </label>
                                        <div class="c-accordion-item-content">
                                          <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                            earum, pariatur laudantium ea labore placeat, velit optio
                                            molestiae molestias reiciendis error saepe asperiores ab
                                            praesentium quis natus consectetur libero ut.
                                          </p>
                                        </div>
                                      </div>
                                    </div>`);

    describe('BD Accordion-trigger', () => {
      before((done) => {
        $testContainer.append($AccordionLabelToggle);
        done();
      });

      it('should have correct styles', () => {
        expect($AccordionLabelToggle.find('.c-accordion-trigger').css('position'), 'position').to.equal('absolute');
        expect($AccordionLabelToggle.find('.c-accordion-trigger').css('top'), 'top').to.equal('0px');
        expect($AccordionLabelToggle.find('.c-accordion-trigger').css('left'), 'left').to.equal('0px');
        expect($AccordionLabelToggle.find('.c-accordion-trigger').css('opacity'), 'opacity').to.equal('0');
      });
    });

    describe('BD Accordion-panel', () => {
      before((done) => {
        $testContainer.append($AccordionLabelToggle);
        done();
      });
  
      it('should have correct styles', () => {
        expect($AccordionLabelToggle.find('.c-accordion-item-panel').css('display'), 'display').to.equal('flex');
        expect($AccordionLabelToggle.find('.c-accordion-item-panel').css('align-items'), 'align-items').to.equal('center');
        expect($AccordionLabelToggle.find('.c-accordion-item-panel').css('padding'), 'padding').to.equal('10px');
      });
    });
    
    describe('BD Accordion-content', () => {
      before((done) => {
        $testContainer.append($AccordionLabelToggle);
        done();
      });
      
      it('should have correct styles', () => {
        expect($AccordionLabelToggle.find('.c-accordion-item-content').css('padding'), 'padding').to.equal('0px 16px');
        expect($AccordionLabelToggle.find('.c-accordion-item-content').css('overflow'), 'overflow').to.equal('hidden');
        expect($AccordionLabelToggle.find('.c-accordion-item-content').css('max-height'), 'max-height').to.equal('0px');
        expect($AccordionLabelToggle.find('.c-accordion-item-content').css('height'), 'height').to.equal('0px');
      });
    });

    describe('BD Accordion-item-right', () => {
      before((done) => {
        $testContainer.append($AccordionLabelToggle);
        done();
      });
  
      it('should have correct styles', () => {
        expect($AccordionLabelToggle.find('.c-accordion-item-right').css('display'), 'display').to.equal('flex');
        expect($AccordionLabelToggle.find('.c-accordion-item-right').css('flex-grow'), 'flex-grow').to.equal('1');
        expect($AccordionLabelToggle.find('.c-accordion-item-right').css('justify-content'), 'justify-content').to.equal('flex-end');
        expect($AccordionLabelToggle.find('.c-accordion-item-right').css('align-items'), 'align-items').to.equal('center');
        expect($AccordionLabelToggle.find('.c-accordion-item-right').css('padding-left'), 'padding-left').to.equal('15px');
        expect($AccordionLabelToggle.find('.c-accordion-item-right').css('color'), 'color').to.equal(toRgb('#495057'));
        expect($AccordionLabelToggle.find('.c-accordion-item-right').find('*').css('margin-left'), 'margin-left').to.equal('15px');
        expect(window.getComputedStyle(document.querySelector('.c-accordion-item-right .c-accordion-caret > i')).getPropertyValue('transition'), 'transition').to.equal('transform 0.15s ease 0s, -webkit-transform 0.15s ease 0s');
      });
    });
  });

  describe('BD Accordion label&body toggle', () => {
    let $AccordionLabelBodyToggle = $(`<div class="c-accordion c-accordion-bordered">
                                          <label class="c-accordion-item">
                                            <input type="checkbox" class="c-accordion-trigger">
                                            <div class="c-accordion-item-panel">
                                              <div class="c-accordion-item-body">
                                                <div class="c-text-md c-text-bold">Joseph Santos</div>
                                                <div class="c-text-sm c-p-top-xs">Systems Administrator</div>
                                              </div>
                                              <div class="c-accordion-item-right">
                                                <span class="c-accordion-caret">
                                                  <i class="fa fa-caret-right" aria-hidden="true"></i>
                                                </span>
                                              </div>
                                            </div>
                                            <div class="c-accordion-item-content">
                                              <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                earum, pariatur laudantium ea labore placeat, velit optio
                                                molestiae molestias reiciendis error saepe asperiores ab
                                                praesentium quis natus consectetur libero ut.
                                              </p>
                                            </div>
                                          </label>
                                        </div>`);

    describe('BD Accordion-trigger', () => {
      before((done) => {
        $testContainer.append($AccordionLabelBodyToggle);
        done();
      });

      it('should have correct styles', () => {
        expect($AccordionLabelBodyToggle.find('.c-accordion-trigger').css('position'), 'position').to.equal('absolute');
        expect($AccordionLabelBodyToggle.find('.c-accordion-trigger').css('top'), 'top').to.equal('0px');
        expect($AccordionLabelBodyToggle.find('.c-accordion-trigger').css('left'), 'left').to.equal('0px');
        expect($AccordionLabelBodyToggle.find('.c-accordion-trigger').css('opacity'), 'opacity').to.equal('0');
      });
    });

    describe('BD Accordion-panel', () => {
      before((done) => {
        $testContainer.append($AccordionLabelBodyToggle);
        done();
      });
  
      it('should have correct styles', () => {
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-panel').css('display'), 'display').to.equal('flex');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-panel').css('align-items'), 'align-items').to.equal('center');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-panel').css('padding'), 'padding').to.equal('10px');
      });
    });
    
    describe('BD Accordion-content', () => {
      before((done) => {
        $testContainer.append($AccordionLabelBodyToggle);
        done();
      });
      
      it('should have correct styles', () => {
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-content').css('padding'), 'padding').to.equal('0px 16px');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-content').css('overflow'), 'overflow').to.equal('hidden');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-content').css('max-height'), 'max-height').to.equal('0px');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-content').css('height'), 'height').to.equal('0px');
      });
    });

    describe('BD Accordion-item-right', () => {
      before((done) => {
        $testContainer.append($AccordionLabelBodyToggle);
        done();
      });
  
      it('should have correct styles', () => {
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-right').css('display'), 'display').to.equal('flex');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-right').css('flex-grow'), 'flex-grow').to.equal('1');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-right').css('justify-content'), 'justify-content').to.equal('flex-end');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-right').css('align-items'), 'align-items').to.equal('center');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-right').css('padding-left'), 'padding-left').to.equal('15px');
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-right').css('color'), 'color').to.equal(toRgb('#495057'));
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-right').find('*').css('margin-left'), 'margin-left').to.equal('15px');
        expect(window.getComputedStyle(document.querySelector('.c-accordion-item-right .c-accordion-caret > i')).getPropertyValue('transition'), 'transition').to.equal('transform 0.15s ease 0s, -webkit-transform 0.15s ease 0s');
      });
    });
  });
  
  describe('BD Accordion label toggle checked', () => {
    let $AccordionLabelToggleChecked = $(`<div class="c-accordion c-accordion-bordered">
                                            <div class="c-accordion-item-group">
                                              <input type="checkbox" class="c-accordion-trigger" id="accordion-item-2" checked="">
                                              <label class="c-accordion-item" for="accordion-item-2">
                                                <div class="c-accordion-item-panel">
                                                  <div class="c-accordion-item-body">
                                                    <div class="c-text-md c-text-bold">Joseph Santos</div>
                                                    <div class="c-text-sm c-p-top-xs">Systems Administrator</div>
                                                  </div>
                                                  <div class="c-accordion-item-right">
                                                    <i class="fa fa-envelope c-text-muted" aria-hidden="true"></i>
                                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                                    <span class="c-accordion-caret">
                                                      <i class="fa fa-caret-right" aria-hidden="true"></i>
                                                    </span>
                                                  </div>
                                                </div>
                                              </label>
                                              <div class="c-accordion-item-content">
                                                <p>
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                  earum, pariatur laudantium ea labore placeat, velit optio
                                                  molestiae molestias reiciendis error saepe asperiores ab
                                                  praesentium quis natus consectetur libero ut.
                                                </p>
                                              </div>
                                            </div>
                                          </div>`);

    before((done) => {
      $testContainer.append($AccordionLabelToggleChecked);
      done();
    });
    
    it('should have correct styles', () => {
      expect(window.getComputedStyle(document.querySelector('.c-accordion-trigger:checked ~ .c-accordion-item-content')).getPropertyValue('overflow'), 'overflow').to.equal('auto');
    });
  });
  
  describe('BD Accordion label&body toggle checked', () => {
    let $AccordionLabelBodyToggleChecked = $(`<div class="c-accordion c-accordion-bordered">
                                                <label class="c-accordion-item">
                                                  <input type="checkbox" class="c-accordion-trigger" checked="">
                                                  <div class="c-accordion-item-panel">
                                                    <div class="c-accordion-item-body">
                                                      <div class="c-text-md c-text-bold">Joseph Santos</div>
                                                      <div class="c-text-sm c-p-top-xs">Systems Administrator</div>
                                                    </div>
                                                    <div class="c-accordion-item-right">
                                                      <span class="c-accordion-caret">
                                                        <i class="fa fa-caret-right" aria-hidden="true"></i>
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div class="c-accordion-item-content">
                                                    <p>
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                      earum, pariatur laudantium ea labore placeat, velit optio
                                                      molestiae molestias reiciendis error saepe asperiores ab
                                                      praesentium quis natus consectetur libero ut.
                                                    </p>
                                                  </div>
                                                </label>
                                              </div>`);

    before((done) => {
      $testContainer.append($AccordionLabelBodyToggleChecked);
      done();
    });
    
    it('should have correct styles', () => {
      expect($AccordionLabelBodyToggleChecked.find('.c-accordion-trigger:checked ~ .c-accordion-item-content').css('overflow'), 'overflow').to.equal('auto');
    });
  });
});
