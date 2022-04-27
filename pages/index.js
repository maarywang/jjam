import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";

export default function Home() {
  const user = auth.currentUser;
  var loggedin = false;
  if (user) {
    loggedin = true;
  }
  const router = useRouter();

  const login = () => {
    router.push("/logIn");
  };

  return (
    <div>
      <div
        style={{
          background: "white",
          height: "500px",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingRight: "5%",
          }}
        >
          <h1
            style={{
              margin: "0",
              fontWeight: "700",
              width: "100%",
              textAlign: "left",
              fontSize: "380%",
            }}
          >
            Dive into your next subscription. Stress free.
          </h1>
          <p style={{ fontSize: "150%", textAlign: "left" }}>
            An all-inclusive platform that handles all things subscriptions.
          </p>
          {loggedin ? (
            ""
          ) : (
            <Button
              variant="filled"
              style={{
                backgroundColor: "black",
                color: "white",
                width: "50%",
                borderRadius: "78px",
                marginTop: "15%",
              }}
              onClick={login}
            >
              {user ? "YOU R ALREADY LOGGED IN DONT CLICK LOL" : "LOG IN"}
            </Button>
          )}
        </div>
        <div style={{ paddingLeft: "5%" }}>
          <Image
            src="/standing-4.jpg"
            height="300%"
            width="250%"
            alt="standing"
          ></Image>
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
          Up to date information surrounding your subscription cost
        </h3>
        <div className="threeRow">
          <div className="oneOfThreeRow">
            <div className="imageBox">
              <Image
                src="/Vector.jpg"
                width="120%"
                height="120%"
                alt="vector"
              ></Image>
            </div>
            <p className="oneOfThreeRowTitle">Centralized</p>
            <p className="oneOfThreeRowText">
              A central place to keep track of payments of the subscription
              services that you share
            </p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox">
              <Image src="/id.jpg" width="150%" height="120%" alt="id"></Image>
            </div>
            <p className="oneOfThreeRowTitle">Identity Verification</p>
            <p className="oneOfThreeRowText">
              Provide us with your basic information and the subscription
              services that you hold
            </p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox">
              <Image
                src="/card.jpg"
                width="150%"
                height="120%"
                alt="payment"
              ></Image>
            </div>
            <p className="oneOfThreeRowTitle">Payment</p>
            <p className="oneOfThreeRowText">
              Significantly decrease the cost of subscription services so
              everyone has access to services that they want
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
        <h1
          style={{
            margin: "0",
            fontWeight: "700",
            color: "white",
            marginTop: "1%",
            marginBottom: "3%",
            fontSize: "300%",
          }}
        >
          Features
        </h1>
        <div className="blueRow">
          <div className="blueRowText">
            <h1 style={{ color: "white", fontWeight: "600" }}>
              PRICE BREAKDOWN
            </h1>
            <p style={{ color: "#D8D8D8" }}>
              A dashboard that includes your monthly subscription cost so you
              are always update on how much you are being charged
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image
              src="/TwoBox.png"
              width="550%"
              height="400%"
              alt="twoboxes"
            ></Image>
          </div>
        </div>
        <div className="blueRow">
          <div style={{ width: "30%" }}>
            <Image
              src="/autopayment.png"
              width="350%"
              height="300%"
              alt="card"
            ></Image>
          </div>
          <div className="blueRowText">
            <h1 style={{ color: "white", fontWeight: "600" }}>AUTO PAYMENTS</h1>
            <p style={{ color: "#D8D8D8" }}>
              Automatic payments so you never have to worry about forgetting to
              pay your portion of the subscription
            </p>
          </div>
        </div>
        <div className="blueRow">
          <div className="blueRowText">
            <h1 style={{ color: "white", fontWeight: "600" }}>MESSAGES</h1>
            <p style={{ color: "#D8D8D8" }}>
              A space where you can discuss with your group any updates
              regarding your subscription services or if you just want to chat!
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image
              src="/ChatBoxes.svg"
              width="500%"
              height="400%"
              alt="chats"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
