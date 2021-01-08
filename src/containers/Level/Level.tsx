import React, { useState } from 'react';

import Tutorial from '../../components/Tutorial/Tutorial';
import Task from '../../components/Task/Task';

interface LevelProps {
  levelConfig: {
    title: string;
    tutorial: string;
    tutorialImg: string;
    properties?: { [key: string]: string}[];
    task: string;
    taskAnswer: string;
  };
}

const Level = ({ levelConfig }: LevelProps): JSX.Element => {
  const [tutorialMode, setTutorialMode] = useState(1);

  const toggleTutorialMode = () => (tutorialMode === 1 ? setTutorialMode(0) : setTutorialMode(1));

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

export default Level;
