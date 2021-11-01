import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../apiCall";

const initialState = {
  usersProfile: [],
  loaded: false,
};

export const getUserProfileAsync = createAsyncThunk(
  "user/fetchUsersProfile",
  async (apiInfo) => {
    const response = await getUser(apiInfo);

    console.log(response.data);
    return response.data;
  }
);
const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getUserProfileAsync.pending, (state) => {
        state.loaded = false;
      })
      .addCase(getUserProfileAsync.fulfilled, (state, action) => {
        state.loaded = true;
        state.usersProfile = action.payload;
      });
  },
});

// export const { addEmployees } = employeesSlice.actions;
export const getUserProfile = (state) => state.userProfile;
export default userProfileSlice.reducer;
