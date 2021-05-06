import { fail } from 'assert';

const orgConsoleError = window.console.error;

export function patchConsoleToFailOnError() {
  window.console.error = function (...args: any[]) {
    orgConsoleError.apply(this, args);
    if (args && args.toString() !== '[object ProgressEvent]') {
      try {
        throw new Error('console.error');
      } catch (err) {
        /* eslint-disable no-console */
        console.info('console.error', args, err);
      }
      fail('console.error was called, this is not allowed in a unit test run');
    }
  };
}
