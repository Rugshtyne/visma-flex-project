import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Level from '../Level/Level';
import { RootState } from '../../store';
import { CHANGE_CURRENT_LEVEL } from '../../store/flexinflex/types';

import levels from '../../assets/levels_new.json';

// TODO:
// - move to App
const FlexinFlex = (props: PropsFromRedux): JSX.Element => {
  const { flx } = props;
  const { currentLevel } = flx;

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
        tutorials={levels[currentLevel].tutorials}
        tasks={levels[currentLevel].tasks}
      />
    </>
  );
};

const mapState = (state: RootState) => ({
  flx: state.flexinFlex,
});

const mapDispatch = {
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
