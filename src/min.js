const min = (collection) => {
    if(collection.length == 0){
        return undefined;
    }
    const minimumValue = minRecursiveHelper(0, collection);
    return minimumValue;
}

function minRecursiveHelper(index, collection){
    if(index == collection.length - 1){
        return collection[index];
    }
    return Math.min(collection[index], minRecursiveHelper(index + 1, collection));
}

module.exports = min;
