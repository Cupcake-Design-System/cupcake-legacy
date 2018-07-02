var expect = require('chai').expect;
var barista = require('seed-barista');



var output = barista({ 
  root: "C:\\Projects2\\cupcake",
  src: 'dist',
  file: 'default.css' 
}).mount();



describe('Default Button', function() {
  
  it('should have correct syles', function() {
    var btn = output.find('.c-btn.c-btn-default');
    
    expect(btn.prop('color')).to.equal('rgb(73, 80, 87)');
    expect(btn.prop('font-size')).to.equal('12px');
    expect(btn.prop('border')).to.equal('1px solid #ced4da');
    expect(btn.prop('background-color')).to.equal('rgb(241, 243, 245)');
    expect(btn.prop('box-shadow')).to.equal('0 1px 0 0 rgba(33, 37, 41, 0.1)');
    
    
    
  });
  
  it('has correct active styles', function() {
    var btn = output.rule('.c-btn.c-btn-primary:active');

    // console.log(btn);
    
    expect(btn.prop('background')).to.equal('#1c7cd6');
  });

});