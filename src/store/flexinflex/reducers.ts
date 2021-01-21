import {
  FlexinFlexState,
  FlexinFlexActionTypes,
  CHANGE_LEVELS,
  CHANGE_CURRENT_LEVEL,
} from './types';

import levelsConfig from '../../assets/levels.json';

const initialState: FlexinFlexState = {
  levels: levelsConfig,
  currentLevel: 0,
};

const flexinFlexReducer = (
  state = initialState,
  action: FlexinFlexActionTypes,
): FlexinFlexState => {
  switch (action.type) {
    case CHANGE_LEVELS:
      return {
        ...state,
        levels: action.payload,
      };
    case CHANGE_CURRENT_LEVEL:
      return {
        ...state,
        currentLevel: action.payload,
      };
    default:
      return state;
  }
};

export default flexinFlexReducer;
