describe('Avatars', () => {
    describe('Avatar with data-status', () => {
        let avatarColors = {
            'primary': toRgb('#1b6ec2'),
            'success': toRgb('#2f9e44'),
            'warning': toRgb('#e8590c'),
            'danger': toRgb('#e03131')
        };

        for (let status in avatarColors) {
            let $avatar = $(`<span class="c-avatar c-avatar-${status}" data-text="AB" data-status="${status}"></span>`),
            avatarColorValue = avatarColors[status];

            before((done) => {
                $testContainer.append($avatar);
                done();
            });

            it(`${status} avatar should have correct styles`, () => {
                expect($avatar.css('background-color'), 'background-color').to.equal(avatarColorValue);
                expect(window.getComputedStyle(document.querySelector(`[data-status='${status}']`), ':before').getPropertyValue('background-color'), 'background-color').to.equal(avatarColorValue);
            });
        }
      
    });
})
