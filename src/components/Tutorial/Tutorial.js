import React from 'react';

function Tutorial(props) {
    let properties = <p>No properties here.</p>;
    if (props.properties) {
        properties = Object.keys(props.properties)
            .map(pptKey => {
                return [...Array(props.properties[pptKey])]
                    .map(pptDesc => {
                        return <li key={pptKey}>{pptKey}: {pptDesc}</li>
                    });
            });
    }

    return (
        <div>
            <p>{props.tutorial}</p>
            <img 
                src={props.tutorialImg} 
                alt={props.title}/>
            <ul>
                {properties}
            </ul>
        </div>
    );
}

export default Tutorial;