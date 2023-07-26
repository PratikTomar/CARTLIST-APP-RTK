import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../redux/reducers/movies.reducer";
import { useState } from "react";
import { addSong } from "../../redux/reducers/songs.reducer";
import { addCourse } from "../../redux/reducers/courses.reducer";

const Form = (props) => {
  const [inputValues, setInputValues] = useState({ name: "", cost: 0 });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.type === "movie") {
      dispatch(addMovie(inputValues));
      setInputValues({ name: "", cost: 0 });
    } else if (props.type === "song") {
      dispatch(addSong(inputValues));
      setInputValues({ name: "", cost: 0 });
    } else if (props.type === "course") {
      dispatch(addCourse(inputValues));
      setInputValues({ name: "", cost: 0 });
    }
  };

  return (
    <div className="cart-list-form panel">
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={inputValues.name}
              onChange={(e) =>
                setInputValues({ ...inputValues, name: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={inputValues.cost || ""}
              onChange={(e) =>
                setInputValues({ ...inputValues, cost: e.target.value })
              }
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
