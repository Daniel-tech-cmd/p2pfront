"use client";
import React from "react";
import { useState } from "react";

import styles from "../styles/jointrade.module.css";
import { openseccon } from "../contexts/openseccontext";
import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Jointrade() {
  const { toggle } = useContext(openseccon);
  const [code, setcode] = useState();
  const { jointrade, error, isLoading, responseData, checktrade, showfetch } =
    useFetch();
  const data = useSelector((state) => state.cart);
  const router = useRouter();

  const handlejointrade = async () => {
    if (code == "") {
      return;
    }
    try {
      const data = {
        id: code.trim().toUpperCase(),
      };
      await checktrade(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handletrade = async () => {
    router.push(`/account/trade?id=${code.toUpperCase()}`);
    toggle();
  };

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
              onKeyUp={handlejointrade}
              onChange={(e) => {
                setcode(e.target.value);
              }}
            />
            <span>#ID</span>
          </div>
          {error && (
            <p style={{ color: "red" }}>
              <b>{error}</b>
            </p>
          )}
        </div>
        {showfetch && !error ? (
          <div style={{ flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <p
                style={{
                  width: "50%",
                  borderBottom: "1px solid #3a2d60",
                  padding: "10px",
                  margin: 0,
                  color: "beige",
                }}
              >
                <b>Buying</b>:{responseData?.assettobuy.amount}{" "}
                {responseData?.assettobuy.name}
              </p>
              <p
                style={{
                  width: "50%",
                  borderBottom: "1px solid #3a2d60",
                  padding: "10px",
                  margin: 0,
                  color: "beige",
                }}
              >
                <b>Buyer</b>:
                {responseData?.buyer == "" ? "pending" : responseData?.buyer}
              </p>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <p
                style={{
                  width: "50%",
                  borderBottom: "1px solid #3a2d60",
                  padding: "10px",
                  margin: 0,
                  color: "beige",
                }}
              >
                <b>Selling</b>:{responseData?.assettosell?.amount}{" "}
                {responseData?.assettosell.name}
              </p>
              <p
                style={{
                  width: "50%",
                  borderBottom: "1px solid #3a2d60",
                  padding: "10px",
                  margin: 0,
                  color: "beige",
                }}
              >
                <b>Seller</b>:
                {responseData?.seller == "" ? "pending" : responseData?.seller}
              </p>
            </div>
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
                cursor: "pointer",
              }}
              onClick={handletrade}
            >
              Join trade
            </button>
          </div>
        ) : (
          ""
        )}
        <div>
          <button className={styles.btnclose} onClick={toggle}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}
