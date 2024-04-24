"use client";
import Link from "next/link";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "../styles/dashc.module.css";
import styles2 from "../styles/admincomp.module.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// import Hamburg from "./hamburg";
const AdminComp = ({ data, data2, sec }) => {
  const [openinves, setopeninvest] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponseData] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const { user } = useAuthContext();
  const [patt, setpatt] = useState("");

  const approvedepofn = async (trans, path) => {
    setError(false);
    setIsLoading(true);
    setResponseData(null);

    const data = {
      ...trans,
    };
    if (trans.type == "deposit") {
      if (path == "approve") {
        setpatt("approvedepo");
      } else {
        setpatt("declinedepo");
      }
      try {
        const response = await axios.patch(
          `${process.env.NEXT_PUBLIC_URL}/api/transact/${patt}/${user._id}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );

        if (response.status !== 200) {
          setIsLoading(false);
          setError(response.data.error);
        }
        if (response.status === 200) {
          setResponseData(response.data);
          setIsLoading(false);
          if (patt === "approvedepo" || patt === "approvedwith") {
            toast.success("Approved!");
            setpatt("");
          } else if (patt === "declinedepo" || patt === "declindwith") {
            toast.success("Declined!");
            setpatt("");
          }
        }
      } catch (error) {
        if (error?.message) {
          if (error.message.includes("ENOTFOUND")) {
            setError("Network error");
            toast.error("Network error");
          } else {
            setError(error.message);
            setIsLoading(false);
          }
        }
        if (error?.response?.data.error) {
          if (error.response?.data.error.includes("ENOTFOUND")) {
            setError("Network error");
            toast.error("Network error");
          } else {
            setError(error.response.data.error);
            setIsLoading(false);
            toast.error(error.response.data.error);
          }
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      if (path == "approve") {
        setpatt("approvedwith");
      } else {
        setpatt("declinedwith");
      }
      try {
        const response = await axios.patch(
          `${process.env.NEXT_PUBLIC_URL}/api/transact/${patt}/${user._id}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );

        if (response.status !== 200) {
          setIsLoading(false);
          setError(response.data.error);
        }
        if (response.status === 200) {
          setResponseData(response.data);
          setIsLoading(false);
          if (patt === "approvedepo" || patt === "approvedwith") {
            toast.success("Approved!");
            setpatt("");
          } else if (patt === "declinedepo" || patt === "declinedwith") {
            toast.success("Declined!");
            setpatt("");
          }
        }
      } catch (error) {
        if (error?.message) {
          if (error.message.includes("ENOTFOUND")) {
            setError("Network error");
            toast.error("Network error");
          } else {
            setError(error.message);
            setIsLoading(false);
          }
        }
        if (error?.response?.data.error) {
          if (error.response?.data.error.includes("ENOTFOUND")) {
            setError("Network error");
            toast.error("Network error");
          } else {
            setError(error.response.data.error);
            setIsLoading(false);
            toast.error(error.response.data.error);
          }
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <section style={{ padding: "15px" }}>
        {/* <Hamburg /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              fontWeight: 400,
              fontSize: "22px",
              marginBottom: "10px",
              color: "hsl(var(--border) / 0.7)",
              margin: 0,
            }}
          >
            {sec}
          </h2>
          <div
            style={{ position: "relative", margin: 0, cursor: "pointer" }}
            onClick={() => {
              setopeninvest(true);
            }}
          >
            {data2.notifications.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  right: "0px",
                  background: "hsl(var(--danger))",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                }}
              ></span>
            )}
            <span
              className="material-symbols-outlined notranslate"
              style={{
                color: "hsl(var(--border) / 0.7)",
                margin: 0,
              }}
            >
              notifications
            </span>
          </div>
        </div>

        <div className={styles2.div}>
          {data[0].map((dat) => (
            <Link
              key={dat._id}
              href={`/edit?query=${dat._id}`}
              className="card"
              style={{
                color: "hsl(var(--border) / 0.7)",
                textDecoration: "none",
                padding: "25px 15px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {dat?.email && <span>{dat?.email}</span>}
              {dat?.startedby ? (
                <span>{dat?.startedby}</span>
              ) : (
                <span>{dat?.id}</span>
              )}
              <span
                style={{ color: "hsl(var(--danger))" }}
                className="material-symbols-outlined notranslate"
              >
                delete
              </span>
            </Link>
          ))}
        </div>
        {openinves && (
          <div className={styles.sideinvest} style={{ overflow: "auto" }}>
            <div>
              <div className={styles.ih1sec}>
                {" "}
                <h2>Notifications</h2>{" "}
                <span
                  className="material-symbols-outlined notranslate"
                  onClick={() => {
                    setopeninvest(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  cancel
                </span>
              </div>
              {data2?.notifications
                .slice()
                .reverse()
                .map((dat) => (
                  <div
                    key={dat._id}
                    style={{
                      width: "100%",
                      marginBottom: "15px",
                      borderRadius: "6px",
                    }}
                    className={`card`}
                  >
                    <div>
                      <p style={{ fontSize: "15px" }}>{dat.text}</p>
                      <div style={{ padding: "15px 0" }}>
                        <button
                          className="dashbtn"
                          style={{
                            display: "inline",
                            marginRight: "15px",
                            background: "hsl(var(--success))",
                            color: "#fff",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            approvedepofn(dat, "approve");
                          }}
                        >
                          Approve
                        </button>
                        <button
                          className="dashbtn"
                          style={{
                            display: "inline",
                            background: "hsl(var(--danger))",
                            color: "#fff",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            approvedepofn(dat, "decline");
                            console.log("k");
                          }}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        <ToastContainer />
      </section>
    </>
  );
};

export default AdminComp;
