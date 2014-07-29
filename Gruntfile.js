module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/css/i.css': 'assets/sass/i.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: 'assets/**/*.scss',
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};