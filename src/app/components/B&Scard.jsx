import React from "react";
import Image from "next/image";
import styles from "../styles/bscard.module.css";
import Link from "next/link";

export default function BScard() {
  return (
    <div className={`card ${styles.cont}`}>
      <div>
        <h4>Buy & Sell 100+ Coins Instantly</h4>
        <p>Begin trading now!!</p>
        <Link href={`/new-trade`} className="dashbtn">
          Start a trade
        </Link>
      </div>
      <div className={styles.imgcont}>
        <Image src="/coin1.png" width={210} height={145} alt="" />
      </div>
    </div>
  );
}
