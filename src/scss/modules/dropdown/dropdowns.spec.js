describe('Dropdowns', () => {
    describe('Dropdown', () => {
        let $Dropdown = $(`<div class="c-dropdown">
                                <button class="c-btn c-btn-secondary">
                                    Below
                                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                                </button>
                                <ul class="c-dropdown-list c-dropdown-list-below" style="display: block;">
                                    <li><a class="c-dropdown-heading" href="#">Group heading</a></li>
                                    <li class="c-dropdown-divider c-m-vertical-sx"></li>
                                    <li><a class="c-dropdown-item" href="#">Action</a></li>
                                    <li><a class="c-dropdown-item" href="#">Another action</a></li>
                                    <li><a class="c-dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>`);
    
        before((done) => {
            $testContainer.append($Dropdown);
            done();
        });

        describe('Dropdown-list', () => {
            it('should have correct styles', () => {   
                expect($Dropdown.find('.c-dropdown-list').css('padding'), 'padding').to.equal('0px');
                expect($Dropdown.find('.c-dropdown-list').css('margin'), 'margin').to.equal('0px');
                expect($Dropdown.find('.c-dropdown-list').css('border'), 'border').to.equal(`1px solid ${toRgb('#e9ecef')}`);
                expect($Dropdown.find('.c-dropdown-list').css('border-radius'), 'border-radius').to.equal('0px 0px 2px 2px');
            });
        });

        describe('Dropdown-heading', () => {
            it('should have correct styles', () => {   
                expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('color'), 'color').to.equal(toRgb('#495057'));
                expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('opacity'), 'opacity').to.equal('0.6');
            });
        });

        describe('Dropdown-divider', () => {
            it('should have correct styles', () => {   
                expect($Dropdown.find('.c-dropdown-divider').css('border-top'), 'border-top').to.equal(`1px solid ${toRgb('#e9ecef')}`);
            });
        });

        describe('Dropdown-item', () => {
            it('should have correct styles', () => {   
                expect($Dropdown.find('.c-dropdown-item').css('font-size'), 'font-size').to.equal('12px');
                expect($Dropdown.find('.c-dropdown-item').css('font-weight'), 'font-weight').to.equal('700');
            });
        })
    });

    describe('Dropdown Grid Default', () => {
        let $DropdownGrid = $(`<div class="c-dropdown">
                                    <button class="c-btn c-btn-secondary">
                                        Grid 3 Columns (default)
                                        <i class="fas fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    <div class="c-dropdown-grid">
                                        <a class="c-dropdown-item" href="#">
                                            <span class="c-p-sm c-icon-xl fas fa-camera"></span>
                                            Camera
                                        </a>
                                        <a class="c-dropdown-item" href="#">
                                            <span class="c-p-sm c-icon-xl fas fa-image"></span>
                                            Gallery
                                        </a>
                                        <a class="c-dropdown-item" href="#">
                                            <span class="c-p-sm c-icon-xl fas fa-folder"></span>
                                            Files
                                        </a>
                                        <a class="c-dropdown-item" href="#">
                                            <span class="c-p-sm c-icon-xl fas fa-play"></span>
                                            Video
                                        </a>
                                        <a class="c-dropdown-item" href="#">
                                            <span class="c-p-sm c-icon-xl fas fa-music"></span>
                                            Music
                                        </a>
                                        <a class="c-dropdown-item" href="#">
                                            <span class="c-p-sm c-icon-xl fas fa-newspaper"></span>
                                            News
                                        </a>
                                        <a class="c-dropdown-item" href="#">
                                            <span class="c-p-sm c-icon-xl fas fa-book"></span>
                                            Contacts
                                        </a>
                                        <a class="c-dropdown-item" href="#">
                                            <span class="c-p-sm c-icon-xl fas fa-download"></span>
                                            Download
                                        </a>
                                        <a class="c-dropdown-item" href="#">
                                            <span class="c-p-sm c-icon-xl fas fa-cog"></span>
                                            Settings
                                        </a>
                                    </div>
                                </div>`);
    
        before((done) => {
            $testContainer.append($DropdownGrid);
            done();
        });
    
        describe('Dropdown-grid', () => {
            it('should have correct styles', () => {   
                expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('color'), 'color').to.equal(toRgb('#495057'));
                expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('border-radius'), 'border-radius').to.equal('2px');
                expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('font-size'), 'font-size').to.equal('12px');
                expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('border'), 'border').to.equal(`1px solid ${toRgb('#e9ecef')}`);
                expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.06) 0px 0px 4px 0px');
            });
        });

    });

    describe('Split button dropdown', () => {
        let $DropdownList = $(`<div class="c-btn-group">
                                    <button class="c-btn c-btn-secondary">
                                        Split button
                                    </button>
                                    <div class="c-dropdown">
                                        <button class="c-btn c-btn-secondary c-btn-caret">
                                            <i aria-hidden="true" class="fas fa-caret-down"></i>
                                        </button>
                                        <ul class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right" style="display: block;">
                                            <li><a class="c-dropdown-item" href="javascript:void(0);">Option 1</a></li>
                                            <li><a class="c-dropdown-item" href="javascript:void(0);">Option 2</a></li>
                                            <li><a class="c-dropdown-item" href="javascript:void(0);">Option 3</a></li>
                                        </ul>
                                    </div>
                                </div>`);
    
        before((done) => {
            $testContainer.append($DropdownList);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list > li > a')).getPropertyValue('padding'), 'padding').to.equal('12px 16px');
        });
    });

    describe('Dropdown Item Selected', () => {
        let $DropdownItemSelected = $(`<div class="c-dropdown">
                                            <button class="c-btn c-btn-secondary">
                                                Below (selected)
                                                <i aria-hidden="true" class="fas fa-caret-down"></i>
                                            </button>
                                            <ul class="c-dropdown-list c-dropdown-list-below" style="display: block;">
                                                <li><a class="c-dropdown-item" href="#">Action</a></li>
                                                <li><a class="c-dropdown-item c-dropdown-item-selected" href="#">Another action</a></li>
                                                <li><a class="c-dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>`);
    
        before((done) => {
            $testContainer.append($DropdownItemSelected);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('border-color'), 'border-color').to.equal(toRgb('#495057'));
        });
    });
})
