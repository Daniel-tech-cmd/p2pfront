import styles from "../../styles/login.module.css";
import Link from "next/link";
import Image from "next/image";
import Logincomp from "@/app/components/Logincomp";
// import Mode from "@/app/components/mode";
const Login = () => {
  return (
    <>
      <section className={styles.sec}>
        <div>
          <div className={styles.imgparent}>
            <div className={styles.logocont}>
              {/* <Image src={"/logo.png"} width={70} height={70} alt="logo" /> */}
            </div>
            <div className={styles.textcont}>
              <p>Welcome back!</p>
              <h2>Login to embrace the possibilities</h2>
            </div>
            <div className={styles.imgcont}>
              <Image src={"/login.png"} width={700} height={350} alt="img" />
            </div>
          </div>
          <div className={styles.formcont}>
            <div className={styles.linkcont}>
              <div>
                <div>
                  <span>Don&apos;t have an account?</span>
                  <Link href={"/user/signup"}>Sign up</Link>
                </div>

                {/* <Mode /> */}
              </div>
            </div>
            <div className={styles.formsec}>
              <Logincomp />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
