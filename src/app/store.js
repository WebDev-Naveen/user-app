import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import employeesReducer from "../features/users/userSlice";
export const store = configureStore({
  reducer: {
    users: employeesReducer,
  },
});
