import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Subscriptions() {
  return (
    <div
      style={{
        height: "3000px",
        background: "#E1E1E1",
        width: "100vw",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "50%",
          position: "absolute",
          left: "12%",
          top: "1%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "40px",
          }}
        >
          <input
            type="text"
            placeholder="Search Providers..."
            style={{
              background: "#C4C4C4",
              border: "0",
              width: "90%",
              height: "40px",
              borderRadius: "30px",
              paddingLeft: "2%",
            }}
          ></input>
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              fontSize: 20,
              color: "grey",
              position: "absolute",
              right: "13%",
              top: "24%",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "90%",
            marginLeft: "0",
          }}
        >
          <p>Filter by:</p>
          <p>Service</p>
          <p>Price</p>
          <p>Privacy</p>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          top: "5%",
        }}
      >
        <div className="subscription">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "40%",
            }}
          >
            <h3 style={{ margin: "1%" }}>Service</h3>
            <p style={{ margin: "1%" }}>Username</p>
            <p style={{ margin: "1%" }}>Expiration Date:</p>
            <p style={{ margin: "1%" }}>#/# Subscribers on this plan</p>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "40%",
            }}
          >
            <h3 style={{ margin: "1%" }}>Service</h3>
            <p style={{ margin: "1%" }}>Username</p>
            <p style={{ margin: "1%" }}>Expiration Date:</p>
            <p style={{ margin: "1%" }}>#/# Subscribers on this plan</p>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "40%",
            }}
          >
            <h3 style={{ margin: "1%" }}>Service</h3>
            <p style={{ margin: "1%" }}>Username</p>
            <p style={{ margin: "1%" }}>Expiration Date:</p>
            <p style={{ margin: "1%" }}>#/# Subscribers on this plan</p>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "40%",
            }}
          >
            <h3 style={{ margin: "1%" }}>Service</h3>
            <p style={{ margin: "1%" }}>Username</p>
            <p style={{ margin: "1%" }}>Expiration Date:</p>
            <p style={{ margin: "1%" }}>#/# Subscribers on this plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
