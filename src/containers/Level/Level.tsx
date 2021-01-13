import React, { useState } from 'react';

import Tutorial, { TutorialProperties } from '../../components/Tutorial/Tutorial';
import Task, { TaskAnswer } from '../../components/Task/Task';

export interface LevelProps {
  title: string;
  tutorial: string;
  tutorialImg: string;
  properties?: TutorialProperties[];
  task: string;
  taskAnswer: TaskAnswer[];
}

const Level = (props: LevelProps): JSX.Element => {
  const [tutorialMode, setTutorialMode] = useState(true);

  const toggleTutorialMode = () => (tutorialMode ? setTutorialMode(false) : setTutorialMode(true));

  const {
    title,
    tutorial,
    tutorialImg,
    properties,
    task,
    taskAnswer,
  } = props;

  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={toggleTutorialMode}>To Task</button>
      {tutorialMode && (
        <Tutorial
          tutorial={tutorial}
          tutorialImg={tutorialImg}
          title={title}
          properties={properties}
        />
      )}
      {!tutorialMode && (
        <Task
          task={task}
          taskAnswer={taskAnswer}
        />
      )}
    </>
  );
};

export default Level;
