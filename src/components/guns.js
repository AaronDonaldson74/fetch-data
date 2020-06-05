import React from 'react';

export default function Guns(props) {
    return (
        <div>
            <h1>This here's ma peacemaker!</h1>
            <div>{props.shooter.kind}</div>
            <div>{props.shooter.caliber}</div>
            <div>{props.shooter.shiny}</div>
        </div>
    )
}