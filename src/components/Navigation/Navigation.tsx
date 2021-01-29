import React, { useState } from 'react';
import {
  Nav,
} from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';

import classes from './Navigation.module.css';
import { changeCurrentNode, INode } from '../../store/actions/actions';
import { NavigationLevelsSection } from './NavigationLevelsSection/NavigationLevelsSection';

const NavigationRaw = (props: PropsFromRedux): JSX.Element => {
  const [showCollapse, setShowCollapse] = useState(false);

  // gal showCollapse det i Redux? reikia ir po Level komponento navigacijos
  const navigate = (node: INode) => {
    setShowCollapse(false);
    props.changeCurrentNode(node);
  };

  return (
    <>
      <Nav className={`flex-column bg-dark ${classes.Navigation}`}>
        <Nav.Item className={classes.DarkNavBrand}>
          <Nav.Link onClick={() => navigate({ nodeId: '', isSubLevel: false })}>FlexinFlex</Nav.Link>
        </Nav.Item>
        <Nav.Item className={classes.DarkDropdown}>
          <Nav.Link onClick={() => setShowCollapse(!showCollapse)}>Levels</Nav.Link>
        </Nav.Item>
      </Nav>
      <div
        className={classes.Collapse}
        style={{
          transform: showCollapse ? 'translateX(150px)' : 'translateX(-100vw)',
          opacity: showCollapse ? '1' : '0',
        }}
      >
        <NavigationLevelsSection />
      </div>
    </>
  );
};

const mapDispatch = {
  changeCurrentNode,
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const Navigation = connector(NavigationRaw);
