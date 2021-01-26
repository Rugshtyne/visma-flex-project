import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  Nav,
  NavDropdown,
} from 'react-bootstrap';
// import { capitalize } from 'lodash';

import SubLevel from './components/SubLevel/SubLevel';
import { RootState } from './store';
import { CHANGE_CURRENT_NODE, CHANGE_TASK_INPUTS, CHANGE_TASKS_COMPLETED } from './store/actions/actions';
import levels from './assets/levels_01-25.json';
import classes from './App.module.css';
import Landing from './components/Landing/Landing';
import Level from './components/Level/Level';

const App = (props: PropsFromRedux): JSX.Element => {
  const { app } = props;
  const { currentNode } = app;

  // init
  useEffect(() => {
    const taskInputsTemp: string[] = [];
    const tasksCompletedTemp: boolean[] = [];
    levels.forEach((level) => {
      level.subLevels.forEach(() => {
        taskInputsTemp.push('');
        tasksCompletedTemp.push(false);
      });
    });
    props.changeTaskInputs(taskInputsTemp);
    props.changeTasksCompleted(tasksCompletedTemp);
  }, []);

  useEffect(() => {
    console.log(currentNode);
  }, [currentNode]);

  return (
    <div className={classes.App}>
      <Nav className="flex-column bg-dark">
        <Nav.Item className={classes.DarkNavBrand}>
          <Nav.Link onClick={() => props.changeCurrentNode([-1, -1])}>FlexinFlex</Nav.Link>
        </Nav.Item>
        <NavDropdown className={classes.DarkDropdown} id="nav-dropdown" drop="right" title="Levels">
          {levels.map((level, levelIndex) => (
            <NavDropdown key={`nav-dropdown-level-${level.title}`} id={`nav-dropdown-level-${levelIndex}`} drop="right" title={level.title}>
              {level.subLevels.map((subLevel, subLevelIndex) => (
                <NavDropdown.Item
                  key={subLevel.title}
                  onClick={() => props.changeCurrentNode([levelIndex, subLevelIndex])}
                >
                  {subLevel.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          ))}
        </NavDropdown>
      </Nav>
      { currentNode[0] === -1 && currentNode[1] === -1 && <Landing levels={levels} />}
      { currentNode[0] !== -1 && currentNode[1] === -1 && levels.map((level) => (
        <Level
          key={level.title}
          title={level.title}
          description={level.description}
          subLevels={level.subLevels}
        />
      ))}
      { currentNode[0] !== -1 && currentNode[1] !== -1
        && (
        <SubLevel
          index={currentNode[1]}
          title={levels[currentNode[0]].subLevels[currentNode[1]].title}
          description={levels[currentNode[0]].subLevels[currentNode[1]].description}
          tutorial={levels[currentNode[0]].subLevels[currentNode[1]].tutorial}
          task={levels[currentNode[0]].subLevels[currentNode[1]].task}
        />
        )}
    </div>
  );
};

const mapState = (state: RootState) => ({
  app: state.app,
});

const mapDispatch = {
  changeCurrentNode: (newCurrentNode: [number, number]) => (
    {
      type: CHANGE_CURRENT_NODE,
      payload: newCurrentNode,
    }
  ),
  changeTaskInputs: (newTaskInputs: string[]) => (
    {
      type: CHANGE_TASK_INPUTS,
      payload: newTaskInputs,
    }
  ),
  changeTasksCompleted: (newTasksCompleted: boolean[]) => (
    {
      type: CHANGE_TASKS_COMPLETED,
      payload: newTasksCompleted,
    }
  ),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
