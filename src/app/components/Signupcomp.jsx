"use client";
import React from "react";
import styles from "../styles/signup.module.css";
import { useState } from "react";
export default function Signupcomp() {
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  return (
    <div className={`${styles.cont} card `}>
      <div>
        <h2>Onboarding P2PDesk</h2>
        <form>
          <div>
            <label>Fullname</label>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
