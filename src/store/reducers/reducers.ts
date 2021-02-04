import {
  AppState,
  ActionTypes,
  CHANGE_CURRENT_NODE,
  TOGGLE_COLLAPSE,
  CHANGE_TASK_INPUT,
  CHANGE_TASK_COMPLETED,
} from '../actions/actions';

const initialState: AppState = {
  currentNode: {
    nodeId: '',
    isSubLevel: false,
  },
  taskInputs: {},
  tasksCompleted: {},
  showCollapse: false,
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
        showCollapse: false,
      };
    case CHANGE_TASK_INPUT: {
      const changedTaskInputs = { ...state.taskInputs };
      changedTaskInputs[action.payload.id] = action.payload.input;
      return {
        ...state,
        taskInputs: changedTaskInputs,
      };
    }
    case CHANGE_TASK_COMPLETED: {
      const changedTasksCompleted = { ...state.tasksCompleted };
      changedTasksCompleted[action.payload.id] = action.payload.completed;
      return {
        ...state,
        tasksCompleted: changedTasksCompleted,
      };
    }
    case TOGGLE_COLLAPSE:
      return {
        ...state,
        showCollapse: !state.showCollapse,
      };
    default:
      return state;
  }
};
