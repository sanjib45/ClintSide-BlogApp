import { createSlice } from "@reduxjs/toolkit";

// Function to check if token exists in cookies
const isTokenInCookies = () => {
  const token = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("token="));
  return !!token;
};

// Function to load user from localStorage
const loadUserFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("users");
    if (serializedState === null) {
      return { user: JSON.parse(serializedState) };
    }
    return { user: JSON.parse(serializedState) }; // Return parsed user if found
  } catch (error) {
    console.log("Error loading user from localStorage:", error);
    return { user: null }; // Return null in case of error
  }
};

// Initialize state from localStorage
const initialState = loadUserFromLocalStorage();

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Directly assign the payload to user
      console.log("Saving to localStorage:", state.user);
      localStorage.setItem("users", JSON.stringify(state.user));    
 // Save to localStorage
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("users"); // Remove user from localStorage
    },
  },
});

// Export the actions and the reducer
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
