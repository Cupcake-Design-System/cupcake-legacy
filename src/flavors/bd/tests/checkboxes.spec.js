describe('BD Checkboxes', () => {
  describe('BD Primary Checkbox', () => {
    let $defaultCheckbox = $('<label class="c-control c-checkbox"><input type="checkbox" name="radio"><i class="c-bg-primary"></i>c-checkbox</label>');

    before((done) => {
        $testContainer.append($defaultCheckbox);
        done();
    });

    it('should have correct styles when unchecked', () => {
        expect($defaultCheckbox.css('height'), 'checkbox height').to.equal('12px');      
        expect($defaultCheckbox.find('.c-bg-primary').css('background-color'), 'background').to.equal(toRgb('#0079bd'));      
        expect(window.getComputedStyle(document.querySelector('.c-checkbox i'), ':before').getPropertyValue('border-radius'), 'border-radius').to.equal('2px'); 
        expect(window.getComputedStyle(document.querySelector('.c-checkbox i'), ':before').getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));  
        expect(window.getComputedStyle(document.querySelector('.c-checkbox i'), ':after').getPropertyValue('top'), 'check sign not exist').to.equal('auto'); 
    });

    it('should have correct styles when checked', () => {
      $defaultCheckbox.click();
      expect(window.getComputedStyle(document.querySelector('.c-checkbox i'), ':after').getPropertyValue('top'), 'check sign exist').to.equal('1px');
    });
  });

  describe('BD Success Checkbox', () => {
    let $defaultCheckbox = $('<label class="c-control c-checkbox"><input type="checkbox" name="radio"><i class="c-bg-success"></i>c-checkbox</label>');

    before((done) => {
        $testContainer.append($defaultCheckbox);
        done();
    });

    it('should have correct color', () => {
        expect($defaultCheckbox.find('.c-bg-success').css('background-color'), 'background').to.equal(toRgb('#37b24d'));      
    });
  });

  describe('BD Warning Checkbox', () => {
    let $defaultCheckbox = $('<label class="c-control c-checkbox"><input type="checkbox" name="radio"><i class="c-bg-warning"></i>c-checkbox</label>');

    before((done) => {
        $testContainer.append($defaultCheckbox);
        done();
    });

    it('should have correct color', () => {
        expect($defaultCheckbox.find('.c-bg-warning').css('background-color'), 'background').to.equal(toRgb('#f08c00'));      
    });
  });

  describe('BD Danger Checkbox', () => {
    let $defaultCheckbox = $('<label class="c-control c-checkbox"><input type="checkbox" name="radio"><i class="c-bg-danger"></i>c-checkbox</label>');

    before((done) => {
        $testContainer.append($defaultCheckbox);
        done();
    });

    it('should have correct color', () => {
        expect($defaultCheckbox.find('.c-bg-danger').css('background-color'), 'background').to.equal(toRgb('#f03e3e'));      
    });
  });

  describe('BD Disabled Checkbox', () => {
    let $defaultCheckbox = $('<label class="c-control c-checkbox"><input type="checkbox" name="radio" disabled><i class="c-bg-danger"></i>c-checkbox</label>');

    before((done) => {
        $testContainer.append($defaultCheckbox);
        done();
    });

    it('should have correct color', () => {
        expect(window.getComputedStyle(document.querySelector('.c-checkbox input[disabled]+i'), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#dee2e6')); 
        expect(window.getComputedStyle(document.querySelector('.c-checkbox input[disabled]+i'), ':before').getPropertyValue('opacity'), 'opacity').to.equal('0.5'); 
  
    });
    it('should have cursor disabled', () => {
      expect(window.getComputedStyle(document.querySelector('.c-checkbox input[disabled]+i'), ':before').getPropertyValue('cursor'), 'cursor').to.equal('not-allowed'); 
      
    });
  });

  describe('BD Checkbox sizes', () => {
    let $defaultCheckbox = $('<label class=""><input type="checkbox" name="radio"><i class="c-bg-danger"></i>c-checkbox</label>');

    before((done) => {
        $testContainer.append($defaultCheckbox);
        done();
    });

    it('sm checkbox should have proper size', () => {
      $defaultCheckbox.addClass('c-control-sm c-checkbox c-checkbox-sm');
      expect($defaultCheckbox.find('input').css('height'), 'checkbox height').to.equal('12px');
    });

    it('lg checkbox should have proper size', () => {
      $defaultCheckbox.addClass('c-control-lg c-checkbox c-checkbox-lg');
      expect($defaultCheckbox.find('input').css('height'), 'checkbox height').to.equal('14px');
    });

    it('xl checkbox should have proper size', () => {
      $defaultCheckbox.addClass('c-control-xl c-checkbox c-checkbox-xl');
      expect($defaultCheckbox.find('input').css('height'), 'checkbox height').to.equal('26px');
    });
  });
});

describe('BD RadioButtons', () => {
  describe('BD Primary RadioButtons', () => {
    let $defaultRadioButton = $('<label class="c-control c-radio"><input type="radio" name="radio"><i class="c-bg-primary"></i>c-radio</label>');

    before((done) => {
        $testContainer.append($defaultRadioButton);
        done();
    });

    it('should have correct styles when unchecked', () => {
        expect($defaultRadioButton.css('height'), 'checkbox height').to.equal('12px');      
        expect($defaultRadioButton.find('.c-bg-primary').css('background-color'), 'background').to.equal(toRgb('#0079bd'));      
        expect(window.getComputedStyle(document.querySelector('.c-radio i'), ':before').getPropertyValue('border-radius'), 'border-radius').to.equal('50%'); 
        expect(window.getComputedStyle(document.querySelector('.c-radio i'), ':before').getPropertyValue('border'), 'border').to.equal('1px solid ' + toRgb('#ced4da'));  
        expect(window.getComputedStyle(document.querySelector('.c-radio i'), ':after').getPropertyValue('top'), 'check sign not exist').to.equal('auto'); 
    });

    it('should have correct styles when checked', () => {
      $defaultRadioButton.click();
      expect(window.getComputedStyle(document.querySelector('.c-radio i'), ':after').getPropertyValue('top'), 'check sign exist').to.equal('4px');
    });
  });

  describe('BD Success RadioButton', () => {
    let $defaultRadioButton = $('<label class="c-control c-radio"><input type="radio" name="radio"><i class="c-bg-success"></i>c-radio</label>');

    before((done) => {
        $testContainer.append($defaultRadioButton);
        done();
    });

    it('should have correct color', () => {
        expect($defaultRadioButton.find('.c-bg-success').css('background-color'), 'background').to.equal(toRgb('#37b24d'));      
    });
  });

  describe('BD Warning RadioButton', () => {
    let $defaultRadioButton = $('<label class="c-control c-radio"><input type="radio" name="radio"><i class="c-bg-warning"></i>c-radio</label>');

    before((done) => {
        $testContainer.append($defaultRadioButton);
        done();
    });

    it('should have correct color', () => {
        expect($defaultRadioButton.find('.c-bg-warning').css('background-color'), 'background').to.equal(toRgb('#f08c00'));      
    });
  });

  describe('BD Danger RadioButton', () => {
    let $defaultRadioButton = $('<label class="c-control c-radio"><input type="radio" name="radio"><i class="c-bg-danger"></i>c-radio</label>');

    before((done) => {
        $testContainer.append($defaultRadioButton);
        done();
    });

    it('should have correct color', () => {
        expect($defaultRadioButton.find('.c-bg-danger').css('background-color'), 'background').to.equal(toRgb('#f03e3e'));      
    });
  });

  describe('BD Disabled RadioButton', () => {
    let $defaultRadioButton = $('<label class="c-control c-radio"><input type="radio" name="radio" disabled><i class="c-bg-danger"></i>c-radio</label>');

    before((done) => {
        $testContainer.append($defaultRadioButton);
        done();
    });

    it('should have correct color', () => {
      expect(window.getComputedStyle(document.querySelector('.c-radio input[disabled]+i'), ':before').getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#dee2e6')); 
      expect(window.getComputedStyle(document.querySelector('.c-radio input[disabled]+i'), ':before').getPropertyValue('opacity'), 'opacity').to.equal('0.5'); 

    });
    it('should have cursor disabled', () => {
      expect(window.getComputedStyle(document.querySelector('.c-radio input[disabled]+i'), ':before').getPropertyValue('cursor'), 'cursor').to.equal('not-allowed');    
    });
  });

  describe('BD RadioButton sizes', () => {
    let $defaultCheckbox = $('<label class=""><input type="checkbox" name="radio"><i class="c-bg-danger"></i>c-checkbox</label>');

    before((done) => {
        $testContainer.append($defaultCheckbox);
        done();
    });

    it('sm RadioButton should have proper size', () => {
      $defaultCheckbox.addClass('c-control-sm c-radio c-radio-sm');
      expect($defaultCheckbox.find('input').css('height'), 'checkbox height').to.equal('12px');
    });

    it('lg RadioButton should have proper size', () => {
      $defaultCheckbox.addClass('c-control-lg c-radio c-radio-lg');
      expect($defaultCheckbox.find('input').css('height'), 'checkbox height').to.equal('14px');
    });

    it('xl RadioButton should have proper size', () => {
      $defaultCheckbox.addClass('c-control-xl c-radio c-radio-xl');
      expect($defaultCheckbox.find('input').css('height'), 'checkbox height').to.equal('26px');
    });
  });
});