import React, { Component } from 'react';
import './../bracket.css'

class Action4 extends Component{

    constructor(props){
        super(props);
        this.state = {
            r1aWin : ''
        };
    }

      teamClick(e) {

        let win = e.target.title

         this.setState({
                 r1aWin : win
             })

     }

    render(){

    return (
        <div >

            <main id="tournament">
                <ul className="round round-1">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top "><span id="r11" title="Lousville" onClick={(e)=>this.teamClick(e)}>Lousville</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom "><span id="r12" title="NC A&T" onClick={(e)=>this.teamClick(e)}>NC A&T</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Colo St</li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Missouri</li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Oklahoma St</li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Oregon</li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Saint Louis</li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">New Mexico St</li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Memphis</li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">St Mary's</li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Mich St</li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Valparaiso</li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Creighton</li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Cincinnati</li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top "></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Albany</li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-2">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top"><span id="r21">{this.state.r1aWin}</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom "></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top "></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom "></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top "></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom "></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top "></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom "></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-3">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top "></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom "></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top "></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom "></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-4">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top "></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom "></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-5">

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top "> </li>

                    <li className="spacer">&nbsp;</li>

                </ul>
            </main>

        </div>
        )
    }

}

export default Action4;