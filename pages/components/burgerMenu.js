import * as React from "react";
import Drawer from "@mui/material/Drawer";
import PaymentIcon from "@mui/icons-material/Payment";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ListItem from "@mui/material/ListItem";
import PieChartIcon from "@mui/icons-material/PieChart";
import Box from "@mui/material/Box";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import EmailIcon from "@mui/icons-material/Email";

export default function BurgerMenu() {
  const style = {
    display: "flex",
    flexDirection: "column",
    height: "10%",
    width: "100%",
    marginTop: "20%",
  };
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };
  return (
    <div>
      <MenuIcon
        onClick={toggleDrawer}
        style={{
          fontSize: "250%",
          color: "#0066FF",
          marginLeft: "5%",
          marginTop: "1%",
        }}
      ></MenuIcon>
      <Drawer anchor="left" open={state} onClose={toggleDrawer}>
        <Box
          sx={{
            width: "150px",
            height: "100%",
            backgroundColor: "#0066FF",
            color: "white",
          }}
        >
          <List style={{ height: "100%", width: "100%" }}>
            <ListItem style={style}>
              <PieChartIcon></PieChartIcon>
              <p>Dashboard</p>
            </ListItem>
            <ListItem style={style}>
              <FindInPageIcon></FindInPageIcon>
              <p>Discover</p>
            </ListItem>
            <ListItem style={style}>
              <PaymentIcon></PaymentIcon>
              <p>Payments</p>
            </ListItem>
            <ListItem style={style}>
              <ShowChartIcon></ShowChartIcon>
              <p>Activity</p>
            </ListItem>
            <ListItem style={style}>
              <EmailIcon></EmailIcon>
              <p>Message</p>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
