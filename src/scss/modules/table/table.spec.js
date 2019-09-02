describe('Table styles', () => {
    describe('Table', () => {
        let $table = $(`<table class="c-table">
                            <thead>
                                <tr>
                                    <th>
                                        Header
                                        <button class="c-btn c-btn-default c-btn-xs c-btn-table-icon c-pull-right"><i class="fa fa-search"></i></button>
                                    </th>
                                    <th>
                                        Header
                                        <button class="c-btn c-btn-default c-btn-xs c-btn-table-icon c-pull-right"><i class="fa fa-search"></i></button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Text</td>
                                    <td>
                                        Text
                                        <button class="c-btn c-btn-default c-btn-xs c-btn-table-icon c-pull-right"><i class="fa fa-ellipsis-h"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Text</td>
                                    <td>Text</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>TFoot Text</td>
                                    <td>TFoot Text</td>
                                </tr>
                            </tfoot>
                        </table>`);
    
        before((done) => {
            $testContainer.append($table);
            done();
        });
       
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-table thead th:not(:last-child)')).getPropertyValue('border-right'), 'border-right').to.equal(`1px solid ${toRgb('#dee2e6')}`);
            // c-table tbody odd tr
            expect(window.getComputedStyle(document.querySelector('.c-table:not(.c-table-transparent) tbody tr:nth-child(even)')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f8f9fa'));
        });

        describe('Table thead', () => {
            it('should have correct styles', () => {
                expect($table.find('thead').css('color'), 'color').to.equal(toRgb('#495057'));
                expect($table.find('thead').css('border-color'), 'border-color').to.equal(toRgb('#dee2e6'));
                expect($table.find('thead').css('border-width'), 'border-width').to.equal('1px 0px');
            });
        });

        describe('Table tbody', () => {
            it('should have correct styles', () => {
                expect($table.find('tbody').css('font-size'), 'font-size').to.equal('12px');
            })
        })

        describe('Table th & td', () => {
            it('should have correct styles', () => {
                expect($table.find('th').css('font-weight'), 'font-weight').to.equal('700');
                expect($table.find('th, td').css('padding'), 'padding').to.equal('5px 10px 4px');
                expect($table.find('td').css('border-right-width'), 'border-right-width').to.equal('0px');
                expect($table.find('td').css('font-weight'), 'font-weight').to.equal('400');
                expect(window.getComputedStyle(document.querySelector('.c-table tbody td')).getPropertyValue('padding'), 'padding').to.equal('5px 10px 4px');
            })
        });

        describe('Table button', () => {
            it('should have correct styles', () => {
                expect($table.find('button').css('padding-left'), 'padding-left').to.equal('4.44444px');
                expect($table.find('button').css('padding-right'), 'padding-right').to.equal('4.44444px');
                expect($table.find('button').css('margin-right'), 'margin-right').to.equal('-4.44444px');
            });
        });
    });
    
    describe('Table border horizontal', () => {
        let $tableBorderHorizontal = $(`<table class="c-table c-table-transparent c-table-border-horizontal">
                                            <thead>
                                                <tr>
                                                    <th>Header</th>
                                                    <th>Header</th>
                                                    <th>Header</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                </tr>
                                                <tr>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                </tr>
                                                <tr>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                </tr>
                                            </tbody>
                                        </table>`);
    
        before((done) => {
            $testContainer.append($tableBorderHorizontal);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-table-border-horizontal tbody tr')).getPropertyValue('border-bottom'), 'border-bottom').to.equal(`1px solid ${toRgb('#e9ecef')}`);
        });
    });
    
    describe('Table border both', () => {
        let $tableBorderBoth = $(`<table class="c-table c-table-border-both">
                                    <thead>
                                        <tr>
                                            <th>Header</th>
                                            <th>Header</th>
                                            <th>Header</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Text</td>
                                            <td>Text</td>
                                            <td>Text</td>
                                        </tr>
                                        <tr>
                                            <td>Text</td>
                                            <td>Text</td>
                                            <td>Text</td>
                                        </tr>
                                    </tbody>
                                </table>`);
    
        before((done) => {
            $testContainer.append($tableBorderBoth);
            done();
        });
    
        it('should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('table.c-table-border-both tbody tr')).getPropertyValue('border-bottom'), 'border-bottom').to.equal(`1px solid ${toRgb('#e9ecef')}`);
        });
    });
})
