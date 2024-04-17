import React from "react";
import Name from "../components/Name";
import Sidenav from "../components/Sidenav";
import styles from "../styles/invest.module.css";
import Trade from "../components/Trade";
import Jointrade from "../components/Jointrade";
import TransactTable from "../components/TransactTable";

export default function page() {
  const data = [
    {
      text: "deposit of 7000",
      type: "deposit",
      date: "2024-02-26T20:01:45.642+00:00",
      status: "pending",
      _id: "65dcee29cbc18fd426433b81",
    },
  ];
  return (
    <section className={styles.sec}>
      <div>
        <Sidenav />
      </div>
      <div className={styles.seconddiv}>
        <Name data={{ _id: 390, username: "jkd" }} section={"New Trade"} />
        <div
          className={`${styles.containerFluid} ${styles.div}`}
          style={{ flexDirection: "column", textAlign: "center" }}
        >
          {/* <Jointrade /> */}

          <h3 style={{ color: "#fff", fontSize: "18px", margin: "10px" }}>
            {" "}
            Start Trade
          </h3>
          <p style={{ margin: 0 }}>
            Welcome to the P2P Experience!, where you can initiate new trades
            effortlessly. Whether you're buying, selling, or exchanging
            cryptocurrencies, our user-friendly platform streamlines the process
            for you.
          </p>
        </div>
        <div
          className={`${styles.containerFluid} ${styles.div}`}
          style={{
            maxWidth: "646px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        >
          <Trade />
        </div>
        <div
          className="card"
          style={{
            height: "fit-content",
            maxWidth: "850px",
            margin: "30px auto",
          }}
        >
          <TransactTable data={data} />
        </div>
      </div>
    </section>
  );
}
