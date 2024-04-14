"use client";
import { useContext, useEffect } from "react";
import styles from "../styles/toggle.module.css";
import Image from "next/image";
import { navcon } from "../contexts/navcon";
// import { Na } from "../contexts/ThemeContext2";
const Hamburg = () => {
  const { mode, toggle } = useContext(navcon);
  const style = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    background: "hsl(0 0% 0% /0.2)",
    alignItems: "center",
  };
  const handletoggle = () => {
    toggle();
    // if (mode === "light") {
    //   localStorage.setItem("mode", JSON.stringify("dark"));
    // } else {
    //   localStorage.setItem("mode", JSON.stringify("light"));
    // }
  };

  return (
    <>
      <div
        onClick={() => {
          handletoggle();
        }}
        className={styles.show}
        style={{
          backgroundColor: "hsl(var(--base))",
          padding: "10px 20px",
          lineHeight: 1,
          // display: "flex",
          color: "hsl(var(--white))",
          fontSize: "25px",
          borderRadius: "5px",
          transition: "0.2s linear",
          cursor: "pointer",
        }}
        // className="modecont"
      >
        {mode == "dont" ? (
          <Image src="/menu.svg" width={25} height={25} alt="" />
        ) : (
          <span className="material-symbols-outlined" style={{ color: "#fff" }}>
            arrow_right_alt
          </span>
        )}

        {/* <div
          className={styles.ball}
          style={mode === "light" ? { right: "2px" } : { left: "2px" }}
        /> */}
      </div>
    </>
  );
};

export default Hamburg;
