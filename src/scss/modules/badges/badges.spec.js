describe('Badges', () => {
    describe('Base Badge types', () => {
        let badgeColors = {
            'primary': toRgb('#1b6ec2'),
            'success': toRgb('#2f9e44'),
            'warning': toRgb('#e8590c'),
            'danger': toRgb('#e03131')
        };
      
        for (let status in badgeColors) {
            let $badge = $(`<div class="c-badge c-badge-${status}">${status}</div>`),
                badgeColorValue = badgeColors[status];
      
            before((done) => {
                $testContainer.append($badge);
                done();
            });
      
            it(`${status} badge should have correct styles`, () => {
                expect($badge.css('background-color'), 'background').to.equal(badgeColorValue);
            });
        }
      
       
    });

    describe('Empty Badge types', () => {
        let badgeColors = {
            'primary': toRgb('#1b6ec2'),
            'success': toRgb('#2f9e44'),
            'warning': toRgb('#e8590c'),
            'danger': toRgb('#e03131')
        };
      
        for (let status in badgeColors) {
            let $badge = $(`<div class="c-badge c-rounded c-badge-${status}"></div>`),
                badgeColorValue = badgeColors[status];
      
            before((done) => {
                $testContainer.append($badge);
                done();
            });
      
            it(`${status} badge should have correct styles`, () => {
                expect($badge.css('background-color'), 'background').to.equal(badgeColorValue);
            });
        }
      
      
    });

    describe('Outline Badge types', () => {
        let badgeOutline = {
            'primary': toRgb('#1b6ec2'),
            'success': toRgb('#2f9e44'),
            'warning': toRgb('#e8590c'),
            'danger': toRgb('#e03131')
        };
      
        for (let status in badgeOutline) {
            let $badge = $(`<div class="c-badge c-badge-${status}-outline">${status} outline</div>`),
                badgeColorValue = badgeOutline[status];
      
            before((done) => {
                $testContainer.append($badge);
                done();
            });
      
            it(`${status} badge should have correct styles`, () => {
                expect($badge.css('color'), 'color').to.equal(badgeColorValue);
                expect($badge.css('border'), 'border').to.equal(`1px solid ${badgeColorValue}`);
            });
        }
    });
})
