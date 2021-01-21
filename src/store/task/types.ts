import { StyleSheet } from '../../utils/utils';

export interface TaskState {
  inputValue: string;
  success: boolean;
  boxesStyleSheet: StyleSheet;
}

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SET_SUCCESS = 'SET_SUCCESS';
export const CHANGE_BOXES_STYLESHEET = 'CHANGE_BOXES_STYLESHEET';

interface ChangeInputValueAction {
  type: typeof CHANGE_INPUT_VALUE;
  payload: string;
}

interface SetSuccessAction {
  type: typeof SET_SUCCESS;
  payload: boolean;
}

interface ChangeBoxesStyleSheetAction {
  type: typeof CHANGE_BOXES_STYLESHEET;
  payload: StyleSheet;
}

export type TaskActionTypes = ChangeInputValueAction | SetSuccessAction
| ChangeBoxesStyleSheetAction;
