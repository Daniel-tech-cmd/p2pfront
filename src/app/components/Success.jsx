"use client";
import React from "react";
import styles from "../styles/signup.module.css";
import styles2 from "../styles/jointrade.module.css";
import Link from "next/link";
import { openseccon } from "../contexts/openseccontext";
import { useContext } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
export default function Success() {
  const { user } = useAuthContext();
  const { togglesucces } = useContext(openseccon);

  return (
    <>
      <div className={`${styles2.model} `}>
        <div className={`${styles2.innermodel} ${styles.cont}`}>
          <h5>Registration Successful</h5>
          <div
            style={{
              marginTop: "25px",
              fontFamily: "sans-serif",
              textAlign: "center",
              width: "100%",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.625rem",
              padding: "1rem 1.5rem",
              marginBottom: "1rem",
              border: " 1px solid transparent",
              color: "green",
            }}
            className={styles.good}
          ></div>
          <Link
            href={`/account/dashboard/${user._id}`}
            className={styles.link}
            onClick={togglesucces}
          >
            Proceed to Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}