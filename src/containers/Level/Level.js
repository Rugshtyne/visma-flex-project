import React from 'react';

import PropTypes from 'prop-types';
import Tutorial from '../../components/Tutorial/Tutorial';

function Level(props) {
    return (
        <div>
            <h2>{props.levelConfig.title}</h2>
            <Tutorial 
                tutorial={props.levelConfig.tutorial}
                tutorialImg={props.levelConfig.tutorialImg}
                title={props.levelConfig.title}
                properties={props.levelConfig.properties} />
        </div>
    );
}

Level.propTypes = {
    levelConfig: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tutorial: PropTypes.string.isRequired,
        tutorialImg: PropTypes.string,
        properties: PropTypes.objectOf(PropTypes.string),
        task: PropTypes.string.isRequired,
        taskAnswer: PropTypes.string.isRequired
    })
};

export default Level;