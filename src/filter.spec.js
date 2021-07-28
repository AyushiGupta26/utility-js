const filter = require('./filter');

const filterUpperCase = (character) => {
    if(character == character.toUpperCase()){
        return true;
    }
    return false;
}

describe('Filter', () => {

    it('Filter on [] using x => true test gives []', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('Filter on [1,2,3] using x => true test gives [1,2,3]', () => {
        expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
    });

    it('Filter on [1,2,3] using x => false test gives []', () => {
        expect(filter([1,2,3], x => false)).toEqual([]);
    });

    it('Filter on [1,2,3] using x => x > 1 test gives [2,3]', () => {
        expect(filter([1,2,3], x => x > 1)).toEqual([2,3]);
    });

    it('Filter on [\'a\', \'B\', \'c\', \'D\'] using filterUpperCase test gives [\'B\', \'D\']', () => {
        expect(filter(['a', 'B', 'c', 'D'], filterUpperCase)).toEqual(['B', 'D']);
    });

})