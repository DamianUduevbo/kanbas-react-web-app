import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group" style={{ width: "75%" }} >
      <li className="list-group-item">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column gap-4">
            <input
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              } />

            <textarea
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              } />
          </div>

          <div className="d-flex justify-content-end flex-row gap-2 py-4 ">
            <button
              className="border-0 rounded-2 bg-danger text-white px-2 py-1"
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
            <button
              className="border-0 rounded-2 text-black px-2 py-1"
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </div>
        </div>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <p>{module.course}</p>

            <div className="d-flex flex-row gap-2">
            <button
              className="border-0 rounded-2 text-black px-2 py-1"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              className="border-0 rounded-2 bg-danger text-white px-2 py-1"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            </div>
          </li>))}
    </ul>
  );
}

export default ModuleList;