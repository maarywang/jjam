import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { useForm, ValidationError } from "@formspree/react";

export default function About() {
  const [state, handleSubmit] = useForm("xjvlpyee");
  if (state.succeeded) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "500",
          margin: "5%",
          height: "50vh",
        }}
      >
        <p>Thanks for leaving a message!</p>
      </div>
    );
  }

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
              fontSize: "400%",
            }}
          >
            Our <span style={{ color: "#0066FF" }}>Story</span>
          </h1>
          <p style={{ fontSize: "150%", textAlign: "left" }}>
            SubMerge recognizes the increasingly expensive subscription services
            that we all use and love. To help you manage that, we&apos;ve
            created a platform for you to find other people interested in
            splitting the cost of subscription services with you, ultimately
            decreasing your total cost while still providing you the same
            quality service.
          </p>
        </div>
        <div>
          <Image src="/sitting-4.png" width="300%" height="350%"></Image>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          height: "300px",
          backgroundColor: "#0066FF",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            width: "80%",
            textAlign: "left",
            fontWeight: "700",
            fontSize: "250%",
            marginTop: "4%",
          }}
        >
          Our goal
        </h1>
        <p
          style={{
            width: "80%",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "150%",
            fontStyle: "italic",
          }}
        >
          To connect you with others interested in the same services as you to
          lessen the burden of carrying multiple subscriptions alone.
        </p>
      </div>
      <div
        className="darkGreyBack"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "750px",
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
          Our Core Values
        </h1>
        <div className="threeRow" style={{ paddingBottom: "5%" }}>
          <div className="oneOfThreeRow">
            <div className="imageBox">
              <Image src="/transparency.png" width="150%" height="150%"></Image>
            </div>
            <p className="coreValuesTitle">No More Surprise Charges</p>
            <p className="coreValuesText">
              Up to date information surrounding your subscription cost
            </p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox">
              <Image src="/organization.png" width="150%" height="150%"></Image>
            </div>
            <p className="coreValuesTitle">Hassle Free Payments</p>
            <p className="coreValuesText">
              A central place to keep track of payments of the subscription
              services that you share
            </p>
          </div>
          <div className="oneOfThreeRow">
            <div className="imageBox">
              <Image
                src="/accessibility.png"
                width="150%"
                height="150%"
              ></Image>
            </div>
            <p className="coreValuesTitle">Subscriptions At Your Fingertips</p>
            <p className="coreValuesText">
              Significantly decrease the cost of subscription services so
              everyone has access to services that they want
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "black",
          height: "620px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontSize: "250%",
            color: "#0066FF",
            fontWeight: "700",
            marginTop: "2%",
          }}
        >
          Meet The Team
        </h1>
        <div className="threeRow" style={{ paddingBottom: "5%" }}>
          <div className="oneOfThreeRow" style={{ width: "20%" }}>
            <div className="imageBox" style={{ backgroundColor: "black" }}>
              <Image src="/jalen.png" height="250%" width="250%"></Image>
            </div>
            <p
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "150%",
                margin: "0",
                marginTop: "10%",
              }}
            >
              Jalen Layfield
            </p>
            <p
              style={{
                color: "#0066FF",
                fontWeight: "600",
                fontSize: "100%",
              }}
            >
              PRODUCT MANAGER
            </p>
          </div>
          <div className="oneOfThreeRow" style={{ width: "20%" }}>
            <div className="imageBox" style={{ backgroundColor: "black" }}>
              <Image src="/jonathan.png" height="250%" width="250%"></Image>
            </div>
            <p
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "150%",
                margin: "0",
                marginTop: "10%",
              }}
            >
              Jonathan Phan
            </p>
            <p
              style={{
                color: "#0066FF",
                fontWeight: "600",
                fontSize: "100%",
              }}
            >
              DEVELOPER
            </p>
          </div>
          <div className="oneOfThreeRow" style={{ width: "20%" }}>
            <div className="imageBox" style={{ backgroundColor: "black" }}>
              <Image src="/mary.png" height="250%" width="250%"></Image>
            </div>
            <p
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "150%",
                margin: "0",
                marginTop: "10%",
              }}
            >
              Mary Wang
            </p>
            <p
              style={{
                color: "#0066FF",
                fontWeight: "600",
                fontSize: "100%",
              }}
            >
              DEVELOPER
            </p>
          </div>
          <div className="oneOfThreeRow" style={{ width: "20%" }}>
            <div className="imageBox" style={{ backgroundColor: "black" }}>
              <Image src="/amy.png" height="250%" width="250%"></Image>
            </div>
            <p
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "150%",
                margin: "0",
                marginTop: "10%",
              }}
            >
              Amy La
            </p>
            <p
              style={{
                color: "#0066FF",
                fontWeight: "600",
                fontSize: "100%",
              }}
            >
              DESIGNER
            </p>
          </div>
        </div>
      </div>

      <div
        className="darkGreyBack"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            marginRight: "15%",
            marginTop: "10%",
          }}
        >
          <h1
            style={{
              fontWeight: "700",
              fontSize: " 250%",
              marginBottom: "2%",
            }}
          >
            Get in touch
          </h1>
          <p style={{ fontWeight: "600" }}>
            Want to learn more about SubMerge or have other burning questions?
            Send us a message!
          </p>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              name="name"
              id="standard-basic"
              label="Name"
              variant="standard"
            />
            <TextField
              name="email"
              id="standard-basic"
              label="Email"
              variant="standard"
              style={{ marginTop: "2%" }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              style={{ color: "red", fontSize: "50%", marginTop: "1%" }}
            />
            <TextField
              name="message"
              id="standard-basic"
              label="Message"
              variant="standard"
              style={{ marginTop: "2%" }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              style={{ color: "red", fontSize: "50%", marginTop: "1%" }}
            />
            <Button
              type="submit"
              variant="filled"
              style={{
                color: "white",
                backgroundColor: "black",
                marginTop: "20%",
                borderRadius: "0",
              }}
              onSubmit={handleSubmit}
              disabled={state.submitting}
            >
              SUBMIT
            </Button>
          </form>
        </div>
        <div
          style={{ width: "30%", height: "100%", backgroundColor: "#0066FF" }}
        ></div>
      </div>
    </div>
  );
}
