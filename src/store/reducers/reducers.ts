import {
  AppState,
  ActionTypes,
  CHANGE_CURRENT_NODE,
  CHANGE_TASK_INPUTS,
  CHANGE_TASKS_COMPLETED,
} from '../actions/actions';

const initialState: AppState = {
  currentNode: {
    nodeId: '',
    isSubLevel: false,
  },
  taskInputs: {},
  tasksCompleted: {},
};

export const appReducer = (
  state = initialState,
  action: ActionTypes,
): AppState => {
  switch (action.type) {
    case CHANGE_CURRENT_NODE:
      return {
        ...state,
        currentNode: action.payload,
      };
    case CHANGE_TASK_INPUTS:
      return {
        ...state,
        taskInputs: action.payload,
      };
    case CHANGE_TASKS_COMPLETED:
      return {
        ...state,
        tasksCompleted: action.payload,
      };
    default:
      return state;
  }
};
