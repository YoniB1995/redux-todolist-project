import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Components/Features/todoSlice'
import countReducer from './counter'
import colorReducer from './themeColor'
import studentReducer from './students'

export const store = configureStore({
  reducer: {
   counter: countReducer,
   color: colorReducer,
   student:studentReducer
  },
});
