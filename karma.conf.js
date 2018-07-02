module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai', 'jquery-3.2.1'],
        plugins: ['karma-mocha', 'karma-chai', 'karma-jquery', 'karma-chrome-launcher', 'karma-firefox-launcher'],
        basePath: '',
        files: ['karma.before.js', 'src/scss/modules/**/*.spec.js', 'src/scss/modules/**/*.html', 'dist/*.css'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome', 'Firefox'],
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity
    });
}