"use client";
import React from "react";
import Jointrade from "./Jointrade";
import { useContext } from "react";
import { openseccon } from "../contexts/openseccontext";
import Depositcrypto from "./Depositcrypto";
import Withdraw from "./Withdraw";
import Success from "./Success";
import Alert from "./Alert";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createuser, addcoin } from "../../redux/shopslice";

export default function Poop() {
  const disp = useDispatch();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/wallet/all`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        disp(addcoin(data));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });

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
