import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

// so much inline styling ill fix later T-T

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
      <Button
        variant="text"
        size="large"
        style={{
          color: "black",
          position: "absolute",
          right: "10%",
          top: "3%",
          background: "#E1E1E1",
        }}
      >
        CREATE A GROUP +
      </Button>
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
          position: "absolute",
          top: "5%",
          height: "100%",
        }}
      >
        <div className="subscription">
          <div
            style={{
              width: "40%",
              paddingLeft: "4%",
              position: "relative",
              height: "100%",
            }}
          >
            <h3
              style={{ position: "absolute", top: "10%" }}
              className="subscriptionPageLabels1"
            >
              Service
            </h3>
            <p
              style={{ position: "absolute", top: "30%" }}
              className="subscriptionPageLabels1"
            >
              Username
            </p>
            <p
              style={{ position: "absolute", top: "40%" }}
              className="subscriptionPageLabels1"
            >
              Expiration Date:
            </p>
            <p
              style={{ position: "absolute", bottom: "10%", width: "100%" }}
              className="subscriptionPageLabels1"
            >
              #/# Subscribed to this Plan
            </p>
          </div>
          <div
            style={{
              width: "40%",
              position: "relative",
              height: "100%",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "30%",
                left: "80%",
                width: "100%",
              }}
            >
              Current Rate:
            </p>
            <p
              style={{
                position: "absolute",
                top: "40%",
                left: "80%",
                width: "100%",
              }}
            >
              If you joined...
            </p>
          </div>
          <div
            style={{
              width: "40%",
              position: "relative",
              height: "100%",
            }}
          >
            <p style={{ position: "absolute", top: "30%", right: "10%" }}>
              $5 per month
            </p>
            <p style={{ position: "absolute", top: "40%", right: "10%" }}>
              $4.26 per month
            </p>
            <Button
              variant="contained"
              disableElevation
              style={{
                background: "#A4A1A1",
                fontSize: "50%",
                paddingLeft: "15%",
                paddingRight: "15%",
                position: "absolute",
                bottom: "12%",
                right: "10%",
              }}
            >
              JOIN GROUP
            </Button>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              width: "40%",
              paddingLeft: "4%",
              position: "relative",
              height: "100%",
            }}
          >
            <h3
              style={{ position: "absolute", top: "10%" }}
              className="subscriptionPageLabels1"
            >
              Service
            </h3>
            <p
              style={{ position: "absolute", top: "30%" }}
              className="subscriptionPageLabels1"
            >
              Username
            </p>
            <p
              style={{ position: "absolute", top: "40%" }}
              className="subscriptionPageLabels1"
            >
              Expiration Date:
            </p>
            <p
              style={{ position: "absolute", bottom: "10%", width: "100%" }}
              className="subscriptionPageLabels1"
            >
              #/# Subscribed to this Plan
            </p>
          </div>
          <div
            style={{
              width: "40%",
              position: "relative",
              height: "100%",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "30%",
                left: "80%",
                width: "100%",
              }}
            >
              Current Rate:
            </p>
            <p
              style={{
                position: "absolute",
                top: "40%",
                left: "80%",
                width: "100%",
              }}
            >
              If you joined...
            </p>
          </div>
          <div
            style={{
              width: "40%",
              position: "relative",
              height: "100%",
            }}
          >
            <p style={{ position: "absolute", top: "30%", right: "10%" }}>
              $5 per month
            </p>
            <p style={{ position: "absolute", top: "40%", right: "10%" }}>
              $4.26 per month
            </p>
            <Button
              variant="contained"
              disableElevation
              style={{
                background: "#A4A1A1",
                fontSize: "50%",
                paddingLeft: "15%",
                paddingRight: "15%",
                position: "absolute",
                bottom: "12%",
                right: "10%",
              }}
            >
              JOIN GROUP
            </Button>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              width: "40%",
              paddingLeft: "4%",
              position: "relative",
              height: "100%",
            }}
          >
            <h3
              style={{ position: "absolute", top: "10%" }}
              className="subscriptionPageLabels1"
            >
              Service
            </h3>
            <p
              style={{ position: "absolute", top: "30%" }}
              className="subscriptionPageLabels1"
            >
              Username
            </p>
            <p
              style={{ position: "absolute", top: "40%" }}
              className="subscriptionPageLabels1"
            >
              Expiration Date:
            </p>
            <p
              style={{ position: "absolute", bottom: "10%", width: "100%" }}
              className="subscriptionPageLabels1"
            >
              #/# Subscribed to this Plan
            </p>
          </div>
          <div
            style={{
              width: "40%",
              position: "relative",
              height: "100%",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "30%",
                left: "80%",
                width: "100%",
              }}
            >
              Current Rate:
            </p>
            <p
              style={{
                position: "absolute",
                top: "40%",
                left: "80%",
                width: "100%",
              }}
            >
              If you joined...
            </p>
          </div>
          <div
            style={{
              width: "40%",
              position: "relative",
              height: "100%",
            }}
          >
            <p style={{ position: "absolute", top: "30%", right: "10%" }}>
              $5 per month
            </p>
            <p style={{ position: "absolute", top: "40%", right: "10%" }}>
              $4.26 per month
            </p>
            <Button
              variant="contained"
              disableElevation
              style={{
                background: "#A4A1A1",
                fontSize: "50%",
                paddingLeft: "15%",
                paddingRight: "15%",
                position: "absolute",
                bottom: "12%",
                right: "10%",
              }}
            >
              JOIN GROUP
            </Button>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              width: "40%",
              paddingLeft: "4%",
              position: "relative",
              height: "100%",
            }}
          >
            <h3
              style={{ position: "absolute", top: "10%" }}
              className="subscriptionPageLabels1"
            >
              Service
            </h3>
            <p
              style={{ position: "absolute", top: "30%" }}
              className="subscriptionPageLabels1"
            >
              Username
            </p>
            <p
              style={{ position: "absolute", top: "40%" }}
              className="subscriptionPageLabels1"
            >
              Expiration Date:
            </p>
            <p
              style={{ position: "absolute", bottom: "10%", width: "100%" }}
              className="subscriptionPageLabels1"
            >
              #/# Subscribed to this Plan
            </p>
          </div>
          <div
            style={{
              width: "40%",
              position: "relative",
              height: "100%",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "30%",
                left: "80%",
                width: "100%",
              }}
            >
              Current Rate:
            </p>
            <p
              style={{
                position: "absolute",
                top: "40%",
                left: "80%",
                width: "100%",
              }}
            >
              If you joined...
            </p>
          </div>
          <div
            style={{
              width: "40%",
              position: "relative",
              height: "100%",
            }}
          >
            <p style={{ position: "absolute", top: "30%", right: "10%" }}>
              $5 per month
            </p>
            <p style={{ position: "absolute", top: "40%", right: "10%" }}>
              $4.26 per month
            </p>
            <Button
              variant="contained"
              disableElevation
              style={{
                background: "#A4A1A1",
                fontSize: "50%",
                paddingLeft: "15%",
                paddingRight: "15%",
                position: "absolute",
                bottom: "12%",
                right: "10%",
              }}
            >
              JOIN GROUP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
