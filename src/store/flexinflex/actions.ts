import {
  FlexinFlexActionTypes,
  CHANGE_LEVELS,
  CHANGE_CURRENT_LEVEL,
  ILevels,
} from './types';

export const changeLevels = (newLevels: ILevels[]): FlexinFlexActionTypes => (
  {
    type: CHANGE_LEVELS,
    payload: newLevels,
  }
);

export const changeCurrentLevel = (newCurrentLevel: number): FlexinFlexActionTypes => (
  {
    type: CHANGE_CURRENT_LEVEL,
    payload: newCurrentLevel,
  }
);
