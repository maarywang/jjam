import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import Button from "@mui/material/Button";

export default function Messages() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="inbox">
          <Button
            style={{ color: "white", background: "#E1E1E1", margin: "4%" }}
          >
            Return to Profile
          </Button>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
          <p style={{ fontSize: "150%", margin: "4%"}}>Chats</p>
          <input
            placeholder="Search"
            type="text"
            style={{
              background: "white",
              color: "black",
              textTransform: "capitalize",
              width: "90%",
              height: "4%",
              outline: "none",
              border: "none",
              borderRadius: "20px",
              paddingLeft: "3%",
              margin: "4%",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          ></input>
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
                Chat Name
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
                preview of most revent message sent...
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
                Chat Name
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
                preview of most revent message sent...
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
                Chat Name
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
                preview of most revent message sent...
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
                Chat Name
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
                preview of most revent message sent...
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
        </div>
        <div className="messages">
          <div className="chat">
            <p style={{ fontSize: "150%", paddingTop: "4%", marginLeft: "5%" }}>
              Chat Name
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
                marginTop: "10%",
              }}
            >
              <div className="pfp"></div>
              <div style={{ position: "absolute", left: "20%" }}>Name</div>
              <div className="text"></div>
            </div>
            <div
              style={{
                position: "relative",
                width: "60%",
                height: "20%",
                marginLeft: "37%",
              }}
            >
              <div style={{ position: "absolute", right: "20%"}}>You</div>
              <div
                style={{
                  background: "#0047AB",
                  height: "70%",
                  width: "70%",
                  borderRadius: "10px",
                  position: "absolute",
                  top: "20%",
                  right: "20%",
                }}
              ></div>
              <div className="pfp" style={{marginLeft: "83%"}}></div>
            </div>
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
              <div className="pfp"></div>
              <div style={{ position: "absolute", left: "20%" }}>Name</div>
              <div className="text" style={{ height: "90%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
