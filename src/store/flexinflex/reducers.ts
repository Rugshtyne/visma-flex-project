import {
  FlexinFlexState,
  FlexinFlexActionTypes,
  CHANGE_CURRENT_LEVEL,
} from './types';

const initialState: FlexinFlexState = {
  currentLevel: 0,
};

const flexinFlexReducer = (
  state = initialState,
  action: FlexinFlexActionTypes,
): FlexinFlexState => {
  switch (action.type) {
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
