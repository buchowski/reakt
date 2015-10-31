module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-exec');

	grunt.config.set('exec', {
		lint: {
			cmd: 'npm run lint'
		}
	});
};