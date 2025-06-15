import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';
import CourseList from './components/CourseList/CourseList';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <CourseList /> : <Login />}
    </div>
  );
}

export default App;
