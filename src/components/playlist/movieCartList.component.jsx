import React from "react";
import Form from "../form/form.component";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../../redux/reducers/movies.reducer";
import { RenderListComp } from "./renderHook/renderList.component.jsx";

const MoviePlaylist = () => {
  const state = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  const handleMovieDelete = (movie) => {
    dispatch(removeMovie(movie.name));
  };

  return (
    <div>
      <h1 className="subtitle is-3">Add movies to your Cart</h1>
      <Form type={"movie"} />
      <div className="cart-list">
        <RenderListComp data={state} onDelete={handleMovieDelete} />
        <hr />
      </div>
    </div>
  );
};

export default MoviePlaylist;
