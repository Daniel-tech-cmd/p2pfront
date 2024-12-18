"use client";
import React from "react";
import styles from "../styles/welcomemsg.module.css";
import { useState } from "react";

export default function Welcomemsg() {
  const [show, setshow] = useState(true);
  return (
    <>
      {show && (
        <div className={styles.cont}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            // class="me-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
          <strong>Welcome!</strong>
          both parties should proceed to make their payments into their
          specified
          <b>Deposit addresses</b>
          <button
            onClick={() => {
              setshow(false);
            }}
          >
            <span className="material-symbols-outlined notranslate">close</span>
          </button>
        </div>
      )}
    </>
  );
}
