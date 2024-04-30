"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Name from "../../components/Name";
import styles from "../../styles/create.module.css";
import styles2 from "../../styles/dashborad.module.css";
import styles3 from "../../styles/invest.module.css";
import Sidenav from "../../components/Sidenav";
import { useAuthContext } from "@/app/hooks/useAuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

import Image from "next/image";
const Edit = () => {
  const dat1 = useSelector((state) => state.cart);
  const user = dat1.user;
  const router = useSearchParams();
  const query = router.get("query");

  // const { user } = useAuthContext();

  const [res, setres] = useState("");
  const [admin, setadmin] = useState("");
  useEffect(() => {
    const data = {
      id: query,
    };
    if (query) {
      handlefetch(query);
    }
  }, [query]);
  const [buyer, setbuyer] = useState(res.buyer);
  const [seller, setseller] = useState(res.seller);
  const [id, setid] = useState(res.id);
  const [startedby, setstartedby] = useState(res.startedby);
  const [whopaysfee, setwhopaysfee] = useState(res?.whopaysfee);
  const [assettobuy, setassettobuy] = useState(res?.assettobuy);
  const [assettobuyname, setassettobuyname] = useState(res?.assettobuy?.name);
  const [assettobuyamount, setassettobuyamount] = useState(
    res?.assettobuy?.amount
  );
  const [assettosell, setassettosell] = useState(res?.assettosell);
  const [assettosellname, setassettosellname] = useState(
    res?.assettosell?.name
  );
  const [assettosellamount, setassettosellamount] = useState(
    res?.assettosell?.amount
  );
  const [card, setcard] = useState(res?.card);
  const [err, setError] = useState(null);
  const [balance, setbalance] = useState(res?.balance);
  const [sellingadress, setsellingadress] = useState(res.sellingadress);
  const [buyingadress, setbuyingadress] = useState(res.buyingadress);

  const [minimumWithdrawal, setminwith] = useState(res?.minimumWithdrawal);

  const handlefetch = async (query) => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_URL}/api/transact/one/${user?._id}`,
        { id: query },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      const data = await response.data;
      console.log(data);

      setres(data);
      setbuyer(data.buyer);
      setseller(data.seller);
      setstartedby(data.startedby);
      setwhopaysfee(data.whopaysfee);
      setsellingadress(data.sellingadress);
      setbuyingadress(data.buyingadress);
      setassettobuy(data.assettobuy);
      setassettobuyname(data.assettobuy.name);
      setassettobuyamount(data.assettobuy.amount);
      setassettosell(data.assettosell);
      setassettosellname(data.assettosell.name);
      setassettosellname(data.assettosell.name);
      setid(data.id);

      console.log(startedby);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleadmin = async (searchkeyword) => {
    try {
      const encodeQuery = encodeURIComponent(searchkeyword.trim());
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/user/oneuser/${encodeQuery}`
      );

      const data = await response.json();

      setadmin(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, error, responseData, updatetrade } = useFetch();

  const handleSubmit = async (e) => {
    setError(null);
    e.preventDefault();
    if (sellingadress === "" || buyingadress === "" || startedby === "") {
      setError("All fields must be filled!");
      toast.error("All fields must be filled!");
    } else {
      const data = {
        buyer,
        sellingadress,
        buyingadress: buyingadress.trim(),
        startedby: startedby.trim(),
        buyer,
        assettobuy: { name: assettobuyname, amount: assettobuyamount },
        assettosell: { name: assettosellname, amount: assettosellamount },
        seller: seller,
        id,
        // id: encodeQuery,
      };
      try {
        // console.log(data)
        await updatetrade(data);
      } catch (erro) {
        toast.error(erro.message);
        console.log(erro);
      }
    }
  };

  return (
    <>
      <>
        <section className={styles3.sec}>
          <div>
            <Sidenav />
          </div>
          <div className={styles3.seconddiv}>
            <Name data={{ _id: 390, buyer: "jkd" }} section={"New Trade"} />
            <div
              className={`${styles3.containerFluid} ${styles3.div}`}
              style={{ flexDirection: "column", textAlign: "center" }}
            >
              {/* <Jointrade /> */}
            </div>
            <section
              className="card"
              style={{
                display: "block !important",
                padding: "20px 0",
                background: "var(--bg)",
              }}
            >
              <div> {/* <Dashboardnav dat={admin} /> */}</div>
              <div>
                <div className={styles2.seconddiv}>
                  <div style={{ padding: "15px" }}>{/* <Hamburg /> */}</div>
                  {!res && (
                    <>
                      <div className={styles.loadercont}>
                        <div className={styles.loader}></div>
                      </div>
                    </>
                  )}
                  {res && (
                    <>
                      <h2
                        className="head"
                        style={{
                          textTransform: "uppercase",
                          textAlign: "center",
                          marginTop: "20px",
                          fontWeight: 500,
                          color: "hsl(0 0% 100% / 0.5)",
                        }}
                      >
                        Edit Trade
                      </h2>
                      <div className={styles.createCont}>
                        <div>
                          <Image
                            src="/profile.webp"
                            width={100}
                            height={100}
                            alt=""
                            style={{
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <form
                          className="createForm"
                          onSubmit={handleSubmit}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            padding: "15px",
                          }}
                        >
                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            buyer:
                          </label>
                          <input
                            placeholder="buyer"
                            className={`${styles.blogTitle} ${styles.input}`}
                            onChange={(e) => {
                              setbuyer(e.target.value);
                            }}
                            value={buyer}
                          />

                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            seller:
                          </label>
                          <input
                            placeholder="seller"
                            className={`${styles.blogTitle} ${styles.input}`}
                            value={seller}
                            onChange={(e) => setseller(e.target.value)}
                          />
                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            startedby:
                          </label>
                          <input
                            placeholder="startedby"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={startedby}
                            onChange={(e) => setstartedby(e.target.value)}
                          />
                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            sellingadress:
                          </label>
                          <input
                            placeholder="mobile sellingadress"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={sellingadress}
                            onChange={(e) => setsellingadress(e.target.value)}
                          />
                          {whopaysfee && (
                            <>
                              <label
                                style={{
                                  textAlign: "left",
                                  padding: "0px 20px",
                                  fontWeight: "bold",
                                  fontStyle: "italic",
                                }}
                              >
                                current whopaysfee:
                              </label>
                              <input
                                placeholder="current whopaysfee"
                                className={`${styles.blogAuthor} ${styles.input}`}
                                value={whopaysfee}
                                onChange={(e) => setwhopaysfee(e.target.value)}
                              />
                            </>
                          )}
                          <>
                            <label
                              style={{
                                textAlign: "left",
                                padding: "0px 20px",
                                fontWeight: "bold",
                                fontStyle: "italic",
                              }}
                            >
                              Asset to buy:
                            </label>
                            <input
                              type="text"
                              placeholder="Asset to buy"
                              value={assettobuyname}
                              className={`${styles.blogAuthor} ${styles.input}`}
                              onChange={(e) =>
                                setassettobuyname(e.target.value)
                              }
                            />
                            <label
                              style={{
                                textAlign: "left",
                                padding: "0px 20px",
                                fontWeight: "bold",
                                fontStyle: "italic",
                              }}
                            >
                              Asset to buy amount:
                            </label>
                            <input
                              type="number"
                              placeholder="Asset to buy amount"
                              value={assettobuyamount}
                              className={`${styles.blogAuthor} ${styles.input}`}
                              onChange={(e) =>
                                setassettobuyamount(e.target.value)
                              }
                            />
                            <label
                              style={{
                                textAlign: "left",
                                padding: "0px 20px",
                                fontWeight: "bold",
                                fontStyle: "italic",
                              }}
                            >
                              Asset to sell:
                            </label>
                            <input
                              type="text"
                              placeholder="Asset to sell"
                              value={assettosellname}
                              className={`${styles.blogAuthor} ${styles.input}`}
                              onChange={(e) =>
                                setassettosellname(e.target.value)
                              }
                            />
                            <label
                              style={{
                                textAlign: "left",
                                padding: "0px 20px",
                                fontWeight: "bold",
                                fontStyle: "italic",
                              }}
                            >
                              Asset to sell amount:
                            </label>
                            <input
                              type="number"
                              placeholder="Asset to sell amount"
                              value={assettosellamount}
                              className={`${styles.blogAuthor} ${styles.input}`}
                              onChange={(e) =>
                                setassettosellamount(e.target.value)
                              }
                            />
                          </>

                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            buyingadress:
                          </label>
                          <input
                            placeholder=" buyingadress"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={buyingadress}
                            onChange={(e) => setbuyingadress(e.target.value)}
                          />

                          <button
                            className="submit"
                            disabled={isLoading}
                            type="submit"
                            style={{
                              alignSelf: "center",
                              background: "green",
                              padding: "10px 30px",
                              color: "#fff",
                              border: "none",
                              borderRadius: "5px",
                              fontWeight: "bold",
                            }}
                          >
                            {isLoading ? "Updating..." : "Update"}
                          </button>
                          {err && <div className="error">{err}</div>}
                          {error && <div className="error">{error}</div>}
                          <p
                            style={{
                              width: "100%",
                              background: "#fff",
                              padding: "5px",
                            }}
                          >
                            {" "}
                            Trade id: {id}
                          </p>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <ToastContainer />
            </section>
          </div>
        </section>
      </>
    </>
  );
};

export default Edit;
