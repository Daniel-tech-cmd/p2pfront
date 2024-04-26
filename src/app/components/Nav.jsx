"use client";
import styles from "../styles/nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const [openlinks, setopenlinks] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setopenlinks(false);
        }}
        className={
          openlinks ? styles.overlay : `${styles.none} ${styles.overlay}`
        }
      ></div>
      <section className={styles.sec}>
        <div className={styles.innersec}>
          <div className={styles.logocont}>
            <h2 className="logo">
              {" "}
              <Link href={"/"}>P2pdesk </Link>
            </h2>
          </div>
          <div
            className={
              openlinks ? styles.links : `${styles.none} ${styles.links}`
            }
          >
            <div className={styles.smalllogo}>
              <h2 className="logo">
                {" "}
                <Link href={"/"}>P2pdesk </Link>
              </h2>
              <div
                onClick={() => {
                  setopenlinks(false);
                }}
              >
                <span className="material-symbols-outlined notranslate">
                  close
                </span>
              </div>
            </div>
            <Link href={"/"}>Home</Link>
            <Link href={"/about-us"}>about</Link>
            <Link href={"/#services"}>services</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"/#faq"}>FaQ</Link>
            {/* <Link href={"#"}>Trade now</Link> */}
            <div>
              <Link href={"/user/login"} className="">
                <span className="material-symbols-outlined notranslate">
                  account_circle
                </span>
                Login
              </Link>
              /
              <Link className="" href={"/user/signup"}>
                Register
              </Link>
            </div>
            <div className={styles.contactSec}>
              {/* <Link href={"#"}>
                <span className="material-symbols-outlined icon notranslate">
                  mail
                </span>
                <span>support@fitstock.org</span>
              </Link> */}
              {/* <Link href={"#"}>
                <span className="material-symbols-outlined icon notranslate">
                  call
                </span>
                <span>+1-(844)-928-2546</span>
              </Link> */}
            </div>
          </div>
          <div
            className={styles.ham}
            onClick={() => {
              setopenlinks(true);
            }}
          >
            <span className="material-symbols-outlined notranslate">menu</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
