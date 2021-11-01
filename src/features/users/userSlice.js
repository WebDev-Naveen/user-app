import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../apiCall";

const initialState = {
  users: [],
  loaded: false,
};

export const getUserAsync = createAsyncThunk(
  "user/fetchUsers",
  async (apiInfo) => {
    const response = await getUser(apiInfo);
    return response.data.data;
  }
);
const employeesSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.loaded = false;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.loaded = true;
        state.users = action.payload;
      });
  },
});

// export const { addEmployees } = employeesSlice.actions;
export const getAllEmployees = (state) => state.users;
export default employeesSlice.reducer;
