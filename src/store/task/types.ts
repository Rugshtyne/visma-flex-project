export interface TaskState {
  inputValue: string;
  success: boolean;
  boxesStyleSheet: StyleSheet;
}

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const TOGGLE_SUCCESS = 'TOGGLE_SUCCESS';
export const CHANGE_BOXES_STYLESHEET = 'CHANGE_BOXES_STYLESHEET';
