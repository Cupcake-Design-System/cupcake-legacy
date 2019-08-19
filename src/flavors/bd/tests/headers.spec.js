describe('BD Headers', () => {
    describe('BD Default Header', () => {
        let $defaultHeader = $(`<header class="c-header">
                                    <div class="c-header-left">
                                    <div class="c-header-item">
                                        <a href="#" class="c-header-item-link c-header-logo"><img src="./img/ipreo-logo.png"></a>
                                    </div>
                                    </div>
                                    <div class="c-header-center"></div>
                                    <div class="c-header-right">
                                    <div class="c-header-item">
                                        <a class="c-header-item-link" href="#"><span class="fa fa-search" aria-hidden="true"></span></a>
                                    </div>
                                    <div class="c-header-item">
                                        <a class="c-header-item-link" href="#"><span class="fa fa-comments" aria-hidden="true"></span></a>
                                    </div>
                                    <div class="c-header-item">
                                        <a class="c-header-item-link" href="#"><span class="fa fa-bell" aria-hidden="true"></span> </a>
                                    </div>
                                    <div class="c-header-item">
                                        <a class="c-header-item-link" href="#"> <span class="fa fa-th" aria-hidden="true"></span></a>
                                    </div>
                                    <div class="c-header-item">
                                        <span class="c-dropdown">
                                        <a class="c-header-item-link" href="#">
                                            <span class="c-avatar c-avatar-sm c-avatar-primary" data-text="AB" data-status="success">
                                            </span>
                                            <i class="fa fa-caret-down c-p-left-sm" aria-hidden="true"></i>
                                        </a>
                                        <div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
                                            <li><a href="javascript:void(0)" class="c-a">Help</a></li>
                                            <li><a href="javascript:void(0)" class="c-a">Contact Support</a></li>
                                            <li><a href="javascript:void(0)" class="c-a">Settings</a></li>
                                            <li><a href="javascript:void(0)" class="c-a">Log Out</a></li>
                                        </div>
                                        </span>
                                    </div>
                                    </div>
                                </header>`);

        before((done) => {
            $testContainer.append($defaultHeader);
            done();
        });

        it('should have correct styles', () => {
            expect($defaultHeader.css('display'), 'display').to.equal('flex');
            expect($defaultHeader.css('justify-content'), 'justify-content').to.equal('space-between');
            expect($defaultHeader.css('align-items'), 'align-items').to.equal('center');
            expect($defaultHeader.css('height'), 'height').to.equal('50px');
            expect($defaultHeader.css('border-bottom'), 'border-bottom').to.equal('1px solid rgba(0, 0, 0, 0.06)');

            // c-header-left
            expect($defaultHeader.find('.c-header-left').css('display'), 'display').to.equal('flex');
            expect($defaultHeader.find('.c-header-left').css('align-items'), 'align-items').to.equal('center');

            // c-header-center
            expect($defaultHeader.find('.c-header-center').css('display'), 'display').to.equal('flex');
            expect($defaultHeader.find('.c-header-center').css('flex-grow'), 'flex-grow').to.equal('1');
            expect($defaultHeader.find('.c-header-center').css('justify-content'), 'justify-content').to.equal('center');

            // c-header-right
            expect($defaultHeader.find('.c-header-right').css('display'), 'display').to.equal('flex');
            expect($defaultHeader.find('.c-header-right').css('align-items'), 'align-items').to.equal('center');

            // c-header-left c-header-item
            expect(window.getComputedStyle(document.querySelector('.c-header-left .c-header-item')).getPropertyValue('border-right'), 'border-right').to.equal('1px solid rgba(0, 0, 0, 0.06)');

            // c-header-right c-header-item
            expect(window.getComputedStyle(document.querySelector('.c-header-right .c-header-item')).getPropertyValue('border-left'), 'border-left').to.equal('1px solid rgba(0, 0, 0, 0.06)');
        
            // c-header-item-link
            expect($defaultHeader.find('.c-header-item-link').css('display'), 'display').to.equal('flex');
            expect($defaultHeader.find('.c-header-item-link').css('align-items'), 'align-items').to.equal('center');
            expect($defaultHeader.find('.c-header-item-link').css('height'), 'height').to.equal('50px');
            expect($defaultHeader.find('.c-header-item-link').css('padding'), 'padding').to.equal('0px 20px');
            expect($defaultHeader.find('.c-header-item-link').css('white-space'), 'white-space').to.equal('nowrap');
            expect($defaultHeader.find('.c-header-item-link').css('color'), 'color').to.equal(toRgb('#adb5bd'));

            // c-header-logo img
            expect(window.getComputedStyle(document.querySelector('.c-header-logo img')).getPropertyValue('width'), 'width').to.equal('85px');
        });
    });
    
    describe('BD Header Tabs', () => {
        let $headerTab = $(`<header class="c-header">
                                <div class="c-header-left">
                                <div class="c-header-item">
                                    <a href="#" class="c-header-item-link c-header-logo">
                                    <img src="./img/ipreo-logo.png">
                                    </a>
                                </div>
                                </div>
                                <div class="c-header-center"></div>
                                <div class="c-header-right">
                                <div class="c-header-item">
                                    <a class="c-header-item-link" href="#"><span class="fa fa-search" aria-hidden="true"></span></a>
                                </div>
                                <div class="c-header-item">
                                    <a class="c-header-item-link" href="#"><span class="fa fa-comments" aria-hidden="true"></span></a>
                                </div>
                                <div class="c-header-item">
                                    <a class="c-header-item-link" href="#"><span class="fa fa-bell" aria-hidden="true"></span></a>
                                </div>
                                <div class="c-header-item">
                                    <a class="c-header-item-link" href="#"><span class="fa fa-th" aria-hidden="true"></span></a>
                                </div>
                                <div class="c-header-item">
                                    <span class="c-dropdown">
                                    <a class="c-header-item-link" href="#">
                                        <span class="c-avatar c-avatar-sm c-avatar-primary" data-text="AB" data-status="success">
                                        </span>
                                        <i class="fa fa-caret-down c-p-left-sm" aria-hidden="true"></i>
                                    </a>
                                    <div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
                                        <li><a href="javascript:void(0)" class="c-a">Help</a></li>
                                        <li><a href="javascript:void(0)" class="c-a">Contact Support</a></li>
                                        <li><a href="javascript:void(0)" class="c-a">Settings</a></li>
                                        <li><a href="javascript:void(0)" class="c-a">Log Out</a></li>
                                    </div>
                                    </span>
                                </div>
                                </div>
                            </header>
                            <ul class="c-tabs c-header-tabs">
                                <li class="c-tab-item"><a class="c-tab-item-link c-tab-item-link-active" href="#">Tab A</a></li>
                                <li class="c-tab-item"><a class="c-tab-item-link" href="#">Tab B</a></li>
                                <li class="c-tab-item"><a class="c-tab-item-link" href="#">Tab C</a></li>
                                <li class="c-tab-item"><a class="c-tab-item-link" href="#">Tab D</a></li>
                            </ul>`);

        before((done) => {
            $testContainer.append($headerTab);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-header-tabs.c-tabs')).getPropertyValue('box-shadow'), 'box-shadow').to.equal(toRgb('#e6edf1') + ' 0px -1px 0px 0px inset');
            expect(window.getComputedStyle(document.querySelector('.c-header-tabs.c-tabs')).getPropertyValue('padding-left'), 'padding-left').to.equal('20px');
        });
    });

    describe('BD Inverse Header', () => {
        let $inverseHeader = $(`<header class="c-header c-header-inverse">
                                    <div class="c-header-left">
                                        <div class="c-header-item">
                                            <a href="#" class="c-header-item-link c-header-logo">
                                            <img src="./img/ipreo-logo-white.png">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="c-header-center"></div>
                                    <div class="c-header-right">
                                        <div class="c-header-item">
                                            <a class="c-header-item-link" href="#"><span class="fa fa-search" aria-hidden="true"></span></a>
                                        </div>
                                        <div class="c-header-item">
                                            <a class="c-header-item-link" href="#"><span class="fa fa-comments" aria-hidden="true"></span></a>
                                        </div>
                                        <div class="c-header-item">
                                            <a class="c-header-item-link" href="#"><span class="fa fa-bell" aria-hidden="true"></span></a>
                                        </div>
                                        <div class="c-header-item">
                                            <a class="c-header-item-link" href="#"><span class="fa fa-th" aria-hidden="true"></span></a>
                                        </div>
                                        <div class="c-header-item">
                                            <span class="c-dropdown">
                                            <a class="c-header-item-link" href="#">
                                                <span class="c-avatar c-avatar-sm c-avatar-secondary" data-text="AB" data-status="success">
                                                </span>
                                                <i class="fa fa-caret-down c-p-left-sm" aria-hidden="true"></i>
                                            </a>
                                            <div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
                                                <li><a href="javascript:void(0)" class="c-a">Help</a></li>
                                                <li><a href="javascript:void(0)" class="c-a">Contact Support</a></li>
                                                <li><a href="javascript:void(0)" class="c-a">Settings</a></li>
                                                <li><a href="javascript:void(0)" class="c-a">Log Out</a></li>
                                            </div>
                                            </span>
                                        </div>
                                    </div>
                                </header>
                                <ul class="c-tabs c-header-tabs">
                                    <li class="c-tab-item"><a class="c-tab-item-link c-tab-item-link-active" href="#">Tab A</a></li>
                                    <li class="c-tab-item"><a class="c-tab-item-link" href="#">Tab B</a></li>
                                    <li class="c-tab-item"><a class="c-tab-item-link" href="#">Tab C</a></li>
                                    <li class="c-tab-item"><a class="c-tab-item-link" href="#">Tab D</a></li>
                                </ul>`);

        before((done) => {
            $testContainer.append($inverseHeader);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-header-inverse')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#495057'));
            expect(window.getComputedStyle(document.querySelector('.c-header-inverse')).getPropertyValue('border-color'), 'border-color').to.equal('rgba(255, 255, 255, 0.1)');
        });
    });

    describe('BD Legacy Header', () => {
        let $legacyHeader = $(`<div class="c-header-legacy">
                                    <header class="c-header">
                                    <div class="c-header-left">
                                        <div class="c-header-item">
                                        <div class="c-header-item">
                                            <a href="#" class="c-header-item-link c-header-logo">
                                            <svg height="22" viewBox="0 0 79 22" width="79" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="none" fill-rule="evenodd">
                                                <path d="M24.665 18.274h1.2c.402 0 .468.065.468.457v1.25c0 .39-.066.46-.467.46h-5.45c-.422 0-.467-.04-.467-.45v-1.24c0-.39.06-.46.46-.46h1.2V7.66h-1.2c-.4 0-.47-.068-.47-.46V5.96c0-.414.04-.457.46-.457h5.45c.4 0 .46.07.46.46V7.2c0 .39-.07.456-.47.456h-1.2v10.62m9.14-6.267c1.86 0 2.51-.59 2.51-2.25 0-1.55-.57-2.05-2.28-2.05h-.82V12h.59zm-.59 7.96c0 .39-.07.46-.45.46h-2c-.4 0-.44-.05-.44-.46V5.95c0-.413.04-.456.44-.456h3.42c1.684 0 2.612.174 3.31.61.99.63 1.602 1.936 1.602 3.48 0 2.94-1.9 4.876-4.81 4.876H33.2v5.506zm13.54-7.8c1.99 0 2.69-.61 2.69-2.3 0-1.59-.61-2.1-2.44-2.1h-.88v4.39h.63zm6.6 7.81c.06.11.11.24.11.33 0 .11-.09.2-.37.27l-2.01.55c-.206.07-.206.07-.27.07-.11 0-.18-.07-.317-.31l-3.188-6.36h-1.2v5.8c0 .4-.07.47-.48.47h-2.08c-.43 0-.475-.05-.475-.54V5.97c0-.426.044-.47.473-.47h3.684c1.697 0 2.555.156 3.347.58 1.29.715 1.92 1.987 1.92 3.817 0 2.054-.745 3.326-2.53 4.264l3.366 5.83zm7.52-8.55h3.2c.34 0 .4.06.4.45v1.46c0 .39-.06.45-.4.45h-3.2v4.244h4.02c.34 0 .4.065.4.457v1.46c0 .41-.04.456-.408.456h-6.24c-.36 0-.4-.05-.4-.46v-14c0-.417.04-.46.4-.46h6.4c.29 0 .387.063.387.24 0 .063-.02.17-.035.28L65 7.49c-.06.28-.154.37-.423.37h-3.71v3.57m10.26 1.39c0 3.41.76 5.095 2.295 5.095 1.536 0 2.315-1.683 2.315-5.055 0-3.556-.73-5.18-2.34-5.18-1.47 0-2.27 1.81-2.27 5.14zm6.17-5.89c1.116 1.155 1.65 3.044 1.65 5.704 0 4.95-1.893 7.47-5.59 7.47-3.63 0-5.437-2.46-5.437-7.374 0-2.963.604-4.77 1.96-5.99.96-.833 2.187-1.26 3.657-1.26 1.47 0 2.92.55 3.766 1.44z" fill="#FFF" fill-opacity="1"></path>
                                                <path d="M13.75 6.317h-1.912V20.49h1.91V22H9.673V4.807h4.077v1.51M0 20.49h1.91V6.317H0v-1.51h4.078V22H0v-1.51" fill="#94DBFF"></path>
                                                <path d="M7.94 4.807h-2.3V22h2.47V4.807h-.17" fill="#FFF"></path>
                                                <path d="M7.867 0h-2.23v2.357h2.395V0h-.165" fill="#EB8B2D"></path>
                                                </g>
                                            </svg>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="c-header-center"></div>
                                    <div class="c-header-right">
                                        <div class="c-header-item">
                                            <a class="c-header-item-link" href="#">
                                            <span class="fa fa-search" aria-hidden="true"></span>
                                            </a>
                                        </div>
                                        <div class="c-header-item">
                                            <a class="c-header-item-link" href="#">
                                            <span class="fa fa-comments" aria-hidden="true"></span>
                                            </a>
                                        </div>
                                        <div class="c-header-item">
                                            <a class="c-header-item-link" href="#">
                                            <span class="fa fa-bell" aria-hidden="true"></span>
                                            </a>
                                        </div>
                                        <div class="c-header-item">
                                            <a class="c-header-item-link" href="#">
                                            <span class="fa fa-th" aria-hidden="true"></span>
                                            </a>
                                        </div>
                                        <div class="c-header-item">
                                            <span class="c-dropdown">
                                                <a class="c-header-item-link" href="#">
                                                    <span class="c-avatar c-avatar-sm c-avatar-secondary" data-text="AB" data-status="success">
                                                    </span>
                                                    <i class="fa fa-caret-down c-p-left-sm" aria-hidden="true"></i>
                                                </a>
                                                <div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
                                                    <li><a href="javascript:void(0)" class="c-a">Help</a></li>
                                                    <li><a href="javascript:void(0)" class="c-a">Contact Support</a></li>
                                                    <li><a href="javascript:void(0)" class="c-a">Settings</a></li>
                                                    <li><a href="javascript:void(0)" class="c-a">Log Out</a></li>
                                                </div>
                                            </span>
                                        </div>
                                        </div>
                                    </header>
                                    <ul class="c-tabs c-header-tabs">
                                        <li class="c-tab-item"><a class="c-tab-item-link c-tab-item-link-active" href="#">Tab A</a></li>
                                        <li class="c-tab-item"><a class="c-tab-item-link" href="#">Tab B</a></li>
                                        <li class="c-tab-item"><a class="c-tab-item-link" href="#">Tab C</a></li>
                                        <li class="c-tab-item"><a class="c-tab-item-link" href="#">Tab D</a></li>
                                    </ul>
                                </div>`);

        before((done) => {
            $testContainer.append($legacyHeader);
            done();
        });

        it('should have correct styles', () => {

            // c-header-legacy c-header
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-header')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#0082de'));
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-header')).getPropertyValue('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-header')).getPropertyValue('color'), 'color').to.equal(toRgb('#ffffff'));

            // c-header-legacy c-tabs
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#324655'));
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs')).getPropertyValue('padding-left'), 'padding-left').to.equal('0px');

            // c-header-legacy c-tabs c-tab-item-link
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs .c-tab-item-link')).getPropertyValue('border-bottom-width'), 'border-bottom-width').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs .c-tab-item-link')).getPropertyValue('padding'), 'padding').to.equal('8px 10px');
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs .c-tab-item-link')).getPropertyValue('color'), 'color').to.equal(toRgb('#ffffff'));
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs .c-tab-item-link')).getPropertyValue('font-size'), 'font-size').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-header-legacy .c-tabs .c-tab-item-link')).getPropertyValue('line-height'), 'line-height').to.equal('24px');
        });
    });
})
