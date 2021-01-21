export interface ILevels {
  title: string;
  tutorial: string;
  tutorialImg: string;
  properties: {
    property: string;
    description: string;
  }[];
  task: string;
  taskAnswer: {
    selector: string;
    rules: {
      key: string;
      value: string;
    }[];
  }[];
}

export interface FlexinFlexState {
  levels: ILevels[];
  currentLevel: number;
}

export const CHANGE_LEVELS = 'CHANGE_LEVELS';
export const CHANGE_CURRENT_LEVEL = 'CHANGE_CURRENT_LEVEL';

interface ChangeLevelsAction {
  type: typeof CHANGE_LEVELS;
  payload: ILevels[];
}

interface ChangeCurrentLevelAction {
  type: typeof CHANGE_CURRENT_LEVEL;
  payload: number;
}

export type FlexinFlexActionTypes = ChangeLevelsAction | ChangeCurrentLevelAction;
