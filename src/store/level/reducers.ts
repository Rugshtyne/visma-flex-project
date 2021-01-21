import { LevelState, LevelActionTypes, TOGGLE_TUTORIAL_MODE } from './types';

const initialState: LevelState = {
  tutorialMode: true,
};

const levelReducer = (state = initialState, action: LevelActionTypes): LevelState => {
  switch (action.type) {
    case TOGGLE_TUTORIAL_MODE:
      return {
        tutorialMode: !state.tutorialMode,
      };
    default:
      return state;
  }
};

export default levelReducer;
