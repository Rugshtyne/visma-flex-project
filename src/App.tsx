import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  Nav,
  NavDropdown,
} from 'react-bootstrap';

import Level from './components/Level/Level';
import { RootState } from './store';
import { CHANGE_CURRENT_LEVEL } from './store/flexinflex/types';
import levels from './assets/levels_new.json';
import classes from './App.module.css';

const App = (props: PropsFromRedux): JSX.Element => {
  const { flx } = props;
  const { currentLevel } = flx;

  return (
    <div className={classes.App}>
      <Nav className="flex-column bg-dark">
        <Nav.Item className={classes.DarkNavBrand}>
          <Nav.Link>FlexinFlex</Nav.Link>
        </Nav.Item>
        <NavDropdown className={classes.DarkDropdown} id="nav-dropdown" drop="right" title="Levels">
          {levels.map((level, index) => (
            <NavDropdown.Item key={level.title} onClick={() => props.changeCurrentLevel(index)}>
              {level.title}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
      <Level
        title={levels[currentLevel].title}
        tutorials={levels[currentLevel].tutorials}
        tasks={levels[currentLevel].tasks}
      />
    </div>
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

export default connector(App);
