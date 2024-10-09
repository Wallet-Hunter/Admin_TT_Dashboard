import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth listener
import { auth } from "../firebase"; // Import your Firebase auth instance

// Initial state
const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

// Create context
export const AuthContext = createContext(INITIAL_STATE);

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Listen to Firebase authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, dispatch the login action
        dispatch({ type: "LOGIN", payload: user });
      } else {
        // User is signed out, dispatch the logout action
        dispatch({ type: "LOGOUT" });
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  // Persist the currentUser in localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
