"use client";
import { useState } from "react";
import styles from "../styles/fq.module.css";
import Image from "next/image";

const Fq = () => {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);
  const fn = (a) => {
    if (a === "show") {
      setshow(!show);
      setshow1(false);
      setshow2(false);
      setshow3(false);
      setshow4(false);
    } else if (a === "show1") {
      setshow1(!show1);
      setshow(false);
      setshow2(false);
      setshow3(false);
      setshow4(false);
    } else if (a === "show2") {
      setshow2(!show2);
      setshow1(false);
      setshow(false);
      setshow3(false);
      setshow4(false);
    } else if (a === "show3") {
      setshow3(!show3);
      setshow1(false);
      setshow2(false);
      setshow(false);
      setshow4(false);
    } else if (a === "show4") {
      setshow4(!show4);
      setshow1(false);
      setshow2(false);
      setshow3(false);
      setshow(false);
    }
  };
  return (
    <>
      <section className={styles.sec} id="faq">
        <div className={styles.cont}>
          <h2>Still have questions?</h2>
          <p>Find answers to all your queries about our service.</p>
          <div className={styles.inner}>
            <div className={styles.imgcont}>
              <Image
                src="/faqim.webp"
                className={styles.img}
                width={400}
                height={400}
                alt="img"
              />
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <p
                      onClick={() => {
                        fn("show");
                      }}
                      className={styles.quest}
                      style={{ display: "flex" }}
                    >
                      <span style={{ display: "block" }}>+</span>
                      How do I sign up?
                    </p>
                    {show && (
                      <p className={styles.answer}>
                        Signing up is simple! Click on the &quot;Sign Up&quot;
                        or &quot;Register&quot; button on our website&apos;s
                        homepage. Fill in the required information, including
                        your name, email address, and password. Once done,
                        you&apos;ll receive a confirmation email to verify your
                        account. Follow the link provided in the email, and
                        you&apos;re all set to log in and start investing.
                      </p>
                    )}
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        console.log("j");
                        fn("show1");
                      }}
                      style={{ display: "flex" }}
                      className={styles.quest}
                    >
                      <span style={{ display: "block" }}>+</span> How can one
                      make payment and withdrawal from a trade?
                    </p>
                    {show1 && (
                      <p className={styles.answer}>
                        After filling in the necessary details on the create
                        trade page. Kindly proceed to the &quot;MAKE
                        PAYMENT&quot; option and pay the token that has been set
                        to you. Once payment from both parties gets confirmed
                        then you can click the &quot;WITHDRAW TOKEN&quot; option
                        next. insert your token withdrawal address and send your
                        receiving token will be sent to your wallet within 3-5
                        mins.
                      </p>
                    )}
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        fn("show2");
                      }}
                      className={styles.quest}
                      style={{ display: "flex" }}
                    >
                      <span style={{ display: "block" }}>+</span> How can I
                      dispute trades?
                    </p>
                    {show2 && (
                      <p className={styles.answer}>
                        There are multiple ways to dispute trades, once the
                        buyer or seller of an open contract trade cannot meet
                        the requirements then the other party can report to the
                        live chat support.
                      </p>
                    )}
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        fn("show3");
                      }}
                      style={{ display: "flex" }}
                      className={styles.quest}
                    >
                      <span style={{ display: "block" }}>+</span> How can I
                      start a P2P trade?
                    </p>
                    {show3 && (
                      <p className={styles.answer}>
                        Step 1:login your user dashboard, select &quot;create
                        trade&quot; and fill in the necessary details. Step 2:
                        Enter the recipient&apos;s email address. Use the email
                        address associated with the recipient&aposs Binance
                        account. Step 3: Select the amount and the
                        cryptocurrency you wish to send (no minimum amount
                        required).
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fq;
