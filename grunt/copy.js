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
        },
        data: {
            files: [{
                expand: true,
                cwd: 'src/static/js',
                src: ['dummy-data.json'],
                dest: 'web/static/js'
            }]
        }

    });

    grunt.registerTask('copy:dev', [
        'copy:html',
        'copy:data'
    ]);
};