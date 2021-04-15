import {appliedColor} from './applied-color';

describe('utils', () => {
  describe('appliedColor', () => {

    it('normal color', () => {
      const color = appliedColor('0xff0000', '0x00ff00');
      expect(color).toEqual('0xff0000');
    });

    it('default color', () => {
      const color = appliedColor(undefined, '0x00ff00');
      expect(color).toEqual('0x00ff00');
    });
  });

});
