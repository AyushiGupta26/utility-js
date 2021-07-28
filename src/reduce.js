const reduce = (collection, method, initialValue) => {
    const reducedValue = reduceRecursiveHelper(0, collection, method, initialValue);
    return reducedValue;
}

function reduceRecursiveHelper(index, collection, method, accumulator){
    if(index == collection.length) {
        return accumulator;
    }
    if(accumulator != undefined) {
        accumulator = method(accumulator,collection[index]);
        return reduceRecursiveHelper(index + 1, collection, method, accumulator);
    }else{
        if(index + 1 == collection.length) {
            return collection[index];
        }else {
            accumulator = method(collection[index], collection[index + 1]);
            return reduceRecursiveHelper(index + 2, collection, method, accumulator);
        }
    }
}

module.exports = reduce;