import {
  FlexinFlexActionTypes,
  CHANGE_CURRENT_LEVEL,
} from './types';

const changeCurrentLevel = (newCurrentLevel: number): FlexinFlexActionTypes => (
  {
    type: CHANGE_CURRENT_LEVEL,
    payload: newCurrentLevel,
  }
);

export default changeCurrentLevel;
