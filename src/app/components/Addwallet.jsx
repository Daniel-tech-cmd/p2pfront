"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import styles from "../styles/trade.module.css";
import useFetch from "../hooks/useFetch";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuthContext } from "../hooks/useAuthContext";

export default function Addwallet() {
  const { user } = useAuthContext();

  const { addwalet, error, isLoading } = useFetch();

  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [id, setid] = useState("");
  const [image, setimage] = useState("");
  const [ico, setico] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setimage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleicochange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setico(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handletrade = async (e) => {
    e.preventDefault();

    if (address == "" || name == "" || ico == "" || image == "") {
      toast.error("Fill everything!");
    }

    const data = {
      address: address.trim(),
      name: name.trim(),
      ico,
      image,
      id,
    };

    try {
      // console.log(data);
      await addwalet(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`${styles.cont} card`}
      style={{
        // width: "100%",
        padding: 0,
        // maxHeight: "200px",
      }}
    >
      <p
        style={{
          margin: "0px 0",
          padding: "1rem ",
          border: "none",
          borderBottom: "1px solid #3A2D60",
          borderColor: "#3A2D60",
        }}
      >
        Start a new trade
      </p>
      <form
        onSubmit={(e) => {
          handletrade(e);
        }}
      >
        <div>
          <p>Asset name</p>
          <div>
            <input
              value={name}
              placeholder="Name"
              style={{ width: "100%" }}
              type="text"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <p>Id</p>
          <div>
            {" "}
            <input
              value={id}
              placeholder="id"
              style={{ width: "100%" }}
              type="text"
              onChange={(e) => {
                setid(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <p>Wallet Address</p>
          <div>
            <input
              value={address}
              placeholder="wallet address"
              style={{ width: "100%" }}
              type="text"
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              marginTop: "5px",
              flexDirection: "column",
            }}
            className={styles.flex}
          >
            {image && (
              <img src={image} width="150px" height="150px" alt=""></img>
            )}

            <label
              htmlFor="fileInput"
              className="custom-file-upload"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "hsl(var(--base))",
                color: "#000",
                padding: "5px",
                borderRadius: "3px",
                textTransform: "capitalize",
                fontSize: "15px",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-upload"></i> Choose QR CODE image
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              placeholder="QR CODE"
              // ref={fileInputRef}
              // style={{ display: 'none' }}
              onChange={handleImageChange}
              style={{
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                background: "hsl(var(--base))",
                color: "#fff",
                padding: "5px",
                borderRadius: "3px",
                textTransform: "capitalize",
                fontSize: "15px",
                cursor: "pointer",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "5px",
              flexDirection: "column",
            }}
            className={styles.flex}
          >
            {ico && <img src={ico} width="150px" height="150px" alt=""></img>}

            <label
              htmlFor="fileInput2"
              className="custom-file-upload"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "hsl(var(--base))",
                color: "#000",
                padding: "5px",
                borderRadius: "3px",
                textTransform: "capitalize",
                fontSize: "15px",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-upload"></i> Choose wallet icon image
            </label>
            <input
              type="file"
              id="fileInput2"
              accept="image/*"
              placeholder="QR CODE"
              // ref={fileInputRef}
              // style={{ display: 'none' }}
              onChange={handleicochange}
              style={{
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                background: "hsl(var(--base))",
                color: "#fff",
                padding: "5px",
                borderRadius: "3px",
                textTransform: "capitalize",
                fontSize: "15px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <div>
          <button disabled={isLoading}>
            {isLoading ? "loading..." : "Add"}
          </button>
        </div>
      </form>
      {error && (
        <p style={{ color: "red" }}>
          <b>{error}</b>
        </p>
      )}
      <ToastContainer />
    </div>
  );
}
