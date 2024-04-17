"use client";
import React from "react";
import styles from "../styles/jointrade.module.css";
import { useState } from "react";
import Image from "next/image";
import { openseccon } from "../contexts/openseccontext";
import { useContext } from "react";

export default function Depositcrypto() {
  const [amount, setamonunt] = useState();
  const { toggledepo } = useContext(openseccon);
  const [second, setsecond] = useState(false);
  return (
    <>
      {!second && (
        <div className={styles.model}>
          <div className={styles.innermodel}>
            <div>
              <h5>Fund wallet</h5>
              <button>
                <span
                  className="material-symbols-outlined notranslate"
                  style={{ color: "red" }}
                  onClick={toggledepo}
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
                onClick={() => {
                  setsecond(true);
                }}
              >
                Proceed to deposit
              </button>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <button className={styles.btnclose} onClick={toggledepo}>
                close
              </button>
            </div>
          </div>
        </div>
      )}
      {second && (
        <div className={styles.model}>
          <div className={styles.innermodel}>
            <div>
              <h5>Fund wallet</h5>
              <button>
                <span
                  className="material-symbols-outlined notranslate"
                  style={{ color: "red" }}
                  onClick={() => {
                    setsecond(false);
                  }}
                >
                  close
                </span>
              </button>
            </div>
            <div>
              <Image src="/poly.png" width={160} height={160} alt="" />
              <div style={{ padding: "0 30px" }}>
                {" "}
                <p style={{ marginTop: "0" }}>
                  Deposit address: kjskajskaskjasjasjnasajsjsjansjhhsa
                </p>
                <p>
                  <b>Deposit Amount:</b>
                  {amount}
                </p>
                <p>
                  <b>Deposit asset:</b>xrd
                </p>
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
                  Confirm deposit
                </button>
              </div>
            </div>

            {/* <div className={styles.inputdepo} style={{ borderBottom: "none" }}>
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
        </div> */}
            <div style={{ padding: "1.5rem" }}>
              <button
                className={styles.btnclose}
                onClick={() => {
                  setsecond(false);
                }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
