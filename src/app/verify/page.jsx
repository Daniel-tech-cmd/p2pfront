import styles from "../styles/verify.module.css";
import Image from "next/image";
import Link from "next/link";

const Verify = () => {
  return (
    <>
      {/* <Nav /> */}
      <section>
        <div className={styles.cont}>
          <div>
            <Image src="/unread.svg" width={70} height={70} alt="" />
            <p>
              A verification link has been sent to your email! click the link to
              verify.
              <span
                style={{
                  fontStyle: "italic",
                  display: "block",
                  textTransform: "uppercase",
                }}
              >
                Link expires in <b>5 minutes</b>{" "}
              </span>
            </p>
            <p style={{ width: "100%" }}>
              <Link
                href={`/user/login`}
                className="btn"
                style={{
                  borderRadius: "5px",
                  padding: "10px 20px ",
                  background: "#3498db",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                login
                <span>
                  <Image src="/arrow.svg" width={12} height={12} alt="arrow" />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
