/// Types

export const CHANGE_CURRENT_NODE = 'CHANGE_CURRENT_NODE';
export const CHANGE_TASK_INPUT = 'CHANGE_TASK_INPUT';
export const CHANGE_TASK_COMPLETED = 'CHANGE_TASK_COMPLETED';
export const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE';

export interface INode {
  nodeId: string;
  isSubLevel: boolean;
}

export interface AppState {
  currentNode: INode;
  taskInputs: Record<string, string>;
  tasksCompleted: Record<string, boolean>;
  showCollapse: boolean;
}

interface ChangeCurrentNodeAction {
  type: typeof CHANGE_CURRENT_NODE;
  payload: INode;
}

interface ChangeTaskInputAction {
  type: typeof CHANGE_TASK_INPUT;
  payload: { id: string, input: string };
}

interface ChangeTaskCompletedAction {
  type: typeof CHANGE_TASK_COMPLETED;
  payload: { id: string, completed: boolean };
}

interface ToggleCollapseAction {
  type: typeof TOGGLE_COLLAPSE;
}

export type ActionTypes = ChangeCurrentNodeAction |
ToggleCollapseAction | ChangeTaskInputAction | ChangeTaskCompletedAction;

/// Action creators

export const changeCurrentNode = (newCurrentNode: INode): ActionTypes => (
  {
    type: CHANGE_CURRENT_NODE,
    payload: newCurrentNode,
  }
);

export const changeTaskInput = (newTaskInput: { id: string, input: string }): ActionTypes => (
  {
    type: CHANGE_TASK_INPUT,
    payload: newTaskInput,
  }
);

export const changeTaskCompleted = (newTaskCompleted: {
  id: string,
  completed: boolean
}): ActionTypes => (
  {
    type: CHANGE_TASK_COMPLETED,
    payload: newTaskCompleted,
  }
);

export const toggleCollapse = (): ActionTypes => (
  {
    type: TOGGLE_COLLAPSE,
  }
);
