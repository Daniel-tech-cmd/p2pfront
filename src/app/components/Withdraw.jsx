"use client";
import React from "react";
import styles from "../styles/jointrade.module.css";
import { useState } from "react";
import Image from "next/image";
import { openseccon } from "../contexts/openseccontext";
import { useContext } from "react";

export default function Withdraw() {
  const [amount, setamonunt] = useState();
  const { togglewith } = useContext(openseccon);
  return (
    <div className={styles.model}>
      <div className={styles.innermodel}>
        <div>
          <h5>Fund wallet</h5>
          <button>
            <span
              className="material-symbols-outlined notranslate"
              style={{ color: "red" }}
              onClick={togglewith}
            >
              close
            </span>
          </button>
        </div>
        <div>
          <Image src="/poly.png" width={50} height={50} alt="" />
          <h3>0.00</h3>
        </div>
        <label
          style={{
            color: "#9568FF",
            width: "100%",
            textAlign: "left",
            padding: "0.5rem 1rem",
          }}
        >
          select coin
        </label>
        <div className={styles.inputdepo} style={{ borderBottom: "none" }}>
          <select>
            <option value="polygon">polygon</option>
          </select>
          <div style={{ display: "flex" }}>
            <input
              placeholder="o.oo"
              type="number"
              onChange={(e) => {
                setamonunt(e.target.value);
              }}
            />
            <span>Amount</span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <input
            placeholder="ENTER YOUR ADDRESS"
            type="text"
            onChange={(e) => {
              //   setcode(e.target.value);
            }}
          />
          <span>Address</span>
        </div>
        <div style={{ justifyContent: "center", padding: "0rem 0 1rem 0" }}>
          <button
            style={{
              background: "#9568FF",
              color: "#fff",
              borderColor: "#9568FF",
              padding: "0.625rem 1rem",
              fontSize: "0.813rem",
              borderRadius: " 0.5rem",
              fontWeight: 600,
              lineHeight: 1.5,
              textTransform: "capitalize",
              fontFamily: "Jost",
            }}
          >
            Proceed to deposit
          </button>
        </div>
        <div style={{ padding: "1.5rem" }}>
          <button className={styles.btnclose} onClick={togglewith}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}
