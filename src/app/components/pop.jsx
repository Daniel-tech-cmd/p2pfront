"use client";
import React from "react";
import Jointrade from "./Jointrade";
import { useContext } from "react";
import { openseccon } from "../contexts/openseccontext";
import Depositcrypto from "./Depositcrypto";
import Withdraw from "./Withdraw";
import Success from "./Success";
import Alert from "./Alert";

export default function Poop() {
  const { show, showdepo, showwith, showsuccess, showalert } =
    useContext(openseccon);
  return (
    <>
      {show && <Jointrade />}
      {showdepo && <Depositcrypto />}
      {showdepo && <Depositcrypto />}
      {showwith && <Withdraw />}
      {showsuccess && <Success />}
      {showalert && <Alert />}
    </>
  );
}
