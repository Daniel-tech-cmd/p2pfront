import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/banner.module.css";

export default function Testimonials() {
  return (
    <div style={{ background: `url("/bg-nft.png")` }}>
      <div className={styles.cont}>
        <div className={styles.images_cont} style={{ marginTop: 0 }}>
          <div>
            <Image
              src="/crypto-wallet.png"
              height={500}
              width={407}
              alt="crypto"
              style={{
                zIndex: -1,
              }}
              className={styles.img_bg}
            />
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.strike}>
            {/* <Image src="/strike.png" width={21} height={21} alt="light image" /> */}
            TESTIMONIALS
          </div>
          <div>
            <h1 style={{ fontSize: "43px" }}>
              we are trusted by millions of users around the world
            </h1>
          </div>
          <div>
            <p>It’s an exciting time to become a pair trader.</p>
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
      </div>
    </div>
  );
}
