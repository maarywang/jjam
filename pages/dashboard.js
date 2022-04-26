import React from "react";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
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

export default function Dashboard() {
  const [pop, setPop] = React.useState(false);
  const [mode, setPublic] = React.useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  let word = "";
  if (user) {
    word = user.email;
  } else {
    word = "user";
  }

  const payments = () => {
    if (user) {
      router.push("/paymentHistory");
    } else {
      router.push("/");
    }
  };

  const activity = () => {
    if (user) {
      router.push("/activity");
    } else {
      router.push("/");
    }
  };
  const dashboard = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  };

  const discover = () => {
    router.push("/subscriptions");
  };

  const messages = () => {
    if (user) {
      router.push("/messages");
    } else {
      router.push("/");
    }
  };

  const handlePublic = () => {
    mode ? setPublic(false) : setPublic(true);
  };
  const handleClick = () => {
    pop ? setPop(false) : setPop(true);
  };
  const style = {
    display: "flex",
    flexDirection: "column",
    height: "10%",
    width: "100%",
    marginTop: "10%",
  };

  const dialogue = (
    <Dialog open={pop} maxWidth="md">
      <DialogContent style={{ backgroundColor: "white" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 style={{ marginLeft: "1%" }}>GROUP NAME</h1>
            <CloseIcon onClick={handleClick}></CloseIcon>
          </div>
          <p style={{ marginLeft: "5%" }}> 🤝 Members in this Group</p>
          <Image
            src="/members.svg"
            width="700%"
            height="100%"
            style={{ marginRight: "5%" }}
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
            <Image src="/numAvil.svg" width="200%" height="200%"></Image>
          </div>
          <div style={{ width: "40%" }}>
            <h4>Group Status</h4>
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const subscriptionBox = (
    <div
      className="subscription"
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "2%",
          }}
        >
          <h3 className="subService">Service</h3>
          {mode ? (
            <PublicIcon
              style={{ fontSize: "100%", marginLeft: "5%", marginTop: "5%" }}
            ></PublicIcon>
          ) : (
            <LockIcon
              style={{ fontSize: "100%", marginLeft: "5%", marginTop: "5%" }}
            ></LockIcon>
          )}
        </div>
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
          <p style={{ fontSize: "80%", margin: "0" }}>from $5/month</p>
        </div>
      </div>
      <div className="subLowerContainer">
        <div className="subInternalContainer" style={{ marginBottom: "1%" }}>
          <p>@username</p>
          <FiberManualRecordIcon
            style={{
              width: "10%",
              fontSize: "50%",
              position: "absolute",
              top: "45%",
              left: "25%",
            }}
          ></FiberManualRecordIcon>
          <p>4/6 Subscribed</p>
          <FiberManualRecordIcon
            style={{
              width: "10%",
              fontSize: "50%",
              position: "absolute",
              top: "45%",
              left: "60%",
            }}
          ></FiberManualRecordIcon>
          <p>expires 01/01/02</p>
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
            fontSize: "70%",
            padding: "2px",
          }}
        >
          JOIN
        </Button>
      </div>
    </div>
  );
  return (
    <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "10%" }}>
        <Box
          sx={{
            width: "150px",
            height: "100%",
            backgroundColor: "#0066FF",
            color: "white",
            paddingTop: "20%",
          }}
        >
          <List style={{ height: "100%", width: "100%" }}>
            <ListItem style={style} onClick={dashboard}>
              <PieChartIcon></PieChartIcon>
              <p>Dashboard</p>
            </ListItem>
            <ListItem style={style} onClick={discover}>
              <FindInPageIcon></FindInPageIcon>
              <p>Discover</p>
            </ListItem>
            <ListItem style={style} onClick={payments}>
              <PaymentIcon></PaymentIcon>
              <p>Payments</p>
            </ListItem>
            <ListItem style={style} onClick={activity}>
              <ShowChartIcon></ShowChartIcon>
              <p>Activity</p>
            </ListItem>
            <ListItem style={style} onClick={messages}>
              <EmailIcon></EmailIcon>
              <p>Message</p>
            </ListItem>
          </List>
        </Box>
      </div>
      <div style={{ width: "90%" }}>
        <h1 style={{ margin: "0", marginLeft: "5%" }}>Hello, {word}</h1>
        <h3 style={{ marginLeft: "5%" }}>Dashboard</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <div
              style={{
                width: "100%",
                fontSize: "90%",
                boxShadow: "2px 2px 2px 2px lightgray",
                borderRadius: "40px",
                padding: "1%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h4 style={{ paddingLeft: "5%", fontSize: "120%" }}>
                🌊 Activity Stream
              </h4>
              <Divider></Divider>
              <p style={{ paddingLeft: "5%" }}>
                You have an upcoming payment of $3.21 on April 4, 2022
              </p>
              <Divider></Divider>
              <p style={{ paddingLeft: "5%" }}>
                Jonathan Phan left the group &quot;Netflix 24/7&quot;
              </p>
              <Divider></Divider>
              <p style={{ paddingLeft: "5%" }}>
                Jonathan Phan joined the group &quot;PARTY&quot; on April 1,
                2022.
              </p>
              <Divider></Divider>
              <p style={{ paddingLeft: "5%" }}>
                You have an upcoming payment of $2.37 on March 6, 2022.
              </p>
              <Divider></Divider>
              <p style={{ paddingLeft: "5%" }}>
                Mary Wang left the group &quot;USC Squad&quot; on February 5,
                2022.
              </p>
              <Divider></Divider>
              <p style={{ paddingLeft: "5%" }}>
                Mary Wang left the group &quot;Narut0FanZ&quot; on February 1,
                2022.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
            }}
          >
            <div
              style={{
                fontSize: "90%",
                boxShadow: "2px 2px 2px 2px lightgray",
                borderRadius: "40px",
                padding: "3%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: "0", marginLeft: "3%" }}>Requests</h3>
              <FiberManualRecordIcon
                style={{
                  width: "5%",
                  fontSize: "70%",
                  color: "0066FF",
                }}
              ></FiberManualRecordIcon>
              <ArrowForwardIosIcon
                style={{ fontSize: "70%", marginLeft: "70%" }}
              ></ArrowForwardIosIcon>
            </div>
            <div
              style={{
                width: "100%",
                fontSize: "90%",
                boxShadow: "2px 2px 2px 2px lightgray",
                borderRadius: "40px",
                padding: "2%",
                marginTop: "10px",
              }}
            >
              <h3 style={{ paddingLeft: "5%" }}>Monthly Recap</h3>
              <Divider></Divider>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5%",
                }}
              >
                <Image src="/money.svg" width="100%" height="100%"></Image>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "500", fontSize: "120%" }}>
                    This month, you saved:
                  </p>
                  <h1 style={{ color: "#0066FF", fontSize: "250%" }}>
                    $119.99
                  </h1>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  alignItems: "center",
                }}
              >
                <p>You spent</p>
                <p
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    color: "#0066FF",
                    textDecoration: "underline",
                    fontSize: "120%",
                  }}
                >
                  {" "}
                  $27.53{" "}
                </p>
                <p>compared to</p>
                <p
                  style={{
                    marginLeft: "5px",
                    color: "red",
                    textDecoration: "underline",
                    fontSize: "120%",
                  }}
                >
                  {" "}
                  $147.52
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", marginBottom: "5%", marginTop: "5%" }}>
          <h1 style={{ marginLeft: "5%" }}>Your Subscriptions</h1>
          <FormGroup>
            <FormControlLabel
              onClick={handlePublic}
              control={<Switch defaultChecked />}
              label={mode ? "Public" : "Private"}
              style={{ marginLeft: "5%" }}
            />
          </FormGroup>
          {dialogue}
          <div
            className="subscription"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: "2%",
                }}
              >
                <h3 className="subService">WSJ</h3>
                {mode ? (
                  <PublicIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></PublicIcon>
                ) : (
                  <LockIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></LockIcon>
                )}
              </div>
              <div
                style={{
                  textAlign: "right",
                  paddingTop: "3%",
                  paddingRight: "3%",
                }}
              >
                <h3
                  style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}
                >
                  $2.26
                </h3>
                <p style={{ fontSize: "80%", margin: "0" }}>from $4/month</p>
              </div>
            </div>
            <div className="subLowerContainer">
              <div
                className="subInternalContainer"
                style={{ marginBottom: "1%" }}
              >
                <p>@donaldJ0b</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "25%",
                  }}
                ></FiberManualRecordIcon>
                <p>3/4 Subscribed</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "60%",
                  }}
                ></FiberManualRecordIcon>
                <p>expires 11/01/22</p>
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
                  fontSize: "70%",
                  padding: "2px",
                }}
              >
                JOIN
              </Button>
            </div>
          </div>
          <div
            className="subscription"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: "2%",
                  width: "40%",
                }}
              >
                <h3 className="subService" style={{ width: "55%" }}>
                  Amazon Prime
                </h3>
                {mode ? (
                  <PublicIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></PublicIcon>
                ) : (
                  <LockIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></LockIcon>
                )}
              </div>
              <div
                style={{
                  textAlign: "right",
                  paddingTop: "3%",
                  paddingRight: "3%",
                }}
              >
                <h3
                  style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}
                >
                  $24.26
                </h3>
                <p style={{ fontSize: "80%", margin: "0" }}>
                  from $43.25/month
                </p>
              </div>
            </div>
            <div className="subLowerContainer">
              <div
                className="subInternalContainer"
                style={{ marginBottom: "1%" }}
              >
                <p>@username</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "25%",
                  }}
                ></FiberManualRecordIcon>
                <p>3/4 Subscribed</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "60%",
                  }}
                ></FiberManualRecordIcon>
                <p>expires 09/18/23</p>
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
                  fontSize: "70%",
                  padding: "2px",
                }}
              >
                JOIN
              </Button>
            </div>
          </div>
          <div
            className="subscription"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: "2%",
                }}
              >
                <h3 className="subService">Hulu</h3>
                {mode ? (
                  <PublicIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></PublicIcon>
                ) : (
                  <LockIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></LockIcon>
                )}
              </div>
              <div
                style={{
                  textAlign: "right",
                  paddingTop: "3%",
                  paddingRight: "3%",
                }}
              >
                <h3
                  style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}
                >
                  $4.26
                </h3>
                <p style={{ fontSize: "80%", margin: "0" }}>from $5/month</p>
              </div>
            </div>
            <div className="subLowerContainer">
              <div
                className="subInternalContainer"
                style={{ marginBottom: "1%" }}
              >
                <p>@mort136</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "25%",
                  }}
                ></FiberManualRecordIcon>
                <p>4/6 Subscribed</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "60%",
                  }}
                ></FiberManualRecordIcon>
                <p>expires 08/12/22</p>
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
                  fontSize: "70%",
                  padding: "2px",
                }}
              >
                JOIN
              </Button>
            </div>
          </div>
          <div
            className="subscription"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: "2%",
                }}
              >
                <h3 className="subService">Office365</h3>
                {mode ? (
                  <PublicIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></PublicIcon>
                ) : (
                  <LockIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></LockIcon>
                )}
              </div>
              <div
                style={{
                  textAlign: "right",
                  paddingTop: "3%",
                  paddingRight: "3%",
                }}
              >
                <h3
                  style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}
                >
                  $34
                </h3>
                <p style={{ fontSize: "80%", margin: "0" }}>from $46/month</p>
              </div>
            </div>
            <div className="subLowerContainer">
              <div
                className="subInternalContainer"
                style={{ marginBottom: "1%" }}
              >
                <p>@j03s3ph</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "25%",
                  }}
                ></FiberManualRecordIcon>
                <p>2/3 Subscribed</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "60%",
                  }}
                ></FiberManualRecordIcon>
                <p>expires 07/24/25</p>
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
                  fontSize: "70%",
                  padding: "2px",
                }}
              >
                JOIN
              </Button>
            </div>
          </div>
          <div
            className="subscription"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: "2%",
                }}
              >
                <h3 className="subService">AppleTV</h3>
                {mode ? (
                  <PublicIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></PublicIcon>
                ) : (
                  <LockIcon
                    style={{
                      fontSize: "100%",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  ></LockIcon>
                )}
              </div>
              <div
                style={{
                  textAlign: "right",
                  paddingTop: "3%",
                  paddingRight: "3%",
                }}
              >
                <h3
                  style={{ fontSize: "150%", margin: "0", fontWeight: "600" }}
                >
                  $9.13
                </h3>
                <p style={{ fontSize: "80%", margin: "0" }}>
                  from $14.10/month
                </p>
              </div>
            </div>
            <div className="subLowerContainer">
              <div
                className="subInternalContainer"
                style={{ marginBottom: "1%" }}
              >
                <p>@j0nny</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "25%",
                  }}
                ></FiberManualRecordIcon>
                <p>1/4 Subscribed</p>
                <FiberManualRecordIcon
                  style={{
                    width: "10%",
                    fontSize: "50%",
                    position: "absolute",
                    top: "45%",
                    left: "60%",
                  }}
                ></FiberManualRecordIcon>
                <p>expires 12/01/24</p>
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
                  fontSize: "70%",
                  padding: "2px",
                }}
              >
                JOIN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
