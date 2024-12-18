"use client";
import React, { useState } from "react";
import Sidenav from "@/app/components/Sidenav";
import Name from "@/app/components/Name";
import { useSearchParams } from "next/navigation";
import styles from "../../styles/invest.module.css";
import Image from "next/image";
import useFetch from "@/app/hooks/useFetch";
import { useEffect } from "react";
import { notFound } from "next/navigation";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useSelector } from "react-redux";

import Welcomemsg from "@/app/components/Welcomemsg";
import Alerttrde from "@/app/components/Alerttrade";

export default function page() {
  const { jointrade, responseData, error, isLoading, responseDt, markaspaid } =
    useFetch();
  const [showaler, setshoaler] = useState(false);
  const router = useSearchParams();
  const id = router.get("id");

  const data1 = useSelector((state) => state.cart);
  const markas = async () => {
    const data = {
      ...responseData,
      // status: "paid",
      id: id,
    };
    // data.status = "paid";
    console.log(data);
    try {
      await markaspaid(data);
      //
    } catch (error) {
      console.log(error);
    }
  };
  const handlejointrade = async (id) => {
    const data = { id: id };
    try {
      await jointrade(data, data1.user);
    } catch (error) {
      console.log(error);
      return notFound();
    }
  };
  useEffect(() => {
    handlejointrade(id);
  }, [id]);
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1.5rem 1.875rem 1.25rem",
                alignItems: "center",
                borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src="/poly.png" width={30} height={30} alt="" />
                <p style={{ color: "white", padding: "0 10px" }}>
                  <b>
                    {responseData?.assettobuy?.name}/
                    {responseData?.assettosell?.name}
                  </b>
                </p>
              </div>
              <div style={{ color: "white" }}>
                <p>{responseData?.id}</p>
              </div>
            </div>
            <Welcomemsg />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                  Buyer's Payment
                </p>
                <span
                  className="material-symbols-outlined"
                  style={{
                    backgroundColor: "#f0a901",
                    fontSsize: "0.6875rem",
                    padding: " 0.3125rem 0.5rem",
                    lineHeight: "0.6875rem",
                    borderRadius: " 0.5rem",
                    fontWeight: 600,
                    border: "0.0625rem solid transparent",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    verticalAlign: "baseline",
                    color: "#fff",
                    fontSize: "small",
                    height: "fit-content",
                  }}
                >
                  info
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                  Seller's Payment
                </p>
                <span
                  className="material-symbols-outlined"
                  style={{
                    backgroundColor: "#f0a901",
                    fontSsize: "0.6875rem",
                    padding: " 0.3125rem 0.5rem",
                    lineHeight: "0.6875rem",
                    borderRadius: " 0.5rem",
                    fontWeight: 600,
                    border: "0.0625rem solid transparent",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    verticalAlign: "baseline",
                    color: "#fff",
                    fontSize: "small",
                    height: "fit-content",
                  }}
                >
                  info
                </span>
              </div>
            </div>
            <hr style={{ borderColor: " #3A2D60", height: "1px" }} />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                  Receiving Token:
                </p>
                <p style={{ fontSize: "13px" }}>
                  {" "}
                  {data1?.user.username == responseData?.buyer
                    ? `${responseData?.assettosell.amount} ${responseData?.assettosell.name}`
                    : `${responseData?.assettobuy.amount} ${responseData?.assettobuy.name}`}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                  {data1?.user.username == responseData?.buyer
                    ? `Seller`
                    : `Buyer`}
                </p>

                <p style={{ fontSize: "13px" }}>
                  {data1?.user.username == responseData?.buyer
                    ? `${responseData?.seller} `
                    : `${responseData?.buyer} `}
                </p>
              </div>
            </div>
            <hr style={{ borderColor: " #3A2D60", height: "1px" }} />
            <div style={{ display: "flex" }} className={styles.hd}>
              <div style={{ padding: "0 30px", width: "50%" }}>
                <Image
                  src={`/${"selectedcoin.image"}`}
                  width={160}
                  height={160}
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div style={{ padding: "0 30px", width: "50%" }}>
                {" "}
                <p
                  style={{
                    marginTop: "0",
                    wordWrap: "break-word",
                    fontSize: "12px",
                  }}
                >
                  Deposit address:{" "}
                  {data1?.user.username === responseData?.buyer
                    ? `${responseData?.sellingadress}`
                    : `${responseData?.buyingadress}`}
                </p>
                <p>
                  <b>Deposit Amount:</b>
                  {data1?.user.username == responseData?.buyer
                    ? `${responseData?.assettosell.amount}`
                    : `${responseData?.assettobuy.amount}`}
                </p>
                <p>
                  <b>Deposit asset:</b>
                  {data1?.user.username == responseData?.buyer
                    ? `${responseData?.assettosell.name}`
                    : `${responseData?.assettobuy.name}`}
                </p>
                {data1?.user.username === responseData?.seller && (
                  <>
                    {!responseDt && isLoading ? (
                      <p
                        style={{
                          backgroundColor: "#f0a901",
                          color: "#fff",
                          border: "1px solid #f0a901",
                          padding: "0.625rem 1rem",
                          fontSize: "0.813rem",
                          borderRadius: " 0.5rem",
                          fontWeight: 600,
                          lineHeight: 1.5,
                          textTransform: "capitalize",
                          fontFamily: "Jost",
                          width: "fit-content",
                        }}
                      >
                        {" "}
                        "Loading..."
                      </p>
                    ) : (
                      <>
                        {responseData?.sellerstatus !== "paid" && (
                          <button
                            style={{
                              backgroundColor: "#f0a901",
                              color: "#fff",
                              border: "1px solid #f0a901",
                              padding: "0.625rem 1rem",
                              fontSize: "0.813rem",
                              borderRadius: " 0.5rem",
                              fontWeight: 600,
                              lineHeight: 1.5,
                              textTransform: "capitalize",
                              fontFamily: "Jost",
                            }}
                            onClick={markas}
                          >
                            Mark as{" "}
                            {responseDt?.sellerstatus === "paid"
                              ? "paid"
                              : "paid"}
                          </button>
                        )}
                        {responseData?.sellerstatus === "paid" && (
                          <button
                            style={{
                              backgroundColor: "#f0a901",
                              color: "#fff",
                              border: "1px solid #f0a901",
                              padding: "0.625rem 1rem",
                              fontSize: "0.813rem",
                              borderRadius: " 0.5rem",
                              fontWeight: 600,
                              lineHeight: 1.5,
                              textTransform: "capitalize",
                              fontFamily: "Jost",
                            }}
                            onClick={() => {
                              alert("Already marked as paid!");
                            }}
                          >
                            Already{" "}
                            {responseData?.sellerstatus === "paid"
                              ? "paid"
                              : "paid"}
                          </button>
                        )}
                      </>
                    )}
                  </>
                )}
                {data1?.user.username === responseData?.buyer && (
                  <>
                    {!responseDt && isLoading ? (
                      <p
                        style={{
                          backgroundColor: "#f0a901",
                          color: "#fff",
                          border: "1px solid #f0a901",
                          padding: "0.625rem 1rem",
                          fontSize: "0.813rem",
                          borderRadius: " 0.5rem",
                          fontWeight: 600,
                          lineHeight: 1.5,
                          textTransform: "capitalize",
                          fontFamily: "Jost",
                          width: "fit-content",
                        }}
                      >
                        {" "}
                        "Loading..."
                      </p>
                    ) : (
                      <>
                        {responseData?.buyerstatus !== "paid" && (
                          <button
                            style={{
                              backgroundColor: "#f0a901",
                              color: "#fff",
                              border: "1px solid #f0a901",
                              padding: "0.625rem 1rem",
                              fontSize: "0.813rem",
                              borderRadius: " 0.5rem",
                              fontWeight: 600,
                              lineHeight: 1.5,
                              textTransform: "capitalize",
                              fontFamily: "Jost",
                            }}
                            onClick={markas}
                          >
                            Mark as{" "}
                            {responseDt?.buyerstatus === "paid"
                              ? "paid"
                              : "paid"}
                          </button>
                        )}
                        {responseData?.buyerstatus === "paid" && (
                          <button
                            style={{
                              backgroundColor: "#f0a901",
                              color: "#fff",
                              border: "1px solid #f0a901",
                              padding: "0.625rem 1rem",
                              fontSize: "0.813rem",
                              borderRadius: " 0.5rem",
                              fontWeight: 600,
                              lineHeight: 1.5,
                              textTransform: "capitalize",
                              fontFamily: "Jost",
                            }}
                            onClick={() => {
                              alert("Already marked as paid!");
                            }}
                          >
                            Already{" "}
                            {responseData?.buyerstatus === "paid"
                              ? "paid"
                              : "paid"}
                          </button>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <hr style={{ borderColor: " #3A2D60", height: "1px" }} />
            <small style={{ color: "#9568ff", fontSize: "0.875em" }}>
              Once buyer and seller's obligation has been fufilled, funds will
              be exchanged automatically.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
