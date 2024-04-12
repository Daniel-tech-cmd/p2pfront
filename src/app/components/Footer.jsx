import styles from "../styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <section className={styles.sec}>
        <section className={styles.imgsec}></section>
        <div>
          <div className={styles.flex}>
            <div>
              <div>
                <h2 className="logo">
                  {" "}
                  <Link href={"/"}>P2pdesk </Link>
                </h2>
              </div>
              <p>
                Reinventing the way trade cryptocurrency, introducing the
                smartest and most convenient way to pay and get paid..
              </p>
            </div>
            <div>
              <div>
                <h4>CONTACT US</h4>
                <p>Customer Care</p>
              </div>
              <div>
                <h4>Mon - Fri: 6.00am to 11.00pm</h4>
                <p>Investing Hours</p>
              </div>
            </div>
            <div>
              <p className={styles.bx}>
                Download Brochure{" "}
                <span className="material-symbols-outlined notranslate">
                  cloud_download
                </span>
              </p>
              <p className={styles.bx}>
                Register your complain
                <span className="material-symbols-outlined notranslate">
                  contact_mail
                </span>
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Footer;
