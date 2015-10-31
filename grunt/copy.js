module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.config.set('copy', {
        html: {
            files: [{
                expand: true,
                cwd: 'src/static/',
                src: ['*.html'],
                dest: 'web/static/'
            }],
            options: {

            }
        }

    });

    grunt.registerTask('copy:dev', [
        'copy:html'
    ]);
};