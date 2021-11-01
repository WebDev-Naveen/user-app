import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../apiCall";

const initialState = {
  userPost: [],
  loaded: false,
};

export const getUserPostAsync = createAsyncThunk(
  "user/fetchUserPost",
  async (apiInfo) => {
    const response = await getUser(apiInfo);

    console.log(response.data);
    return response.data;
  }
);
const userPostSlice = createSlice({
  name: "userPost",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getUserPostAsync.pending, (state) => {
        state.loaded = false;
      })
      .addCase(getUserPostAsync.fulfilled, (state, action) => {
        state.loaded = true;
        state.userPost = action.payload;
      });
  },
});

// export const { addEmployees } = employeesSlice.actions;
export const getUserPost = (state) => state.userPost;
export default userPostSlice.reducer;
