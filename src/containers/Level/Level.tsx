import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Tutorial, { TutorialProperties } from '../../components/Tutorial/Tutorial';
import Task from '../../components/Task/Task';
import { RootState } from '../../store';
import { TOGGLE_TUTORIAL_MODE } from '../../store/level/types';

// TODO:
// - Levelis gali tureti multiple tutorials ir multiple img, properties,
//   tiesiog reiktu apjungti po didesniu tutorials objektu. Bet passinu i pavienius
//   tutorial komponentus.
//   Realiai pasidaro tutorials[]: {title, description, img, properties}, {...}
// - Multiple tasks, velgi analogiskai apjungiu, gaunasi
//   tasks[]: {description, answer}, {...}
// - Redux

export interface LevelProps extends PropsFromRedux {
  title: string;
  tutorial: string;
  tutorialImg: string;
  properties?: TutorialProperties[];
  task: string;
  taskAnswer: CSS.Object[];
}

const Level = (props: LevelProps): JSX.Element => {
  const {
    title,
    tutorial,
    tutorialImg,
    properties,
    task,
    taskAnswer,
    lvl,
  } = props;

  const { tutorialMode } = lvl;

  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={() => props.toggleTutorialMode()}>To Task</button>
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

const mapState = (state: RootState) => ({
  lvl: state.level,
});

const mapDispatch = {
  toggleTutorialMode: () => (
    {
      type: TOGGLE_TUTORIAL_MODE,
    }
  ),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Level);
