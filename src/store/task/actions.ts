import { StyleSheet } from '../../utils/utils';

import {
  CHANGE_BOXES_STYLESHEET,
  CHANGE_INPUT_VALUE,
  TaskActionTypes,
  SET_SUCCESS,
} from './types';

export const changeInputvalue = (newInputValue: string): TaskActionTypes => (
  {
    type: CHANGE_INPUT_VALUE,
    payload: newInputValue,
  }
);

export const setSuccess = (isSuccess: boolean): TaskActionTypes => (
  {
    type: SET_SUCCESS,
    payload: isSuccess,
  }
);

export const changeBoxesStyleSheet = (newStyleSheet: StyleSheet): TaskActionTypes => (
  {
    type: CHANGE_BOXES_STYLESHEET,
    payload: newStyleSheet,
  }
);
