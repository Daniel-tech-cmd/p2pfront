"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Name from "../components/Name";
import styles from "../styles/create.module.css";
import styles2 from "../styles/dashborad.module.css";
import styles3 from "../styles/invest.module.css";
import Sidenav from "../components/Sidenav";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import Image from "next/image";
const Edit = () => {
  const router = useSearchParams();
  const query = router.get("query");

  const [res, setres] = useState("");
  const [admin, setadmin] = useState("");
  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));
    if (query) {
      handlefetch(query);
      // handleadmin(user._id);
    }
  }, [query]);
  const [username, setusername] = useState(res.username);
  const [email, setemail] = useState(res.email);
  const [role, setrole] = useState(res.role);
  const [plan, setplan] = useState(res?.plan);
  const [card, setcard] = useState(res?.card);
  const [err, setError] = useState(null);
  const [balance, setbalance] = useState(res.balance);
  const [number, setnumber] = useState(res.number);
  const [country, setcountry] = useState(res.country);
  const [profit, setprofit] = useState(res.profit);
  const [verified, setverified] = useState(res.verified);

  const [minimumWithdrawal, setminwith] = useState(res?.minimumWithdrawal);

  const handlefetch = async (searchkeyword) => {
    try {
      const encodeQuery = encodeURIComponent(searchkeyword.trim());
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/user/oneuser/${encodeQuery}`
      );

      const data = await response.json();

      setres(data);
      setusername(data.username);
      setprofit(data.profit);
      setemail(data.email);
      setrole(data.role);
      setplan(data.plan);
      setcard(data.card);
      setbalance(data.balance);
      setnumber(data.number);
      setcountry(data.country);
      setprofit(data.profit);
      setverified(data.verified);
      setminwith(data.minimumWithdrawal);
    } catch (error) {
      console.log(error);
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

  const { isLoading, error, responseData, updatePost } = useFetch();

  const handleSubmit = async (e) => {
    setError(null);
    e.preventDefault();
    if (
      username === "" ||
      number === "" ||
      country === "" ||
      balance === "" ||
      profit === "" ||
      role === "" ||
      email === ""
    ) {
      setError("All fields must be filled!");
      toast.error("All fields must be filled!");
    } else {
      const data = {
        username: username.trim(),
        number,
        country: country.trim(),
        balance,
        profit,
        role: role.trim(),
        email: email.trim(),
        minimumWithdrawal: minimumWithdrawal,
        // verified: verified.trim(),
        verified,
      };
      try {
        // console.log(data)
        await updatePost(res._id, data);
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
            <Name data={{ _id: 390, username: "jkd" }} section={"New Trade"} />
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
                  {/* <Name data={admin} /> */}
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
                        Edit user
                      </h2>
                      <div className={styles.createCont}>
                        <div>
                          <Image
                            src="/profile.png"
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
                            Username:
                          </label>
                          <input
                            placeholder="Username"
                            className={`${styles.blogTitle} ${styles.input}`}
                            onChange={(e) => {
                              setusername(e.target.value);
                            }}
                            value={username}
                          />

                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            Email:
                          </label>
                          <input
                            placeholder="Email"
                            className={`${styles.blogTitle} ${styles.input}`}
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                          />
                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            Role:
                          </label>
                          <input
                            placeholder="Role"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={role}
                            onChange={(e) => setrole(e.target.value)}
                          />
                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            number:
                          </label>
                          <input
                            placeholder="mobile number"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={number}
                            onChange={(e) => setnumber(e.target.value)}
                          />
                          {plan && (
                            <>
                              <label
                                style={{
                                  textAlign: "left",
                                  padding: "0px 20px",
                                  fontWeight: "bold",
                                  fontStyle: "italic",
                                }}
                              >
                                current plan:
                              </label>
                              <input
                                placeholder="current plan"
                                className={`${styles.blogAuthor} ${styles.input}`}
                                value={plan}
                                onChange={(e) => setplan(e.target.value)}
                              />
                            </>
                          )}
                          {card && (
                            <>
                              <label
                                style={{
                                  textAlign: "left",
                                  padding: "0px 20px",
                                  fontWeight: "bold",
                                  fontStyle: "italic",
                                }}
                              >
                                Current card:
                              </label>
                              <input
                                type="text"
                                placeholder="card"
                                value={card}
                                className={`${styles.blogAuthor} ${styles.input}`}
                                onChange={(e) => setcard(e.target.value)}
                              />
                            </>
                          )}

                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            Balance:
                          </label>
                          <input
                            placeholder="Balance"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={balance}
                            onChange={(e) => setbalance(e.target.value)}
                          />
                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            Profit:
                          </label>
                          <input
                            placeholder="Profit"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={profit}
                            onChange={(e) => setprofit(e.target.value)}
                          />
                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            Country:
                          </label>
                          <input
                            placeholder=" country"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={country}
                            onChange={(e) => setcountry(e.target.value)}
                          />
                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            minimum withdrawal:
                          </label>
                          <input
                            placeholder=" minimum withdrawal"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={minimumWithdrawal}
                            onChange={(e) => setminwith(e.target.value)}
                          />
                          <label
                            style={{
                              textAlign: "left",
                              padding: "0px 20px",
                              fontWeight: "bold",
                              fontStyle: "italic",
                            }}
                          >
                            Verified:
                          </label>
                          <input
                            placeholder="Verified"
                            className={`${styles.blogAuthor} ${styles.input}`}
                            value={verified}
                            onChange={(e) => {
                              setverified(e.target.value);
                            }}
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
