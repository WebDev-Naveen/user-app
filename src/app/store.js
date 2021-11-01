import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/users/userSlice";
import userProfileReducer from "../features/UserProfile/userProfileSlice";
import userPostReducer from "../features/userPost/userPostSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    userProfile: userProfileReducer,
    userPost: userPostReducer,
  },
});
