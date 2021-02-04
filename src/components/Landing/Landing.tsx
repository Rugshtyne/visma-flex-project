import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import levels from '../../assets/levels.json';
import { RootState } from '../../store';

const Landing = (props: PropsFromRedux): JSX.Element => {
  const { nodeId } = props;

  return (
    <>
      { !nodeId
      && levels.map((level) => (
        <div key={level.title}>
          <span>{level.title}</span>
          <p>{level.description}</p>
        </div>
      ))}
    </>
  );
};

const mapState = (state: RootState) => {
  const { nodeId } = state.app.currentNode;
  return {
    nodeId,
  };
};

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Landing);
