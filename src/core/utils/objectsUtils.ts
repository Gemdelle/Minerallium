function arraysHaveSameObjects(array1: object[], array2: object[]): boolean {
    if (array1.length !== array2.length) {
        return false;
    }

    const compareObjects = (a: object, b: object): boolean => {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);

        if (aKeys.length !== bKeys.length) {
            return false;
        }

        for (const key of aKeys) {
            // @ts-ignore
            if (a[key] !== b[key]) {
                return false;
            }
        }

        return true;
    };

    for (const obj1 of array1) {
        const found = array2.some(obj2 => compareObjects(obj1, obj2));
        if (!found) {
            return false;
        }
    }

    return true;
}

export default arraysHaveSameObjects