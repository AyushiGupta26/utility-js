const head = require('./head');

describe('Head', () => {

    it('First element of [] is null', () => {
        expect(head([])).toEqual(null);
    });

    it('First element of [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('First element of null is null', () => {
        expect(head(null)).toEqual(null);
    });

})
