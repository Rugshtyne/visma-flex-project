import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { SubLevel } from './components/SubLevel/SubLevel';
import { RootState } from './store';
import classes from './App.module.css';
import Landing from './components/Landing/Landing';
import { Navigation } from './components/Navigation/Navigation';

const App = (props: PropsFromRedux): JSX.Element => {
  const { currentNode } = props;

  return (
    <div className={classes.App}>
      <Navigation />
      { !currentNode.nodeId
        && <Landing />}
      { currentNode.nodeId && currentNode.isSubLevel
        && <SubLevel />}
    </div>
  );
};

const mapState = (state: RootState) => ({
  currentNode: state.app.currentNode,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
