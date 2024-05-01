"use client";
import React from "react";
import styles from "../styles/jointrade.module.css";
import { useState } from "react";
import Image from "next/image";
import { openseccon } from "../contexts/openseccontext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";

export default function Withdraw() {
  const [amount, setamonunt] = useState(0);
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const { togglewith } = useContext(openseccon);
  const coins = useSelector((state) => state.cart.coins[0]);
  const [selectedcoin, setselectedcoin] = useState(coins[0]);
  const { withdraw, isLoading, error } = useFetch();

  const handlewithdraw = async (e) => {
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
          password: password?.trim(),
          method: selectedcoin.name,
        };
        await withdraw(data);
      } catch (error) {
        console.log(error);
      }
    }
    // toast.error("ab");
  };

  return (
    <div className={styles.model}>
      <div className={styles.innermodel}>
        <div>
          <h5>Withdraw funds</h5>
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
          <div>
            <Image
              src={`${selectedcoin?.ico.url}`}
              width={50}
              height={50}
              alt=""
              style={{ objectFit: "contain" }}
            />
            <h3>{amount}</h3>
          </div>
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
              setselectedcoin(coins.find((obj) => obj.name === e.target.value));
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
              placeholder="0.00"
              type="number"
              value={amount}
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
            value={address}
            onChange={(e) => {
              //   setcode(e.target.value);

              setaddress(e.target.value);
            }}
          />
          <span>Address</span>
        </div>
        <div style={{ display: "flex" }}>
          <input
            placeholder="account password"
            type="text"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <span>Password</span>
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
            onClick={(e) => {
              handlewithdraw(e);
            }}
          >
            {isLoading ? "loading..." : "Proceed to deposit"}
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
