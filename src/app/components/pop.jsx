"use client";
import React from "react";
import Jointrade from "./Jointrade";
import { useContext } from "react";
import { openseccon } from "../contexts/openseccontext";
import Depositcrypto from "./Depositcrypto";
import Withdraw from "./Withdraw";

export default function Poop() {
  const { show, showdepo, showwith } = useContext(openseccon);
  return (
    <>
      {show && <Jointrade />}
      {showdepo && <Depositcrypto />}
      {showdepo && <Depositcrypto />}
      {showwith && <Withdraw />}
    </>
  );
}
