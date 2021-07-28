const tail = require('./tail');

describe('Tail', () => {

    it('Everything except first element of null is null', () => {
        expect(tail(null)).toEqual(null);
    });

    it('Everything except first element of [] is []', () => {
        expect(tail([])).toEqual([]);
    });

    it('Everything except first element of [1] is []', () => {
        expect(tail([1])).toEqual([]);
    });
    
    it('Everything except first element of [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

})
