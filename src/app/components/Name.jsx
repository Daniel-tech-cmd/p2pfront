"use client";
import { useState } from "react";
import styles from "../styles/name.module.css";
import Image from "next/image";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
// import useSignup from "../hooks/useSignup";
import { ToastContainer, toast } from "react-toastify";
import Hamburg from "./hamburg";
const Name = ({ section }) => {
  const [showprofie, setshowprofile] = useState(false);
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
            <Image src={"/avater.png"} width={34} height={34} alt="" />
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Name;
