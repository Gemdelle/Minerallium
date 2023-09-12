import compounds from "./data/compounds";
import levelsConfig from "./data/levels-config";

class Storage {
    compoundsState: any
    levelsState: any

    constructor() {
        this.compoundsState = [...compounds]
        this.levelsState = [...levelsConfig]
    }
}

export default Storage