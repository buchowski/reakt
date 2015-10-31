module.exports = function (grunt) {

    grunt.file.expand('grunt/*.js').forEach(function (task) {
        require('./' + task)(grunt);
    });

    grunt.registerTask('default', ['exec:lint', 'browserify:dev', 'copy:dev']);
};