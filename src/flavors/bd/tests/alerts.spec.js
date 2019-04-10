describe('BD Alerts', () => {
    describe('BD Top Default Alert with icon', () => {
        let $alertTopDefault = $(`
        <div class="c-alert c-alert-default c-alert-top c-alert-has-icon">
            <a href="javascript:void(0)" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
                <i class="fa fa-times" aria-hidden="true"></i>
            </a>
            <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
            <strong>Default Top Alert with icon</strong>
        </div>
    `);

        before((done) => {
            $testContainer.append($alertTopDefault);
            done();
        });

        it('should have correct styles', () => {
            expect($alertTopDefault.css('padding'), 'padding').to.equal('6px 8px 6px 29px');
            expect($alertTopDefault.css('font-size'), 'font-size').to.equal('14px');
            expect($alertTopDefault.css('font-weight'), 'font-weight').to.equal('400');
            expect($alertTopDefault.css('line-height'), 'line-height').to.equal('18px');
            expect($alertTopDefault.css('border-radius'), 'border-radius').to.equal('2px');
            expect($alertTopDefault.css('border-width'), 'border-width').to.equal('0px');
            expect($alertTopDefault.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($alertTopDefault.css('background-color'), 'background-color').to.equal(toRgb('#f1f3f5'));

            //c-alert-close
            expect($alertTopDefault.find('.c-alert-close').css('color'), 'close icon color').to.equal(toRgb('#6e6e8b'));
            expect($alertTopDefault.find('.c-alert-close').css('font-size'), 'close icon font-size').to.equal('12px');
            expect($alertTopDefault.find('.c-alert-close').css('float'), 'close icon float').to.equal('right');
            expect($alertTopDefault.find('.c-alert-close').css('opacity'), 'close icon opacity').to.equal('0.6');
            expect($alertTopDefault.find('.c-alert-close').css('cursor'), 'close icon cursor').to.equal('pointer');

            //c-alert-icon
            expect($alertTopDefault.find('.c-alert-icon').css('position'), 'alert icon position').to.equal('absolute');
            expect($alertTopDefault.find('.c-alert-icon').css('font-size'), 'alert icon font-size').to.equal('13px');
            expect($alertTopDefault.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#414152'));
            expect($alertTopDefault.find('.c-alert-icon').css('top'), 'alert icon top').to.equal('8px');
            expect($alertTopDefault.find('.c-alert-icon').css('left'), 'alert icon left').to.equal('8px');
            expect($alertTopDefault.find('.c-alert-icon').css('bottom'), 'alert icon bottom').to.equal('8px');
        });
    });

    describe('BD Top Danger Alert with icon', () => {
        let $alertTopDanger = $(`
        <div class="c-alert c-alert-danger c-alert-top c-alert-has-icon">
            <a href="javascript:void(0)" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
                <i class="fa fa-times" aria-hidden="true"></i>
            </a>
            <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
            <strong>Danger Top Alert with icon</strong>
        </div>
    `);

        before((done) => {
            $testContainer.append($alertTopDanger);
            done();
        });

        it('should have correct styles', () => {
            expect($alertTopDanger.css('color'), 'color').to.equal(toRgb('#965650'));
            expect($alertTopDanger.css('background-color'), 'background-color').to.equal(toRgb('#fde9e8'));
            expect($alertTopDanger.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#d75248'));
        });
    });

    describe('BD Top Primary Alert with icon', () => {
        let $alertTopPrimary = $(`
            <div class="c-alert c-alert-primary c-alert-top c-alert-has-icon">
                <a href="javascript:void(0)" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </a>
                <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
                <strong>Primary Top Alert with icon</strong>
            </div>
        `);

        before((done) => {
            $testContainer.append($alertTopPrimary);
            done();
        });

        it('should have correct styles', () => {
            expect($alertTopPrimary.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($alertTopPrimary.css('background-color'), 'background-color').to.equal(toRgb('#cdecf5'));
            expect($alertTopPrimary.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#62a2b5'));
        });
    });

    describe('BD Top Success Alert with icon', () => {
        let $alertTopSuccess = $(`
                <div class="c-alert c-alert-success c-alert-top c-alert-has-icon">
                    <a href="javascript:void(0)" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                    <i class="fa fa-check-circle c-alert-icon" aria-hidden="true"></i>
                    <strong>Success Top Alert with icon</strong>
                </div>
            `);

        before((done) => {
            $testContainer.append($alertTopSuccess);
            done();
        });

        it('should have correct styles', () => {
            expect($alertTopSuccess.css('color'), 'color').to.equal(toRgb('#42721f'));
            expect($alertTopSuccess.css('background-color'), 'background-color').to.equal(toRgb('#e6f8dd'));
            expect($alertTopSuccess.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#51a71c'));
        });
    });

    describe('BD Top Warning Alert with icon', () => {
        let $alertTopWarning = $(`
                    <div class="c-alert c-alert-warning c-alert-top c-alert-has-icon">
                        <a href="javascript:void(0)" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                        <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
                        <strong>Warning Top Alert with icon</strong>
                    </div>
                `);

        before((done) => {
            $testContainer.append($alertTopWarning);
            done();
        });

        it('should have correct styles', () => {
            expect($alertTopWarning.css('color'), 'color').to.equal(toRgb('#866c28'));
            expect($alertTopWarning.css('background-color'), 'background-color').to.equal(toRgb('#fef7e3'));
            expect($alertTopWarning.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#d7ad3b'));
        });
    });

    describe('BD Primary Alert', () => {
        let $alertPrimary = $(`
                        <div class="c-alert c-alert-primary">
                            <a href="javascript:void(0)" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </a>
                            <strong>Primary Alert</strong>
                        </div>
                    `);

        before((done) => {
            $testContainer.append($alertPrimary);
            done();
        });

        it('should have correct styles', () => {
            expect($alertPrimary.css('padding'), 'padding').to.equal('6px 8px');
            expect($alertPrimary.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($alertPrimary.css('background-color'), 'background-color').to.equal(toRgb('#cdecf5'));
        });
    });
});

// Toast Alerts
describe('BD Toast Alerts', () => {
    describe('BD Default Toast Alert', () => {
        let $toastAlertDefault = $(`
            <div class="c-toast-alert">
                <button href="javascript:void(0)" class="c-toast-alert-close">×</button>
                Default Toast Alert
            </div>
        `);

        before((done) => {
            $testContainer.append($toastAlertDefault);
            done();
        });

        it('should have correct styles', () => {
            expect($toastAlertDefault.css('padding'), 'padding').to.equal('9px 20px 10px 40px');
            expect($toastAlertDefault.css('margin'), 'margin').to.equal('0px 0px 15px');
            expect($toastAlertDefault.css('background-color'), 'background-color').to.equal(toRgb('#ffffff'));
            expect($toastAlertDefault.css('color'), 'color').to.equal(toRgb('#414152'));
            expect($toastAlertDefault.css('font-size'), 'font-size').to.equal('14px');
            expect($toastAlertDefault.css('font-weight'), 'font-weight').to.equal('400');
            expect($toastAlertDefault.css('border-radius'), 'border-radius').to.equal('4px');
            expect($toastAlertDefault.css('box-shadow'), 'box-shadow').to.equal('rgba(0, 0, 0, 0.2) 0px 4px 9px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px');

            //c-toast-alert-close
            expect($toastAlertDefault.find('.c-toast-alert-close').css('position'), 'close icon position').to.equal('absolute');
            expect($toastAlertDefault.find('.c-toast-alert-close').css('width'), 'close icon width').to.equal('20px');
            expect($toastAlertDefault.find('.c-toast-alert-close').css('height'), 'close icon height').to.equal('20px');
            expect($toastAlertDefault.find('.c-toast-alert-close').css('color'), 'close icon color').to.equal(toRgb('#ced4da'));
            expect($toastAlertDefault.find('.c-toast-alert-close').css('font-size'), 'close icon font-size').to.equal('17px');
            expect($toastAlertDefault.find('.c-toast-alert-close').css('font-weight'), 'close icon font-weight').to.equal('900');
            expect($toastAlertDefault.find('.c-toast-alert-close').css('cursor'), 'close icon cursor').to.equal('pointer');

            //c-toast-alert::before
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#f1f3f5'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':before').getPropertyValue('width'), 'icon area width').to.equal('30px');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':before').getPropertyValue('border-radius'), 'icon area border-radius').to.equal('4px 0px 0px 4px');

            //c-toast-alert::after
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('color'), 'icon color').to.equal(toRgb('#ffffff'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#414152'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('content'), 'icon content').to.equal('"!"');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('font-family'), 'icon font-family').to.equal('Arial, Helvetica, sans-serif');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('font-size'), 'icon font-size').to.equal('9.6px');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('font-weight'), 'icon font-weight').to.equal('900');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('line-height'), 'icon line-height').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('width'), 'icon width').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('height'), 'icon height').to.equal('12px');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('border-radius'), 'icon border-radius').to.equal('50%');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('text-align'), 'icon text-align').to.equal('center');
        });
    });

    describe('BD Danger Toast Alert', () => {
        let $toastAlertDanger = $(`
                <div class="c-toast-alert c-toast-alert-danger">
                    <button href="javascript:void(0)" class="c-toast-alert-close">×</button>
                    Danger Toast Alert
                </div>
            `);

        before((done) => {
            $testContainer.append($toastAlertDanger);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-danger'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#fde9e8'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-danger'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#d75248'));
        });
    });

    describe('BD Info Toast Alert', () => {
        let $toastAlertInfo = $(`
                    <div class="c-toast-alert c-toast-alert-info">
                        <button href="javascript:void(0)" class="c-toast-alert-close">×</button>
                        Info Toast Alert
                    </div>
                `);

        before((done) => {
            $testContainer.append($toastAlertInfo);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-info'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#cdecf5'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-info'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#62a2b5'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-info'), ':after').getPropertyValue('content'), 'icon content').to.equal('"i"');
        });
    });

    describe('BD Success Toast Alert', () => {
        let $toastAlertSuccess = $(`
                        <div class="c-toast-alert c-toast-alert-success">
                            <button href="javascript:void(0)" class="c-toast-alert-close">×</button>
                            Success Toast Alert
                        </div>
                    `);

        before((done) => {
            $testContainer.append($toastAlertSuccess);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-success'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#e6f8dd'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-success'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#51a71c'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-success'), ':after').getPropertyValue('content'), 'icon content').to.equal('"L"');
        });
    });

    describe('BD Warning Toast Alert', () => {
        let $toastAlertWarning = $(`
                            <div class="c-toast-alert c-toast-alert-warning">
                                <button href="javascript:void(0)" class="c-toast-alert-close">×</button>
                                Warning Toast Alert
                            </div>
                        `);

        before((done) => {
            $testContainer.append($toastAlertWarning);
            done();
        });

        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-warning'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#fef7e3'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-warning'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#d7ad3b'));
        });
    });
});
