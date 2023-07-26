import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "../reducers/songs.reducer";
import {
  courseReducer,
  addCourse,
  removeCourse,
} from "../reducers/courses.reducer";
import {
  moviesReducer,
  addMovie,
  removeMovie,
} from "../reducers/movies.reducer";

const store = configureStore({
  reducer: {
    movie: moviesReducer,
    song: songsReducer,
    course: courseReducer,
  },
});

export { store };
