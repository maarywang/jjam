import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import BurgerMenu from "./components/burgerMenu";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import PublicIcon from "@mui/icons-material/Public";
import TextsmsTwoToneIcon from "@mui/icons-material/TextsmsTwoTone";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/router";

export default function Messages() {
  return (
    <div>
      <BurgerMenu></BurgerMenu>
      <div style={{ display: "flex", marginLeft: "2%"}}>
        <div className="inbox">
          
          <FontAwesomeIcon icon="fa-solid fa-bars" />
          <p style={{ fontSize: "150%", margin: "4%"}}>Chats</p>
          <input
            placeholder="Search"
            type="text"
            style={{
              background: "white",
              color: "black",
              textTransform: "capitalize",
              width: "92%",
              height: "6%",
              outline: "none",
              border: "none",
              borderRadius: "20px",
              paddingLeft: "3%",
              margin: "4%",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          ></input>
          <div className="message" style={{backgroundColor: "#0066FF"}}>
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "100%",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  top: "3%",
                  fontSize: "100%",
                  left: "3%",
                }}
              >
                Mary's Group 
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "40%",
                  fontSize: "90%",
                  width: "80%",
                  left: "3%",
                }}
              >
                Yeah of course, so we're a group...
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "45%",
                  right: "5%",
                  fontSize: "90%",
                }}
              >
                now
              </p>
            </div>
          </div>
          <div className="message">
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "100%",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  top: "3%",
                  fontSize: "100%",
                  left: "3%",
                }}
              >
                Jonathan's Group
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "40%",
                  fontSize: "90%",
                  width: "80%",
                  left: "3%",
                }}
              >
                lemme know when you decide on...
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "45%",
                  right: "5%",
                  fontSize: "90%",
                }}
              >
                1hr.
              </p>
            </div>
          </div>
          <div className="message">
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "100%",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  top: "3%",
                  fontSize: "100%",
                  left: "3%",
                }}
              >
                Amy's Group
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "40%",
                  fontSize: "90%",
                  width: "80%",
                  left: "3%",
                }}
              >
                yeah for sure
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "45%",
                  right: "5%",
                  fontSize: "90%",
                }}
              >
                2hr.
              </p>
            </div>
          </div>

          <div className="message">
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "100%",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  top: "3%",
                  fontSize: "100%",
                  left: "3%",
                }}
              >
                Sub plan
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "40%",
                  fontSize: "90%",
                  width: "80%",
                  left: "3%",
                }}
              >
                just a reminder it's due tomorrow
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "45%",
                  right: "5%",
                  fontSize: "90%",
                }}
              >
                12hr.
              </p>
            </div>
          </div>
          <div className="message">
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "100%",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  top: "3%",
                  fontSize: "100%",
                  left: "3%",
                }}
              >
                Birnkrant Group
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "40%",
                  fontSize: "90%",
                  width: "80%",
                  left: "3%",
                }}
              >
                did you see the new release?
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "45%",
                  right: "5%",
                  fontSize: "90%",
                }}
              >
                24hr.
              </p>
            </div>
          </div>
        </div>
        <div className="messages">
          <div className="chat" style={{height: "94%"}}>
            <p style={{ fontSize: "150%", paddingTop: "4%", marginLeft: "5%" }}>
              Mary's Group
            </p>
            <hr style={{ border: "1px solid grey", width: "90%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
                position: "relative",
                height: "20%",
                marginLeft: "3%",
                marginTop: "5%",
              }}
            >
              <img src="/mary.png" style={{width: "13%", height: "50%", marginLeft: "5%", marginTop: "5%"}}></img>
              <div style={{ position: "absolute", left: "20%"}}>Mary</div>
              <div className="text" style={{backgroundColor: "#D3D3D3", textAlign: "center"}}>
                <p style={{fontSize: "110%"}}>
                  Hi I saw your request to join the group!
                </p>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                width: "60%",
                height: "20%",
                marginLeft: "37%",
              }}
            >
              <div style={{ position: "absolute", right: "20%"}}>Jalen</div>
              <div
                style={{
                  background: "#0066FF",
                  height: "70%",
                  width: "70%",
                  borderRadius: "10px",
                  position: "absolute",
                  top: "20%",
                  right: "20%",
                  textAlign: "center"
                }}
              >
                <p style={{fontSize: "110%", margin: "5%"}}>
                Hi thanks for responding! Yes I'm interested in joining. Would you let me know a little about your group?
                </p>
              </div>
              <img src="/jalen.png" style={{width: "13%", height: "50%", marginLeft: "83%", marginTop: "5%"}}></img>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
                position: "relative",
                height: "20%",
                marginLeft: "3%",
                marginTop: "2%",
              }}
            >
              <img src="/mary.png" style={{width: "13%", height: "50%", marginLeft: "5%", marginTop: "2%"}}></img>
              <div style={{ position: "absolute", left: "20%" }}>Mary</div>
              <div className="text" style={{ height: "90%", backgroundColor: "#D3D3D3", textAlign: "center"}}>
                <p style={{fontSize: "110%", margin: "5%"}}>
                  Yeah of course, so we're a group of college students trying to save money for spotify. We're going to try to have this plan for the next year or two.
                </p>
              </div>
            </div>
            <input
            placeholder="Message"
            type="text"
            style={{
              background: "#D3D3D3",
              color: "black",
              textTransform: "capitalize",
              width: "92%",
              height: "6%",
              outline: "none",
              border: "none",
              borderRadius: "20px",
              paddingLeft: "3%",
              margin: "4%",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
