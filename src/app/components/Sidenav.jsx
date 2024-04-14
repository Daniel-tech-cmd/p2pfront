import Image from "next/image";
// import Closenav from "./closenav";
import Link from "next/link";
import styles from "../styles/dashboardnav.module.css";
import Hamburg from "./hamburg";
// import Logout from "./Logout";
const Sidenav = () => {
  const dat = { _id: 343 };
  return (
    <>
      <section className={styles.sec}>
        <div>
          <div className={styles.imgcont}>
            <Link
              href={`/account/dashboard/${dat?._id}`}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Image src={"/log.png"} alt="logo" width={40} height={40} />
              <Hamburg />
              <Image
                src={"/logo.png"}
                alt="logo"
                width={140}
                height={30}
                className="logo"
              />
            </Link>
          </div>
          <div className={styles.links}>
            <Link
              className={styles.link}
              href={`/account/dashboard/${dat?._id}`}
            >
              <span className="material-symbols-outlined notranslate">
                dashboard
              </span>
              Dashboard
            </Link>
            <Link className={styles.link} href={`/account/invest/${dat?._id}`}>
              <span className="material-symbols-outlined notranslate">
                crowdsource
              </span>
              Invest
            </Link>

            <Link className={styles.link} href={`/deposit-history/${dat?._id}`}>
              <span className="material-symbols-outlined notranslate">
                deployed_code_history
              </span>
              Deposit history
            </Link>

            <Link className={styles.link} href={`/transactions/${dat?._id}`}>
              <span className="material-symbols-outlined notranslate">
                history
              </span>
              Transaction history
            </Link>

            <Link className={styles.link} href={`/support/${dat?._id}`}>
              <span className="material-symbols-outlined notranslate">
                contact_emergency
              </span>
              Get support
            </Link>
            <Link className={styles.link} href={"#"}>
              <span className="material-symbols-outlined notranslate">
                security
              </span>
              security
            </Link>
            {/* <Logout /> */}
            {dat?.role === "admin" && (
              <Link className={styles.link} href={`/admin/${dat?._id}`}>
                <span className="material-symbols-outlined notranslate">
                  admin_panel_settings
                </span>
                Admin Dashboard
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidenav;
