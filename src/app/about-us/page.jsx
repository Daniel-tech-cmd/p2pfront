import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import styles1 from "../styles/about.module.css";
import styles from "../styles/banner.module.css";
import styles2 from "../styles/features.module.css";
import styles4 from "../styles/features.module.css";
import Link from "next/link";
import Slide from "../components/Slide";
import Footer from "../components/Footer";

export default function page() {
  return (
    <>
      <Nav />
      <div className={`${styles1.cont} ${styles4.cont}`}>
        <div className={styles1.sec}>
          <h4>OUR STORY</h4>
          <h1>About our company</h1>
          <p>
            We are the One-stop solution to buy, sell and swap cryptocurrency
            with ease.
          </p>
          <Image
            className={styles1.image}
            src="/about.jpg"
            width={1100}
            height={715}
            alt=""
          />
        </div>
        <div style={{ background: `url("/bg-nft.png")` }}>
          <div className={styles.cont}>
            <div className={styles.text}>
              <div className={styles.strike}>
                {/* <Image src="/strike.png" width={21} height={21} alt="light image" /> */}
                OUR MISSION
              </div>
              <div>
                <h1 style={{ fontSize: "43px", textAlign: "start" }}>
                  We are here to safeguard your transactions
                </h1>
              </div>
              <div>
                <p style={{ textAlign: "start" }}>
                  Its an exciting time to become a pair trader.
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
            <div
              className={`${styles.images_cont} ${styles1.image_cont}`}
              style={{ marginTop: 0 }}
            >
              <div>
                <p>
                  Welcome to P2PDESK, your trusted partner in the world of
                  cryptocurrency. We are proud to be a crucial part of your
                  trading experience., one of the world&apos;s leading
                  cryptocurrency exchanges. At P2PDESK, we&apos;re more than
                  just a cryptocurrency escrow and P2P trading platform.
                  We&apos;re a community of crypto enthusiasts, technologists,
                  and traders committed to revolutionizing the way you trade
                  digital assets.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles2.flex}>
          <div className={styles2.card}>
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
          <div className={styles2.card}>
            <div>
              <Image src="/cash-back.png" width={80} height={80} alt="" />
            </div>
            <div>
              <h3>Transparency</h3>
              <p>
                Our system is built on a transparent model which means every
                transaction is initiated and completed as seen.
              </p>
            </div>
          </div>
          <div className={styles2.card}>
            <div>
              <Image src="/rating.png" width={80} height={80} alt="" />
            </div>
            <div>
              <h3>Experienced team</h3>
              <p>
                Our team of customer success agents are working around the clock
                to help fix any issues that may arise from your experience with
                us.
              </p>
            </div>
          </div>
          <div className={styles2.card}>
            <div>
              <Image src="/protection.png" width={80} height={80} alt="" />
            </div>
            <div>
              <h3>Security guarantee</h3>
              <p>
                Your safety is our top priority. We employ cutting-edge security
                measures to safeguard your assets, using encryption and
                authentication protocols to protect every transaction.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>PARTNERSHIP</h2>
          <h1>Meet our partners</h1>
          <p>
            We have invested in our platform by partnering with cutting edge
            technology companies to deliver our goals and protect our users.
          </p>{" "}
        </div>
        <div style={{ padding: "50px 0" }}>
          {" "}
          <Slide />
        </div>
      </div>
      <Footer />
    </>
  );
}
