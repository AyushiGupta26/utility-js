const reduce = require('./reduce');

describe('Reduce', () => {

    it('Reduce on [] using (x,y)=>x+y function is undefined', () => {
        expect(reduce([], (x,y)=>x+y)).toEqual(undefined);
    });

    it('Reduce on [] using (x,y)=>x+y,10 function is 10', () => {
        expect(reduce([], (x,y)=>x+y, 10)).toEqual(10);
    });

    it('Reduce on [\'a\', \'b\', \'c\'] using (x,y)=>x+y function is abc', () => {
        expect(reduce(['a', 'b', 'c'], (x,y)=>x+y)).toEqual("abc");
    });

    it('Reduce on [\'a\', \'b\', \'c\'] using (x,y)=>x+y,\'z\' function is zabc', () => {
        expect(reduce(['a', 'b', 'c'], (x,y)=>x+y, 'z')).toEqual("zabc");
    });

})