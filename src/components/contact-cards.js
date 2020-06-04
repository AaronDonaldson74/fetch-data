import React from 'react';

function ContactCard(props) {

    return (
        <div>
            <h1>{props.user.name}</h1>
            <div>Phone: {props.user.phone}</div>
            <div>Email: {props.user.email}</div>
            <div>Company: {props.user.company.name}</div>
            <div>Address: {props.user.address.street}</div>
        </div>
    )
}

export default ContactCard;