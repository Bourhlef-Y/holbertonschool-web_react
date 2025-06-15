import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);

describe('App Component', () => {
  it('renders Login component when not logged in', () => {
    const store = mockStore({
      auth: { isLoggedIn: false }
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Verify that Login component is rendered
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('renders CourseList component when logged in', () => {
    const store = mockStore({
      auth: { isLoggedIn: true }
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Verify that CourseList component is rendered
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
}); 