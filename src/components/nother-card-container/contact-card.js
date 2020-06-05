import React from 'react';

function ContactCard(props) {

    return (
        <div>
            <h1>{props.userInfo.name}</h1>
            <div>Phone: {props.userInfo.phone}</div>
            <div>Email: {props.userInfo.email}</div>
            <div>Company: {props.userInfo.company.name}</div>
            <div>Address: {props.userInfo.address.street}</div>
        </div>
    )
}

export default ContactCard;