"use client";

import { createContext, useEffect, useState } from "react";

export const openseccon = createContext();

export const OpenProvider = ({ children }) => {
  const [show, setshow] = useState(false);
  const [showdepo, setshowdepo] = useState(false);
  const [showwith, setshowwith] = useState(false);
  const [showsuccess, setshowsuccess] = useState(false);
  const [showalert, setshowalert] = useState(false);

  const toggle = () => {
    setshow((prev) => (prev === true ? false : true));
    // console.log(show);
  };

  const toggledepo = () => {
    setshowdepo((prev) => (prev === true ? false : true));
    // console.log(showdepo);
  };
  const togglewith = () => {
    setshowwith((prev) => (prev === true ? false : true));
  };

  const togglesucces = () => {
    setshowsuccess((prev) => (prev === true ? false : true));
    console.log(showsuccess);
  };
  const toggleshowalert = () => {
    setshowalert((prev) => (prev === true ? false : true));
  };
  return (
    <openseccon.Provider
      value={{
        toggle,
        show,
        setshow,
        setshowdepo,
        toggledepo,
        showdepo,
        togglewith,
        showwith,
        setshowwith,
        showsuccess,
        showalert,
        toggleshowalert,
        setshowsuccess,
        togglesucces,
      }}
    >
      <div> {children} </div>
    </openseccon.Provider>
  );
};