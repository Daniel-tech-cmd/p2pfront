// import React from 'react'
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/banner.module.css";

export default function Whatwedo() {
  return (
    <div className={styles.cont}>
      <div className={styles.text}>
        <div className={styles.strike}>
          {/* <Image src="/strike.png" width={21} height={21} alt="light image" /> */}
          WHAT WE DO
        </div>
        <div>
          <h1 style={{ fontSize: "43px" }}>
            Trade crypto on your terms. Anywhere.
          </h1>
        </div>
        <div>
          <p>
            Choose us for flexible transactions and unparalleled security, with
            lightning-fast transactions, and a global network of trusted
            traders. Join our platform today and experience the future of pair
            to pair trading.
          </p>
        </div>
        <div>
          <Link
            href="/user/signup"
            className="btn"
            style={{ background: "var(--menu)" }}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className={styles.images_cont}>
        <div>
          <Image
            src="/cryptophone.png"
            height={500}
            width={407}
            alt="crypto"
            style={{
              zIndex: -1,
            }}
            className={styles.img_bg}
          />
          <Image
            src="/coin.png"
            width={30}
            height={30}
            alt="coin"
            className="icon icon1 cc"
          />
          <Image
            src="/coin-2.png"
            width={30}
            height={30}
            alt="coin"
            className="icon icon2"
          />
          <Image
            src="/coin-3.png"
            width={60}
            height={60}
            alt="coin"
            className="icon icon3"
          />
          <Image
            src="/coin-4.png"
            width={60}
            height={60}
            alt="coin"
            className="icon icon4"
          />
          <Image
            src="/graph-crypto-trading.png"
            width={60}
            height={60}
            alt="coin"
            className="icon icon5"
          />
          <Image
            src="/stocks.png"
            width={60}
            height={60}
            alt="coin"
            className="icon icon6"
          />
        </div>
      </div>
    </div>
  );
}
