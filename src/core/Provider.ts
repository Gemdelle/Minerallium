import Storage from "./Storage";
import PlaySound from "../ui/components/PlaySound";

class Provider {
    static storage: Storage = new Storage()
    static sounds: PlaySound =  new PlaySound()

    static reset():any{
        Provider.storage = new Storage()
    }
}

export default Provider