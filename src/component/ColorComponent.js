import React, { Component } from 'react';
import ColorStore from "../store/ColorStore";

class ColorComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            color:ColorStore.getActiveColor()
        }
    }

    updateBackgroundColor = () =>{
      this.setState({color:ColorStore.getActiveColor()})
    };

    componentDidMount(){
        ColorStore.addChangeListener(this.updateBackgroundColor)
    }

    componentWillUnmount(){
        ColorStore.removeChangeListener(this.updateBackgroundColor)
    }

    render() {
        return (
            <div><div className="color-container" style={{backgroundColor: this.state.color}}/></div>
        )
    }

}

export default ColorComponent;