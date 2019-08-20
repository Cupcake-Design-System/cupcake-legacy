describe('BD Modals', () => {

  describe('BD Modal-default', () => {
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

    it('should have correct styles', () => {
      expect($modalDefault.css('opacity'), 'opacity').to.equal('1');
      expect($modalDefault.css('top'), 'top').to.equal('0px');
      expect($modalDefault.css('bottom'), 'bottom').to.equal('0px');
      expect($modalDefault.css('left'), 'left').to.equal('0px');
      expect($modalDefault.css('right'), 'right').to.equal('0px');
      expect($modalDefault.css('transition'), 'transition').to.equal('opacity 0.35s ease 0s');
    });

    describe('BD Modal-default dialog', () => {
      before((done) => {
        $testContainer.append($modalDefault);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDefault.find('.c-modal-dialog').css('margin-top'), 'margin-top').to.equal('30px');
        expect($modalDefault.find('.c-modal-dialog').css('margin-bottom'), 'margin-bottom').to.equal('30px');
        expect($modalDefault.find('.c-modal-dialog').css('max-width'), 'max-width').to.equal('600px');
      });
    });
  
    describe('BD Modal-default content', () => {
      before((done) => {
        $testContainer.append($modalDefault);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDefault.find('.c-modal-content').css('position'), 'position').to.equal('relative');
        expect($modalDefault.find('.c-modal-content').css('display'), 'display').to.equal('flex');
        expect($modalDefault.find('.c-modal-content').css('flex-direction'), 'flex-direction').to.equal('column');
        expect($modalDefault.find('.c-modal-content').css('border'), 'border').to.equal('0px none rgb(65, 65, 82)');
        expect($modalDefault.find('.c-modal-content').css('background-color'), 'background-color').to.equal('rgb(255, 255, 255)');
        expect($modalDefault.find('.c-modal-content').css('background-clip'), 'background-clip').to.equal('padding-box');
        expect($modalDefault.find('.c-modal-content').css('box-shadow'), 'box-shadow').to.equal('rgba(65, 65, 82, 0.8) 0px 6px 20px 0px');
        expect($modalDefault.find('.c-modal-content').css('word-wrap'), 'word-wrap').to.equal('break-word');
        expect($modalDefault.find('.c-modal-content').css('overflow-wrap'), 'overflow-wrap').to.equal('break-word');
      });
    });
  
    describe('BD Modal-default header', () => {
      before((done) => {
        $testContainer.append($modalDefault);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDefault.find('.c-modal-header').css('display'), 'display').to.equal('flex');
        expect($modalDefault.find('.c-modal-header').css('align-items'), 'align-items').to.equal('center');
        expect($modalDefault.find('.c-modal-header').css('justify-content'), 'justify-content').to.equal('space-between');
        expect($modalDefault.find('.c-modal-header').css('padding'), 'padding').to.equal('20px 30px 0px');
        expect($modalDefault.find('.c-modal-header').css('border-bottom'), 'border-bottom').to.equal('0px none rgb(65, 65, 82)');
      });
  
      describe('BD Modal-default title', () => {
        before((done) => {
          $testContainer.append($modalDefault);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalDefault.find('.c-modal-title').css('margin'), 'margin').to.equal('0px');
          expect($modalDefault.find('.c-modal-title').css('color'), 'color').to.equal(toRgb('#414152'));
          expect($modalDefault.find('.c-modal-title').css('font-size'), 'font-size').to.equal('18px');
          expect($modalDefault.find('.c-modal-title').css('font-weight'), 'font-weight').to.equal('600');
        });
      });
  
      describe('BD Modal-default close button', () => {
        before((done) => {
          $testContainer.append($modalDefault);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalDefault.find('.c-modal-close').css('position'), 'position').to.equal('absolute');
          expect($modalDefault.find('.c-modal-close').css('top'), 'top').to.equal('0px');
          expect($modalDefault.find('.c-modal-close').css('right'), 'right').to.equal('0px');
          expect($modalDefault.find('.c-modal-close').css('width'), 'width').to.equal('30px');
          expect($modalDefault.find('.c-modal-close').css('height'), 'height').to.equal('30px');
          expect($modalDefault.find('.c-modal-close').css('color'), 'color').to.equal(toRgb('#000'));
          expect($modalDefault.find('.c-modal-close').css('opacity'), 'opacity').to.equal('0.4');
          expect($modalDefault.find('.c-modal-close').css('cursor'), 'cursor').to.equal('pointer');
          expect($modalDefault.find('.c-modal-close').css('font-weight'), 'font-weight').to.equal('600');
          expect($modalDefault.find('.c-modal-close').css('transition'), 'transition').to.equal('color 0.1s linear 0s');
          expect($modalDefault.find('.c-modal-close').css('padding'), 'padding').to.equal('0px');
          expect($modalDefault.find('.c-modal-close').css('border'), 'border').to.equal('0px none rgb(0, 0, 0)');
          expect($modalDefault.find('.c-modal-close').css('border-radius'), 'border-radius').to.equal('0px');
          expect($modalDefault.find('.c-modal-close').css('background'), 'background').to.equal('rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box');
        });
      });
    });
  
    describe('BD Modal-default body', () => {
      before((done) => {
        $testContainer.append($modalDefault);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDefault.find('.c-modal-body').css('position'), 'position').to.equal('relative');
        expect($modalDefault.find('.c-modal-body').css('flex'), 'flex').to.equal('1 1 auto');
        expect($modalDefault.find('.c-modal-body').css('min-height'), 'min-height').to.equal('1px');
        expect($modalDefault.find('.c-modal-body').css('padding'), 'padding').to.equal('15px 30px');
        expect($modalDefault.find('.c-modal-body').css('font-size'), 'font-size').to.equal('14px');
        expect($modalDefault.find('.c-modal-body').css('line-height'), 'line-height').to.equal('20px');
        expect($modalDefault.find('.c-modal-body').css('color'), 'color').to.equal(toRgb('#414152'));
        expect($modalDefault.find('.c-modal-body').css('font-style'), 'font-style').to.equal('normal');
        expect($modalDefault.find('.c-modal-body').css('font-weight'), 'font-weight').to.equal('400');
        expect($modalDefault.find('.c-modal-body').css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
      });
    });
  
    describe('BD Modal-default footer', () => {
      before((done) => {
        $testContainer.append($modalDefault);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDefault.find('.c-modal-footer').css('display'), 'display').to.equal('flex');
        expect($modalDefault.find('.c-modal-footer').css('align-items'), 'align-items').to.equal('center');
        expect($modalDefault.find('.c-modal-footer').css('justify-content'), 'justify-content').to.equal('flex-end');
        expect($modalDefault.find('.c-modal-footer').css('padding'), 'padding').to.equal('15px 30px');
        expect($modalDefault.find('.c-modal-footer').css('border-top'), 'border-top').to.equal('0px none rgb(65, 65, 82)');
      });
    });
  });

  describe('BD Modal-danger', () => {
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

    it('should have correct styles', () => {
      expect($modalDanger.css('opacity'), 'opacity').to.equal('1');
      expect($modalDanger.css('top'), 'top').to.equal('0px');
      expect($modalDanger.css('bottom'), 'bottom').to.equal('0px');
      expect($modalDanger.css('left'), 'left').to.equal('0px');
      expect($modalDanger.css('right'), 'right').to.equal('0px');
      expect($modalDanger.css('transition'), 'transition').to.equal('opacity 0.35s ease 0s');
    });

    describe('BD Modal-danger dialog', () => {
      before((done) => {
        $testContainer.append($modalDanger);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDanger.find('.c-modal-dialog').css('margin-top'), 'margin-top').to.equal('140px');
        expect($modalDanger.find('.c-modal-dialog').css('margin-bottom'), 'margin-bottom').to.equal('30px');
        expect($modalDanger.find('.c-modal-dialog').css('max-width'), 'max-width').to.equal('600px');
      });
    });
  
    describe('BD Modal-danger content', () => {
      before((done) => {
        $testContainer.append($modalDanger);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDanger.find('.c-modal-content').css('position'), 'position').to.equal('relative');
        expect($modalDanger.find('.c-modal-content').css('display'), 'display').to.equal('flex');
        expect($modalDanger.find('.c-modal-content').css('flex-direction'), 'flex-direction').to.equal('column');
        expect($modalDanger.find('.c-modal-content').css('border'), 'border').to.equal('0px none rgb(65, 65, 82)');
        expect($modalDanger.find('.c-modal-content').css('background-color'), 'background-color').to.equal('rgb(255, 255, 255)');
        expect($modalDanger.find('.c-modal-content').css('background-clip'), 'background-clip').to.equal('padding-box');
        expect($modalDanger.find('.c-modal-content').css('box-shadow'), 'box-shadow').to.equal('rgba(65, 65, 82, 0.8) 0px 6px 20px 0px');
        expect($modalDanger.find('.c-modal-content').css('word-wrap'), 'word-wrap').to.equal('break-word');
        expect($modalDanger.find('.c-modal-content').css('overflow-wrap'), 'overflow-wrap').to.equal('break-word');
      });
    });
  
    describe('BD Modal-danger body', () => {
      before((done) => {
        $testContainer.append($modalDanger);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalDanger.find('.c-modal-body').css('position'), 'position').to.equal('relative');
        expect($modalDanger.find('.c-modal-body').css('flex'), 'flex').to.equal('1 1 auto');
        expect($modalDanger.find('.c-modal-body').css('text-align'), 'text-align').to.equal('center');
        expect($modalDanger.find('.c-modal-body').css('min-height'), 'min-height').to.equal('1px');
        expect($modalDanger.find('.c-modal-body').css('padding'), 'padding').to.equal('15px 30px');
        expect($modalDanger.find('.c-modal-body').css('font-size'), 'font-size').to.equal('14px');
        expect($modalDanger.find('.c-modal-body').css('line-height'), 'line-height').to.equal('20px');
        expect($modalDanger.find('.c-modal-body').css('color'), 'color').to.equal(toRgb('#414152'));
        expect($modalDanger.find('.c-modal-body').css('font-style'), 'font-style').to.equal('normal');
        expect($modalDanger.find('.c-modal-body').css('font-weight'), 'font-weight').to.equal('400');
        expect($modalDanger.find('.c-modal-body').css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
      });

      describe('BD Modal-danger confirmation icon', () => {
        before((done) => {
          $testContainer.append($modalDanger);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalDanger.find('.c-modal-confirmation-icon').css('color'), 'color').to.equal(toRgb('#e03131'));
          expect($modalDanger.find('.c-modal-confirmation-icon').css('font-size'), 'font-size').to.equal('17px');
          expect($modalDanger.find('.c-modal-confirmation-icon').css('margin'), 'margin').to.equal('16px 0px 12px');
        });
      });

      describe('BD Modal-danger confirmation title', () => {
        before((done) => {
          $testContainer.append($modalDanger);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalDanger.find('.c-modal-confirmation-title').css('font-size'), 'font-size').to.equal('18px');
          expect($modalDanger.find('.c-modal-confirmation-title').css('font-weight'), 'font-weight').to.equal('600');
          expect($modalDanger.find('.c-modal-confirmation-title').css('margin'), 'margin').to.equal('0px 0px 15px');
        });
      });

      describe('BD Modal-danger confirmation text', () => {
        before((done) => {
          $testContainer.append($modalDanger);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalDanger.find('.c-modal-confirmation-text').css('margin'), 'margin').to.equal('0px');
        });
      });

      describe('BD Modal-danger confirmation buttons', () => {
        before((done) => {
          $testContainer.append($modalDanger);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalDanger.find('.c-modal-confirmation-buttons').css('margin'), 'margin').to.equal('25px 0px 15px');
        });
      });
    });
  });

  describe('BD Modal-info', () => {
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

    it('should have correct styles', () => {
      expect($modalInfo.css('opacity'), 'opacity').to.equal('1');
      expect($modalInfo.css('top'), 'top').to.equal('0px');
      expect($modalInfo.css('bottom'), 'bottom').to.equal('0px');
      expect($modalInfo.css('left'), 'left').to.equal('0px');
      expect($modalInfo.css('right'), 'right').to.equal('0px');
      expect($modalInfo.css('transition'), 'transition').to.equal('opacity 0.35s ease 0s');
    });

    describe('BD Modal-info dialog', () => {
      before((done) => {
        $testContainer.append($modalInfo);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalInfo.find('.c-modal-dialog').css('margin-top'), 'margin-top').to.equal('140px');
        expect($modalInfo.find('.c-modal-dialog').css('margin-bottom'), 'margin-bottom').to.equal('30px');
        expect($modalInfo.find('.c-modal-dialog').css('max-width'), 'max-width').to.equal('600px');
      });
    });
  
    describe('BD Modal-info content', () => {
      before((done) => {
        $testContainer.append($modalInfo);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalInfo.find('.c-modal-content').css('position'), 'position').to.equal('relative');
        expect($modalInfo.find('.c-modal-content').css('display'), 'display').to.equal('flex');
        expect($modalInfo.find('.c-modal-content').css('flex-direction'), 'flex-direction').to.equal('column');
        expect($modalInfo.find('.c-modal-content').css('border'), 'border').to.equal('0px none rgb(65, 65, 82)');
        expect($modalInfo.find('.c-modal-content').css('background-color'), 'background-color').to.equal('rgb(255, 255, 255)');
        expect($modalInfo.find('.c-modal-content').css('background-clip'), 'background-clip').to.equal('padding-box');
        expect($modalInfo.find('.c-modal-content').css('box-shadow'), 'box-shadow').to.equal('rgba(65, 65, 82, 0.8) 0px 6px 20px 0px');
        expect($modalInfo.find('.c-modal-content').css('word-wrap'), 'word-wrap').to.equal('break-word');
        expect($modalInfo.find('.c-modal-content').css('overflow-wrap'), 'overflow-wrap').to.equal('break-word');
      });
    });
  
    describe('BD Modal-info body', () => {
      before((done) => {
        $testContainer.append($modalInfo);
        done();
      });
  
      it('should have correct styles', () => {
        expect($modalInfo.find('.c-modal-body').css('position'), 'position').to.equal('relative');
        expect($modalInfo.find('.c-modal-body').css('flex'), 'flex').to.equal('1 1 auto');
        expect($modalInfo.find('.c-modal-body').css('text-align'), 'text-align').to.equal('center');
        expect($modalInfo.find('.c-modal-body').css('min-height'), 'min-height').to.equal('1px');
        expect($modalInfo.find('.c-modal-body').css('padding'), 'padding').to.equal('15px 30px');
        expect($modalInfo.find('.c-modal-body').css('font-size'), 'font-size').to.equal('14px');
        expect($modalInfo.find('.c-modal-body').css('line-height'), 'line-height').to.equal('20px');
        expect($modalInfo.find('.c-modal-body').css('color'), 'color').to.equal(toRgb('#414152'));
        expect($modalInfo.find('.c-modal-body').css('font-style'), 'font-style').to.equal('normal');
        expect($modalInfo.find('.c-modal-body').css('font-weight'), 'font-weight').to.equal('400');
        expect($modalInfo.find('.c-modal-body').css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
      });

      describe('BD Modal-info confirmation icon', () => {
        before((done) => {
          $testContainer.append($modalInfo);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalInfo.find('.c-modal-confirmation-icon').css('color'), 'color').to.equal(toRgb('#4dadf7'));
          expect($modalInfo.find('.c-modal-confirmation-icon').css('font-size'), 'font-size').to.equal('17px');
          expect($modalInfo.find('.c-modal-confirmation-icon').css('margin'), 'margin').to.equal('16px 0px 12px');
        });
      });

      describe('BD Modal-info confirmation title', () => {
        before((done) => {
          $testContainer.append($modalInfo);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalInfo.find('.c-modal-confirmation-title').css('font-size'), 'font-size').to.equal('18px');
          expect($modalInfo.find('.c-modal-confirmation-title').css('font-weight'), 'font-weight').to.equal('600');
          expect($modalInfo.find('.c-modal-confirmation-title').css('margin'), 'margin').to.equal('0px 0px 15px');
        });
      });

      describe('BD Modal-info confirmation text', () => {
        before((done) => {
          $testContainer.append($modalInfo);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalInfo.find('.c-modal-confirmation-text').css('margin'), 'margin').to.equal('0px');
        });
      });

      describe('BD Modal-info confirmation buttons', () => {
        before((done) => {
          $testContainer.append($modalInfo);
          done();
        });
    
        it('should have correct styles', () => {
          expect($modalInfo.find('.c-modal-confirmation-buttons').css('margin'), 'margin').to.equal('25px 0px 15px');
        });
      });
    });
  });

});
