import React from "react";
import Form from "../form/form.component";
import { useDispatch, useSelector } from "react-redux";
import { removeSong } from "../../redux/reducers/songs.reducer";
import { RenderListComp } from "./renderHook/renderList.component.jsx";

const SongPlayList = () => {
  const state = useSelector((store) => store.song);
  const dispatch = useDispatch();

  const handleSongDelete = (song) => {
    dispatch(removeSong(song.name));
  };

  return (
    <div>
      <h1 className="subtitle is-3">Add Songs to your Cart</h1>
      <Form type={"song"} />
      <div className="cart-list">
        <RenderListComp data={state} onDelete={handleSongDelete} />
        <hr />
      </div>
    </div>
  );
};

export default SongPlayList;
