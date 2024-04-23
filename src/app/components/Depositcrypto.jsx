"use client";
import React from "react";
import styles from "../styles/jointrade.module.css";
import { useState } from "react";
import Image from "next/image";
import { openseccon } from "../contexts/openseccontext";
import { useContext } from "react";
import useFetch from "../hooks/useFetch";

export default function Depositcrypto() {
  const [amount, setamonunt] = useState(0);
  const { toggledepo } = useContext(openseccon);
  const [second, setsecond] = useState(false);
  const { depositfun, error, isLoading } = useFetch();

  const coins = [
    {
      name: "ethereum",
      id: "eth",
      address: "0x6A34D1C568EE40b98f53664ac534E84C46F2e50D",
      image: "ethereum.jpg",
      ico: "ethico.png",
    },
    {
      name: "bitcoin",
      id: "btc",
      address: "bc1qzy3fzdywkxg88nhj77wtrr7nel6v3vql5mvmsa",
      image: "bitcoin.jpg",
      ico: "bitico.png",
    },
    {
      name: "bnb smart chain",
      id: "bnb smart chain",
      address: "0x6A34D1C568EE40b98f53664ac534E84C46F2e50D",
      image: "bnb-smart-chain.jpg",
      ico: "bnbsmartico.png",
    },
    {
      name: "bnb beacon chain",
      id: "bnb beacon chain",
      address: "bnb1tjwj6jcqhmmj0487thccva2nu7hwnkd5vt2ja8",
      image: "bnb-beacon-chain.jpg",
      ico: "bnbbeaconico.png",
    },
    {
      name: "BCH",
      id: "bch",
      address: "qqvva8fugqha98tylyvhswk0vtd2ua0mrslzrwuzat",
      image: "bch.jpg",
      ico: "bchico.png",
    },
    {
      name: "Litcoin",
      id: "LTC",
      address: "ltc1qtsge9h4etq86hglvte8563avtlg5f4k9kk6e5s",
      image: "litcoin.jpg",
      ico: "litcoinico.png",
    },
    {
      name: "Doge",
      id: "doge",
      address: "DLWE8f35AAKLrqYqzaZcx7nCTAcoDnSWGf",
      image: "doge.jpg",
      ico: "dogeico.png",
    },
    {
      name: "Xrp",
      id: "xrp",
      address: "r9h5gyw9Jk3H9k2WCbBrHDX6o4NaK4DUov",
      image: "xrp.jpg",
      ico: "xrpi.png",
    },
    {
      name: "Kcs",
      id: "kcs",
      address: "0x6A34D1C568EE40b98f53664ac534E84C46F2e50D",
      image: "kcs.jpg",
      ico: "kcsico.png",
    },
    {
      name: "Matic",
      id: "matic",
      address: "0x6A34D1C568EE40b98f53664ac534E84C46F2e50D",
      image: "matic.jpg",
      ico: "maticico.png",
    },
  ];
  const [selectedcoin, setselectedcoin] = useState(coins[0]);

  const hnadledeposit = async (e) => {
    e.preventDefault();
    // toast.dismiss();
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
                src={`/${selectedcoin.ico}`}
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
                src={`/${selectedcoin.image}`}
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
