describe('Buttons', () => {
  
  // c-btn c-btn-default
  describe('Default Button', () => {
    let $defaultBtn = $('<button class="c-btn c-btn-default">Button</button>');

    before((done) => {
      $testContainer.append($defaultBtn);
      done();
    });

    it('should have correct styles', () => {
      expect($defaultBtn.css('padding'), 'padding').to.equal('8px 24px');
      expect($defaultBtn.css('line-height'), 'line-height').to.equal('12px');
      expect($defaultBtn.css('border-radius'), 'border-radius').to.equal('2px');
      expect($defaultBtn.css('font-size'), 'font-size').to.equal('12px');
      expect($defaultBtn.css('font-weight'), 'font-weight').to.equal('700');

      // c-btn-default
      expect($defaultBtn.css('height'), 'button height').to.equal('30px');
      expect($defaultBtn.css('color'), 'text color').to.equal(toRgb('#212529'));
      expect($defaultBtn.css('background-color'), 'background').to.equal(toRgb('#f1f3f5'));
      expect($defaultBtn.css('border'), 'border').to.equal(`1px solid ${toRgb('#ced4da')}`);
    });
  });

  // c-btn c-btn-secondary
  describe('Secondary Button', () => {
    let $secondaryBtn = $('<button class="c-btn c-btn-secondary">Button</button>');

    before((done) => {
      $testContainer.append($secondaryBtn);
      done();
    });

    it('should have correct styles', () => {
      expect($secondaryBtn.css('height'), 'button height').to.equal('30px');
      expect($secondaryBtn.css('color'), 'text color').to.equal(toRgb('#212529'));
      expect($secondaryBtn.css('background-color'), 'background').to.equal(toRgb('#f1f3f5'));
      expect($secondaryBtn.css('border'), 'border').to.equal(`1px solid ${toRgb('#ced4da')}`);
    });
  });

  // btn btn-* (primary, success, warning, danger)
  describe('Primary, Success, Warning, Danger Button', ()=> {
    let btnStatuses = {
      'primary': {
        'background': toRgb('#1b6ec2'),
        'borderColor': toRgb('#1862ab'),
      },
      'success': {
        'background': toRgb('#2f9e44'),
        'borderColor': toRgb('#2b8a3e')
      },
      'warning': {
        'background': toRgb('#e8590c'),
        'borderColor': toRgb('#d9480f')
      },
      'danger': {
        'background': toRgb('#e03131'),
        'borderColor': toRgb('#c92a2a')
      }
    };

    for (let type in btnStatuses) {
      let $btn = $(`<button class="c-btn c-btn-${type}">Button</button>`),
          styles = btnStatuses[type];

      before((done) => {
        $testContainer.append($btn);
        done();
      });

      it(`${type} btn should have correct styles`, () => {
        expect($btn.css('height'), 'button height').to.equal('30px');
        expect($btn.css('color'), 'text color').to.equal(toRgb('#ffffff'));
        expect($btn.css('background-color'), 'background').to.equal(styles.background);
        expect($btn.css('border'), 'border').to.equal(`1px solid ${styles.borderColor}`);
      });
    }
  });

  // c-btn c-btn-default disabled
  describe('Default Button Disabled', () => {
    let $defaultBtnDisabled = $('<button class="c-btn c-btn-default" disabled>Button</button>');

    before((done) => {
      $testContainer.append($defaultBtnDisabled);
      $testContainer.append('<br>');
      done();
    });

    it('should have correct styles', () => {
      expect($defaultBtnDisabled.css('color'), 'text color').to.equal(toRgb('#868e96'));
      expect($defaultBtnDisabled.css('background-color'), 'background').to.equal(toRgb('#dee2e6'));
      expect($defaultBtnDisabled.css('border'), 'border').to.equal(`1px solid ${toRgb('#dee2e6')}`);
      expect($defaultBtnDisabled.css('text-shadow'), 'text-shadow').to.equal('none');
      expect($defaultBtnDisabled.css('cursor'), 'cursor').to.equal('not-allowed');
      expect($defaultBtnDisabled.css('box-shadow'), 'box-shadow').to.equal('none');
      expect($defaultBtnDisabled.css('opacity'), 'opacity').to.equal('1');
    });
  });

  // c-btn-link
  describe('Button Link', () => {
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
      expect($btnLink.css('line-height'), 'line-height').to.equal('12px');
      expect($btnLink.css('padding'), 'padding').to.equal('8px 24px');
      expect($btnLink.css('font-size'), 'font-size').to.equal('12px');
      expect($btnLink.css('font-family'), 'font-family').to.equal('Arial, Helvetica, sans-serif');
      expect($btnLink.css('text-align'), 'text-align').to.equal('center');
      expect($btnLink.css('text-decoration-line'), 'text-decoration-line').to.equal('none');
      expect($btnLink.css('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0)');
      expect($btnLink.css('border-radius'), 'border-radius').to.equal('2px');
      expect($btnLink.css('cursor'), 'cursor').to.equal('pointer');
      expect($btnLink.css('color'), 'color').to.equal(toRgb('#1b6ec2'));
      expect($btnLink.css('box-shadow'), 'box-shadow').to.equal('none');
      expect($btnLink.css('font-weight'), 'font-weight').to.equal('700');
    });
  });

  // c-btn-link disabled
  describe('Button Link disabled', () => {
    let $btnLink = $('<button class="c-btn-link" disabled>Disabled Link</button>');

    before((done) => {
      $testContainer.append($btnLink);
      $testContainer.append('<br>');
      done();
    });

    it('should have correct styles', () => {
      expect($btnLink.css('background-position'), 'background-position').to.equal('0px 0px');
      expect($btnLink.css('color'), 'color').to.equal(toRgb('#868e96'));
      expect($btnLink.css('border-color'), 'border-color').to.equal('rgba(0, 0, 0, 0)');
      expect($btnLink.css('cursor'), 'cursor').to.equal('not-allowed');
      expect($btnLink.css('box-shadow'), 'box-shadow').to.equal('none');
      expect($btnLink.css('appearance'), 'appearance').to.equal('none');
      expect($btnLink.css('opacity'), 'opacity').to.equal('1');
    });
  });

  // c-btn-link-secondary, c-btn-link-success, c-btn-link-warning, c-btn-link-danger
  describe('Secondary, Success, Warning, Danger Button Link', () => {
    let btnColors = {
      'secondary': toRgb('#343a40'),
      'success': toRgb('#2f9e44'),
      'warning': toRgb('#e8590c'),
      'danger': toRgb('#e03131')
    };

    for (let type in btnColors) {
      let $btn = $(`<button class="c-btn-link c-btn-link-${type}">${type} Button Link</button>`),
          btnColorValue = btnColors[type];

      before((done) => {
        $testContainer.append($btn);
        done();
      });

      it(`${type} btn link should have correct styles`, () => {
        expect($btn.css('color'), 'color').to.equal(btnColorValue);
      });
    }
  });

  // c-btn c-btn-primary-outline
  describe('Button Primary Outline', () => {
    let btnTypes = {
      'primary': {
        'borderColor': toRgb('#1b6ec2'),
        'color': toRgb('#1b6ec2'),
      },
      'secondary':{
        'borderColor': toRgb('#495057'),
        'color': toRgb('#495057'),
      },
      'success': {
        'borderColor': toRgb('#2f9e44'),
        'color': toRgb('#2f9e44'),
      },
      'warning': {
        'borderColor': toRgb('#e8590c'),
        'color': toRgb('#e8590c'),
      },
      'danger': {
        'borderColor': toRgb('#e03131'),
        'color': toRgb('#e03131'),
      }
    };

    for(type in btnTypes) {
      let $bntOutline = $(`<button class="c-btn c-btn-${type}-outline">Button Outline</button>`),
          styles = btnTypes[type];
      
      before((done) => {
        $testContainer.append($bntOutline);
        done();
      });

      it(`${type} outline should have correct styles`, () => {
        expect($bntOutline.css('background-color'), 'background-color').to.equal('rgba(0, 0, 0, 0)');
        expect($bntOutline.css('color'), 'color').to.equal(styles.color);
        expect($bntOutline.css('border'), 'border').to.equal(`1px solid ${styles.borderColor}`);
        expect($bntOutline.css('box-shadow'), 'box-shadow').to.equal('none');
      });
    }
  });

  // c-btn c-btn-block
  describe('Button Block', () => {
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
  describe('Button Box', () => {
    let $btnBox = $(`<button class="c-btn c-btn-box c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>`);

    before((done) => {
      $testContainer.append($btnBox);
      done();
    });

    it('should have correct styles', () => {
      expect($btnBox.css('width'), 'width').to.equal('30px');
      expect($btnBox.css('padding-left'), 'padding-left').to.equal('0px');
      expect($btnBox.css('padding-right'), 'padding-right').to.equal('0px');
      expect($btnBox.css('text-align'), 'text-align').to.equal('center');
    });
  });

  // c-btn c-btn-circle
  describe('Button Circle', () => {
    let $btnCircle = $(`<button class="c-btn c-btn-circle c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>`);

    before((done) => {
      $testContainer.append($btnCircle);
      done();
    });

    it('should have correct styles', () => {
      expect($btnCircle.css('width'), 'width').to.equal('30px');
      expect($btnCircle.css('padding-left'), 'padding-left').to.equal('0px');
      expect($btnCircle.css('padding-right'), 'padding-right').to.equal('0px');
      expect($btnCircle.css('text-align'), 'text-align').to.equal('center');
      expect($btnCircle.css('overflow'), 'overflow').to.equal('hidden');
      expect($btnCircle.css('border-radius'), 'border-radius').to.equal('100%');
    });
  });

  // c-btn-box, c-btn-circle sizes xs, sm, lg
  describe('Button Box Sizes ', () => {
    let btnSizes = {
      'xs': '20px',
      'sm': '25px',
      'lg': '40px',
      'xl': '55px',
    };

    for (let size in btnSizes) {
      let $btn = $(`<button class="c-btn c-btn-box c-btn-${size} c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>`),
          $btnCircle = $(`<button class="c-btn c-btn-circle c-btn-${size} c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>`),
          btnStyles = btnSizes[size];

      before((done) => {
        $testContainer.append($btn, $btnCircle);
        done();
      });

      it(`${size} btn should have correct styles`, () => {
        expect($btn.css('width'), 'width').to.equal(btnStyles);
        expect($btnCircle.css('width'), 'width').to.equal(btnStyles);
      });
    }
  });

  // c-btn, c-btn-link sizes xs, sm, lg
  describe('Button Sizes ', () => {
    let btnSizes = {
      'xs': {
        'padding': '4px 8px 3px',
        'fontSize': '11px'
      },
      'sm': {
        'padding': '6px 16px',
        'fontSize': '11px'
      },
      'lg': {
        'padding': '12px 32px 11px',
        'fontSize': '16px'
      },
      'xl': {
        'padding': '18px 40px',
        'fontSize': '18px'
      }
    };

    for (let size in btnSizes) {
      let $btn = $(`<button class="c-btn c-btn-${size} c-btn-primary c-m-right-md"> ${size} button</button>`),
          $btnLink = $(`<button class="c-btn-link c-btn-link-${size}">${size} Button Link</button>`),
          btnStyles = btnSizes[size];

      before((done) => {
        $testContainer.append($btn, $btnLink);
        done();
      });

      it(`${size} btn should have correct styles`, () => {
        expect($btn.css('font-size'), 'font size').to.equal(btnStyles.fontSize);
        expect($btn.css('padding'), 'padding').to.equal(btnStyles.padding);
        expect($btnLink.css('font-size'), 'font size').to.equal(btnStyles.fontSize);
        expect($btnLink.css('padding'), 'padding').to.equal(btnStyles.padding);
      });
    }
  });
});
