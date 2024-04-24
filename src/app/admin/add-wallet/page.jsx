import React from "react";
import Addwallet from "@/app/components/Addwallet";
import Sidenav from "@/app/components/Sidenav";
import Name from "@/app/components/Name";
import styles from "../../styles/invest.module.css";

import { cookies } from "next/headers";

export default async function page() {
  const cookiestore = cookies();
  const userjson = cookiestore.get("user");

  const user = JSON.parse(userjson?.value);

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
        </div>
        <div
          className={`${styles.containerFluid} ${styles.div}`}
          style={{
            maxWidth: "946px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        >
          <Addwallet />
        </div>
      </div>
    </section>
  );
}
