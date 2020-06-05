import React, { Component } from 'react';

export default function ContactCard(props) {
    return(
        <div>
            <h1>{props.movie.title}</h1>
            <div>My prop ended up here{props.myprop}</div>
            <div>Main Character is: {props.movie.character}</div>
            <div>Also Starring: {props.movie.sup_character}</div>
        </div>
    )
}