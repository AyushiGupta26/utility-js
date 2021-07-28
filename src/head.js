const head = (collection) => {
    if (collection == null || collection.length == 0) {
        return null;
    } else {
        return collection[0];
    }
}
module.exports = head;
