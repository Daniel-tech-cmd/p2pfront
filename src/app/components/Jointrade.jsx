"use client";
import React from "react";
import { useState } from "react";

import styles from "../styles/jointrade.module.css";
import { openseccon } from "../contexts/openseccontext";
import { useContext } from "react";

export default function Jointrade() {
  const { toggle } = useContext(openseccon);
  const [code, setcode] = useState();
  return (
    <div className={styles.model}>
      <div className={styles.innermodel}>
        <div>
          <h5>Search for Trade</h5>
          <button>
            <span
              className="material-symbols-outlined notranslate"
              style={{ color: "red" }}
              onClick={toggle}
            >
              close
            </span>
          </button>
        </div>
        <div className={styles.column}>
          <label>Trade ID</label>
          <div style={{ display: "flex" }}>
            <input
              placeholder="TXNXXXX"
              type="text"
              onChange={(e) => {
                setcode(e.target.value);
              }}
            />
            <span>#ID</span>
          </div>
        </div>
        <div>
          <button className={styles.btnclose} onClick={toggle}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}
