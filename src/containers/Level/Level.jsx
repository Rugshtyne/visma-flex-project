import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tutorial from '../../components/Tutorial/Tutorial';
import Task from '../../components/Task/Task';

const Level = (props) => {
  const [tutorialMode, setTutorialMode] = useState(1);

  const toggleTutorialMode = () => (tutorialMode === 1 ? setTutorialMode(0) : setTutorialMode(1));

  const { levelConfig } = props;
  const {
    title,
    tutorial,
    tutorialImg,
    properties,
    task,
    taskAnswer,
  } = levelConfig;

  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={toggleTutorialMode}>To Task</button>
      {tutorialMode ? (
        <Tutorial
          tutorial={tutorial}
          tutorialImg={tutorialImg}
          title={title}
          properties={properties}
        />
      )
        : (
          <Task
            task={task}
            taskAnswer={taskAnswer}
          />
        )}
    </>
  );
};

Level.propTypes = {
  levelConfig: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tutorial: PropTypes.string.isRequired,
    tutorialImg: PropTypes.string,
    properties: PropTypes.objectOf(PropTypes.string),
    task: PropTypes.string.isRequired,
    taskAnswer: PropTypes.string,
  }).isRequired,
};

export default Level;
