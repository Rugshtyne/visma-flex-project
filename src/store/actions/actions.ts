// import { StyleSheet } from '../../utils/utils';

/// Types

export const CHANGE_CURRENT_NODE = 'CHANGE_CURRENT_NODE';
// export const SET_CURRENT_TASK_OR_TUTORIAL = 'SET_CURRENT_TASK_OR_TUTORIAL';
// export const TOGGLE_TUTORIAL_MODE = 'TOGGLE_TUTORIAL_MODE';
export const CHANGE_TASK_INPUTS = 'CHANGE_TASK_INPUTS';
export const CHANGE_TASKS_COMPLETED = 'CHANGE_TASKS_COMPLETED';
// export const CHANGE_BOXES_STYLESHEET = 'CHANGE_BOXES_STYLESHEET';

export interface AppState {
  currentNode: [number, number];
  // currentLevel: number;
  // currentTaskOrTutorial: number;
  // tutorialMode: boolean;
  taskInputs: string[];
  tasksCompleted: boolean[];
  // boxesStyleSheet: StyleSheet;
}

interface ChangeCurrentNodeAction {
  type: typeof CHANGE_CURRENT_NODE;
  payload: [number, number];
}

// interface SetCurrentTaskOrTutorialAction {
//   type: typeof SET_CURRENT_TASK_OR_TUTORIAL;
//   payload: number;
// }

// interface ToggleTutorialModeAction {
//   type: typeof TOGGLE_TUTORIAL_MODE;
// }

interface ChangeTaskInputsAction {
  type: typeof CHANGE_TASK_INPUTS;
  payload: string[];
}

interface ChangeTasksCompletedAction {
  type: typeof CHANGE_TASKS_COMPLETED;
  payload: boolean[];
}

// interface ChangeBoxesStyleSheetAction {
//   type: typeof CHANGE_BOXES_STYLESHEET;
//   payload: StyleSheet;
// }

export type ActionTypes = ChangeCurrentNodeAction |
ChangeTaskInputsAction | ChangeTasksCompletedAction;

/// Actions

export const changeCurrentNode = (newCurrentNode: [number, number]): ActionTypes => (
  {
    type: CHANGE_CURRENT_NODE,
    payload: newCurrentNode,
  }
);

// export const setCurrentTaskOrTutorial = (newCurrent: number): ActionTypes => (
//   {
//     type: SET_CURRENT_TASK_OR_TUTORIAL,
//     payload: newCurrent,
//   }
// );

// export const toggleTutorialMode = (): ActionTypes => (
//   {
//     type: TOGGLE_TUTORIAL_MODE,
//   }
// );

export const changeTaskInputs = (newTaskInputs: string[]): ActionTypes => (
  {
    type: CHANGE_TASK_INPUTS,
    payload: newTaskInputs,
  }
);

export const changeTasksCompleted = (newTasksCompleted: boolean[]): ActionTypes => (
  {
    type: CHANGE_TASKS_COMPLETED,
    payload: newTasksCompleted,
  }
);

// export const changeBoxesStyleSheet = (newStyleSheet: StyleSheet): ActionTypes => (
//   {
//     type: CHANGE_BOXES_STYLESHEET,
//     payload: newStyleSheet,
//   }
// );
