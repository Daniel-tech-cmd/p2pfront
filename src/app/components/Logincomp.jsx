"use client";
import styles from "../styles/login.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import useSignup from "../hooks/useSignup";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const Logincomp = () => {
  const { login, isLoading, error } = useSignup();
  const [randomString, setRandomString] = useState("");
  const [captcha, setcaptcha] = useState("");

  const [email, setemail] = useState("");
  const [noemail, setnoemail] = useState(false);
  const [object, setobject] = useState("");

  const [password, setpassword] = useState("");
  const [nopassword, setnopassword] = useState(false);

  useEffect(() => {
    const generateRandomString = () => {
      // Define the pool of characters (numbers and uppercase letters)
      const characters = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      // Generate a random buffer of 6 bytes
      const randomBuffer = crypto.getRandomValues(new Uint8Array(6));

      // Map the buffer to characters
      const generatedString = Array.from(randomBuffer)
        .map((byte) => characters[byte % characters.length])
        .join("");

      setRandomString(generatedString);
    };
    generateRandomString();
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (captcha !== randomString) {
      toast.dismiss();
      toast.error(" Capcha failed ");
    } else if (password === "" || email === "") {
      toast.error("All fields must be filled");
    } else {
      const data = {
        password: password.trim(),
        email: email.trim(),
      };
      try {
        await login(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handlesubmit(e);
        }}
      >
        <div>
          <h2>Sign In</h2>
          <p>Securely connect to your account</p>
        </div>

        <label>
          E-mail address
          <span
            style={{ color: "red" }}
            className="material-symbols-outlined notranslate "
          >
            asterisk
          </span>
        </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        {noemail && <span className={styles.error}>Email can't be empty</span>}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            margin: "0",
            padding: "15px 0 5px 0",
          }}
        >
          <label style={{ margin: 0 }}>
            password
            <span
              style={{ color: "red" }}
              className="material-symbols-outlined notranslate "
            >
              asterisk
            </span>
          </label>
          <Link style={{ textDecoration: "none" }} href={"/forgot-password"}>
            Forgot Password?
          </Link>
        </div>

        <input
          type="password"
          placeholder="confirm password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        {nopassword && (
          <span className={styles.error}>Password is required</span>
        )}
        <div className={styles.capcha}>
          <span className={styles.a}>{randomString[0]}</span>
          <span className={styles.b}>{randomString[1]}</span>
          <span className={styles.c}>{randomString[2]}</span>
          <span className={styles.d}>{randomString[3]}</span>
          <span className={styles.e}>{randomString[4]}</span>
          <span className={styles.f}>{randomString[5]}</span>
        </div>
        <label>
          Captcha
          <span
            style={{ color: "red" }}
            className="material-symbols-outlined notranslate "
          >
            asterisk
          </span>
        </label>
        <input
          type="Text"
          placeholder="Captcha"
          value={captcha}
          onChange={(e) => {
            setcaptcha(e.target.value);
          }}
        />
        <button className={styles.submit}>
          {isLoading ? "On it..." : "Sign In"}
        </button>
        {error && <span className="error">{error}</span>}
      </form>
      <ToastContainer theme={"dark"} />
    </>
  );
};

export default Logincomp;
