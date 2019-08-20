describe('BD Buttons', () => {
  
  // c-btn c-btn-default
  describe('BD Default Button', () => {
    let $defaultBtn = $('<button class="c-btn c-btn-default">Button</button>');
    let $defaultBgImg = 'linear-gradient(white, ' + toRgb('#f1f3f5') + ' 66%, ' + toRgb('#e5e9ed') + ')';

    before((done) => {
      $testContainer.append($defaultBtn);
      done();
    });

    it('should have correct styles', () => {
      expect($defaultBtn.css('padding'), 'padding').to.equal('7px 15px');
      expect($defaultBtn.css('line-height'), 'line-height').to.equal('14px');
      expect($defaultBtn.css('border-radius'), 'border-radius').to.equal('2px');
      expect($defaultBtn.css('font-size'), 'font-size').to.equal('14px');
      expect($defaultBtn.css('font-weight'), 'font-weight').to.equal('600');

      // c-btn-default
      expect($defaultBtn.css('height'), 'button height').to.equal('30px');
      expect($defaultBtn.css('color'), 'text color').to.equal(toRgb('#414152'));
      expect($defaultBtn.css('background-color'), 'background').to.equal(toRgb('#f1f3f5'));
      expect($defaultBtn.css('background-image'), 'background-image').to.equal($defaultBgImg);
      expect($defaultBtn.css('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));
    });
  });

  // c-btn c-btn-secondary
  describe('BD Secondary Button', () => {
    let $secondaryBtn = $('<button class="c-btn c-btn-secondary">Button</button>');
    let $secondaryBgImg = 'linear-gradient(white, ' + toRgb('#f1f3f5') + ' 66%, ' + toRgb('#e5e9ed') + ')';

    before((done) => {
      $testContainer.append($secondaryBtn);
      done();
    });

    it('should have correct styles', () => {
      expect($secondaryBtn.css('height'), 'button height').to.equal('30px');
      expect($secondaryBtn.css('color'), 'text color').to.equal(toRgb('#414152'));
      expect($secondaryBtn.css('background-color'), 'background').to.equal(toRgb('#f1f3f5'));
      expect($secondaryBtn.css('background-image'), 'background-image').to.equal($secondaryBgImg);
      expect($secondaryBtn.css('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));
    });
  });

  // btn btn-* (primary, success, warning, danger)
  describe('BD Primary, Success, Warning, Danger Button', ()=> {
    let $btnStatuses = {
      'primary': {
        'background': toRgb('#0079bd'),
        'backgroundImage': 'linear-gradient(' + toRgb('#008ddc') + ', ' +
                                                toRgb('#0079bd') + ' 66%, ' +
                                                toRgb('#006ca9') + ')'
      },
      'success': {
        'background': toRgb('#37b24d'),
        'backgroundImage': 'linear-gradient(' + toRgb('#43c55a') + ', ' +
                                                toRgb('#37b24d') + ' 66%, ' +
                                                toRgb('#32a246') + ')'
      },
      'warning': {
        'background': toRgb('#f08c00'),
        'backgroundImage': 'linear-gradient(' + toRgb('#ff9b10') + ', ' + 
                                                toRgb('#f08c00') + ' 66%, ' + 
                                                toRgb('#dc8000') + ')'
      },
      'danger': {
        'background': toRgb('#f03e3e'),
        'backgroundImage': 'linear-gradient(' + toRgb('#f25a5a') + ', ' + 
                                                toRgb('#f03e3e') + ' 66%, ' + 
                                                toRgb('#ef2b2b') + ')'
      }
    };

    for (let $status in $btnStatuses) {
      let $btn = $('<button class="c-btn c-btn-' + $status +'">Button</button>'),
          $btnBg = $btnStatuses[$status],
          $btnStatus = $status,
          testParameters = [$btn, $btnBg, $btnStatus];

      before((done) => {
        $testContainer.append($btn);
        done();
      });

      testButtons(...testParameters);
    }

    function testButtons($btn, $btnBg, $btnStatus) {
      it($btnStatus + ' btn should have correct styles', () => {
        expect($btn.css('height'), 'button height').to.equal('30px');
        expect($btn.css('color'), 'text color').to.equal(toRgb('#ffffff'));
        expect($btn.css('background-color'), 'background').to.equal($btnBg.background);
        expect($btn.css('background-image'), 'background-image').to.equal($btnBg.backgroundImage);
        expect($btn.css('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0)');
      });
    }
  });

  // c-btn-primary, c-btn-success, c-btn-warning, c-btn-danger disabled
  describe('BD Primary, Success, Warning, Danger Button Disabled', () => {

    let $btnColors = {
      'primary': toRgb('#0079bd', '0.5'),
      'success': toRgb('#37b24d', '0.5'),
      'warning': toRgb('#f08c00', '0.5'),
      'danger': toRgb('#f03e3e', '0.5')
    };

    for (let $status in $btnColors) {
      let $btnDisabled = $('<button class="c-btn c-btn-' + $status + '" disabled>Button</button>'),
          $btnColorValue = $btnColors[$status],
          $btnStatus = $status,
          testParameters = [$btnDisabled, $btnColorValue, $btnStatus];

      before((done) => {
        $testContainer.append($btnDisabled);
        done();
      });

      testDisabledButtons(...testParameters);
    }

    function testDisabledButtons($btnDisabled, $btnColorValues, $btnStatus) {
      it($btnStatus + ' btn should have correct styles', () => {
        expect($btnDisabled.css('background-color'), 'background').to.equal($btnColorValues);
        expect($btnDisabled.css('color'), 'color').to.equal(toRgb('#f8f9fa'));
      });
    }
  });

  // c-btn c-btn-default disabled
  describe('BD Default Button Disabled', () => {
    let $defaultBtnDisabled = $('<button class="c-btn c-btn-default" disabled>Button</button>');

    before((done) => {
      $testContainer.append($defaultBtnDisabled);
      $testContainer.append('<br>');
      done();
    });

    it('should have correct styles', () => {
      expect($defaultBtnDisabled.css('color'), 'text color').to.equal(toRgb('#868e96'));
      expect($defaultBtnDisabled.css('background-color'), 'background').to.equal(toRgb('#f8f9fa'));
      expect($defaultBtnDisabled.css('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));
      expect($defaultBtnDisabled.css('text-shadow'), 'text-shadow').to.equal('none');
      expect($defaultBtnDisabled.css('cursor'), 'cursor').to.equal('not-allowed');
      expect($defaultBtnDisabled.css('box-shadow'), 'box-shadow').to.equal('none');
      expect($defaultBtnDisabled.css('opacity'), 'opacity').to.equal('1');
    });
  });

  // c-btn-link
  describe('BD Button Link', () => {
    let $btnLink = $('<button class="c-btn-link">Button Link</button>');

    before((done) => {
      $testContainer.append($btnLink);
      $testContainer.append('<br>');
      done();
    });

    it('should have correct styles', () => {
      expect($btnLink.css('position'), 'position').to.equal('relative');
      expect($btnLink.css('display'), 'display').to.equal('inline-block');
      expect($btnLink.css('vertical-align'), 'vertical-align').to.equal('baseline');
      expect($btnLink.css('white-space'), 'white-space').to.equal('nowrap');
      expect($btnLink.css('outline-width'), 'outline-width').to.equal('0px');
      expect($btnLink.css('line-height'), 'line-height').to.equal('14px');
      expect($btnLink.css('padding'), 'padding').to.equal('7px 15px');
      expect($btnLink.css('font-size'), 'font-size').to.equal('14px');
      expect($btnLink.css('font-family'), 'font-family').to.equal('"Source Sans Pro"');
      expect($btnLink.css('text-align'), 'text-align').to.equal('center');
      expect($btnLink.css('text-decoration-line'), 'text-decoration-line').to.equal('none');
      expect($btnLink.css('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0)');
      expect($btnLink.css('border-radius'), 'border-radius').to.equal('2px');
      expect($btnLink.css('cursor'), 'cursor').to.equal('pointer');
      expect($btnLink.css('color'), 'color').to.equal(toRgb('#0079bd'));
      expect($btnLink.css('box-shadow'), 'box-shadow').to.equal('none');
      expect($btnLink.css('font-weight'), 'font-weight').to.equal('400');
    });
  });

  // c-btn-link disabled
  describe('BD Button Link disabled', () => {
    let $btnLink = $('<button class="c-btn-link" disabled>Disabled Link</button>');

    before((done) => {
      $testContainer.append($btnLink);
      $testContainer.append('<br>');
      done();
    });

    it('should have correct styles', () => {
      expect($btnLink.css('background-position'), 'background-position').to.equal('0px 0px');
      expect($btnLink.css('color'), 'color').to.equal(toRgb('#868e96'));
      expect($btnLink.css('line-height'), 'line-height').to.equal('14px');
      expect($btnLink.css('border-color'), 'border-color').to.equal('rgba(0, 0, 0, 0)');
      expect($btnLink.css('cursor'), 'cursor').to.equal('not-allowed');
      expect($btnLink.css('box-shadow'), 'box-shadow').to.equal('none');
      expect($btnLink.css('appearance'), 'appearance').to.equal('none');
      expect($btnLink.css('opacity'), 'opacity').to.equal('1');
    });
  });

  // c-btn-link-secondary, c-btn-link-success, c-btn-link-warning, c-btn-link-danger
  describe('BD Secondary, Success, Warning, Danger Button Link', () => {
    let $btnColors = {
      'secondary': toRgb('#343a40'),
      'success': toRgb('#2f9e44'),
      'warning': toRgb('#f08c00'),
      'danger': toRgb('#e03131')
    };

    for (let $status in $btnColors) {
      let $btn = $(`<button class="c-btn-link c-btn-link-${$status}">${$status} Button Link</button>`),
          $btnColorValue = $btnColors[$status],
          $btnStatus = $status,
          testParameters = [$btn, $btnColorValue, $btnStatus];

      before((done) => {
        $testContainer.append($btn);
        done();
      });

      testDisabledButtons(...testParameters);
    }

    function testDisabledButtons($btn, $btnColorValues, $btnStatus) {
      it($btnStatus + ' btn link should have correct styles', () => {
        expect($btn.css('color'), 'color').to.equal($btnColorValues);
      });
    }
  });

  // c-btn c-btn-primary-outline
  describe('BD Button Primary Outline', () => {
    let $primaryBtnOutline = $('<button class="c-btn c-btn-primary-outline">Button Outline</button>');

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

  // c-btn c-btn-block
  describe('BD Button Block', () => {
    let $btnBlock = $('<button class="c-btn c-btn-block c-btn-primary">Button</button>');

    before((done) => {
      $testContainer.append($btnBlock);
      done();
    });

    it('should have correct styles', () => {
      expect($btnBlock.css('display'), 'display').to.equal('block');
      expect($btnBlock.css('text-align'), 'text-align').to.equal('center');
    });
  });

  // c-btn c-btn-box
  describe('BD Button Box', () => {
    let $btnBox = $(`<button class="c-btn c-btn-box c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>`);

    before((done) => {
      $testContainer.append($btnBox);
      done();
    });

    it('should have correct styles', () => {
      expect($btnBox.css('width'), 'width').to.equal('35px');
      expect($btnBox.css('padding-left'), 'padding-left').to.equal('0px');
      expect($btnBox.css('padding-right'), 'padding-right').to.equal('0px');
      expect($btnBox.css('text-align'), 'text-align').to.equal('center');
      expect($btnBox.css('border-radius'), 'border-radius').to.equal('2px');
    });
  });

  // c-btn c-btn-circle
  describe('BD Button Circle', () => {
    let $btnCircle = $(`<button class="c-btn c-btn-circle c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>`);

    before((done) => {
      $testContainer.append($btnCircle);
      done();
    });

    it('should have correct styles', () => {
      expect($btnCircle.css('width'), 'width').to.equal('35px');
      expect($btnCircle.css('padding-left'), 'padding-left').to.equal('0px');
      expect($btnCircle.css('padding-right'), 'padding-right').to.equal('0px');
      expect($btnCircle.css('text-align'), 'text-align').to.equal('center');
      expect($btnCircle.css('overflow'), 'overflow').to.equal('hidden');
      expect($btnCircle.css('border-radius'), 'border-radius').to.equal('100%');
    });
  });

  // c-btn-box, c-btn-circle sizes xs, sm, lg
  describe('BD Button Box Sizes ', () => {
    let $btnSizes = {
      'xs': '25px',
      'sm': '30px',
      'lg': '40px'
    };

    for (let $size in $btnSizes) {
      let $btn = $(`<button class="c-btn c-btn-box c-btn-${$size} c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>`),
          $btnCircle = $(`<button class="c-btn c-btn-circle c-btn-${$size} c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>`),
          $btnStyles = $btnSizes[$size],
          $btnSize = $size,
          testParameters = [$btn, $btnCircle, $btnStyles, $btnSize];

      before((done) => {
        $testContainer.append($btn, $btnCircle);
        done();
      });

      testBtnSizes(...testParameters);
    }

    function testBtnSizes($btn, $btnCircle, $btnStyles, $btnSize) {
      it($btnSize + ' btn should have correct styles', () => {
        expect($btn.css('width'), 'width').to.equal($btnStyles);
        expect($btnCircle.css('width'), 'width').to.equal($btnStyles);
      });
    }
  });

  // c-btn, c-btn-link sizes xs, sm, lg
  describe('BD Button Sizes ', () => {
    let $btnSizes = {
      'xs': {
        'padding': '3px 7px',
        'fontSize': '12px'
      },
      'sm': {
        'padding': '5px 10px',
        'fontSize': '13px'
      },
      'lg': {
        'padding': '9px 19px',
        'fontSize': '15px'
      }
    };

    for (let $size in $btnSizes) {
      let $btn = $('<button class="c-btn c-btn-' + $size + ' c-btn-primary c-m-right-md">' + $size + ' button</button>'),
          $btnLink = $(`<button class="c-btn-link c-btn-link-${$size}">${$size} Button Link</button>`),
          $btnStyles = $btnSizes[$size],
          $btnSize = $size,
          testParameters = [$btn, $btnLink, $btnStyles, $btnSize];

      before((done) => {
        $testContainer.append($btn, $btnLink);
        done();
      });

      testBtnSizes(...testParameters);
    }

    function testBtnSizes($btn, $btnLink, $btnStyles, $btnSize) {
      it($btnSize + ' btn should have correct styles', () => {
        expect($btn.css('font-size'), 'font size').to.equal($btnStyles.fontSize);
        expect($btn.css('padding'), 'padding').to.equal($btnStyles.padding);
        expect($btnLink.css('font-size'), 'font size').to.equal($btnStyles.fontSize);
        expect($btnLink.css('padding'), 'padding').to.equal($btnStyles.padding);
      });
    }
  });
});
