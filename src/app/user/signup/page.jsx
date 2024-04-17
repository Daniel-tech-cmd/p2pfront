import Signupcomp from "@/app/components/Signupcomp";
import React from "react";

export default function page() {
  return (
    <div
      style={{
        background: "rgba(149, 104, 255, 0.1)",
        height: "100vh",
        margin: "0",
        position: "relative",
        top: "-30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Signupcomp />
    </div>
  );
}
