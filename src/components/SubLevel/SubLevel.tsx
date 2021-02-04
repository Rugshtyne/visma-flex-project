import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Tutorial from '../Tutorial/Tutorial';
import { Task } from '../Task/Task';
import classes from './SubLevel.module.css';
import { RootState } from '../../store';
import subLevels from '../../assets/sublevels.json';
import { Error } from '../Error/Error';

const SubLevelRaw = (props: PropsFromRedux): JSX.Element => {
  const { id, isSubLevel } = props;

  const thisSubLevel = subLevels.find((subLevel) => subLevel.id === id);

  if (isSubLevel) {
    if (thisSubLevel === undefined) {
      return (
        <Error errorMessage="Error occurred. Missing SubLevel info." />
      );
    }
    return (
      <div className={classes.SubLevel}>
        <div className={classes.Header}>
          <h2>{thisSubLevel.title}</h2>
        </div>
        <Tutorial
          title={thisSubLevel.title}
          description={thisSubLevel.tutorial.description}
          img={thisSubLevel.tutorial.img}
          properties={thisSubLevel.tutorial.properties}
        />
        <Task
          description={thisSubLevel.task.description}
          answer={thisSubLevel.task.answer}
        />
      </div>
    );
  }
  return (<></>);
};

const mapState = (state: RootState) => ({
  id: state.app.currentNode.nodeId,
  isSubLevel: state.app.currentNode.isSubLevel,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const SubLevel = connector(SubLevelRaw);
