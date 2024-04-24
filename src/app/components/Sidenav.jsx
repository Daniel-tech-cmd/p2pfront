"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/dashboardnav.module.css";
import Hamburg from "./hamburg";
import { useContext } from "react";
import { openseccon } from "../contexts/openseccontext";
import { navcon } from "../contexts/navcon";
import { useAuthContext } from "../hooks/useAuthContext";

const Sidenav = () => {
  const { show, toggle, toggledepo, togglewith } = useContext(openseccon);
  const { user: dat } = useAuthContext();
  const { toggle: tog } = useContext(navcon);
  return (
    <>
      <section className={styles.sec}>
        <div>
          <div className={styles.imgcont}>
            <Image src={"/log.png"} alt="logo" width={40} height={40} />
            <Hamburg />
            <Image
              src={"/logo.png"}
              alt="logo"
              width={140}
              height={30}
              className="logo"
            />
          </div>
          <div className={styles.links}>
            <Link className={styles.link} href={`/account/dashboard/`}>
              <span className="material-symbols-outlined notranslate">
                dashboard
              </span>
              Dashboard
            </Link>
            <Link className={styles.link} href={`/new-trade`}>
              <span className="material-symbols-outlined notranslate">
                crowdsource
              </span>
              Initiate trade
            </Link>

            <Link
              className={styles.link}
              href={`#`}
              onClick={() => {
                tog(), toggle();
              }}
            >
              <span className="material-symbols-outlined notranslate">
                deployed_code_history
              </span>
              Join trade
            </Link>

            <Link
              className={styles.link}
              href={`#`}
              onClick={() => {
                tog(), toggledepo();
              }}
            >
              <span className="material-symbols-outlined notranslate">
                attach_money
              </span>
              Deposit crypto
            </Link>

            <Link className={styles.link} href={`#`} onClick={togglewith}>
              <span className="material-symbols-outlined notranslate">
                contact_emergency
              </span>
              Withdraw crypto
            </Link>
            <Link className={styles.link} href={`/account/trades`}>
              <span className="material-symbols-outlined notranslate">
                crowdsource
              </span>
              View trades
            </Link>
            {/* <Link className={styles.link} href={"#"}>
              <span className="material-symbols-outlined notranslate">
                security
              </span>
              security
            </Link> */}
            {/* <Logout /> */}
            {dat?.role === "admin" && (
              <>
                <Link className={styles.link} href={`/admin/`}>
                  <span className="material-symbols-outlined notranslate">
                    admin_panel_settings
                  </span>
                  Users
                </Link>
                <Link className={styles.link} href={`/admin/trades`}>
                  <span className="material-symbols-outlined notranslate">
                    admin_panel_settings
                  </span>
                  Trades
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidenav;
