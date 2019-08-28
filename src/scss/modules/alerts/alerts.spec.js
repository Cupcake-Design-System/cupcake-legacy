describe('Alerts', () => {
    describe('Top Default Alert with icon', () => {
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
            expect($alertTopDefault.css('padding'), 'padding').to.equal('18px 18px 18px 42px');
            expect($alertTopDefault.css('font-size'), 'font-size').to.equal('12px');
            expect($alertTopDefault.css('line-height'), 'line-height').to.equal('14px');
            expect($alertTopDefault.css('border-radius'), 'border-radius').to.equal('0px');
            expect($alertTopDefault.css('border-width'), 'border-width').to.equal('0px 0px 1px');
            expect($alertTopDefault.css('color'), 'color').to.equal(toRgb('#495057'));

            //c-alert-close
            expect($alertTopDefault.find('.c-alert-close').css('color'), 'close icon color').to.equal(toRgb('#78838e'));

            //c-alert-icon
            expect($alertTopDefault.find('.c-alert-icon').css('font-size'), 'alert icon font-size').to.equal('12px');
            expect($alertTopDefault.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#495057'));
            expect($alertTopDefault.find('.c-alert-icon').css('top'), 'alert icon top').to.equal('18px');
            expect($alertTopDefault.find('.c-alert-icon').css('left'), 'alert icon left').to.equal('18px');
            expect($alertTopDefault.find('.c-alert-icon').css('bottom'), 'alert icon bottom').to.equal('18px');
        });
    });

    describe('Top Danger Alert with icon', () => {
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
            expect($alertTopDanger.css('color'), 'color').to.equal(toRgb('#e03131'));
            expect($alertTopDanger.css('background-color'), 'background-color').to.equal(toRgb('#fff5f5'));
            expect($alertTopDanger.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#e03131'));
        });
    });

    describe('Top Primary Alert with icon', () => {
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
            expect($alertTopPrimary.css('color'), 'color').to.equal(toRgb('#1b6ec2'));
            expect($alertTopPrimary.css('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
            expect($alertTopPrimary.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#1b6ec2'));
        });
    });

    describe('Top Success Alert with icon', () => {
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
            expect($alertTopSuccess.css('color'), 'color').to.equal(toRgb('#2f9e44'));
            expect($alertTopSuccess.css('background-color'), 'background-color').to.equal(toRgb('#ebfbee'));
            expect($alertTopSuccess.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#2f9e44'));
        });
    });

    describe('Top Warning Alert with icon', () => {
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
            expect($alertTopWarning.css('color'), 'color').to.equal(toRgb('#e8590c'));
            expect($alertTopWarning.css('background-color'), 'background-color').to.equal(toRgb('#fff4e6'));
            expect($alertTopWarning.find('.c-alert-icon').css('color'), 'alert icon color').to.equal(toRgb('#e8590c'));
        });
    });

    describe('Primary Alert', () => {
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
            expect($alertPrimary.css('padding'), 'padding').to.equal('9px');
            expect($alertPrimary.css('color'), 'color').to.equal(toRgb('#1b6ec2'));
            expect($alertPrimary.css('background-color'), 'background-color').to.equal(toRgb('#e8f7ff'));
        });
    });
});

// Toast Alerts
describe('Toast Alerts', () => {
    describe('Default Toast Alert', () => {
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
            expect($toastAlertDefault.css('padding'), 'padding').to.equal('19px 27px 19px 40px');
            expect($toastAlertDefault.css('margin'), 'margin').to.equal('0px 0px 16px');
            expect($toastAlertDefault.css('color'), 'color').to.equal(toRgb('#212529'));
            expect($toastAlertDefault.css('font-size'), 'font-size').to.equal('12px');
            expect($toastAlertDefault.css('font-weight'), 'font-weight').to.equal('700');
            expect($toastAlertDefault.css('border-radius'), 'border-radius').to.equal('2px');
            expect($toastAlertDefault.css('box-shadow'), 'box-shadow').to.equal('rgba(33, 37, 41, 0.15) 0px 8px 12px 0px, rgb(222, 226, 230) 0px 0px 0px 1px');

            //c-toast-alert-close
            expect($toastAlertDefault.find('.c-toast-alert-close').css('width'), 'close icon width').to.equal('30px');
            expect($toastAlertDefault.find('.c-toast-alert-close').css('height'), 'close icon height').to.equal('30px');

            //c-toast-alert::before
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#343a40'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':before').getPropertyValue('height'), 'icon area height').to.equal('3px');
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':before').getPropertyValue('border-radius'), 'icon area border-radius').to.equal('0px 0px 2px 2px');

            //c-toast-alert::after
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('color'), 'icon color').to.equal(toRgb('#ffffff'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#212529'));
        });
    });

    describe('Danger Toast Alert', () => {
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
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-danger'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#e03131'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-danger'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#e03131'));
        });
    });

    describe('Info Toast Alert', () => {
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
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-info'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#1b6ec2'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-info'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#1b6ec2'));
        });
    });

    describe('Success Toast Alert', () => {
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
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-success'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#2f9e44'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-success'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#2f9e44'));
        });
    });

    describe('Warning Toast Alert', () => {
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
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-warning'), ':before').getPropertyValue('background-color'), 'icon area background').to.equal(toRgb('#e8590c'));
            expect(window.getComputedStyle(document.querySelector('.c-toast-alert-warning'), ':after').getPropertyValue('background-color'), 'icon background').to.equal(toRgb('#e8590c'));
        });
    });
});
