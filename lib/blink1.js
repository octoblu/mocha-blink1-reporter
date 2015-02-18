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
  var stats = {failures: 0};

  runner.on('fail', function(){
    stats.failures = stats.failures || 0;
    stats.failures++;
  });

  runner.on('end', function(){
    if (stats.failures)
      exec('blink1-tool --red -t 200 --blink '+stats.failures);
    else
      exec('blink1-tool --green --blink 1');
  });
}
