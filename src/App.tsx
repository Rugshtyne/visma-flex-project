import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  Nav,
  NavDropdown,
} from 'react-bootstrap';
// import { capitalize } from 'lodash';

import SubLevel from './components/SubLevel/SubLevel';
import { RootState } from './store';
import { CHANGE_CURRENT_LEVEL } from './store/flexinflex/types';
import levels from './assets/levels_01-25.json';
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
            <NavDropdown key={`nav-dropdown-level-${level.title}`} id={`nav-dropdown-level-${index}`} drop="right" title={level.title}>
              {level.subLevels.map((subLevel, subLevelIndex) => (
                <NavDropdown.Item
                  key={subLevel.title}
                  onClick={() => props.changeCurrentLevel(subLevelIndex)}
                >
                  {subLevel.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          ))}
        </NavDropdown>
      </Nav>
      <SubLevel
        title={levels[0].subLevels[currentLevel].title}
        tutorial={levels[0].subLevels[currentLevel].tutorial}
        task={levels[0].subLevels[currentLevel].task}
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
