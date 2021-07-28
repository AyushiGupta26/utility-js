const max = (collection) => {
    if(collection.length == 0){
        return undefined;
    }
    const maximumValue = maxRecursiveHelper(0, collection);
    return maximumValue;
}

function maxRecursiveHelper(index, collection){
    if(index == collection.length - 1){
        return collection[index];
    }
    return Math.max(collection[index], maxRecursiveHelper(index + 1, collection));
}

module.exports = max;
