import React, {Component} from 'react';
import ContactCard from "./contact-cards"

export default class ContactCardsContainer extends Component {
    constructor() {
        super();

        this.state = {
            users: [
                {
                    "name": "aaron",
                    "phone": 555555555, 
                    "email": "something@something.com",
                    "address": {
                        "street": "anywehere street"
                    },
                    "company": {
                        "name": "zipco"
                    }
                }
            ]
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

    }

    render() {
        return (
            <div>
                <h1>Hello from ContactCardsContainer</h1>
                <ContactCard user={this.state.users[0]} />
            </div>
        )

    }





} 