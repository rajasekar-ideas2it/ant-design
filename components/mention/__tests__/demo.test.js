import demoTest from '../../../tests/shared/demoTest';

jest.mock('draft-js/lib/generateRandomKey', () => () => '123');

demoTest('mention');
