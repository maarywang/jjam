import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "black",
        height: "auto",
        display: "flex",
        justifyContent: "space-around",
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          width: "10%",
        }}
      >
        <Image
          src="/footerLogo.png"
          width="100%"
          height="80%"
          style={{ backgroundColor: "black" }}
        ></Image>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          width: "10%",
        }}
      >
        <p style={{ margin: "1%" }}>Twitter</p>
        <p style={{ margin: "1%" }}>Facebook</p>
        <p style={{ margin: "1%" }}>Instagram</p>
        <p style={{ margin: "1%" }}>Contact Us</p>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          width: "10%",
        }}
      >
        <p style={{ margin: "1%" }}>Back to Top</p>
        <p style={{ margin: "1%" }}>© SubMerge 2021</p>
      </div>
    </div>
  );
}
