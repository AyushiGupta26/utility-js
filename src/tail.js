const tail = (collection) => {
    if (collection == null) {
        return null;
    }else {
        return collection.slice(1);
    }
}
module.exports = tail;