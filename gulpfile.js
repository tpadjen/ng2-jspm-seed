var gulp = require('gulp');
var jspm = require("jspm");


gulp.task('default', ['watch']);

gulp.task('bundle', function(done) { bundle(done); });

function bundle(done) {
  console.log("\n--- Compiling & bundling typescript ---")

  jspm.bundleSFX("app", "app/main.js", {
    sourceMaps: true
  })
    .then(function() {
      console.log('---            Complete             ---\n');
      if (done) done();
    })
    .catch(function(err) {
      console.log(err);
      if (done) done();
    });
}

gulp.task('watch', ['bundle'], function() {
  console.log("\nWatching typescript for changes");
  console.log("-------------------------------");

  gulp.watch('app/**/*.{html,css,ts}', function() { bundle(); });
});