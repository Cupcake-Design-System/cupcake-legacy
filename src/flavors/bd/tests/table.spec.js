describe('BD Table styles', () => {
    describe('BD Table', () => {
        let $table = $(`<table class="c-table"></table>`);
    
        before((done) => {
            $testContainer.append($table);
            done();
        });
    
        it('The first child should have correct styles', () => {
            expect($table.css('text-align'), 'text-align').to.equal('left');
            expect($table.css('line-height'), 'line-height').to.equal('19.6px');
            expect($table.css('border-radius'), 'border-radius').to.equal('2px');
            expect($table.css('margin-bottom'), 'margin-bottom').to.equal('15px');
        });
    });
    
    describe('BD Table thead', () => {
        let $tableThead = $(`<table class="c-table"><thead></thead></table>`);
    
        before((done) => {
            $testContainer.append($tableThead);
            done();
        });
    
        it('The first child should have correct styles', () => {
            expect($tableThead.find('thead').css('color'), 'color').to.equal(toRgb('#414152'));
            expect($tableThead.find('thead').css('border-style'), 'border-style').to.equal('solid');
            expect($tableThead.find('thead').css('border-color'), 'border-color').to.equal(toRgb('#8d8d97'));
            expect($tableThead.find('thead').css('border-width'), 'border-width').to.equal('0px 0px 2px');
            expect($tableThead.find('thead').css('vertical-align'), 'vertical-align').to.equal('bottom');
        });
    });
    
    describe('BD Table tbody', () => {
        let $tableTbody = $(`<table class="c-table"><tbody></tbody></table>`);
    
        before((done) => {
            $testContainer.append($tableTbody);
            done();
        });
    
        it('The first child should have correct styles', () => {
            expect($tableTbody.find('tbody').css('font-size'), 'font-size').to.equal('14px');
            expect($tableTbody.find('tbody').css('border-style'), 'border-style').to.equal('none');
        });
    });
    
    describe('BD Table thead, tfoot tr', () => {
        let $tableTheadTr = $(`<table class="c-table">
                                    <thead><tr></tr></thead>
                                    <tfoot><tr></tr></tfoot>
                                </table>`);
    
        before((done) => {
            $testContainer.append($tableTheadTr);
            done();
        });
    
        it('The first child should have correct styles', () => {
            expect($tableTheadTr.find('tr').css('background-position'), 'background-position').to.equal('0px 0px');
        });
    });
    
    describe('BD Table thead th, thead td, tfoot td, tfoot th', () => {
        let $tableTh = $(`<table class="c-table">
                            <thead>
                                <tr>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <td>Text</td>
                                    <td>Text</td>
                                </tr>
                            </tfoot>
                        </table>`);
    
        before((done) => {
            $testContainer.append($tableTh);
            done();
        });
    
        it('The first child should have correct styles', () => {
            expect($tableTh.find('th').css('font-size'), 'font-size').to.equal('12px');
            expect($tableTh.find('th').css('text-align'), 'text-align').to.equal('left');
            expect($tableTh.find('th').css('vertical-align'), 'vertical-align').to.equal('middle');
            expect($tableTh.find('th, td').css('border-right-width'), 'border-right-width').to.equal('0px');
            expect($tableTh.find('th, td').css('padding'), 'padding').to.equal('5px 10px 6px');
            expect($tableTh.find('th, td').css('font-weight'), 'font-weight').to.equal('600');
            expect($tableTh.find('th, td').css('line-height'), 'line-height').to.equal('16.8px');
            expect(window.getComputedStyle(document.querySelector('.c-table thead th:not(:last-child)')).getPropertyValue('border-right-style'), 'border-right-style').to.equal('none');
        });
    });
    
    describe('BD Table tbody tr', () => {
        let $tableTbodyTr = $(`<table class="c-table"><tbody>
                                    <tr></tr>
                                    <tr></tr>
                                    <tr></tr>
                                </tbody></table>`);
    
        before((done) => {
            $testContainer.append($tableTbodyTr);
            done();
        });
    
        it('The first child should have correct styles', () => {
            expect(window.getComputedStyle(document.querySelector('.c-table:not(.c-table-transparent) tbody tr:nth-child(2n+1)')).getPropertyValue('background-color'), 'background-color').to.equal(toRgb('#f9f9f9'));
        });
    });
    
    describe('BD Table td', () => {
        let $tableTbodyTr = $(`<table class="c-table">
                                    <tbody>
                                        <tr><td>Text</td></tr>
                                        <tr><td>Text</td></tr>
                                        <tr><td>Text</td></tr>
                                    </tbody>
                                </table>`);
    
        before((done) => {
            $testContainer.append($tableTbodyTr);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tableTbodyTr.find('td').css('border-right-width'), 'border-right-width').to.equal('0px');
            expect($tableTbodyTr.find('td').css('padding'), 'padding').to.equal('5px 10px 6px');
            expect($tableTbodyTr.find('td').css('line-height'), 'line-height').to.equal('19.6px');
        });
    });
    
    describe('BD Table border horizontal', () => {
        let $tableBorderHorizontal = $(`<table class="c-table c-table-border-horizontal">
                                            <tbody>
                                                <tr><td>Text</td></tr>
                                                <tr><td>Text</td></tr>
                                                <tr><td>Text</td></tr>
                                            </tbody>
                                        </table>`);
    
        before((done) => {
            $testContainer.append($tableBorderHorizontal);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tableBorderHorizontal.find('tr').css('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e6e6e6'));
        });
    });
    
    describe('BD Table border both', () => {
        let $tableBorderBoth = $(`<table class="c-table c-table-border-both">
                                        <tbody>
                                            <tr><td>Text</td></tr>
                                            <tr><td>Text</td></tr>
                                            <tr><td>Text</td></tr>
                                        </tbody>
                                    </table>`);
    
        before((done) => {
            $testContainer.append($tableBorderBoth);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tableBorderBoth.find('tr').css('border-bottom'), 'border-bottom').to.equal('1px solid ' + toRgb('#e6e6e6'));
        });
    });
    
    describe('BD Table btn icon', () => {
        let $tableBtnIcon = $(`<table class="c-table c-table-border-horizontal">
                                    <td><button class="c-btn c-btn-table-icon"></button></td>
                                </table>`);
    
        before((done) => {
            $testContainer.append($tableBtnIcon);
            done();
        });
    
        it('should have correct styles', () => {
            expect($tableBtnIcon.find('button').css('padding-left'), 'padding-left').to.equal('3.88889px');
            expect($tableBtnIcon.find('button').css('padding-right'), 'padding-right').to.equal('3.88889px');
            expect($tableBtnIcon.find('button').css('margin-right'), 'margin-right').to.equal('-3.88889px');
            expect(window.getComputedStyle(document.querySelector('.c-btn-table-icon:not(:hover)')).getPropertyValue('background-position'), 'background-position').to.equal('0px 0px');
            expect(window.getComputedStyle(document.querySelector('.c-btn-table-icon:not(:hover)')).getPropertyValue('border-color'), 'border-color').to.equal('rgba(0, 0, 0, 0)');
            expect(window.getComputedStyle(document.querySelector('.c-btn-table-icon:not(:hover)')).getPropertyValue('box-shadow'), 'box-shadow').to.equal('none');
            expect(window.getComputedStyle(document.querySelector('td:not(:hover) .c-btn-table-icon')).getPropertyValue('color'), 'color').to.equal(toRgb('#ced4da'));
        });
    });
})
