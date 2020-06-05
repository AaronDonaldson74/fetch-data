import React, { Component } from 'react';
import ContactCard from './contact-cards';

export default class ContactCardContainer extends Component {

    constructor() {
        super();

        this.state={
            videos: [
                {
                    title: '"Finding Nemo"',
                    character: "Dory",
                    sup_character: "Marlin"
                },
                {
                    title: '"Lord of the rings"',
                    character: "Frodo",
                    sup_character: "Gandalph"
                }
            ]
        }
    }

    renderContactCard = () => {
        return this.state.videos.map(video => {
            return <ContactCard 
            myprop="Made a card property" 
            movie={video} />
        })
    }


    render() {
        return(
            <div>
                <h2>Hello from the ContactCardContainer</h2>
                {this.renderContactCard()}
            </div>
        )
    }
}