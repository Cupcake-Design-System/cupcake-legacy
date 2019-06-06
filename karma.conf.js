module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai', 'jquery-3.2.1'],
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-jquery',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-mocha-reporter'
        ],
        basePath: '',
        client: {
            args: [
                config.bd ? ['--bd'] : []
            ]
        },
        files: flavorSetUp(process.argv),
        reporters: ['dots', 'mocha'],
        mochaReporter: {
            colors: {
                success: 'green',
                info: 'blue',
                warning: 'cyan',
                error: 'red'
            },
            symbols: {
                success: '+',
                info: '#',
                warning: '!',
                error: 'x'
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'],
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity,
        captureConsole: false,
        captureTimeout: 4000
    });
}

function flavorSetUp(args) {
    let specPath = 'src/scss/modules/**/*.spec.js',
        assetsPath = 'dist/default.min.css';

    if (~args.indexOf('--bd')) {
        specPath = 'src/flavors/bd/tests/**/*.spec.js';
        assetsPath = 'dist/bd.min.css'; 
    }

    let files = [
        'karma.before.js',
        specPath,
        {
            pattern: assetsPath,
            watched: false,
            served: true
        }
    ];

    return files;
}
