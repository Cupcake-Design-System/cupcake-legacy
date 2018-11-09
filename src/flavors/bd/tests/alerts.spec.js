describe('BD Alerts', () => {
    describe('BD Alerts Success', () => {
        let $alertSuccess = $(`
        <div class="c-alert c-alert-success">
            <a href="javascript:void(0)" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
                <i class="fa fa-times" aria-hidden="true"></i>
            </a>
            Rest assured everything is awesome!
        </div>
    `);

        before((done) => {
            $testContainer.append($alertSuccess);
            done();
        });

        it('should have correct styles', () => {
            expect($alertSuccess.css('color'), 'text color').to.equal(toRgb('#42721f'));
        });
    });
    describe('BD Alert Danger', () => {
        let $alertDanger = $(`
        <div class="c-alert c-alert-danger">
            <a href="javascript:void(0)" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
                <i class="fa fa-times" aria-hidden="true"></i>
            </a>
            <strong>Oh snap there is a problem!</strong>
        </div>
    `);

        before((done) => {
            $testContainer.append($alertDanger);
            done();
        });

        it('should have correct styles', () => {
            expect($alertDanger.css('color'), 'text color').to.equal(toRgb('#965650'));
        });
    });
});
