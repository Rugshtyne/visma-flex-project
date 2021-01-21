export interface LevelState {
  tutorialMode: boolean;
}

export const TOGGLE_TUTORIAL_MODE = 'TOGGLE_TUTORIAL_MODE';

interface ToggleTutorialModeAction {
  type: typeof TOGGLE_TUTORIAL_MODE;
}

export type LevelActionTypes = ToggleTutorialModeAction;
