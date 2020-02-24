import dispatcher from "../Dispatcher";
import {EventEmitter} from "events";
import ActionConst from "../ActionConst";


const CHANGE_EVENT = 'CHANGE';

class ColorStore extends EventEmitter{

    constructor(){
        super();
        this.activeColor="lightgrey";
    }

    handleActions(action){
        switch (action.type) {
            case ActionConst.CHANGE_COLOR:{
                this.activeColor = action.value;
                this.emit(CHANGE_EVENT);
                break;
            }
            default:{}
        }
    }

    getActiveColor(){
        return this.activeColor;
    }

    addChangeListener(callback){
        this.on(CHANGE_EVENT,callback);
    }

    removeChangeListener(callback){
        this.removeChangeListener(CHANGE_EVENT,callback);
    }

}

const colorStore = new ColorStore();
dispatcher.register(colorStore.handleActions.bind(colorStore));
export default colorStore;