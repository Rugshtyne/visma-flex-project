import React, { useState } from 'react';

import Tutorial, { TutorialProperties } from '../../components/Tutorial/Tutorial';
import Task from '../../components/Task/Task';

// TODO:
// - Levelis gali tureti multiple tutorials ir multiple img, properties,
//   tiesiog reiktu apjungti po didesniu tutorials objektu. Bet passinu i pavienius
//   tutorial komponentus.
//   Realiai pasidaro tutorials[]: {title, description, img, properties}, {...}
// - Multiple tasks, velgi analogiskai apjungiu, gaunasi
//   tasks[]: {description, answer}, {...}
// - Redux

export interface LevelProps {
  title: string;
  tutorial: string;
  tutorialImg: string;
  properties?: TutorialProperties[];
  task: string;
  taskAnswer: CSS.Object[];
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
