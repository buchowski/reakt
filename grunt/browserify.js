module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-browserify');

    grunt.config.set('browserify', {
        options: {
            transform: ['babelify'],
            browserifyOptions: {
                debug: true,
            }
        },
        dev: {
            files: [{ 'web/static/js/main-app.js': ['src/static/js/main.js'] }],
        },
        vendor: {
            files: [{ 'web/static/js/vendor.js': ['src/static/js/vendor.js'] }],
        }

    });

    grunt.registerTask('broswerify:dev', [
        'browserify',
    ]);
};