import React from 'react';

import classes from './Tutorial.module.css';

function Tutorial(props) {
    let properties = <p>No properties here.</p>;
    if (props.properties) {
        properties = Object.keys(props.properties)
            .map(pptKey => {
                return [...Array(props.properties[pptKey])]
                    .map(pptDesc => {
                        return <li key={pptKey}><strong>{pptKey}</strong>: {pptDesc}</li>
                    });
            });
    }

    return (
        <div className={classes.Tutorial}>
            <div className={classes.Description}>
                <p>{props.tutorial}</p>
                <img 
                    src={props.tutorialImg} 
                    alt={props.title}/>
            </div>
            <ul>
                {properties}
            </ul>
        </div>
    );
}

export default Tutorial;