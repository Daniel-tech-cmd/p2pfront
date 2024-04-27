"use client";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import styles2 from "../styles/admincomp.module.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Hamburg from "./hamburg";
const Prof = ({ data }) => {
  const [state, setstatet] = useState(data?.state);
  const [city, setcity] = useState(data?.city);
  const [email, setemailData] = useState(data?.email);
  const [number, setnumberData] = useState(data?.number);
  const [zipcode, setzipcode] = useState(data?.zipcode);

  const [isLoading, setIsLoading] = useState("");
  const { user } = useAuthContext();
  const [username, setusername] = useState(data.username);
  const [country, setcountry] = useState(data.country);

  const approvedepofn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      username,
      country,
      city,
      zipcode,
      number,
      state,
    };

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_URL}/api/user/update/${user?._id}`,
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
      }
      if (response.status === 200) {
        setIsLoading(false);

        toast.success("updated!");
      }
    } catch (error) {
      if (error?.message) {
        if (error.message.includes("ENOTFOUND")) {
          toast.error("Network error");
        } else {
          toast.error(error.message);

          setIsLoading(false);
        }
      }
      if (error?.response?.data?.error) {
        if (error.response?.data?.error.includes("ENOTFOUND")) {
          toast.error("Network error");
        } else {
          setIsLoading(false);
          toast.error(error.response.data?.error);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section style={{ padding: "15px", paddingTop: "80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2
            style={{
              fontWeight: 400,
              fontSize: "22px",
              marginBottom: "10px",
              color: "hsl(var(--border) / 0.7)",
              margin: 0,
            }}
          >
            Update Profile
          </h2>
        </div>

        <div
          className={styles2.div2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: "100%",
            padding: "15px",
            background: "rgba(255, 255, 255, 0.03)",
            width: "100%",
            margin: 0,
            borderRadius: "5px",
            flexWrap: "nowrap",
          }}
        >
          <div className={styles2.numb} style={{ width: "100%" }}>
            <div
              className="card"
              style={{ width: "100%", borderRadius: "5px" }}
            >
              <h4 style={{ textTransform: "capitalize" }}>{data.username}</h4>
              <p style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontWeight: "100",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                  className="material-symbols-outlined notranslate"
                >
                  person
                </span>
                Userame
              </p>
            </div>
            <div
              className="card"
              style={{ width: "100%", borderRadius: "5px" }}
            >
              <h4>{data.email}</h4>
              <p style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <span
                  style={{
                    fontWeight: "100",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                  className="material-symbols-outlined notranslate"
                >
                  mail
                </span>
                Email
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              approvedepofn(e);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
              padding: "15px",
              margin: 0,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }} className="omo">
              <div>
                <label
                  style={{
                    color: " hsl(217 6% 60%)",
                  }}
                >
                  Name
                </label>
                <input
                  className="inputtxt2"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    color: " hsl(217 6% 60%)",
                  }}
                >
                  Number
                </label>
                <input
                  className="inputtxt2"
                  onChange={(e) => {
                    setnumberData(e.target.value);
                  }}
                  value={data?.number}
                />
              </div>
              <div>
                <label
                  style={{
                    color: " hsl(217 6% 60%)",
                  }}
                >
                  country
                </label>
                <input
                  type="text"
                  className="inputtxt2"
                  value={country}
                  onChange={(e) => {
                    setcountry(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    color: " hsl(217 6% 60%)",
                  }}
                >
                  city
                </label>
                <input
                  type="text"
                  className="inputtxt2"
                  value={city}
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    color: " hsl(217 6% 60%)",
                  }}
                >
                  state
                </label>
                <input
                  type="text"
                  className="inputtxt2"
                  value={state}
                  onChange={(e) => {
                    setstatet(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    color: " hsl(217 6% 60%)",
                  }}
                >
                  Zip code
                </label>
                <input
                  type="text"
                  className="inputtxt2"
                  value={zipcode}
                  onChange={(e) => {
                    setzipcode(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                textDecoration: "none",
                margin: 0,
                width: "100%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                background: "hsl(216 100% 50%)",
                border: "none",
                marginTop: "10px",
                borderRadius: "5px",
                color: "#fff",
                padding: "10px",
              }}
            >
              {isLoading ? "On it..." : "Update"}
            </button>
          </form>
        </div>

        <ToastContainer />
      </section>
    </>
  );
};

export default Prof;
