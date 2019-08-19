describe('BD Dropdowns', () => {
    describe('BD Dropdown', () => {
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
    
        it('should have correct styles', () => {   
            expect($Dropdown.css('display'), 'display').to.equal('inline-block');
            expect($Dropdown.css('position'), 'position').to.equal('relative');
            expect($Dropdown.css('overflow'), 'overflow').to.equal('visible');

            // c-dropdown-list
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('padding'), 'padding').to.equal('5px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('margin'), 'margin').to.equal('2px 0px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('left'), 'left').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('min-width'), 'min-width').to.equal('200px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('list-style-type'), 'list-style-type').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0.18)');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('border-radius'), 'border-radius').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#ffffff'));

            // c-dropdown-heading
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('color'), 'color').to.equal(toRgb('#8d8d97'));
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('opacity'), 'opacity').to.equal('1');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('position'), 'position').to.equal('relative');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('padding'), 'padding').to.equal('5px 15px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('text-decoration-line'), 'text-decoration-line').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('text-transform'), 'text-transform').to.equal('uppercase');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('font-size'), 'font-size').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-heading, .c-dropdown-list > li > a.c-dropdown-heading')).getPropertyValue('font-weight'), 'font-weight').to.equal('600');

            // c-dropdown-divider
            expect($Dropdown.find('.c-dropdown-divider').css('border-top'), 'border-top').to.equal('1px solid rgba(0, 0, 0, 0.18)');

            // c-dropdown-item
            expect($Dropdown.find('.c-dropdown-item').css('display'), 'display').to.equal('block');
            expect($Dropdown.find('.c-dropdown-item').css('position'), 'position').to.equal('relative');
            expect($Dropdown.find('.c-dropdown-item').css('padding'), 'padding').to.equal('5px 15px');
            expect($Dropdown.find('.c-dropdown-item').css('font-size'), 'font-size').to.equal('14px');
            expect($Dropdown.find('.c-dropdown-item').css('font-weight'), 'font-weight').to.equal('400');
            expect($Dropdown.find('.c-dropdown-item').css('text-decoration-line'), 'text-decoration-line').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list')).getPropertyValue('position'), 'position').to.equal('absolute');
        });
    });

    describe('BD Dropdown List Above', () => {
        let $DropdownList = $(`<div class="c-dropdown">
                                    <button class="c-btn c-btn-secondary">
                                        Above
                                        <i class="fas fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    <ul class="c-dropdown-list c-dropdown-list-above" style="display: block;">
                                        <li><a class="c-dropdown-heading" href="#">Group heading</a></li>
                                        <li class="c-dropdown-divider c-m-vertical-sx"></li>
                                        <li><a class="c-dropdown-item" href="#">Action</a></li>
                                        <li><a class="c-dropdown-item" href="#">Another action</a></li>
                                        <li><a class="c-dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>`);
    
        before((done) => {
            $testContainer.append($DropdownList);
            done();
        });

        it('should have correct styles', () => {
            expect($DropdownList.find('.c-dropdown-list-above').css('margin-bottom'), 'margin-bottom').to.equal('0px');
        });
    });

    describe('BD Dropdown List Right', () => {
        let $DropdownList = $(`<div class="c-dropdown">
                                    <button class="c-btn c-btn-secondary">
                                        Right
                                        <i class="fas fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    <ul class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right" style="display: block;">
                                        <li><a class="c-dropdown-heading" href="#">Group heading</a></li>
                                        <li class="c-dropdown-divider c-m-vertical-sx"></li>
                                        <li><a class="c-dropdown-item" href="#">Action</a></li>
                                        <li><a class="c-dropdown-item" href="#">Another action</a></li>
                                        <li><a class="c-dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>`);
    
        before((done) => {
            $testContainer.append($DropdownList);
            done();
        });

        it('should have correct styles', () => {
            expect($DropdownList.find('.c-dropdown-list-right').css('right'), 'right').to.equal('0px');
        });
    });

    describe('BD Dropdown Grid Default', () => {
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
    
        it('should have correct styles', () => {   
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('display'), 'display').to.equal('flex');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('flex-wrap'), 'flex-wrap').to.equal('wrap');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('color'), 'color').to.equal(toRgb('#414152'));
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('padding'), 'padding').to.equal('8px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('text-align'), 'text-align').to.equal('left');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('list-style-type'), 'list-style-type').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('border-radius'), 'border-radius').to.equal('4px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('font-size'), 'font-size').to.equal('14px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('background-clip'), 'background-clip').to.equal('padding-box');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0.18)');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 0px 4px 9px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('width'), 'width').to.equal('300px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('z-index'), 'z-index').to.equal('1000');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#ffffff'));

            // c-dropdown-grid c-dropdown-item
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid .c-dropdown-item')).getPropertyValue('display'), 'display').to.equal('flex');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid .c-dropdown-item')).getPropertyValue('flex-direction'), 'flex-direction').to.equal('column');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid .c-dropdown-item')).getPropertyValue('justify-content'), 'justify-content').to.equal('center');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid .c-dropdown-item')).getPropertyValue('flex-basis'), 'flex-basis').to.equal('33.3333%');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid .c-dropdown-item')).getPropertyValue('overflow'), 'overflow').to.equal('hidden');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid .c-dropdown-item')).getPropertyValue('text-align'), 'text-align').to.equal('center');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid .c-dropdown-item')).getPropertyValue('padding'), 'padding').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid .c-dropdown-item')).getPropertyValue('margin'), 'margin').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid .c-dropdown-item')).getPropertyValue('border'), 'border').to.equal('1px solid rgba(0, 0, 0, 0)');
        });
    });

    describe('BD Dropdown Grid 2 columns', () => {
        let $DropdownList = $(`<div class="c-dropdown">
                                    <button class="c-btn c-btn-secondary">
                                        Grid 2 Columns
                                        <i class="fas fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    <div class="c-dropdown-grid c-dropdown-grid-col-2">
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
                                    </div>
                                </div>`);
    
        before((done) => {
            $testContainer.append($DropdownList);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid-col-2')).getPropertyValue('width'), 'width').to.equal('200px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid-col-2 .c-dropdown-item')).getPropertyValue('flex-basis'), 'flex-basis').to.equal('50%');
        });
    });

    describe('BD Dropdown Grid 4 columns', () => {
        let $DropdownList = $(`<div class="c-dropdown">
                                    <button class="c-btn c-btn-secondary">
                                        Grid 4 Columns
                                        <i class="fas fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    <div class="c-dropdown-grid c-dropdown-grid-col-4">
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
            $testContainer.append($DropdownList);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid-col-4')).getPropertyValue('width'), 'width').to.equal('400px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid-col-4 .c-dropdown-item')).getPropertyValue('flex-basis'), 'flex-basis').to.equal('25%');
        });
    });

    describe('BD Dropdown Grid Right', () => {
        let $DropdownList = $(`<div class="c-dropdown c-pull-right">
                                    <button class="c-btn c-btn-secondary">
                                        Grid Right
                                        <i class="fas fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    <div class="c-dropdown-grid c-dropdown-grid-right">
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
            $testContainer.append($DropdownList);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid-right')).getPropertyValue('right'), 'right').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid-right')).getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-grid-right')).getPropertyValue('min-width'), 'min-width').to.equal('300px');
        });
    });

    describe('BD Split button dropdown', () => {
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
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list > li > a')).getPropertyValue('position'), 'position').to.equal('relative');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list > li > a')).getPropertyValue('display'), 'display').to.equal('block');
            expect(window.getComputedStyle(document.querySelector('.c-dropdown-list > li > a')).getPropertyValue('padding'), 'padding').to.equal('5px 15px');
        });
    });

    describe('BD Dropdown Item Selected', () => {
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
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('content'), 'content').to.equal('""');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('position'), 'position').to.equal('absolute');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('height'), 'height').to.equal('10px');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('width'), 'width').to.equal('5px');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('right'), 'right').to.equal('14px');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('border-style'), 'border-style').to.equal('solid');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('border-width'), 'border-width').to.equal('0px 1px 1px 0px');
            expect(window.getComputedStyle(document.querySelector(".c-dropdown-item-selected"), ':after').getPropertyValue('border-color'), 'border-color').to.equal(toRgb('#414152'));
        });
    });
})
