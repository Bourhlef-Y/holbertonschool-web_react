import authReducer, { login, logout } from './authSlice';

describe('authSlice', () => {
  const initialState = {
    user: {
      email: '',
      password: ''
    },
    isLoggedIn: false
  };

  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle login', () => {
    const testUser = {
      email: 'test@example.com',
      password: 'password123'
    };

    const actualState = authReducer(initialState, login(testUser));

    expect(actualState.user.email).toBe(testUser.email);
    expect(actualState.user.password).toBe(testUser.password);
    expect(actualState.isLoggedIn).toBe(true);
  });

  it('should handle logout', () => {
    const loggedInState = {
      user: {
        email: 'test@example.com',
        password: 'password123'
      },
      isLoggedIn: true
    };

    const actualState = authReducer(loggedInState, logout());

    expect(actualState).toEqual(initialState);
  });
}); 