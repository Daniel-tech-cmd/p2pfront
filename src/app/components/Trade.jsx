"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import styles from "../styles/trade.module.css";
import useFetch from "../hooks/useFetch";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuthContext } from "../hooks/useAuthContext";

export default function Trade() {
  const { user } = useAuthContext();

  const { trade, error, isLoading } = useFetch();

  const [amounttosend, setamounttosend] = useState("");
  const [amounttorecieve, setamounttorecieve] = useState("");
  const [assettobuy, setassettobuy] = useState("");
  const [assettosell, setassettosell] = useState("");
  const [whopaysfee, setwhopaysfee] = useState("split");
  const [role, setrole] = useState("");
  const [buyer, setbuyer] = useState("");
  const [seller, setseller] = useState("");

  const handletrade = async (e) => {
    e.preventDefault();
    if (role == "") {
      toast.error("Role can't be empty!");
      return;
    }
    if (
      (amounttorecieve == "" || amounttosend == "",
      assettobuy == "",
      assettosell == "")
    ) {
      toast.error(" all  fields must be filled");
      return;
    }
    const data = {
      assettobuy,
      assettosell,
      whopaysfee,
      buyer,
      seller,
    };
    try {
      await trade(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`${styles.cont} card`}
      style={{
        // width: "100%",
        padding: 0,
        // maxHeight: "200px",
      }}
    >
      <p
        style={{
          margin: "0px 0",
          padding: "1rem ",
          border: "none",
          borderBottom: "1px solid #3A2D60",
          borderColor: "#3A2D60",
        }}
      >
        Start a new trade
      </p>
      <form
        onSubmit={(e) => {
          handletrade(e);
        }}
      >
        <div>
          <p>I'm sending</p>
          <div>
            <select
              name="coins"
              id="coins"
              onChange={(e) => {
                setassettosell(e.target.value);
              }}
            >
              <option value="">select coin</option>

              <option value="Bitcoin">Bitcoin</option>
              <option value="Litcoin">Litcoin</option>
              <option value="Dodge">Dodge</option>
            </select>
            <input
              value={amounttosend}
              placeholder="Amount"
              type="number"
              onChange={(e) => {
                setamounttosend(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: "1rem",
          }}
        >
          <Image width={20} height={20} alt="" src="/swap.png" />
        </div>
        <div>
          <p>I'm Receiving</p>
          <div>
            <select
              name="coins"
              id="coins"
              onChange={(e) => {
                setassettobuy(e.target.value);
              }}
            >
              <option value="">select coin</option>

              <option value="Bitcoin">Bitcoin</option>
              <option value="Litcoin">Litcoin</option>
              <option value="Dodge">Dodge</option>
            </select>
            <input
              value={amounttorecieve}
              placeholder="Amount"
              type="number"
              onChange={(e) => {
                setamounttorecieve(e.target.value);
              }}
            />
          </div>
        </div>

        <div>
          <p>Your role</p>
          <select
            name="role"
            id="role"
            style={{ width: "100%" }}
            onChange={(e) => {
              setrole(e.target.value);
              if (e.target.value == "buyer") {
                setbuyer(user?.username);
                setseller("");
              } else if (e.target.value == "seller") {
                setseller(user?.username);
                setbuyer("");
              }
            }}
          >
            <option value="">select role</option>

            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div>
          <p>who pays the gas fee</p>
          <select
            name="role"
            id="role"
            style={{ width: "100%" }}
            onChange={(e) => {
              setwhopaysfee(e.target.value);
            }}
          >
            <option value="">select</option>

            <option value="Split">Split</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
          <button>Publish Trade</button>
        </div>
      </form>
      {error && (
        <p style={{ color: "red" }}>
          <b>{error}</b>
        </p>
      )}
      <ToastContainer />
    </div>
  );
}
