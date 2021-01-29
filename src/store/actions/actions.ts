/// Types

export const CHANGE_CURRENT_NODE = 'CHANGE_CURRENT_NODE';
export const CHANGE_TASK_INPUTS = 'CHANGE_TASK_INPUTS';
export const CHANGE_TASKS_COMPLETED = 'CHANGE_TASKS_COMPLETED';

export interface INode {
  nodeId: string;
  isSubLevel: boolean;
}

export interface AppState {
  currentNode: INode;
  taskInputs: Record<string, string>;
  tasksCompleted: Record<string, boolean>;
}

interface ChangeCurrentNodeAction {
  type: typeof CHANGE_CURRENT_NODE;
  payload: INode;
}

interface ChangeTaskInputsAction {
  type: typeof CHANGE_TASK_INPUTS;
  payload: Record<string, string>;
}

interface ChangeTasksCompletedAction {
  type: typeof CHANGE_TASKS_COMPLETED;
  payload: Record<string, boolean>;
}

export type ActionTypes = ChangeCurrentNodeAction |
ChangeTaskInputsAction | ChangeTasksCompletedAction;

/// Actions

export const changeCurrentNode = (newCurrentNode: INode): ActionTypes => (
  {
    type: CHANGE_CURRENT_NODE,
    payload: newCurrentNode,
  }
);

export const changeTaskInputs = (newTaskInputs: Record<string, string>): ActionTypes => (
  {
    type: CHANGE_TASK_INPUTS,
    payload: newTaskInputs,
  }
);

export const changeTasksCompleted = (newTasksCompleted: Record<string, boolean>): ActionTypes => (
  {
    type: CHANGE_TASKS_COMPLETED,
    payload: newTasksCompleted,
  }
);
