export interface LevelState {
  currentTaskOrTutorial: number;
  tutorialMode: boolean;
}

export const SET_CURRENT_TASK_OR_TUTORIAL = 'SET_CURRENT_TASK_OR_TUTORIAL';
export const TOGGLE_TUTORIAL_MODE = 'TOGGLE_TUTORIAL_MODE';

interface SetCurrentTaskOrTutorialAction {
  type: typeof SET_CURRENT_TASK_OR_TUTORIAL;
  payload: number;
}

interface ToggleTutorialModeAction {
  type: typeof TOGGLE_TUTORIAL_MODE;
}

export type LevelActionTypes = SetCurrentTaskOrTutorialAction | ToggleTutorialModeAction;
