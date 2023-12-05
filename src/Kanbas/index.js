import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import '../index.css';
// import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";

function Kanbas() {
  const [courses, setCourses] = useState([]);

  const URL = "https://kanbas-node-server-app-swmp.onrender.com/api/courses";

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    console.log('URL', URL);
    console.log('response.data', response.data);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const deleteCourse = async (course) => {
    // eslint-disable-next-line
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };


  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


  return (
    <Provider store={store}>
      <div className="d-flex" style={{ height: "100vh" }} >
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />
            } />
            <Route path="Courses/*" element={<h1>Courses</h1>} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  )
}
export default Kanbas