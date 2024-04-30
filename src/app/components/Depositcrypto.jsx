"use client";
import React from "react";
import styles from "../styles/jointrade.module.css";
import { useState } from "react";
import Image from "next/image";
import { openseccon } from "../contexts/openseccontext";
import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

export default function Depositcrypto() {
  const [amount, setamonunt] = useState(0);
  const { toggledepo } = useContext(openseccon);
  const [second, setsecond] = useState(false);
  const { depositfun, error, isLoading } = useFetch();
  const coins = useSelector((state) => state.cart.coins[0]);

  const [selectedcoin, setselectedcoin] = useState(coins[0]);

  const hnadledeposit = async (e) => {
    e.preventDefault();
    if (selectedcoin == "" || amount == "") {
      return;
    } else if (selectedcoin.name === "bank wire") {
      toast.warning("Bank wire option is currently not available");
    } else {
      try {
        const data = {
          amount: amount,
          asset: selectedcoin.name,
          method: selectedcoin.name,
        };
        await depositfun(data);
      } catch (error) {
        console.log(error);
      }
    }
    // toast.error("ab");
  };

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
              <Image
                src={`${selectedcoin?.ico.url}`}
                width={50}
                height={50}
                alt=""
                style={{ objectFit: "contain" }}
              />
              <h3>{amount.toFixed(2)}</h3>
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
              <select
                onChange={(e) => {
                  setselectedcoin(
                    coins.find((obj) => obj.name === e.target.value)
                  );
                }}
                style={{ textTransform: "capitalize", fontFamily: "Jost" }}
              >
                <option value={""}> select coin</option>
                {coins.map((coi) => (
                  <option
                    key={coi.id}
                    value={coi.name}
                    style={{ padding: "20px 0" }}
                  >
                    {coi.name}
                  </option>
                ))}
                {/* <option value="polygon">polygon</option> */}
              </select>
              <div style={{ display: "flex" }}>
                <input
                  placeholder="o.oo"
                  type="number"
                  onChange={(e) => {
                    setamonunt(Number(e.target.value));
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
              <Image
                src={`${selectedcoin?.image.url}`}
                width={160}
                height={160}
                alt=""
                style={{ objectFit: "contain" }}
              />
              <div style={{ padding: "0 30px" }}>
                {" "}
                <p
                  style={{
                    marginTop: "0",
                    wordWrap: "break-word",
                    fontSize: "12px",
                  }}
                >
                  Deposit address: {selectedcoin.address}
                </p>
                <p>
                  <b>Deposit Amount:</b>
                  {amount}
                </p>
                <p>
                  <b>Deposit asset:</b>
                  {selectedcoin.name}
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
                  onClick={hnadledeposit}
                >
                  {isLoading ? "Loading..." : "Confirm deposit"}
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
