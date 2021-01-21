import {
  TaskState,
  TaskActionTypes,
  CHANGE_INPUT_VALUE,
  SET_SUCCESS,
  CHANGE_BOXES_STYLESHEET,
} from './types';

const initialState: TaskState = {
  inputValue: '',
  success: false,
  boxesStyleSheet: {},
};

const taskReducer = (state = initialState, action: TaskActionTypes): TaskState => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    case CHANGE_BOXES_STYLESHEET:
      return {
        ...state,
        boxesStyleSheet: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
