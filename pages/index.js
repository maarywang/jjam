import React from "react";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <div style={{ background: "#E1E1E1", height: "500px" }}>
        <h1
          style={{
            margin: "0",
            position: "absolute",
            width: "37%",
            left: "12%",
            top: "20%",
            fontWeight: "400",
          }}
        >
          Sharing Subscriptions should be easy.
        </h1>
        <div className="heroImage">
          <h2 style={{ fontWeight: "400" }}>Hero Image</h2>
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
        <h1 style={{ margin: "0", fontWeight: "400" }}>How it works</h1>
        <h3 style={{ margin: "0", fontWeight: "400" }}>Description</h3>
        <div className="threeRow">
          <div className="oneOfThreeRow">
            <div className="imageBox">Image</div>
            <p>Step 1</p>
            <p>Mini Description</p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox">Image</div>
            <p>Step 2</p>
            <p>Mini Description</p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox">Image</div>
            <p>Step 3</p>
            <p>Mini Description</p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#E1E1E1",
          height: "620px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0", fontWeight: "400" }}>Features</h1>
        <div className="threeRow">
          <div className="oneOfThreeRow">
            <div
              className="imageBox"
              style={{ borderRadius: "50%", background: "#C4C4C4" }}
            >
              Image
            </div>
            <p>Step 1</p>
            <p>Mini Description</p>
          </div>
          <div className="oneOfThreeRow">
            <div
              className="imageBox"
              style={{ borderRadius: "50%", background: "#C4C4C4" }}
            >
              Image
            </div>
            <p>Step 2</p>
            <p>Mini Description</p>
          </div>
          <div className="oneOfThreeRow">
            <div
              className="imageBox"
              style={{ borderRadius: "50%", background: "#C4C4C4" }}
            >
              Image
            </div>
            <p>Step 3</p>
            <p>Mini Description</p>
          </div>
        </div>
      </div>
      <div
        className="darkGreyBack"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ margin: "0", fontWeight: "400" }}>
            Handle your Subscription Payments
          </h1>
          <p>Description</p>
          <Button
            variant="contained"
            disableElevation
            style={{
              background: "#C4C4C4",
              color: "black",
              textTransform: "capitalize",
              width: "40%",
            }}
          >
            Get Started
          </Button>
        </div>
        <div className="imageBox">Image</div>
      </div>
    </div>
  );
}
