
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

function Blink1(runner) {
  runner.on('end', function(){
    if (stats.failures)
      `blink1-tool --red`
    else
      `blink1-tool --green`
  });
}
