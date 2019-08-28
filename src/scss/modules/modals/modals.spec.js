describe('Modals', () => {
  describe('Modal-default', () => {
    let $modalDefault = $(`<div class="c-modal c-modal-fade c-modal-in" style="display: block; position: static;">
                            <div class="c-modal-dialog">
                              <div class="c-modal-content">
                                <div class="c-modal-header">
                                  <h4 class="c-modal-title">Modal header</h4>
                                  <button type="button" class="c-modal-close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div class="c-modal-body">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus fugit perferendis voluptates cumque unde fuga reprehenderit illum doloribus, error, officia earum odit quasi minus odio eveniet explicabo accusantium, tempore quisquam.
                                </div>
                                <div class="c-modal-footer">
                                  <button class="c-btn c-btn-secondary c-m-right-sm">Cancel</button>
                                  <button class="c-btn c-btn-primary">Submit</button>
                                </div>
                              </div>
                            </div>
                          </div>`);

    before((done) => {
      $testContainer.append($modalDefault);
      done();
    });

    describe('Modal-default content', () => {
      before((done) => {
        $testContainer.append($modalDefault);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDefault.find('.c-modal-content').css('border'), 'border').to.equal(`1px solid ${toRgb('#dee2e6')}`);
        expect($modalDefault.find('.c-modal-content').css('box-shadow'), 'box-shadow').to.equal('rgba(73, 80, 87, 0.8) 0px 6px 20px 0px');
      });
    });
  
    describe('Modal-default header', () => {
      before((done) => {
        $testContainer.append($modalDefault);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDefault.find('.c-modal-header').css('padding'), 'padding').to.equal('12px 20px');
        expect($modalDefault.find('.c-modal-header').css('border-bottom'), 'border-bottom').to.equal(`1px solid ${toRgb('#dee2e6')}`);
      });
  
      describe('Modal-default title', () => {
        before((done) => {
          $testContainer.append($modalDefault);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalDefault.find('.c-modal-title').css('color'), 'color').to.equal(toRgb('#495057'));
          expect($modalDefault.find('.c-modal-title').css('font-size'), 'font-size').to.equal('14px');
          expect($modalDefault.find('.c-modal-title').css('font-weight'), 'font-weight').to.equal('700');
        });
      });
  
      describe('Modal-default close button', () => {
        before((done) => {
          $testContainer.append($modalDefault);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalDefault.find('.c-modal-close').css('color'), 'color').to.equal(toRgb('#868e96'));
        });
      });
    });
  
    describe('Modal-default body', () => {
      before((done) => {
        $testContainer.append($modalDefault);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDefault.find('.c-modal-body').css('padding'), 'padding').to.equal('20px');
        expect($modalDefault.find('.c-modal-body').css('font-size'), 'font-size').to.equal('12px');
        expect($modalDefault.find('.c-modal-body').css('line-height'), 'line-height').to.equal('15px');
        expect($modalDefault.find('.c-modal-body').css('color'), 'color').to.equal(toRgb('#495057'));
        expect($modalDefault.find('.c-modal-body').css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
      });
    });
  
    describe('Modal-default footer', () => {
      before((done) => {
        $testContainer.append($modalDefault);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDefault.find('.c-modal-footer').css('padding'), 'padding').to.equal('10px 20px');
        expect($modalDefault.find('.c-modal-footer').css('border-top'), 'border-top').to.equal(`1px solid ${toRgb('#dee2e6')}`);
      });
    });
  });

  describe('Modal-danger', () => {
    let $modalDanger = $ (`<div class="c-modal c-modal-danger c-modal-fade c-modal-in" style="display: block; position: static;">
                            <div class="c-modal-dialog">
                              <div class="c-modal-content">
                                <div class="c-modal-body c-text-center">
                                  <i class="fa fa-exclamation-circle c-modal-confirmation-icon"></i>
                                  <h2 class="c-modal-confirmation-title">Modal Title</h2>
                                  <p class="c-modal-confirmation-text">Modal Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, eum.</p>
                                  <div class="c-modal-confirmation-buttons">
                                    <button class="c-btn c-btn-secondary c-m-right-sm">Cancel</button>
                                    <button class="c-btn c-btn-danger">Delete</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>`);
    
    before((done) => {
      $testContainer.append($modalDanger);
      done();
    });

    describe('Modal-danger content', () => {
      before((done) => {
        $testContainer.append($modalDanger);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDanger.find('.c-modal-content').css('border'), 'border').to.equal(`1px solid ${toRgb('#dee2e6')}`);
        expect($modalDanger.find('.c-modal-content').css('box-shadow'), 'box-shadow').to.equal('rgba(73, 80, 87, 0.8) 0px 6px 20px 0px');
      });
    });
  
    describe('Modal-danger body', () => {
      before((done) => {
        $testContainer.append($modalDanger);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDanger.find('.c-modal-body').css('padding'), 'padding').to.equal('20px');
        expect($modalDanger.find('.c-modal-body').css('font-size'), 'font-size').to.equal('12px');
        expect($modalDanger.find('.c-modal-body').css('line-height'), 'line-height').to.equal('15px');
        expect($modalDanger.find('.c-modal-body').css('color'), 'color').to.equal(toRgb('#495057'));
        expect($modalDanger.find('.c-modal-body').css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
      });

      describe('Modal-danger confirmation title', () => {
        before((done) => {
          $testContainer.append($modalDanger);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalDanger.find('.c-modal-confirmation-title').css('font-size'), 'font-size').to.equal('20px');
          expect($modalDanger.find('.c-modal-confirmation-title').css('font-weight'), 'font-weight').to.equal('700');
        });
      });
    });
  });

  describe('Modal-info', () => {
    let $modalInfo = $ (`<div class="c-modal c-modal-info c-modal-fade c-modal-in" style="display: block; position: static;">
                            <div class="c-modal-dialog">
                              <div class="c-modal-content">
                                <div class="c-modal-body c-text-center">
                                  <i class="fa fa-question-circle c-modal-confirmation-icon"></i>
                                  <h2 class="c-modal-confirmation-title">Modal Title</h2>
                                  <p class="c-modal-confirmation-text">Modal Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, eum.</p>
                                  <div class="c-modal-confirmation-buttons">
                                    <button class="c-btn c-btn-secondary c-m-right-sm">Cancel</button>
                                    <button class="c-btn c-btn-primary">Ok</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>`);
    
    before((done) => {
      $testContainer.append($modalInfo);
      done();
    });

    describe('Modal-info content', () => {
      before((done) => {
        $testContainer.append($modalInfo);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalInfo.find('.c-modal-content').css('border'), 'border').to.equal(`1px solid ${toRgb('#dee2e6')}`);
        expect($modalInfo.find('.c-modal-content').css('box-shadow'), 'box-shadow').to.equal('rgba(73, 80, 87, 0.8) 0px 6px 20px 0px');
      });
    });
  
    describe('Modal-info body', () => {
      before((done) => {
        $testContainer.append($modalInfo);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalInfo.find('.c-modal-body').css('padding'), 'padding').to.equal('20px');
        expect($modalInfo.find('.c-modal-body').css('font-size'), 'font-size').to.equal('12px');
        expect($modalInfo.find('.c-modal-body').css('line-height'), 'line-height').to.equal('15px');
        expect($modalInfo.find('.c-modal-body').css('color'), 'color').to.equal(toRgb('#495057'));
        expect($modalInfo.find('.c-modal-body').css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
      });

      describe('Modal-info confirmation title', () => {
        before((done) => {
          $testContainer.append($modalInfo);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalInfo.find('.c-modal-confirmation-title').css('font-size'), 'font-size').to.equal('20px');
          expect($modalInfo.find('.c-modal-confirmation-title').css('font-weight'), 'font-weight').to.equal('700');
        });
      });
    });
  });
});
