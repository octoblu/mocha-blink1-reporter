
/**
 * Expose `Blink1`.
 */

exports = module.exports = Blink1;

/**
 * Initialize a new Blink1 reporter.
 *
 * @param {Runner} runner
 * @api public
 */

require('shelljs/global');

function Blink1(runner) {
  runner.on('end', function(){
    var stats = self.stats;
    if (stats.failures)
      exec('blink1-tool --red');
    else
      exec('blink1-tool --green');
  });
}
