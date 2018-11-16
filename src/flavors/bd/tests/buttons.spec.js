describe('BD Buttons', () => {
  // c-btn base
  describe('BD Base Button', () => {
    let $btn = $('<button class="c-btn">Button</button>');

    before((done) => {
      $testContainer.append($btn);
      done();
    });

    it('should have correct styles', () => {
      expect($btn.css('padding'), 'padding').to.equal('7px 15px');
      expect($btn.css('line-height'), 'line-height').to.equal('14px');
      expect($btn.css('border-radius'), 'border-radius').to.equal('2px');
      expect($btn.css('font-size'), 'font-size').to.equal('14px');
      expect($btn.css('font-weight'), 'font-weight').to.equal('600');
    });
  });

  // c-btn c-btn-default
  describe('BD Default Button', () => {
    let $defaultBtn = $('<button class="c-btn c-btn-default">Button</button>');
    let $defaultBgImg = 'linear-gradient(white, ' + toRgb('#f1f3f5') + ' 66%, ' + toRgb('#e5e9ed') + ')';

    before((done) => {
      $testContainer.append($defaultBtn);
      done();
    });

    it('should have correct styles', () => {
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
    });
  });

  // c-btn sizes xs, sm, lg
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
          $btnStyles = $btnSizes[$size],
          $btnSize = $size,
          testParameters = [$btn, $btnStyles, $btnSize];

      before((done) => {
        $testContainer.append($btn);
        done();
      });

      testBtnSizes(...testParameters);
    }

    function testBtnSizes($btn, $btnStyles, $btnSize) {
      it($btnSize + ' btn should have correct styles', () => {
        expect($btn.css('font-size'), 'font size').to.equal($btnStyles.fontSize);
        expect($btn.css('padding'), 'padding').to.equal($btnStyles.padding);
      });
    }
  });
});
