import React from "react";
import Button from "@mui/material/Button";

export default function About() {
    return (
        <div style={{backgroundColor: "#E1E1E1", textAlign: "center"}}>
          <br></br>
          <div style={{backgroundColor: "white", 
                       width: "40em", 
                       height: "25em", 
                       marginTop: "3em",
                       marginLeft: "27em",
                       display: "center",
                       boxShadow: "3px 3px 5px grey", 
                       textAlign: "center"}}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span style={{fontSize: "1.5em"}}>Success! Your Group Has Been Created.</span>
                <br></br>
                <br></br>
                <br></br>
                <button style={{
                  background: "#C4C4C4",
                  color: "black",
                  textTransform: "capitalize",
                  width: "40%",
                  height: "10%",
                  border: "none",
                  borderRadius: "5px", 
                  fontSize: "1em"
                }}>Create Another Group</button>
                <br></br>
                <br></br>
                <button style={{
                  background: "#C4C4C4",
                  color: "black",
                  textTransform: "capitalize",
                  width: "40%",
                  height: "10%",
                  border: "none",
                  borderRadius: "5px", 
                  fontSize: "1em"
                }}>Return to Home Page</button>
            </div>
            <br></br>
            <br></br>
            <button style={{
                  background: "#C4C4C4",
                  color: "black",
                  textTransform: "capitalize",
                  width: "15em",
                  height: "2.5em",
                  border: "none",
                  borderRadius: "5px", 
                  fontSize: "1em",
                  marginLeft: "5%"
                }}>Return to Home Page</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
        </div>
      );
}