describe('IHS-BD Alerts', () => {
    describe('IHS-BD Top Default Alert with icon', () => {
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
        });
    });
});
