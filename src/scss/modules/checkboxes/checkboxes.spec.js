describe('Checkboxes', () => {
  describe('Checkbox sizes', () => {
    let checkboxSizes = {
        'sm': {
          'width': '12px',
          'height': '12px',
          'margin': '0px 12px -2px 0px',
          'customCheckbox': {
            'left': '4px',
            'top': '1px',
            'width': '4px',
            'height': '8px',
            'border-bottom': '1px solid rgb(255, 255, 255)',
            'border-right': '1px solid rgb(255, 255, 255)'
          }
        },
        'lg': {
          'width': '24px',
          'height': '24px',
          'margin': '0px 24px -2px 0px',
          'customCheckbox': {
            'left': '8px',
            'top': '3px',
            'width': '8px',
            'height': '16px',
            'border-bottom': '3px solid rgb(255, 255, 255)',
            'border-right': '3px solid rgb(255, 255, 255)'
          }
        },
        'xl': {
          'width': '30px',
          'height': '30px',
          'margin': '0px 30px -2px 0px',
          'customCheckbox': {
            'left': '10px',
            'top': '3px',
            'width': '10px',
            'height': '20px',
            'border-bottom': '3px solid rgb(255, 255, 255)',
            'border-right': '3px solid rgb(255, 255, 255)'
          }
        }
    };
  
    for (let size in checkboxSizes) {
      let $checkbox = $(`<label class="c-checkbox-${size}">
                          <input type="checkbox" name="radio" checked="">
                          <i class="c-bg-primary"></i>                     
	                        c-checkbox-${size}
                        </label>`),
          checkboxStyles = checkboxSizes[size],
          checkboxInputStyles = checkboxStyles['customCheckbox'];
  
      before((done) => {
          $testContainer.append($checkbox);
          done();
      });

      it(`${size} checkbox should have correct styles`, () => {
        expect(window.getComputedStyle(document.querySelector(`.c-checkbox-${size} input`)).getPropertyValue('width'), 'width').to.equal(checkboxStyles.width);
        expect(window.getComputedStyle(document.querySelector(`.c-checkbox-${size} input`)).getPropertyValue('height'), 'height').to.equal(checkboxStyles.height);
        expect(window.getComputedStyle(document.querySelector(`.c-checkbox-${size} i`)).getPropertyValue('margin'), 'margin').to.equal(checkboxStyles.margin);
      });
      
      it(`${size} checkbox should have correct styles when checked`, () => {
        for(let style in checkboxInputStyles) {
          expect(window.getComputedStyle(document.querySelector(`.c-checkbox-${size} i`), ':after').getPropertyValue(style), `check sign ${style}`).to.equal(checkboxInputStyles[style]);
        }
      });
    }
  });

  describe('Checkbox types', () => {
    let checkboxTypes = {
      'primary': {
        'bg': '#1b6ec2',
      },
      'success': {
        'bg': '#2f9e44'
      }, 
      'warning': {
        'bg': '#e8590c',
      },
      'danger': {
        'bg': '#e03131',
      }
    };

    for (let type in checkboxTypes) {
      let $checkbox = $(`<label class="c-checkbox">
                            <input type="checkbox" name="radio" checked="">
                            <i class="c-bg-${type}"></i>
                          </label>`),
          checkboxStyles = checkboxTypes[type];

      before((done) => {
          $testContainer.append($checkbox);
          done();
      });

      it(`${type} checkbox should have correct styles`, () => {
        expect($checkbox.find(`.c-bg-${type}`).css('background-color'), 'background').to.equal(toRgb(checkboxStyles.bg));
      });
    }
  });
});

describe('RadioButtons', () => {
  describe('RadioButton sizes', () => {
    let radiobuttonSizes = {
        'sm': {
          'width': '12px',
          'height': '12px',
          'margin': '0px 12px -2px 0px',
          'customRadiobutton': {
            'left': '4px',
            'top': '4px',
            'width': '4px',
            'height': '4px',
          }
        },
        'lg': {
          'width': '24px',
          'height': '24px',
          'margin': '0px 24px -2px 0px',
          'customRadiobutton': {
            'left': '8px',
            'top': '8px',
            'width': '8px',
            'height': '8px',
          }
        },
        'xl': {
          'width': '30px',
          'height': '30px',
          'margin': '0px 30px -2px 0px',
          'customRadiobutton': {
            'left': '10px',
            'top': '10px',
            'width': '10px',
            'height': '10px',
          }
        }
    };
  
    for (let size in radiobuttonSizes) {
      let $radiobutton = $(`<label class="c-radio-${size}">
                              <input type="radio" name="radio" checked="">
                              <i class="c-bg-primary"></i>                           
	                            c-radio-${size}
                            </label>`),
          radiobuttonStyles = radiobuttonSizes[size];
  
      before((done) => {
          $testContainer.append($radiobutton);
          done();
      });
  
      testradiobuttonSizes($radiobutton, radiobuttonStyles, size);
    }
  
    function testradiobuttonSizes($radiobutton, radiobuttonStyles, radiobuttonSize) {
      let radiobuttonInputStyles = radiobuttonStyles['customRadiobutton'];

      it(`${radiobuttonSize} radiobutton should have correct styles`, () => {
        expect(window.getComputedStyle(document.querySelector(`.c-radio-${radiobuttonSize} input`)).getPropertyValue('width'), 'width').to.equal(radiobuttonStyles.width);
        expect(window.getComputedStyle(document.querySelector(`.c-radio-${radiobuttonSize} input`)).getPropertyValue('height'), 'height').to.equal(radiobuttonStyles.height);
        expect(window.getComputedStyle(document.querySelector(`.c-radio-${radiobuttonSize} i`)).getPropertyValue('margin'), 'margin').to.equal(radiobuttonStyles.margin);
      });
      
      it(`${radiobuttonSize} radiobutton should have correct styles when checked`, () => {
        $radiobutton.click();
        for(let style in radiobuttonInputStyles) {
          expect(window.getComputedStyle(document.querySelector(`.c-radio-${radiobuttonSize} i`), ':after').getPropertyValue(style), `check sign ${style}`).to.equal(radiobuttonInputStyles[style]);
          }
        });
    }
  });

  describe('radiobutton types', () => {
    let radiobuttonTypes = {
      'primary': {
        'bg': '#1b6ec2',
      },
      'success': {
        'bg': '#2f9e44'
      }, 
      'warning': {
        'bg': '#e8590c',
      },
      'danger': {
        'bg': '#e03131',
      }
    };

    for (let type in radiobuttonTypes) {
      let $radiobutton = $(`<label class="c-radio">
                            <input type="radio" name="radio" checked="">
                            <i class="c-bg-${type}"></i>
                          </label>`),
    
          radiobuttonStyles = radiobuttonTypes[type];

      before((done) => {
          $testContainer.append($radiobutton);
          done();
      });

      testradiobuttonBgColor($radiobutton, radiobuttonStyles, type);
    }

    function testradiobuttonBgColor($radiobutton, radiobuttonStyles, radiobuttonType) {
      it(`${radiobuttonType} radiobutton should have correct styles`, () => {
        expect($radiobutton.find(`.c-bg-${radiobuttonType}`).css('background-color'), 'background').to.equal(toRgb(radiobuttonStyles.bg));
      });
    }
  });

  describe('Disabled radiobutton', () => {
    let $defaultRadiobutton = $(`<label class="c-radio">
                                <input type="radio" name="radio" disabled>
                                <i class="c-bg-danger"></i>
                              </label>`);

    before((done) => {
      $testContainer.append($defaultRadiobutton);
      done();
    });

    it('should have correct styles', () => {
      expect(window.getComputedStyle(document.querySelector('.c-radio input[disabled]+i'), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#dee2e6'));
      expect(window.getComputedStyle(document.querySelector('.c-radio input[disabled]+i'), ':before').getPropertyValue('opacity'), 'opacity').to.equal('0.5'); 
      expect(window.getComputedStyle(document.querySelector('.c-radio input[disabled]+i'), ':before').getPropertyValue('cursor'), 'cursor').to.equal('not-allowed'); 
    });
  });
});
