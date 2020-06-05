import React, {Component} from 'react';
import Guns from "./guns";

export default class GunCabinet extends Component {
    constructor() {
        super();

        this.state={
            guns: [
                {
                    kind: "rifle",
                    caliber: ".308",
                    shiny: "Yup"                   
                },
                {
                    kind: "pistol",
                    caliber: "9mm",
                    shiny: "Nope"
                }
            ]
        }
    }

    renderGuns = () => {
        return this.state.guns.map(gun => {
            return <Guns shooter={gun} />
        
        })
    }

    render() {
        return(
            <div>
                <h1>This is the Gun Cabinet</h1>
                {this.renderGuns()}
            </div>
        )
    }

}