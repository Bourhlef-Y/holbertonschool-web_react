import React from 'react';
import { useSelector } from 'react-redux';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';

function App({ isLoggedIn: isLoggedInProp }) {
  const isLoggedInRedux = useSelector((state) => state.auth.isLoggedIn);
  const isLoggedIn = isLoggedInProp !== undefined ? isLoggedInProp : isLoggedInRedux;

  return (
    <div>
      {isLoggedIn ? <CourseList /> : <Login />}
    </div>
  );
}

export default App;
