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
        <div style={{display: "flex"}}>
            <div style={{marginLeft: "5%", marginTop: "1.5%"}}>
              <BurgerMenu></BurgerMenu>
            </div>
            <div style={{marginLeft: "5%"}}>
              <h1>Payment History</h1>
              <div style={{display: "flex"}}>
                <div className="wallet">
                  <p style={{color: "black", fontSize: "90%", marginBottom: "-5%", marginTop: "5%"}}>You have...</p>
                  <p style={{color: "black", fontSize: "200%", marginBottom: "-2%"}}>$119.99</p>
                  <p style={{color: "black", fontSize: "90%"}}>in Submerge</p>
                </div>
                <button style={{marginLeft: "10%", 
                                height: "2em", 
                                width: "16em", 
                                borderRadius: "30px",
                                backgroundColor: "#0066FF",
                                outline: "0",
                                color: "white",
                                fontSize: "150%", 
                                marginTop: "5%",
                                border: "none",
                                boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)"}}>Transfer Money</button>
              </div>
              <div style={{marginTop: "7%"}}>
                <div style={{display: "flex"}}>
                  <h1>This Month</h1>
              <button style={{marginLeft: "48.5%",
                              marginTop: "1.5%",
                              height: "20%", 
                              display: "flex", 
                              width: "35%", 
                              backgroundColor: "white",
                              border: "none",
                              borderRadius: "30px",
                              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)"}}>
                <h3 style={{marginLeft: "10%"}}>View Payment History</h3>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "70%",
                    color: "0066FF",
                    marginTop: "6%"
                  }}
                ></FiberManualRecordIcon>
                <ArrowForwardIosIcon
                  style={{ fontSize: "100%", marginLeft: "26%", marginTop: "6%"}}
                ></ArrowForwardIosIcon>
              </button>
                </div>
                <div className="history" style={{marginBottom: "5%"}}>
                  <br></br>
                  <p style={{fontSize: "130%",
                              marginLeft: "8%",
                              }}>Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Payment Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name
                  </p>
                  <hr></hr>
                  <div style={{display: "flex"}}>
                    <p style={{fontSize: "130%", marginLeft: "5%"}}>4-12-2022</p>
                    <p style={{fontSize: "130%", marginLeft: "17%", color: "green"}}>+$19.99</p>
                    <p style={{fontSize: "130%", marginLeft: "25%"}}>Hulu</p>
                    <p style={{fontSize: "130%", marginLeft: "17%"}}>Mary Wang</p>
                  </div>
                  <div style={{display: "flex"}}>
                    <p style={{fontSize: "130%", marginLeft: "5%"}}>4-08-2022</p>
                    <p style={{fontSize: "130%", marginLeft: "17%",  color: "red"}}>-$14.99</p>
                    <p style={{fontSize: "130%", marginLeft: "24%"}}>Spotify</p>
                    <p style={{fontSize: "130%", marginLeft: "16%"}}>Mary Wang</p>
                  </div>
                  <div style={{display: "flex"}}>
                    <p style={{fontSize: "130%", marginLeft: "5%"}}>4-05-2022</p>
                    <p style={{fontSize: "130%", marginLeft: "17%", color: "green"}}>+$4.99</p>
                    <p style={{fontSize: "130%", marginLeft: "24.5%"}}>Disney+</p>
                    <p style={{fontSize: "130%", marginLeft: "15%"}}>Mary Wang</p>
                  </div>
                  <div style={{display: "flex"}}>
                    <p style={{fontSize: "130%", marginLeft: "5%"}}>4-02-2022</p>
                    <p style={{fontSize: "130%", marginLeft: "17%", color: "green"}}>+$4.99</p>
                    <p style={{fontSize: "130%", marginLeft: "24%"}}>Peacock</p>
                    <p style={{fontSize: "130%", marginLeft: "15%"}}>Mary Wang</p>
                  </div>
                  <div style={{display: "flex"}}>
                    <p style={{fontSize: "130%", marginLeft: "5%"}}>4-01-2022</p>
                    <p style={{fontSize: "130%", marginLeft: "17%", color: "Red"}}>-$24.99</p>
                    <p style={{fontSize: "130%", marginLeft: "25%"}}>Adobe</p>
                    <p style={{fontSize: "130%", marginLeft: "15%"}}>Mary Wang</p>
                  </div>
                  <div style={{display: "flex"}}>
                    <p style={{fontSize: "130%", marginLeft: "5%"}}>4-01-2022</p>
                    <p style={{fontSize: "130%", marginLeft: "17%", color: "Red"}}>-$10.99</p>
                    <p style={{fontSize: "130%", marginLeft: "22%"}}>Amazon Prime</p>
                    <p style={{fontSize: "130%", marginLeft: "11%"}}>Mary Wang</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
