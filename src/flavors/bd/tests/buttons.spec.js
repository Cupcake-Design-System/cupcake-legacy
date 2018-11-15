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

  // c-btn c-btn-primary
  describe('BD Primary Button', () => {
    let $primaryBtn = $('<button class="c-btn c-btn-primary">Button</button>');
    let $primaryBgImg = 'linear-gradient(' + toRgb('#008ddc') + ', ' + toRgb('#0079bd') + ' 66%, ' + toRgb('#006ca9') + ')';

    before((done) => {
      $testContainer.append($primaryBtn);
      done();
    });

    it('should have correct styles', () => {
      expect($primaryBtn.css('height'), 'button height').to.equal('30px');
      expect($primaryBtn.css('color'), 'text-color').to.equal(toRgb('#ffffff'));
      expect($primaryBtn.css('background-color'), 'background').to.equal(toRgb('#0079bd'))
      expect($primaryBtn.css('background-image'), 'background-image').to.equal($primaryBgImg);
      expect($primaryBtn.css('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0)');
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

  // c-btn c-btn-success
  describe('BD Success button', () => {
    let $successBtn = $('<button class="c-btn c-btn-success">Button</button>');
    let $successBgImg = 'linear-gradient(' + toRgb('#43c55a') + ', ' + toRgb('#37b24d') + ' 66%, ' + toRgb('#32a246') + ')';

    before((done) => {
      $testContainer.append($successBtn);
      done();
    });

    it('should have correct styles', () => {
      expect($successBtn.css('height'), 'button height').to.equal('30px');
      expect($successBtn.css('color'), 'text color').to.equal(toRgb('#ffffff'));
      expect($successBtn.css('background-color'), 'background').to.equal(toRgb('#37b24d'));
      expect($successBtn.css('background-image'), 'background-image').to.equal($successBgImg);
      expect($successBtn.css('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0)');
    });
  });

  // c-btn c-btn-warning
  describe('BD Warning button', () => {
    let $warningBtn = $('<button class="c-btn c-btn-warning">Button</button>');
    let $warningBgImg = 'linear-gradient(' + toRgb('#ff9b10') + ', ' + toRgb('#f08c00') + ' 66%, ' + toRgb('#dc8000') + ')';
    before((done) => {
      $testContainer.append($warningBtn);
      done();
    });

    it('should have correct styles', () => {
      expect($warningBtn.css('height'), 'button height').to.equal('30px');
      expect($warningBtn.css('color'), 'text color').to.equal(toRgb('#ffffff'));
      expect($warningBtn.css('background-color'), 'background').to.equal(toRgb('#f08c00'));
      expect($warningBtn.css('background-image'), 'background-image').to.equal($warningBgImg);
      expect($warningBtn.css('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0)');
    });
  });

  // c-btn c-btn-danger
  describe('BD Danger Button', () => {
    let $dangerBtn = $('<button class="c-btn c-btn-danger">Button</button>');
    let $dangerBgImg = 'linear-gradient(' + toRgb('#f25a5a') + ', ' + toRgb('#f03e3e') + ' 66%, ' + toRgb('#ef2b2b') + ')';

    before((done) => {
      $testContainer.append($dangerBtn);
      done();
    });

    it('should have correct styles', () => {
      expect($dangerBtn.css('height'), 'button height').to.equal('30px');
      expect($dangerBtn.css('color'), 'text color').to.equal(toRgb('#ffffff'));
      expect($dangerBtn.css('background-color'), 'background').to.equal(toRgb('#f03e3e'));
      expect($dangerBtn.css('background-image'), 'background-image').to.equal($dangerBgImg);
      expect($dangerBtn.css('border'), 'border').to.equal('1px solid ' + toRgb('#000000', 0));
    });
  });

  // c-btn c-btn-secondary
  describe('BD Secondary Button', () => {
    let $secondaryBtn = $('<button class="c-btn c-btn-secondary">Button</button>');
    let $secondaryBgImg = 'linear-gradient(white, ' + toRgb('#f1f3f5') + ' 66%, ' + toRgb('#e5e9ed') + ')';

    before((done) => {
      $testContainer.append($secondaryBtn);
      $testContainer.append('<br>');
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

  // c-btn-primary, c-btn-success, c-btn-warning, c-btn-danger disabled
  describe('BD Primary, Success, Warning, Danger Button Disabled', () => {

    let $btnColors = {
      'primary': toRgb('#0079bd', '0.5'),
      'success': toRgb('#37b24d', '0.5'),
      'warning': toRgb('#f08c00', '0.5'),
      'danger': toRgb('#f03e3e', '0.5')
    }

    for ($status in $btnColors) {
      let $btnDisabled = $('<button class="c-btn c-btn-' + $status + '" disabled>Button</button>');
      let $btnColorValue = $btnColors[$status];
      let $btnStatus = $status;
      let testParameters = [$btnDisabled, $btnColorValue, $btnStatus];

      before((done) => {
        $testContainer.append($btnDisabled);
        done();
      });

      testDisabledButtons(...testParameters);
    }

    function testDisabledButtons($btnDisabled, $btnColorValues, $btnStatus) {
      it($btnStatus + ' should have correct styles', () => {
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
});
