import {
  LevelState,
  LevelActionTypes,
  TOGGLE_TUTORIAL_MODE,
  SET_CURRENT_TASK_OR_TUTORIAL,
} from './types';

const initialState: LevelState = {
  currentTaskOrTutorial: 0,
  tutorialMode: true,
};

const levelReducer = (state = initialState, action: LevelActionTypes): LevelState => {
  switch (action.type) {
    case SET_CURRENT_TASK_OR_TUTORIAL:
      return {
        ...state,
        currentTaskOrTutorial: action.payload,
      };
    case TOGGLE_TUTORIAL_MODE:
      return {
        ...state,
        tutorialMode: !state.tutorialMode,
      };
    default:
      return state;
  }
};

export default levelReducer;
