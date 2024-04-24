import React from "react";
import Sidenav from "@/app/components/Sidenav";
import Name from "@/app/components/Name";
import styles from "../../styles/invest.module.css";
import Image from "next/image";
import { cookies } from "next/headers";
import TransactTable from "@/app/components/TransactTable";

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
        <Name data={dat} section={"Trades"} />
        <div
          className={`${styles.containerFluid} ${styles.div}`}
          style={{ flexDirection: "column", textAlign: "center" }}
        >
          {/* <Jointrade /> */}
        </div>
        <div style={{ padding: "20px" }}>
          <div
            className="card"
            style={{
              height: "fit-content",
              maxWidth: "1000px",
              margin: "30px auto",
            }}
          >
            <TransactTable data={dat} />
          </div>
        </div>
      </div>
    </section>
  );
}
