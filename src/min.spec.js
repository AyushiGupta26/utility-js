const min = require('./min');

describe('Min', () => {

    it('Min of [] is undefined', () => {
        expect(min([])).toEqual(undefined);
    });

    it('Min of [1,2,3,4] is 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

    it('Min of [5,1,0,-4] is -4', () => {
        expect(min([5,1,0,-4])).toEqual(-4);
    });

})
