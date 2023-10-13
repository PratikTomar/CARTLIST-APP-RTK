import { configureStore } from "@reduxjs/toolkit";
import { songsReducer } from "../reducers/songs.reducer";
import { courseReducer } from "../reducers/courses.reducer";
import { moviesReducer } from "../reducers/movies.reducer";

const store = configureStore({
  reducer: {
    movie: moviesReducer,
    song: songsReducer,
    course: courseReducer,
  },
});

export { store };
