import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Level from '../Level/Level';
import { RootState } from '../../store';
import { CHANGE_CURRENT_LEVEL, CHANGE_LEVELS, ILevels } from '../../store/flexinflex/types';

const FlexinFlex = (props: PropsFromRedux): JSX.Element => {
  const { flx } = props;
  const { levels, currentLevel } = flx;

  return (
    <>
      <h1>{'I\'m FlexinFlex!'}</h1>
      {levels.map((level, index) => (
        <button key={level.title} type="button" onClick={() => props.changeCurrentLevel(index)}>
          {`Level ${index + 1}`}
        </button>
      ))}
      <Level
        title={levels[currentLevel].title}
        tutorial={levels[currentLevel].tutorial}
        tutorialImg={levels[currentLevel].tutorialImg}
        properties={levels[currentLevel].properties}
        task={levels[currentLevel].task}
        taskAnswer={levels[currentLevel].taskAnswer}
      />
    </>
  );
};

const mapState = (state: RootState) => ({
  flx: state.flexinFlex,
});

const mapDispatch = {
  changeLevels: (newLevels: ILevels[]) => (
    {
      type: CHANGE_LEVELS,
      payload: newLevels,
    }
  ),
  changeCurrentLevel: (newCurrentLevel: number) => (
    {
      type: CHANGE_CURRENT_LEVEL,
      payload: newCurrentLevel,
    }
  ),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FlexinFlex);
