"use client";
import React from "react";
import styles from "../styles/signup.module.css";
import { useState } from "react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import useSignup from "../hooks/useSignup";
export default function Signupcomp() {
  const { signup, responseData, error, isLoading } = useSignup();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      username: username?.trim(),
      password: password?.trim(),
      email: email?.trim(),
    };
    try {
      await signup(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles.cont} card `}>
      <div>
        <h2>Onboarding P2PDesk</h2>
        <form
          onSubmit={(e) => {
            handleSignUp(e);
          }}
        >
          <div>
            <label>Fullname</label>
            <input
              type="text"
              placeholder="username"
              required
              value={username}
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
              required
              value={email}
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
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit">
              {isLoading ? "Loading..." : "Sign up"}
            </button>
          </div>
          <small>
            Already have an account?{" "}
            <Link
              style={{ textDecoration: "none", color: "blue" }}
              href={"/user/login"}
            >
              Log in
            </Link>
          </small>
        </form>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      </div>
      <ToastContainer />
    </div>
  );
}
