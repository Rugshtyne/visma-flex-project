import React from 'react';
import {
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';

import classes from './Navigation.module.css';
import { changeCurrentNode } from '../../store/actions/actions';
import levels from '../../assets/levels.json';
import subLevels from '../../assets/sublevels.json';

const NavigationRaw = (props: PropsFromRedux): JSX.Element => (
  <Nav className={`flex-column bg-dark ${classes.Navigation}`}>
    <Nav.Item className={classes.DarkNavBrand}>
      <Nav.Link onClick={() => props.changeCurrentNode({ nodeId: '', isSubLevel: false })}>FlexinFlex</Nav.Link>
    </Nav.Item>
    <NavDropdown className={classes.DarkDropdown} id="nav-dropdown" drop="right" title="Levels">
      {levels.map((level) => (
        <NavDropdown key={level.id} id={`nav-dropdown-${level.id}`} drop="right" title={level.title}>
          {subLevels.filter((subLevel) => level.subLevels.includes(subLevel.id)).map((subLevel) => (
            <NavDropdown.Item
              key={subLevel.title}
              onClick={() => props.changeCurrentNode({ nodeId: subLevel.id, isSubLevel: true })}
            >
              {subLevel.title}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      ))}
    </NavDropdown>
  </Nav>
);

const mapDispatch = {
  changeCurrentNode,
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const Navigation = connector(NavigationRaw);
