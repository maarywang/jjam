import React from "react";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import BurgerMenu from "./components/burgerMenu";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PaymentIcon from "@mui/icons-material/Payment";
import List from "@mui/material/List";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ListItem from "@mui/material/ListItem";
import PieChartIcon from "@mui/icons-material/PieChart";
import Box from "@mui/material/Box";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import EmailIcon from "@mui/icons-material/Email";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import TextsmsTwoToneIcon from "@mui/icons-material/TextsmsTwoTone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";

export default function Messages() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "5%", marginTop: "1.5%" }}>
          <BurgerMenu></BurgerMenu>
        </div>
        <div style={{ marginLeft: "5%" }}>
          <h1>Payment History</h1>
          <div style={{ display: "flex" }}>
            <div className="wallet">
              <p
                style={{
                  color: "black",
                  fontSize: "90%",
                  marginBottom: "-5%",
                  marginTop: "5%",
                }}
              >
                You have...
              </p>
              <p
                style={{
                  color: "black",
                  fontSize: "200%",
                  marginBottom: "-2%",
                }}
              >
                $119.99
              </p>
              <p style={{ color: "black", fontSize: "90%" }}>in Submerge</p>
            </div>
            <button
              style={{
                marginLeft: "19%",
                height: "2em",
                width: "16em",
                borderRadius: "30px",
                backgroundColor: "#0066FF",
                outline: "0",
                color: "white",
                fontSize: "150%",
                marginTop: "0%",
                border: "none",
                boxShadow:
                  "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              Transfer Money
            </button>
          </div>
          <div style={{ marginTop: "7%" }}>
            <div style={{ display: "flex" }}>
              <h1>This Month</h1>
              <button
                style={{
                  marginLeft: "48.5%",
                  marginTop: "1.5%",
                  height: "20%",
                  display: "flex",
                  width: "35%",
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "30px",
                  boxShadow:
                    "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <h3 style={{ marginLeft: "10%" }}>View Payment History</h3>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "70%",
                    color: "0066FF",
                    marginTop: "6%",
                  }}
                ></FiberManualRecordIcon>
                <ArrowForwardIosIcon
                  style={{
                    fontSize: "100%",
                    marginLeft: "26%",
                    marginTop: "6%",
                  }}
                ></ArrowForwardIosIcon>
              </button>
            </div>
            <div className="history" style={{ marginBottom: "5%" }}>
              <br></br>
              <p style={{ fontSize: "130%", marginLeft: "8%", fontWeight: "200%" }}>
                <b>
                Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Payment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name
                </b>
              </p>
              <hr></hr>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "120%", marginLeft: "6%" }}>04-12-22</p>
                <p style={{ fontSize: "120%", marginLeft: "17%" }}>NETFLIX</p>
                <p
                  style={{
                    fontSize: "120%",
                    marginLeft: "18%",
                    color: "green",
                  }}
                >
                  +$19.99
                </p>
                <p style={{ fontSize: "120%", marginLeft: "16%" }}>Mary Wang</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "120%", marginLeft: "6%" }}>03-05-22</p>
                <p style={{ fontSize: "120%", marginLeft: "17.5%" }}>HULU</p>
                <p
                  style={{ fontSize: "120%", marginLeft: "20%", color: "red" }}
                >
                  -$6.73
                </p>
                <p style={{ fontSize: "120%", marginLeft: "17%" }}>Jon Phan</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "120%", marginLeft: "6%" }}>02-11-22</p>
                <p style={{ fontSize: "120%", marginLeft: "17%" }}>HBO MAX</p>
                <p
                  style={{
                    fontSize: "120%",
                    marginLeft: "18%",
                    color: "red",
                  }}
                >
                  -$2.51
                </p>
                <p style={{ fontSize: "120%", marginLeft: "15%" }}>Jalen Layfield</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "120%", marginLeft: "6%" }}>01-18-22</p>
                <p style={{ fontSize: "120%", marginLeft: "13%" }}>SPOTIFY PREMIUM</p>
                <p
                  style={{
                    fontSize: "120%",
                    marginLeft: "14%",
                    color: "green",
                  }}
                >
                  +$8.51
                </p>
                <p style={{ fontSize: "120%", marginLeft: "17.5%" }}>Amy La</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "120%", marginLeft: "6%" }}>01-02-22</p>
                <p style={{ fontSize: "120%", marginLeft: "14%" }}>AMAZON PRIME</p>
                <p
                  style={{ fontSize: "120%", marginLeft: "15.5%", color: "green" }}
                >
                  +$3.12
                </p>
                <p style={{ fontSize: "120%", marginLeft: "16.5%" }}>Lindsey Li</p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "120%", marginLeft: "6%" }}>12-26-21</p>
                <p style={{ fontSize: "120%", marginLeft: "17%" }}>
                  NETFLIX
                </p>
                <p
                  style={{ fontSize: "120%", marginLeft: "18.5%", color: "Red" }}
                >
                  -$19.99
                </p>
                <p style={{ fontSize: "120%", marginLeft: "15%" }}>Rick Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
