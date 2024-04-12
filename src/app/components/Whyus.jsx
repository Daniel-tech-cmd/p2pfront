import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/banner.module.css";
export default function () {
  return (
    <div style={{ background: `url("/bg-sdg.png")` }}>
      <div className={styles.cont}>
        <div className={styles.text}>
          <div className={styles.strike}>
            {/* <Image src="/strike.png" width={21} height={21} alt="light image" /> */}
            WHY US
          </div>
          <div>
            <h1 style={{ fontSize: "43px" }}>
              We got everything you need to start trading
            </h1>
          </div>
          <div>
            <p>
              Connect with fellow traders instantly. Our platform facilitates
              quick pairing, ensuring you never miss out on opportunities.
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
              src="/opwej.png"
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
    </div>
  );
}
