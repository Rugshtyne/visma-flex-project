import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tutorial from '../../components/Tutorial/Tutorial';
import Task from '../../components/Task/Task';

function Level(props) {
    const [tutorialMode, setTutorialMode] = useState(1);

    const toggleTutorialMode = () => {
        tutorialMode === 1 ? setTutorialMode(0) : setTutorialMode(1);
    }

    return (
        <React.Fragment>
            <h2>{props.levelConfig.title}</h2>
            <button onClick={toggleTutorialMode}>To Task</button>
            {tutorialMode ? 
                <Tutorial
                tutorial={props.levelConfig.tutorial}
                tutorialImg={props.levelConfig.tutorialImg}
                title={props.levelConfig.title}
                properties={props.levelConfig.properties} />
                :
                <Task 
                    task={props.levelConfig.task}
                    taskAnswer={props.levelConfig.taskAnswer}
                    taskAnswerString={props.levelConfig.taskAnswerString}/>
            }    
        </React.Fragment>
    );
}

Level.propTypes = {
    levelConfig: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tutorial: PropTypes.string.isRequired,
        tutorialImg: PropTypes.string,
        properties: PropTypes.objectOf(PropTypes.string),
        task: PropTypes.string.isRequired,
        taskAnswer: PropTypes.objectOf(PropTypes.string),
        taskAnswerString: PropTypes.string
    })
};

export default Level;