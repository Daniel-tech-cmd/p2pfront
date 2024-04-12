import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/features.module.css";

export default function Features() {
  return (
    <div className={styles.cont}>
      <div>
        <h2>FEATURES</h2>
        <h1>How it works</h1>
        <p>
          Cash in and trade without delay. Our quick and secure funding options
          put you in control of your trading account instantly.
        </p>{" "}
      </div>
      <div className={styles.flex}>
        <div className={styles.card}>
          <div>
            <Image src="/cryptolap.png" width={180} height={158} alt="" />
          </div>
          <div>
            <h3>Register</h3>
            <p>
              To get started, the first step is to{" "}
              <Link href="/user/signup">Create an account </Link>with us.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image
              src="/cryptomining-hit.png"
              width={180}
              height={158}
              alt=""
            />
          </div>
          <div>
            <h3>Agreement</h3>
            <p>
              Parties can start a trade order based on agreed terms of contract
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image
              src="/crypto-wallet-hit.png"
              width={180}
              height={158}
              alt=""
            />
          </div>
          <div>
            <h3>Deposit to trade</h3>
            <p>
              Both parties are required to make deposit to the initiated trade
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image
              src="/crypto-trading-hit.png"
              width={180}
              height={158}
              alt=""
            />
          </div>
          <div>
            <h3>Swap</h3>
            <p>The system swaps payments once obligations are fulfiled.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
