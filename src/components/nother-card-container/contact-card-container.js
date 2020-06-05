import React, {Component} from 'react';
import ContactCard from "./contact-cards"


export default class ContactCardsContainer extends Component {
    constructor() {
        super();

        this.state = {
            users: [
                {
                    name: "aaron",
                    phone: 555555555, 
                    email: "something@something.com",
                    address: {
                        street: "anywhere street",
                        city: "pinedale",
                        state: "WY"
                    },
                    company: {
                        name: "zipco"
                    }
                },
                {
                    name: "Sneezfeezle",
                    phone: 555555555, 
                    email: "something@something.com",
                    address: {
                        street: "anywhere street",
                        city: "pinedale",
                        state: "WY"
                    },
                    company: {
                        name: "zipco"
                    }
                }
            ]
        }
    }
    renderContactCards = () => {
        return this.state.users.map(user => {
            return <ContactCard userInfo={user} />
        })
    }

    render() {
        return (
            <div>
                <h1>Hello from ContactCardsContainer</h1>
                {this.renderContactCards()}
            </div>
        )
        
    }
    
    
}












        //     fetchData = () => {
        //         fetch('https://jsonplaceholder.typicode.com/users')
        //         .then(response => response.json())
        //         .then(response => {
        //             this.setState({
        //                 users: response
        //             })
        //         });
        //     }
    
        //     componentDidMount() {
        //         fetchData() {
    
        //         }
        //     }