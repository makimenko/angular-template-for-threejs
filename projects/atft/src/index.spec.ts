import {patchConsoleToFailOnError} from './lib/util/patch-console-to-fail-on-error';

beforeAll(() => patchConsoleToFailOnError());
