import React from "react";
import Form from "../form/form.component";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../../redux/reducers/courses.reducer";
import { RenderListComp } from "./renderHook/renderList.component.jsx";

const CoursePlayList = () => {
  const state = useSelector((store) => store.course);
  const dispatch = useDispatch();
  const handleCourseDelete = (course) => {
    dispatch(removeCourse(course.name));
  };

  return (
    <div>
      <h1 className="subtitle is-3">Add Courses to your Cart</h1>
      <Form type={"course"} />
      <div className="cart-list">
        <RenderListComp data={state} onDelete={handleCourseDelete} />
        <hr />
      </div>
    </div>
  );
};

export default CoursePlayList;
