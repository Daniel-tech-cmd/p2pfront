"use client";
import React from "react";
import styles from "../styles/trade.module.css";

export default function Trade() {
  return (
    <div className={styles.cont}>
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
          <select name="coins" id="coins">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </form>
    </div>
  );
}
