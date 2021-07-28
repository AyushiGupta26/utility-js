const max = require('./max');

describe('Max', () => {

    it('Max of [] is undefined', () => {
        expect(max([])).toEqual(undefined);
    });

    it('Max of [1,2,3,4] is 4', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });

    it('Max of [5,1,0,-4] is 5', () => {
        expect(max([5,1,0,-4])).toEqual(5);
    });

})
