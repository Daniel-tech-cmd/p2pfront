"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import styles from "../styles/trade.module.css";

export default function Trade() {
  const [amounttosend, setamounttosend] = useState();
  const [amounttorecieve, setamounttorecieve] = useState();
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
      <form onSubmit={() => {}}>
        <div>
          <p>I'm sending</p>
          <div>
            <select name="coins" id="coins">
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
            <select name="coins" id="coins">
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
          <select name="role" id="role" style={{ width: "100%" }}>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
        </div>
        <div>
          <p>who pays the gas fee</p>
          <select name="role" id="role" style={{ width: "100%" }}>
            <option value="Split">Split</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
          <button>Publish Trade</button>
        </div>
      </form>
    </div>
  );
}
