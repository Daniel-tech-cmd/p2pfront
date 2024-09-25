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
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/wallet/allwallet`, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-store',  // Prevent caching
            'Pragma': 'no-cache',         // HTTP 1.0 cache control
            'Expires': '0',               // Expire immediately
          },
        });

        if (!response.ok) {
          console.error('There was a problem with the fetch operation:', response.statusText);
          return;
        }

        const data = await response.json();
        disp(addcoin(data));
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, [disp]);
  const { show, showdepo, showwith, showsuccess, showalert } =
    useContext(openseccon);
  return (
    <>
      {show && <Jointrade />}
      {showdepo && <Depositcrypto />}
      {showwith && <Withdraw />}
      {showsuccess && <Success />}
      {showalert && <Alert />}
    </>
  );
}
