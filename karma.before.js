window.toRgb = function (hex) {
    hex = hex.replace(/^#/, '');
    let num = parseInt(hex, 16);
    let RGB = [num >> 16, num >> 8 & 255, num & 255];
    return 'rgb(' + RGB[0] + ', ' + RGB[1] + ', ' + RGB[2] + ')';
}

window.$testContainer = $('<div class="c-body-text" data-test-container></div>');

beforeEach((done) => {
    $('body').append($testContainer);
    done();
});

afterEach((done) => {
    done();
});