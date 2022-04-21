import React from "react";
import Button from "@mui/material/Button";
import Image from "next/Image";

export default function Home() {
  return (
    <div>
      <div
        style={{
          background: "white",
          height: "500px",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "10%",
        }}
      >
        <div style={{ paddingLeft: "5%" }}>
          <Image src="/standing-4.jpg" height="300%" width="250%"></Image>
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingRight: "5%",
          }}
        >
          <h1
            style={{
              margin: "0",
              fontWeight: "700",
              width: "100%",
              textAlign: "right",
              fontSize: "400%",
            }}
          >
            LET'S DIVE IN.
          </h1>
          <p style={{ fontSize: "150%", textAlign: "right" }}>
            Making subscriptions affordable one connection at a time.
          </p>
          <Button
            variant="filled"
            style={{
              backgroundColor: "black",
              color: "white",
              width: "50%",
              borderRadius: "78px",
              marginTop: "15%",
            }}
          >
            SIGN UP
          </Button>
        </div>
      </div>
      <div
        className="darkGreyBack"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontWeight: "700",
            fontSize: "300%",
            marginTop: "2%",
          }}
        >
          How it works
        </h1>
        <h3
          style={{
            margin: "0",
            fontWeight: "400",
            width: "25%",
            textAlign: "center",
            color: "#5B5B5B",
          }}
        >
          Hassle-free and cheaper subscriptions at your finger tips.
        </h3>
        <div className="threeRow">
          <div className="oneOfThreeRow">
            <div className="imageBox">
              <Image src="/Vector.jpg" width="120%" height="120%"></Image>
            </div>
            <p className="oneOfThreeRowTitle">Information</p>
            <p className="oneOfThreeRowText">
              Provide us with your basic information and the subscription
              services that you hold
            </p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox">
              <Image src="/id.jpg" width="150%" height="120%"></Image>
            </div>
            <p className="oneOfThreeRowTitle">Identity Check</p>
            <p className="oneOfThreeRowText">
              Provide us with your basic information and the subscription
              services that you hold
            </p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox">
              <Image src="/card.jpg" width="150%" height="120%"></Image>
            </div>
            <p className="oneOfThreeRowTitle">Payment</p>
            <p className="oneOfThreeRowText">
              Provide us with your basic information and the subscription
              services that you hold
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#0066FF",
          height: "1700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0", fontWeight: "700", color: "white" }}>
          Features
        </h1>
        <div className="blueRow">
          <div className="blueRowText">
            <h1 style={{ color: "white" }}>PRICE BREAKDOWN</h1>
            <p style={{ color: "#D8D8D8" }}>
              A dashboard that includes your monthly subscription cost so you
              are always update on how much you are being charged
            </p>
          </div>
          <div style={{ width: "30%" }}>img here</div>
        </div>
        <div className="blueRow">
          <div style={{ width: "30%" }}>img here</div>
          <div className="blueRowText">
            <h1 style={{ color: "white" }}>PRICE BREAKDOWN</h1>
            <p style={{ color: "#D8D8D8" }}>
              A dashboard that includes your monthly subscription cost so you
              are always update on how much you are being charged
            </p>
          </div>
        </div>
        <div className="blueRow">
          <div className="blueRowText">
            <h1 style={{ color: "white" }}>PRICE BREAKDOWN</h1>
            <p style={{ color: "#D8D8D8" }}>
              A dashboard that includes your monthly subscription cost so you
              are always update on how much you are being charged
            </p>
          </div>
          <div style={{ width: "30%" }}>img here</div>
        </div>
      </div>
    </div>
  );
}
