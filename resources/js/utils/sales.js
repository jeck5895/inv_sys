/**
 *
 * @param {*} items - array of objects
 * @param {*} key - property to be reference on calculation
 */

const computeTotal = (items, key) => {
    if (!Array.isArray(items)) {
        return new Error("items should be of type Array")
        console.error('parameter should be of type Array');
    }

    if (!key || key === undefined || key === "") {
        return new Error("key parameter is required")
    }

    const total = items.reduce(
        (acc, item) => acc + item[key],
        0
    );

    return total;
}

const itemsExists = (items, imei) => {

    var i;
    for (i = 0; i < items.length; i++) {
        if (items[i].imei === imei) {
            return true;
        }
    }

    return false;
}

export { computeTotal, itemsExists };
