import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import Button from "@mui/material/Button";

export default function Messages() {
  return (
    <div>
        <div style={{display: "flex"}}>
            <div className="dashboard" style={{height: "50em"}}>
                
            </div>
            <div style={{marginLeft: "5%"}}>
              <h1 style={{fontSize: "300%"}}>Hello Jalen, </h1>
              <h1>Dashboard</h1>
              <div style={{display: "flex"}}>
                <div className="wallet" style={{height: "17em"}}>
                  <p style={{color: "black", fontSize: "90%", marginBottom: "-5%", marginTop: "5%"}}>You have...</p>
                  <p style={{color: "black", fontSize: "200%", marginBottom: "-2%"}}>$119.99</p>
                  <p style={{color: "black", fontSize: "90%"}}>in Submerge</p>
                </div>
                <div>
                  <button style={{marginLeft: "10%", 
                                  height: "2.4em", 
                                  width: "16em", 
                                  borderRadius: "10px",
                                  backgroundColor: "white",
                                  border: "none",
                                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                  color: "Black",
                                  fontSize: "150%"
                                  }}>Requests&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
                  </button>
                  <div style={{
                    marginLeft: "10%",
                    marginTop: "7%",
                    height: "8em", 
                    width: "16em", 
                    borderRadius: "10px",
                    backgroundColor: "white",
                    border: "none",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    color: "Black",
                    fontSize: "150%",
                    textAlign: "center"
                  }}>
                    <p style={{ fontSize: "100%", paddingTop: "4%", marginLeft: "5%" }}>
                      Monthly Recap
                    </p>
                    <hr style={{ border: "1px light light grey", width: "100%", marginTop: "-4%"}} />
                    <p style={{fontSize: "70%"}}>This month, you saved:</p>
                    <p style={{fontSize: "120%", color: "#0047AB", marginTop: "-4%", fontWeight: "bold"}}>$119.99</p>
                    <div style={{display: "flex", textAlign: "center", marginTop: "-5%", marginLeft: "12%"}}>
                      <p style={{fontSize: "70%"}}>You Spent&nbsp;</p>
                      <p style={{fontSize: "70%", color: "#0047AB"}}>$27.53&nbsp;</p>
                      <p style={{fontSize: "70%"}}>Compared To&nbsp;</p>
                      <p style={{fontSize: "70%", color: "#0047AB"}}>$147.52</p>
                    </div>
                </div>
                </div>
              </div>
              <div>
                <div style={{display: "flex"}}>
                  <h1>Your Subscriptions</h1>
                </div>
                <div className="history">
                    <div className="subscription2"></div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
