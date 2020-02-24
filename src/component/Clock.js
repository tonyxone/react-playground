import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    render(){
        return (
            <div>
                <h1>Hello</h1>
                <h2>
                    It is {this.state.date.toLocaleDateString()}.
                </h2>
            </div>
        )
    }

}


    ReactDom.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    );


