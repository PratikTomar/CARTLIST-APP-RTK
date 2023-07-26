import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/action";

const coursesSlice = createSlice({
  name: "course",
  initialState: [],
  reducers: {
    addCourse(state, action) {
      state.push(action.payload);
    },
    removeCourse(state, action) {
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addCourse, removeCourse } = coursesSlice.actions;
export const courseReducer = coursesSlice.reducer;
