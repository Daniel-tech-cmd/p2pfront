import React from "react";
import Image from "next/image";
import styles from "../styles/encrypt.module.css";

export default function () {
  return (
    <div className={styles.cont}>
      <div>
        <div>
          <div>
            <Image src="/lock-crypto.png" width={126} height={126} alt="" />
          </div>
          <div>
            <h2>Encrypted</h2>
            <p>Our systems are end to end encrypted</p>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <Image
              src="/wallet-crypto-icon.png"
              width={83}
              height={88}
              alt=""
            />
          </div>
          <div>
            <h2>Connect your walet</h2>
            <p>Connect your wallet and trade on the go</p>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <Image src="/earning-trading.png" width={83} height={88} alt="" />
          </div>
          <div>
            <h2>Convenient trading</h2>
            <p>Trade from anywhere at anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
