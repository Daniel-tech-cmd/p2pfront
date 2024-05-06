import React from "react";
import Sidenav from "@/app/components/Sidenav";
import Name from "@/app/components/Name";
import styles from "../../styles/invest.module.css";
import BScard from "@/app/components/B&Scard";
import Link from "next/link";
import Trade from "@/app/components/Trade";
import TradingViewWidget from "@/app/components/Tradingview";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

async function getdatabyId(id) {
  const res = await fetch(`${process.env.URL}/api/user/oneuser/${id}`, {
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

  const user = JSON?.parse(userjson?.value);

  const data = getdatabyId(user._id);
  const [dat] = await Promise.all([data]);
  return (
    <section className={styles.sec}>
      <div>
        <Sidenav />
      </div>
      <div className={styles.seconddiv}>
        <Name data={dat} section={"Dashboard"} />
        <div className={styles.containerFluid}>
          <div
            className={styles.row}
            style={{ height: "fit-content", margin: "10px" }}
          >
            <BScard />
            <div
              className="card"
              style={{
                width: "100%",
                padding: 0,
                maxHeight: "200px",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0px 0",
                    padding: "1rem ",
                    border: "none",
                    borderBottom: "1px solid #3A2D60",
                    borderColor: "#3A2D60",
                  }}
                >
                  Balance
                </p>
              </div>
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p
                    style={{ fontSize: "22px", color: "#fff", margin: "5px 0" }}
                  >
                    {dat?.assets != "" ? dat?.assets[0].amount : "0.00"}
                  </p>
                  <p style={{ fontSize: "12px", margin: "5px 0" }}>
                    {dat?.assets != "" ? dat?.assets[0].name : "BTC"}
                  </p>
                </div>
                <Link
                  href="#"
                  className="dashbtn"
                  style={{ height: "fit-content" }}
                >
                  View all
                </Link>
              </div>
            </div>
            <div
              style={{ height: "450px", overflow: "hidden" }}
              className="card"
            >
              <TradingViewWidget />
            </div>
          </div>
          <div
            style={{ width: "33.3%", maxHeight: "fit-content" }}
            className={styles.trade}
          >
            <Trade />
          </div>
        </div>
      </div>
    </section>
  );
}
