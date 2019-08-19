describe('BD Checkboxes', () => {
  describe('BD Checkbox sizes', () => {
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
          'width': '14px',
          'height': '14px',
          'margin': '0px 14px -2px 0px',
          'customCheckbox': {
            'left': '5px',
            'top': '2px',
            'width': '5px',
            'height': '9px',
            'border-bottom': '2px solid rgb(255, 255, 255)',
            'border-right': '2px solid rgb(255, 255, 255)'
          }
        },
        'xl': {
          'width': '26px',
          'height': '26px',
          'margin': '0px 26px -2px 0px',
          'customCheckbox': {
            'left': '9px',
            'top': '3px',
            'width': '9px',
            'height': '17px',
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
          checkboxStyles = checkboxSizes[size];
  
      before((done) => {
          $testContainer.append($checkbox);
          done();
      });
  
      testCheckboxSizes(checkboxStyles, size);
    }
  
    function testCheckboxSizes(checkboxStyles, checkboxSize) {
      let checkboxInputStyles = checkboxStyles['customCheckbox'];

      it(`${checkboxSize} checkbox should have correct styles`, () => {
        expect(window.getComputedStyle(document.querySelector(`.c-checkbox-${checkboxSize} input`)).getPropertyValue('width'), 'width').to.equal(checkboxStyles.width);
        expect(window.getComputedStyle(document.querySelector(`.c-checkbox-${checkboxSize} input`)).getPropertyValue('height'), 'height').to.equal(checkboxStyles.height);
        expect(window.getComputedStyle(document.querySelector(`.c-checkbox-${checkboxSize} i`)).getPropertyValue('margin'), 'margin').to.equal(checkboxStyles.margin);
      });
      
      it(`${checkboxSize} checkbox should have correct styles when checked`, () => {
        for(let style in checkboxInputStyles) {
          expect(window.getComputedStyle(document.querySelector(`.c-checkbox-${checkboxSize} i`), ':after').getPropertyValue(style), `check sign ${style}`).to.equal(checkboxInputStyles[style]);
          }
        });
    }
  });

  describe('BD Checkbox types', () => {
    let checkboxTypes = {
      'primary': {
        'bg': '#0079bd',
      },
      'success': {
        'bg': '#37b24d'
      }, 
      'warning': {
        'bg': '#f08c00',
      },
      'danger': {
        'bg': '#f03e3e',
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

      testCheckboxBgColor($checkbox, checkboxStyles, type);
    }

    function testCheckboxBgColor($checkbox, checkboxStyles, checkboxType) {
      it(`${checkboxType} checkbox should have correct styles`, () => {
        expect($checkbox.find(`.c-bg-${checkboxType}`).css('background-color'), 'background').to.equal(toRgb(checkboxStyles.bg));
      });
    }
  });

  describe('BD Disabled Checkbox', () => {
    let $defaultCheckbox = $(`<label class="c-control c-checkbox">
                                <input type="checkbox" name="radio" disabled>
                                <i class="c-bg-danger"></i>c-checkbox
                              </label>`);

    before((done) => {
      $testContainer.append($defaultCheckbox);
      done();
    });

    it('should have correct styles', () => {
      expect(window.getComputedStyle(document.querySelector('.c-checkbox input[disabled]+i'), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#dee2e6'));
      expect(window.getComputedStyle(document.querySelector('.c-checkbox input[disabled]+i'), ':before').getPropertyValue('opacity'), 'opacity').to.equal('0.5'); 
      expect(window.getComputedStyle(document.querySelector('.c-checkbox input[disabled]+i'), ':before').getPropertyValue('cursor'), 'cursor').to.equal('not-allowed'); 
    });
  });
});

describe('BD RadioButtons', () => {
  describe('BD RadioButton sizes', () => {
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
          'width': '14px',
          'height': '14px',
          'margin': '0px 14px -2px 0px',
          'customRadiobutton': {
            'left': '5px',
            'top': '5px',
            'width': '5px',
            'height': '5px',
          }
        },
        'xl': {
          'width': '26px',
          'height': '26px',
          'margin': '0px 26px -2px 0px',
          'customRadiobutton': {
            'left': '9px',
            'top': '9px',
            'width': '9px',
            'height': '9px',
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

  describe('BD radiobutton types', () => {
    let radiobuttonTypes = {
      'primary': {
        'bg': '#0079bd',
      },
      'success': {
        'bg': '#37b24d'
      }, 
      'warning': {
        'bg': '#f08c00',
      },
      'danger': {
        'bg': '#f03e3e',
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

  describe('BD Disabled radiobutton', () => {
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
