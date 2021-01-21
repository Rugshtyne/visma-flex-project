import { SET_CURRENT_TASK_OR_TUTORIAL, TOGGLE_TUTORIAL_MODE, LevelActionTypes } from './types';

export const setCurrentTaskOrTutorial = (newCurrent: number): LevelActionTypes => (
  {
    type: SET_CURRENT_TASK_OR_TUTORIAL,
    payload: newCurrent,
  }
);

export const toggleTutorialMode = (): LevelActionTypes => (
  {
    type: TOGGLE_TUTORIAL_MODE,
  }
);
