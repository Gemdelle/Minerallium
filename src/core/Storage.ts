import compounds from "./data/compounds";
import levelsConfig from "./data/levels-config";
import deepCopy from "./utils/deepCopyObjUtils";

class Storage {
    compoundsState: any
    levelsState: any

    constructor() {
        this.compoundsState = deepCopy(compounds)
        this.levelsState = deepCopy(levelsConfig)
    }
}

export default Storage