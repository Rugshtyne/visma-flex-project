import { combineReducers } from 'redux';
import flexinFlexReducer from './flexinflex/reducers';
import levelReducer from './level/reducers';
import taskReducer from './task/reducers';

export const rootReducer = combineReducers({
  task: taskReducer,
  level: levelReducer,
  flexinFlex: flexinFlexReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
