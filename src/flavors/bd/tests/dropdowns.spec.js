describe('BD Dropdowns', () => {
    describe('BD Dropdown', () => {
        let $Dropdown = $('<div class="c-dropdown"></div>');
    
        before((done) => {
            $testContainer.append($Dropdown);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($Dropdown.css('display'), 'display').to.equal('inline-block');
            expect($Dropdown.css('position'), 'position').to.equal('relative');
            expect($Dropdown.css('overflow'), 'overflow').to.equal('visible');
        });
    });

    describe('BD Dropdown List', () => {
        let $DropdownList = $('<ul class="c-dropdown-list"></ul>');
    
        before((done) => {
            $testContainer.append($DropdownList);
            done();
        });
    
        it('should have correct styles', () => { 
            expect($DropdownList.css('position'), 'position').to.equal('absolute');
            expect($DropdownList.css('padding'), 'padding').to.equal('5px 0px');
            expect($DropdownList.css('margin'), 'margin').to.equal('2px 0px 0px');
            expect($DropdownList.css('left'), 'left').to.equal('0px');
            expect($DropdownList.css('min-width'), 'min-width').to.equal('200px');
            expect($DropdownList.css('list-style-type'), 'list-style-type').to.equal('none');
            expect($DropdownList.css('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0.18)');
            expect($DropdownList.css('border-radius'), 'border-radius').to.equal('4px');
        });
        
        it('Above should have correct styles', () => {   
            $DropdownList.addClass('c-dropdown-list-above')
            expect($DropdownList.css('top'), 'top').to.equal('auto');
            expect($DropdownList.css('bottom'), 'bottom').to.equal('110%');
            expect($DropdownList.css('margin-bottom'), 'margin-bottom').to.equal('0px');
        });

        it('Below should have correct styles', () => { 
            $DropdownList.addClass('c-dropdown-list-below');
            expect($DropdownList.css('top'), 'top').to.equal('auto');
        });

        it('Right should have correct styles', () => { 
            $DropdownList.addClass('c-dropdown-list-right');
            expect($DropdownList.css('right'), 'right').to.equal('0px');
            expect($DropdownList.css('left'), 'left').to.equal('auto');
        });
    });

    describe('BD Dropdown Divider', () => {
        let $DropdownDivider = $('<li class="c-dropdown-divider"></li>');
    
        before((done) => {
            $testContainer.append($DropdownDivider);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($DropdownDivider.css('border-top'), 'border-top').to.equal('1px solid rgba(0, 0, 0, 0.18)');
        });
    });

    describe('BD Dropdown Item', () => {
        let $DropdownItem = $('<a class="c-dropdown-item"></a>');
    
        before((done) => {
            $testContainer.append($DropdownItem);
            done();
        });
    
        it('should have correct styles', () => {   
            expect($DropdownItem.css('display'), 'display').to.equal('block');
            expect($DropdownItem.css('position'), 'position').to.equal('relative');
            expect($DropdownItem.css('padding'), 'padding').to.equal('5px 15px');
            expect($DropdownItem.css('font-size'), 'font-size').to.equal('14px');
            expect($DropdownItem.css('font-weight'), 'font-weight').to.equal('400');
            expect($DropdownItem.css('text-decoration-line'), 'text-decoration-line').to.equal('none');
        });
    });

    describe('BD Dropdown Grid', () => {
        let $DropdownGrid = $('<div class="c-dropdown-grid"></div>');
    
        before((done) => {
            $testContainer.append($DropdownGrid);
            done();
        });
    
        it('Default should have correct styles', () => {   
            expect($DropdownGrid.css('display'), 'display').to.equal('flex');
            expect($DropdownGrid.css('flex-wrap'), 'flex-wrap').to.equal('wrap');
            expect($DropdownGrid.css('position'), 'position').to.equal('absolute');
            expect($DropdownGrid.css('padding'), 'padding').to.equal('8px');
            expect($DropdownGrid.css('text-align'), 'text-align').to.equal('left');
            expect($DropdownGrid.css('list-style-type'), 'list-style-type').to.equal('none');
            expect($DropdownGrid.css('border-radius'), 'border-radius').to.equal('4px');
            expect($DropdownGrid.css('font-size'), 'font-size').to.equal('14px');
            expect($DropdownGrid.css('background-clip'), 'background-clip').to.equal('padding-box');
            expect($DropdownGrid.css('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0.18)');
            expect($DropdownGrid.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 0px 4px 9px 0px');
            expect($DropdownGrid.css('width'), 'width').to.equal('300px');
        });

        it('Col-2 should have correct styles', () => { 
            $DropdownGrid.addClass('c-dropdown-grid-col-2');
            expect($DropdownGrid.css('width'), 'width').to.equal('200px');
        });
        
        it('Col-4 should have correct styles', () => { 
            $DropdownGrid.addClass('c-dropdown-grid-col-4');
            expect($DropdownGrid.css('width'), 'width').to.equal('400px');
        });
       
        it('Right should have correct styles', () => { 
            $DropdownGrid.addClass('c-dropdown-grid-right');
            expect($DropdownGrid.css('min-width'), 'min-width').to.equal('300px');
            expect($DropdownGrid.css('position'), 'position').to.equal('absolute');
            expect($DropdownGrid.css('right'), 'right').to.equal('0px');
        });
    });

    describe('BD Dropdown Item Selected', () => {
        let $DropdownItemSelected = $('<a class="c-dropdown-item-selected">Action</a>');
    
        before((done) => {
            $testContainer.append($DropdownItemSelected);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('height'), 'height').to.equal('10px');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('width'), 'width').to.equal('5px');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('right'), 'right').to.equal('14px');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('transform'), 'transform').to.equal('matrix(0.707107, 0.707107, -0.707107, 0.707107, 3.53553, -3.53553)');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('border-style'), 'border-style').to.equal('solid');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('border-width'), 'border-width').to.equal('0px 1px 1px 0px');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('border-color'), 'border-color').to.equal(toRgb('#414152'));
        });
    });
})
