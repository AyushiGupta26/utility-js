const filteredCollection = [];

const filter = (collection, method) => {
    filteredCollection.length = 0;
    filterRecursiveHelper(0, collection, method);
    return filteredCollection;
}

function filterRecursiveHelper(index, collection, method){
    if(index == collection.length){
        return;
    }
    if(method(collection[index])) {
        filteredCollection.push(collection[index])
    }
    filterRecursiveHelper(index + 1, collection, method);
    return;
}

module.exports = filter;