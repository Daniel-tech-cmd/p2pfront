"use client";
import { createContext, useReducer, useEffect } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();
import { useDispatch } from "react-redux";
import { createuser } from "../../redux/shopslice";
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  const disp = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      Cookies.set("user", JSON.stringify(user));
      disp(createuser(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
