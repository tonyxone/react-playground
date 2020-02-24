import dispatcher from "../Dispatcher";
import ActionConst from "../ActionConst"

class ChangeColorAction{

      changeColor(colorName) {

        dispatcher.dispatch({
            type:ActionConst.CHANGE_COLOR,
            value:colorName
        })

    }

}

export default new ChangeColorAction();
