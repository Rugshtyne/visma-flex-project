export interface FlexinFlexState {
  currentLevel: number;
}

export const CHANGE_CURRENT_LEVEL = 'CHANGE_CURRENT_LEVEL';

interface ChangeCurrentLevelAction {
  type: typeof CHANGE_CURRENT_LEVEL;
  payload: number;
}

export type FlexinFlexActionTypes = ChangeCurrentLevelAction;
