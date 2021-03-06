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
import { auth } from "../firebase-config";

export default function Subscriptions() {
  const [pop, setPop] = React.useState(false);
  const [pop2, setPop2] = React.useState(false);
  const [create, setCreate] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [join, setJoin] = React.useState(false);

  const router = useRouter();
  const user = auth.currentUser;

  const handleClick = () => {
    pop ? setPop(false) : setPop(true);
    if (pop2) {
      setPop2(false);
    }
  };

  const handleCreate = () => {
    create ? setCreate(false) : setCreate(true);
    if (pop2) {
      setPop2(false);
    }
  };

  const handleClick2 = () => {
    pop2 ? setPop2(false) : setPop2(true);
    if (create) {
      setCreate(false);
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const backHome = () => {
    router.push("/dashboard");
  };

  const handleJoin = () => {
    join ? setJoin(false) : setJoin(true);
    if (pop) {
      setPop(false);
    }
  };

  const closeJoin = () => {
    setJoin(false);
  };

  const dialogue = (
    <Dialog open={pop} maxWidth="md">
      <DialogContent style={{ backgroundColor: "white" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 style={{ marginLeft: "1%" }}>GROUP NAME</h1>
            <CloseIcon onClick={handleClick}></CloseIcon>
          </div>
          <p style={{ marginLeft: "5%" }}> ???? Members in this Group</p>
          <Image
            src="/members.svg"
            width="700%"
            height="100%"
            style={{ marginRight: "5%" }}
            alt="members"
          ></Image>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginLeft: "5%",
            }}
          >
            <TextsmsTwoToneIcon
              style={{ fontSize: "90%" }}
            ></TextsmsTwoToneIcon>
            <p style={{ fontWeight: "600", marginLeft: "1%" }}>
              Message from Creator
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                width: "90%",
                border: "1px solid lightgray",
                padding: "1.5%",
                borderRadius: "10px",
                margin: "0",
              }}
            >
              Hi, my name&apos;s Amy! I&apos;m a student at USC who currently
              has access to HBO, but I won&apos;t have this once I graduate.
              I&apos;m creating this group to find other people who love the
              same shows as me, like Euphoria! Feel free to join and invite your
              own friends too! Excited to get to know you :)
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ width: "40%" }}>
            <h4>Available Subscriptions</h4>
            <Image
              src="/numAvail.svg"
              width="200%"
              height="200%"
              alt="number"
            ></Image>
          </div>
          <div style={{ width: "40%" }}>
            <h4>Group Status</h4>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  height: "15%",
                  boxShadow: "1px 1px 1px 1px lightgray",
                  borderRadius: "10px",
                  fontWeight: "600",
                  padding: "1.5%",
                }}
              >
                <p style={{ margin: "0" }}>Public</p>
                <PublicIcon
                  style={{
                    fontSize: "90%",
                    marginLeft: "5%",
                  }}
                ></PublicIcon>
              </div>
              <p style={{ fontSize: "80%", color: "gray" }}>
                Change Privacy &nbsp;&gt;
              </p>
            </div>
            {user ? (
              <Button
                onClick={handleJoin}
                variant="filled"
                style={{
                  backgroundColor: "#0066FF",
                  borderRadius: "10px",
                  width: "100%",
                  marginTop: "20%",
                  color: "white",
                }}
              >
                Join Group
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const dialogue2 = (
    <Dialog open={pop2} maxWidth="md">
      <DialogContent
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CloseIcon onClick={handleClick2}></CloseIcon>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "5%",
          }}
        >
          <h4 style={{ marginBottom: "20%" }}>
            ???? Success! Your group has been created!
          </h4>
          <Image src="/plantLady.svg" width="200%" height="200%"></Image>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="filled"
            style={{
              backgroundColor: "#0066FF",
              color: "white",
              borderRadius: "100px",
              width: "50%",
              margin: "1%",
              fontSize: "40%",
              marginRight: "5%",
            }}
            onClick={handleCreate}
          >
            CREATE NEW GROUP
          </Button>
          <Button
            variant="filled"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "100px",
              width: "50%",
              margin: "1%",
              fontSize: "40%",
              marginLeft: "5%",
            }}
            onClick={backHome}
          >
            RETURN HOMEPAGE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  const dialogueJoin = (
    <Dialog open={join} maxWidth="md">
      <DialogContent
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CloseIcon onClick={closeJoin}></CloseIcon>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "5%",
          }}
        >
          <h4 style={{ marginBottom: "20%" }}>
            ???? Success! Your request to join the group has been sent!
          </h4>
          <Image src="/plantLady.svg" width="200%" height="200%"></Image>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="filled"
            style={{
              backgroundColor: "#0066FF",
              color: "white",
              borderRadius: "100px",
              width: "50%",
              margin: "1%",
              fontSize: "40%",
              marginRight: "5%",
            }}
            onClick={closeJoin}
          >
            BACK TO EXPLORE
          </Button>
          <Button
            variant="filled"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "100px",
              width: "50%",
              margin: "1%",
              fontSize: "40%",
              marginLeft: "5%",
            }}
            onClick={backHome}
          >
            RETURN HOMEPAGE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
  return (
    <div
      style={{
        height: "1500px",
        background: "white",
        width: "100vw",
        position: "relative",
      }}
    >
      {dialogue}
      {dialogue2}
      {dialogueJoin}
      <Dialog open={create} maxWidth="md">
        <DialogContent style={{ backgroundColor: "white" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ marginLeft: "1%" }}>CREATE A GROUP</h1>
              <CloseIcon onClick={handleCreate}></CloseIcon>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div style={{ width: "45%" }}>
                <p style={{ fontWeight: "600" }}>Group Name</p>
                <input
                  type="text"
                  placeholder="Ex: Nextflix 24/7"
                  style={{
                    borderRadius: "100px",
                    border: "1px solid lightgray",
                    width: "100%",
                    padding: "3%",
                  }}
                />
              </div>
              <div style={{ width: "45%" }}>
                <p style={{ fontWeight: "600" }}>Service</p>
                <input
                  type="text"
                  placeholder="Ex: Netflix"
                  style={{
                    borderRadius: "100px",
                    border: "1px solid lightgray",
                    width: "100%",
                    padding: "3%",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "50%",
              }}
            >
              <p
                style={{
                  textAlign: "left",
                  width: "100%",
                  paddingLeft: "4%",
                  fontSize: "80%",
                  fontWeight: "600",
                }}
              >
                Message (Optional)
              </p>
              <input
                type="text"
                style={{
                  width: "92%",
                  borderRadius: "10px",
                  border: "1px solid lightgray",
                  paddingBottom: "80px",
                  paddingLeft: "1%",
                  paddingTop: "1%",
                }}
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ width: "40%", marginLeft: "5%" }}>
                Total number of Subscriptions
              </p>
              <input
                type="text"
                placeholder="Enter #..."
                style={{
                  width: "15%",
                  height: "70%",
                  borderRadius: "10px",
                  border: "1px  solid lightgray",
                  marginRight: "6%",
                  padding: "1%",
                }}
              ></input>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <p style={{ width: "40%", textAlign: "left" }}>
                Is this group public or private?
              </p>
              <FormControl style={{ width: "40%" }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <FormControlLabel
                    value="public"
                    control={<Radio />}
                    label="Public"
                    size="small"
                  />
                  <FormControlLabel
                    value="private"
                    control={<Radio />}
                    label="Private"
                    size="small"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p style={{ width: "85%" }}>
                By checking this box, I acknowledge that I am responsible for
                managing all financial transactions for individuals in this
                group.{" "}
              </p>
            </div>
            <Button
              onClick={handleClick2}
              variant="filled"
              style={{
                color: "white",
                backgroundColor: "#0066FF",
                width: "30%",
                borderRadius: "100px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2%",
                marginBottom: "2%",
              }}
            >
              CREATE GROUP
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {user ? (
        <Button
          onClick={handleCreate}
          variant="text"
          size="large"
          style={{
            color: "white",
            position: "absolute",
            right: "10%",
            top: "3%",
            backgroundColor: "black",
            fontSize: "70%",
            width: "10%",
          }}
        >
          CREATE A GROUP +
        </Button>
      ) : (
        ""
      )}

      <BurgerMenu></BurgerMenu>
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
            placeholder="Search SubMerge..."
            style={{
              background: "white",
              border: "0",
              width: "90%",
              height: "40px",
              borderRadius: "30px",
              paddingLeft: "2%",
              boxShadow: "2px 2px 2px 2px lightgray",
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
            justifyContent: "flex-start",
            width: "90%",
            marginLeft: "1%",
          }}
        >
          <p style={{ marginRight: "15%" }}>Filter by:</p>
          <p style={{ marginRight: "15%" }}>Service</p>
          <p style={{ marginRight: "15%" }}>Price</p>
          <p style={{ marginRight: "15%" }}>Privacy</p>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: "10%",
          height: "100%",
        }}
      >
        <div className="subscription">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h3 className="subService">Hulu</h3>
            <div
              style={{
                textAlign: "right",
                paddingTop: "3%",
                paddingRight: "3%",
              }}
            >
              <h3 style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}>
                $4.26
              </h3>
              <p style={{ fontSize: "80%", margin: "0" }}>
                originally $8/month
              </p>
            </div>
          </div>
          <div className="subLowerContainer">
            <div className="subInternalContainer">
              <p>@maarywang</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "25%",
                }}
              ></FiberManualRecordIcon>
              <p>4/6 Subscribed</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "60%",
                }}
              ></FiberManualRecordIcon>
              <p>expires 01/05/22</p>
            </div>
            <Button
              variant="filled"
              onClick={handleClick}
              style={{
                color: "white",
                backgroundColor: "#0066FF",
                width: " 10%",
                height: "75%",
                borderRadius: "100px",
                marginTop: "1%",
                marginRight: "3%",
                fontSize: "75%",
              }}
            >
              {user ? "JOIN" : "VIEW"}
            </Button>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h3 className="subService">Amazon Video</h3>
            <div
              style={{
                textAlign: "right",
                paddingTop: "3%",
                paddingRight: "3%",
              }}
            >
              <h3 style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}>
                $2.26
              </h3>
              <p style={{ fontSize: "80%", margin: "0" }}>
                originally $6.50/month
              </p>
            </div>
          </div>
          <div className="subLowerContainer">
            <div className="subInternalContainer">
              <p>@jpo2</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "25%",
                }}
              ></FiberManualRecordIcon>
              <p>7/8 Subscribed</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "60%",
                }}
              ></FiberManualRecordIcon>
              <p>expires 01/17/23</p>
            </div>
            <Button
              variant="filled"
              onClick={handleClick}
              style={{
                color: "white",
                backgroundColor: "#0066FF",
                width: " 10%",
                height: "75%",
                borderRadius: "100px",
                marginTop: "1%",
                marginRight: "3%",
                fontSize: "75%",
              }}
            >
              {user ? "JOIN" : "VIEW"}
            </Button>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h3 className="subService">HBO Max</h3>
            <div
              style={{
                textAlign: "right",
                paddingTop: "3%",
                paddingRight: "3%",
              }}
            >
              <h3 style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}>
                $8.26
              </h3>
              <p style={{ fontSize: "80%", margin: "0" }}>
                originally $25.50/month
              </p>
            </div>
          </div>
          <div className="subLowerContainer">
            <div className="subInternalContainer">
              <p>@marylittlelamb</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "25%",
                }}
              ></FiberManualRecordIcon>
              <p>3/6 Subscribed</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "60%",
                }}
              ></FiberManualRecordIcon>
              <p>expires 09/12/22</p>
            </div>
            <Button
              variant="filled"
              onClick={handleClick}
              style={{
                color: "white",
                backgroundColor: "#0066FF",
                width: " 10%",
                height: "75%",
                borderRadius: "100px",
                marginTop: "1%",
                marginRight: "3%",
                fontSize: "75%",
              }}
            >
              {user ? "JOIN" : "VIEW"}
            </Button>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h3 className="subService">Adobe Suite</h3>
            <div
              style={{
                textAlign: "right",
                paddingTop: "3%",
                paddingRight: "3%",
              }}
            >
              <h3 style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}>
                $10.02
              </h3>
              <p style={{ fontSize: "80%", margin: "0" }}>
                originally $17.21/month
              </p>
            </div>
          </div>
          <div className="subLowerContainer">
            <div className="subInternalContainer">
              <p>@sherrydeng</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "25%",
                }}
              ></FiberManualRecordIcon>
              <p>9/10 Subscribed</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "60%",
                }}
              ></FiberManualRecordIcon>
              <p>expires 01/12/22</p>
            </div>
            <Button
              variant="filled"
              onClick={handleClick}
              style={{
                color: "white",
                backgroundColor: "#0066FF",
                width: " 10%",
                height: "75%",
                borderRadius: "100px",
                marginTop: "1%",
                marginRight: "3%",
                fontSize: "75%",
              }}
            >
              {user ? "JOIN" : "VIEW"}
            </Button>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h3 className="subService">Amazon Prime</h3>
            <div
              style={{
                textAlign: "right",
                paddingTop: "3%",
                paddingRight: "3%",
              }}
            >
              <h3 style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}>
                $20
              </h3>
              <p style={{ fontSize: "80%", margin: "0" }}>
                originally $25/month
              </p>
            </div>
          </div>
          <div className="subLowerContainer">
            <div className="subInternalContainer">
              <p>@jpo2</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "25%",
                }}
              ></FiberManualRecordIcon>
              <p>4/5 Subscribed</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "60%",
                }}
              ></FiberManualRecordIcon>
              <p>expires 06/05/23</p>
            </div>
            <Button
              variant="filled"
              onClick={handleClick}
              style={{
                color: "white",
                backgroundColor: "#0066FF",
                width: " 10%",
                height: "75%",
                borderRadius: "100px",
                marginTop: "1%",
                marginRight: "3%",
                fontSize: "75%",
              }}
            >
              {user ? "JOIN" : "VIEW"}
            </Button>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h3 className="subService">YouTube Premium</h3>
            <div
              style={{
                textAlign: "right",
                paddingTop: "3%",
                paddingRight: "3%",
              }}
            >
              <h3 style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}>
                $8.14
              </h3>
              <p style={{ fontSize: "80%", margin: "0" }}>
                originally $12.81/month
              </p>
            </div>
          </div>
          <div className="subLowerContainer">
            <div className="subInternalContainer">
              <p>@dave135</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "25%",
                }}
              ></FiberManualRecordIcon>
              <p>4/7 Subscribed</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "60%",
                }}
              ></FiberManualRecordIcon>
              <p>expires 04/02/23</p>
            </div>
            <Button
              variant="filled"
              onClick={handleClick}
              style={{
                color: "white",
                backgroundColor: "#0066FF",
                width: " 10%",
                height: "75%",
                borderRadius: "100px",
                marginTop: "1%",
                marginRight: "3%",
                fontSize: "75%",
              }}
            >
              {user ? "JOIN" : "VIEW"}
            </Button>
          </div>
        </div>
        <div className="subscription">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h3 className="subService">Spotify Premium</h3>
            <div
              style={{
                textAlign: "right",
                paddingTop: "3%",
                paddingRight: "3%",
              }}
            >
              <h3 style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}>
                $2.66
              </h3>
              <p style={{ fontSize: "80%", margin: "0" }}>
                originally $3.10/month
              </p>
            </div>
          </div>
          <div className="subLowerContainer">
            <div className="subInternalContainer">
              <p>@llisza</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "25%",
                }}
              ></FiberManualRecordIcon>
              <p>7/8 Subscribed</p>
              <FiberManualRecordIcon
                style={{
                  width: "10%",
                  fontSize: "50%",
                  position: "absolute",
                  top: "65%",
                  left: "60%",
                }}
              ></FiberManualRecordIcon>
              <p>expires 10/30/23</p>
            </div>
            <Button
              variant="filled"
              onClick={handleClick}
              style={{
                color: "white",
                backgroundColor: "#0066FF",
                width: " 10%",
                height: "75%",
                borderRadius: "100px",
                marginTop: "1%",
                marginRight: "3%",
                fontSize: "75%",
              }}
            >
              {user ? "JOIN" : "VIEW"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
