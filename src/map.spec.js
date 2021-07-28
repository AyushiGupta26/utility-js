const map = require('./map');

const cube = (number) => {
    return Math.pow(number, 3);
}

const identity = (number) => {
    return number;
}

describe('Map', () => {

    it('Mapping of [] on cube function is []', () => {
        expect(map([], cube)).toEqual([]);
    });

    it('Mapping of [1,2,3] on identity function is [1,2,3]', () => {
        expect(map([1,2,3], identity)).toEqual([1,2,3]);
    });

    it('Mapping of [1,2,3] on cube function is [1,8,27]', () => {
        expect(map([1,2,3], cube)).toEqual([1,8,27]);
    });

    it('Mapping of [{x : 10}] on "someObject => someObject.x + 1" function is [11]', () => {
        expect(map([{x : 10}], someObject => someObject.x + 1)).toEqual([11]);
    });

})