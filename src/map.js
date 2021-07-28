const map = (collection, method) => {
    mapRecursiveHelper(0, collection, method);
    return collection;
}


function mapRecursiveHelper(index, collection, method){
    if(index == collection.length){
        return ;
    }
    collection[index] = method(collection[index]);
    mapRecursiveHelper(index + 1, collection, method);
    return;
}

module.exports = map;