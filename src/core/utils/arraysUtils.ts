function arraysAreEqual(array1: string[], array2: string[]): boolean {

    if (array1.length !== array2.length) {
        return false;
    }

    const copiaArray1 = [...array1].sort();
    const copiaArray2 = [...array2].sort();

    for (let i = 0; i < copiaArray1.length; i++) {
        if (copiaArray1[i] !== copiaArray2[i]) {
            return false;
        }
    }

    return true;
}

export default arraysAreEqual