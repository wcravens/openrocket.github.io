module.exports = function( grunt ) {
  grunt.initConfig({
    watch: {
      livereload: {
        files: [ '*.html', '*.css', '*.js', '*.{png,jpg,jpeg,gif,webp,svg}' ],
        options: { livereload: true }
      },
      bower: {
        files: ['bower_components/*', 'bower.json'],
        tasks: ['wiredep']
      }
    },
    wiredep: {
      task: {
        src: 'index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['watch'] );
};
