import { configureStore } from '@reduxjs/toolkit';
import coursesReducer, { fetchCourses } from '../courses/coursesSlice';
import { logout } from '../auth/authSlice';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Mock API response
const mockCourses = [
  { id: 1, title: 'React Basics' },
  { id: 2, title: 'Advanced Redux' },
];

const mockAxios = new MockAdapter(axios);

describe('coursesSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        courses: coursesReducer,
      },
    });
    mockAxios.reset();
  });

  test('should return the initial state', () => {
    const state = store.getState().courses;
    expect(state).toEqual({ courses: [], loading: false, error: null });
  });

  test('should fetch and store courses data', async () => {
    mockAxios.onGet('http://localhost:5173/courses.json').reply(200, { courses: mockCourses });

    await store.dispatch(fetchCourses());

    const state = store.getState().courses;
    expect(state.courses).toEqual(mockCourses);
  });

  test('should reset courses state on logout', async () => {
    // First fetch courses
    mockAxios.onGet('http://localhost:5173/courses.json').reply(200, { courses: mockCourses });
    await store.dispatch(fetchCourses());

    // Confirm data is loaded
    expect(store.getState().courses.courses).toEqual(mockCourses);

    // Dispatch logout
    store.dispatch(logout());

    // Expect state reset
    expect(store.getState().courses).toEqual({ courses: [], loading: false, error: null });
  });
});
