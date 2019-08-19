describe('BD Table styles', () => {
    describe('BD Table', () => {
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
                                    <th>
                                        Header
                                        <button class="c-btn c-btn-default c-btn-xs c-btn-table-icon c-pull-right"><i class="fa fa-search"></i></button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Text</td>
                                    <td>Text</td>
                                    <td>
                                        Text
                                        <button class="c-btn c-btn-default c-btn-xs c-btn-table-icon c-pull-right"><i class="fa fa-ellipsis-h"></i></button>
                                    </td>
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
                            <tfoot>
                                <tr>
                                    <td>TFoot Text</td>
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
            expect($table.css('text-align'), 'text-align').to.equal('left');
            expect($table.css('line-height'), 'line-height').to.equal('19.6px');
            expect($table.css('border-radius'), 'border-radius').to.equal('2px');
            expect($table.css('margin-bottom'), 'margin-bottom').to.equal('15px');
            expect($table.css('border-collapse'), 'border-collapse').to.equal('collapse');
            expect($table.css('border-spacing'), 'border-spacing').to.equal('0px 0px');

            // c-table thead
            expect($table.find('thead').css('color'), 'color').to.equal(toRgb('#414152'));
            expect($table.find('thead').css('border-style'), 'border-style').to.equal('solid');
            expect($table.find('thead').css('border-color'), 'border-color').to.equal(toRgb('#8d8d97'));
            expect($table.find('thead').css('border-width'), 'border-width').to.equal('0px 0px 2px');
            expect($table.find('thead').css('vertical-align'), 'vertical-align').to.equal('bottom');

            // c-table tbody
            expect($table.find('tbody').css('font-size'), 'font-size').to.equal('14px');
            expect($table.find('tbody').css('border-style'), 'border-style').to.equal('none');

            // c-table tbody, c-table tfoot, c-table thead
            expect($table.find('tbody').css('border-width'), 'border-width').to.equal('0px');

            // c-table thead, tfoot tr
            expect($table.find('tr').css('background-position'), 'background-position').to.equal('0px 0px');

            // c-table thead th, thead td, tfoot td, tfoot th
            expect($table.find('th').css('font-size'), 'font-size').to.equal('12px');
            expect($table.find('th').css('text-align'), 'text-align').to.equal('left');
            expect($table.find('th').css('vertical-align'), 'vertical-align').to.equal('middle');
            expect($table.find('th, td').css('border-right-width'), 'border-right-width').to.equal('0px');
            expect($table.find('th, td').css('padding'), 'padding').to.equal('5px 10px 6px');
            expect($table.find('th, td').css('font-weight'), 'font-weight').to.equal('600');
            expect($table.find('th, td').css('line-height'), 'line-height').to.equal('16.8px');
            expect(window.getComputedStyle(document.querySelector('.c-table thead th:not(:last-child)')).getPropertyValue('border-right-style'), 'border-right-style').to.equal('none');

            // c-table tbody odd tr
            expect(window.getComputedStyle(document.querySelector('.c-table:not(.c-table-transparent) tbody tr:nth-child(2n+1)')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f9f9f9'));
        
            // c-table tbody td
            expect(window.getComputedStyle(document.querySelector('.c-table tbody td')).getPropertyValue('border-right-width'), 'border-right-width').to.equal('0px');
            expect(window.getComputedStyle(document.querySelector('.c-table tbody td')).getPropertyValue('padding'), 'padding').to.equal('5px 10px 6px');
            expect(window.getComputedStyle(document.querySelector('.c-table tbody td')).getPropertyValue('line-height'), 'line-height').to.equal('19.6px');

            // c-btn c-btn-table-icon
            expect($table.find('button').css('padding-left'), 'padding-left').to.equal('3.88889px');
            expect($table.find('button').css('padding-right'), 'padding-right').to.equal('3.88889px');
            expect($table.find('button').css('margin-right'), 'margin-right').to.equal('-3.88889px');
            expect(window.getComputedStyle(document.querySelector('.c-btn-table-icon:not(:hover)')).getPropertyValue('background-position'), 'background-position').to.equal('0px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-btn-table-icon:not(:hover)')).getPropertyValue('border-color'), 'border-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-btn-table-icon:not(:hover)')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('th:not(:hover) .c-btn-table-icon')).getPropertyValue('color'), 'color').to.equal(toRgb('#ced4da'));
            expect(window.getComputedStyle(document.querySelector('td:not(:hover) .c-btn-table-icon')).getPropertyValue('color'), 'color').to.equal(toRgb('#ced4da'));
        });
    });
    
    describe('BD Table border horizontal', () => {
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
            expect(window.getComputedStyle(document.querySelector('.c-table-border-horizontal tbody tr')).getPropertyValue('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e6e6e6'));
        });
    });
    
    describe('BD Table border both', () => {
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
            expect(window.getComputedStyle(document.querySelector('table.c-table-border-both tbody tr')).getPropertyValue('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e6e6e6'));
        });
    });
})
