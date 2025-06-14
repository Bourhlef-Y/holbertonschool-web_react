import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLatestNotification } from '../../utils/utils';

// API Configuration
export const API_BASE_URL = 'http://localhost:5173';
export const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`
};

// Initial state
const initialState = {
  notifications: [],
  displayDrawer: true
};

// Async thunk for fetching notifications
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await fetch(ENDPOINTS.notifications);
    const data = await response.json();
    
    // Update notification with id 3
    const updatedData = data.map(notification => 
      notification.id === 3 
        ? { ...notification, value: getLatestNotification() }
        : notification
    );
    
    return updatedData;
  }
);

// Create the notifications slice
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      const idToRemove = action.payload;
      console.log(`Notification ${idToRemove} has been marked as read`);
      state.notifications = state.notifications.filter(
        notification => notification.id !== idToRemove
      );
    },
    showDrawer: (state) => {
      state.displayDrawer = true;
    },
    hideDrawer: (state) => {
      state.displayDrawer = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
  }
});

// Export actions and reducer
export const { markNotificationAsRead, showDrawer, hideDrawer } = notificationsSlice.actions;
export default notificationsSlice.reducer;
