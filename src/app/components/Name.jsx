"use client";
import { useState } from "react";
import styles from "../styles/name.module.css";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../hooks/useFetch";
import "react-toastify/dist/ReactToastify.css";
// import useSignup from "../hooks/useSignup";
import { ToastContainer, toast } from "react-toastify";
import Hamburg from "./hamburg";
import useSignup from "../hooks/useSignup";
const Name = ({ section }) => {
  const [showprofie, setshowprofile] = useState(false);
  const { logout } = useSignup();
  // const { logout } = useSignup();
  const handleCopyClick = (address) => {
    navigator.clipboard
      .writeText(address)
      .then(() => toast.success("Address copied to clipboard"))
      .catch((error) => console.error("Error copying text:", error));
  };
  return (
    <>
      <section className={styles.sec}>
        <div className={styles.inner}>
          <div
            className={styles.link}
            style={{ maxWidth: "100%", wordBreak: "break-word" }}
          >
            <Hamburg />
            {/* <Image src="/menu.svg" width={30} height={30} /> */}
            <p>{section}</p>
          </div>
          <div className={styles.avater}>
            <Image
              onClick={() => setshowprofile(!showprofie)}
              src={"/avater.png"}
              width={34}
              height={34}
              alt=""
            />
          </div>
          {showprofie && (
            <div
              className={styles.profilecont}
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                transition: "0.25s linear",
                border: "1px solid hsl(0 0% 100%/0.14)",
                backgroundColor: "var(--headerbg)",
                boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
                width: "220px",
                position: "absolute",
                right: 0,
                zIndex: 9,
                top: "100%",
                padding: "15px",
                transform: "scale(0.95)",
              }}
            >
              <Link
                href={`/account/profile/`}
                style={{
                  color: "hsl(217 6% 60%)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "7.5px 0",
                  fontWeight: "500",
                }}
              >
                {" "}
                <span className="material-symbols-outlined notranslate">
                  account_circle
                </span>
                My profile
              </Link>
              <p
                style={{
                  color: "hsl(217 6% 60%)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontWeight: "500",
                  marginTop: "8px",
                  padding: "7.5px 0",
                }}
                onClick={logout}
              >
                <span className="material-symbols-outlined notranslate">
                  logout
                </span>
                Logout
              </p>
            </div>
          )}
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Name;
