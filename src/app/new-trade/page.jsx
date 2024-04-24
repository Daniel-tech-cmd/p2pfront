import React from "react";
import Name from "../components/Name";
import Sidenav from "../components/Sidenav";
import styles from "../styles/invest.module.css";
import Trade from "../components/Trade";
import Jointrade from "../components/Jointrade";
import TransactTable from "../components/TransactTable";

import { cookies } from "next/headers";

async function getdatabyId(id) {
  const res = await fetch(`${process.env.URL}/api/user/gettrades/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  return data;
}

export default async function page() {
  const cookiestore = cookies();
  const userjson = cookiestore.get("user");

  const user = JSON.parse(userjson?.value);

  const data = getdatabyId(user._id);
  const [dat] = await Promise.all([data]);

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
            effortlessly. Whether you&apos;re buying, selling, or exchanging
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
          <TransactTable data={dat} />
        </div>
      </div>
    </section>
  );
}
