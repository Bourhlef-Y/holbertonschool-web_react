import notificationsReducer, {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
  fetchNotifications,
  API_BASE_URL
} from '../notifications/notificationsSlice';

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    displayDrawer: true
  };

  it('should handle initial state', () => {
    expect(notificationsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('fetchNotifications', () => {
    it('should update notifications when fetchNotifications is fulfilled', async () => {
      const mockNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'Updated notification' }
      ];

      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockNotifications)
        })
      );

      const action = {
        type: fetchNotifications.fulfilled.type,
        payload: mockNotifications
      };

      const state = notificationsReducer(initialState, action);
      expect(state.notifications).toEqual(mockNotifications);
    });
  });

  describe('markNotificationAsRead', () => {
    it('should remove the notification with the specified id', () => {
      const startState = {
        ...initialState,
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' }
        ]
      };

      const action = markNotificationAsRead(1);
      const state = notificationsReducer(startState, action);

      expect(state.notifications).toHaveLength(1);
      expect(state.notifications[0].id).toBe(2);
    });
  });

  describe('drawer visibility', () => {
    it('should show drawer', () => {
      const startState = {
        ...initialState,
        displayDrawer: false
      };

      const state = notificationsReducer(startState, showDrawer());
      expect(state.displayDrawer).toBe(true);
    });

    it('should hide drawer', () => {
      const state = notificationsReducer(initialState, hideDrawer());
      expect(state.displayDrawer).toBe(false);
    });
  });
});
