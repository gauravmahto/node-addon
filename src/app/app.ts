/**
 * Copyright 2018 - Author gauravm.git@gmail.com
 */

// Patch the path.
import '../global';

import util from 'util';

import { logger } from 'libs/utils';

// Application entry.

logger.info('** App entry **');

const args: string[] = [];
// See, https://nodejs.org/docs/latest/api/all.html#modules_accessing_the_main_module
if (require.main === module) {

  // Called directly from CLI.
  args.push(...process.argv.slice(2));
  logger.info('Passed args:', util.inspect(args));

} else {

  // Required by another module.

}

function main() {

  const addOn = require('../../../build/Release/addon');

  logger.info(addOn.hello());

}

main();
