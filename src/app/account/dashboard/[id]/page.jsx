import React from "react";
import Sidenav from "@/app/components/Sidenav";
import Name from "@/app/components/Name";
import styles from "../../../styles/invest.module.css";
import Image from "next/image";
import BScard from "@/app/components/B&Scard";
import Link from "next/link";

export default function page() {
  return (
    <section className={styles.sec}>
      <div>
        <Sidenav />
      </div>
      <div className={styles.seconddiv}>
        <Name data={{ _id: 390, username: "jkd" }} section={"Dashboard"} />
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            <BScard />
            <div
              className="card"
              style={{ maxWidth: "653px", width: "100%", padding: 0 }}
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
                    0.00
                  </p>
                  <p style={{ fontSize: "12px", margin: "5px 0" }}>BTC</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
