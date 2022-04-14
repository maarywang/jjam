import React from "react";
import Button from "@mui/material/Button";

export default function About() {
  return (
    <div>
      <div style={{ background: "#E1E1E1", height: "500px" }}>
        <h1
          style={{
            margin: "0",
            position: "absolute",
            width: "37%",
            left: "50%",
            top: "20%",
            fontWeight: "400",
          }}
        >
          Description Related to Subscriber/Company Motto
        </h1>
        <div className="heroImage" style={{ left: "12%" }}>
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
        <h1 style={{ margin: "0", fontWeight: "400" }}>Our Goal</h1>
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
        <h1 style={{ margin: "0", fontWeight: "400" }}>Meet The Team</h1>
        <h3 style={{ margin: "0", fontWeight: "400" }}>Description</h3>
        <div className="threeRow">
          <div className="oneOfThreeRow">
            <div className="imageBox" style={{ background: "#C4C4C4" }}>
              Image
            </div>
            <p>Name</p>
            <p>Role</p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox" style={{ background: "#C4C4C4" }}>
              Image
            </div>
            <p>Name</p>
            <p>Role</p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox" style={{ background: "#C4C4C4" }}>
              Image
            </div>
            <p>Name</p>
            <p>Role</p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox" style={{ background: "#C4C4C4" }}>
              Image
            </div>
            <p>Name</p>
            <p>Role</p>
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
        <h1
          style={{
            margin: "0",
            fontWeight: "400",
            display: "initial",
            position: "absolute",
            top: "230%",
          }}
        >
          Contact Us
        </h1>
        <div
          style={{
            width: "40%",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <input
            placeholder="test"
            type="Name"
            style={{
              background: "#C4C4C4",
              color: "black",
              textTransform: "capitalize",
              width: "50%",
              height: "10%",
              outline: "none",
              border: "none",
              borderRadius: "5px",
            }}
          ></input>
          <br></br>
          <input
            placeholder="Email"
            type="text"
            style={{
              background: "#C4C4C4",
              color: "black",
              textTransform: "capitalize",
              width: "50%",
              height: "10%",
              outline: "none",
              border: "none",
              borderRadius: "5px",
            }}
          ></input>
          <br></br>
          <input
            placeholder="Subject"
            type="text"
            style={{
              background: "#C4C4C4",
              color: "black",
              textTransform: "capitalize",
              width: "50%",
              height: "10%",
              outline: "none",
              border: "none",
              borderRadius: "5px",
            }}
          ></input>
          <br></br>
          <input
            type="textarea"
            style={{
              background: "#C4C4C4",
              color: "black",
              textTransform: "capitalize",
              width: "50%",
              height: "30%",
              outline: "none",
              border: "none",
              borderRadius: "5px",
            }}
          ></input>
          <br></br>
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
            Submit
          </Button>
        </div>
        <div style={{ display: "initial" }}>
          <h3
            style={{
              margin: "0",
              fontWeight: "400",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            Follow Us On Social Media!
          </h3>
          <div style={{ display: "flex" }}>
            <div
              className="imageBox"
              style={{ width: "100px", height: "100px", marginRight: "10px" }}
            >
              Image
            </div>
            <div
              className="imageBox"
              style={{ width: "100px", height: "100px", marginRight: "10px" }}
            >
              Image
            </div>
            <div
              className="imageBox"
              style={{ width: "100px", height: "100px", marginRight: "10px" }}
            >
              Image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
