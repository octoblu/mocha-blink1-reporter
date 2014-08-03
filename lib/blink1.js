
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
  runner.on('start', function(){
    exec('blink1-tool --blue --blink 1')
  });

  runner.on('end', function(){
    if (this.failures)
      exec('blink1-tool --red');
    else
      exec('blink1-tool --green');
  });
}
