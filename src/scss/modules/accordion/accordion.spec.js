describe('Accordions', () => {
  describe('Accordion label toggle', () => {
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

    describe('Accordion-panel', () => {
      before((done) => {
        $testContainer.append($AccordionLabelToggle);
        done();
      });
  
      it('should have correct styles', () => {
        expect($AccordionLabelToggle.find('.c-accordion-item-panel').css('padding'), 'padding').to.equal('16px 12px');
      });
    });
  });

  describe('Accordion label&body toggle', () => {
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


    describe('Accordion-panel', () => {
      before((done) => {
        $testContainer.append($AccordionLabelBodyToggle);
        done();
      });
  
      it('should have correct styles', () => {
        expect($AccordionLabelBodyToggle.find('.c-accordion-item-panel').css('padding'), 'padding').to.equal('16px 12px');
      });
    });
  });
});
