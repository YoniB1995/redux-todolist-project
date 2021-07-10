import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Components/Features/todoSlice'
export const store = configureStore({
  reducer: {
   todos: todoReducer
  },
});
