import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/banner.module.css";
export default function Banner() {
  return (
    <div className={styles.cont}>
      <div className={styles.text}>
        <div className={styles.strike}>
          <Image src="/strike.png" width={21} height={21} alt="light image" />
          Ligntening fast trades
        </div>
        <div>
          <h1>Buy, Sell & Swap crypto easily</h1>
        </div>
        <div>
          <p>
            Take your security into your own hands. Trade cryptocurrency
            securely on our platform.
          </p>
        </div>
        <div>
          <Link href="/user/signup" className="btn">
            Get Started
          </Link>
        </div>
      </div>
      <div className={styles.images_cont}>
        <div>
          <Image
            src="/crypto-bg-img.png"
            height={600}
            width={507}
            alt="crypto"
            className={styles.img_bg}
          />
          <Image
            src="/coin.png"
            width={40}
            height={40}
            alt="coin"
            className="icon icon1"
          />
          <Image
            src="/coin-2.png"
            width={40}
            height={40}
            alt="coin"
            className="icon icon2"
          />
          <Image
            src="/coin-3.png"
            width={70}
            height={70}
            alt="coin"
            className="icon icon3"
          />
          <Image
            src="/coin-4.png"
            width={70}
            height={70}
            alt="coin"
            className="icon icon4"
          />
        </div>
      </div>
    </div>
  );
}
