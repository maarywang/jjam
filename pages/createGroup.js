import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function CreateGroup() {
  const [value, setValue] = useState(null);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div style={{ width: "100vw", height: "115vh" }}>
      <div
        style={{
          background: "#E1E1E1",
          height: "115vh",
          width: "100vw",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "40%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              position: "absolute",
              top: "20%",
              paddingLeft: "20%",
              paddingRight: "20%",
            }}
          >
            <p style={{ margin: "0" }}>Service:</p>
            <select
              name="services"
              style={{
                width: "25%",
                background: "#C4C4C4",
                border: "none",
                padding: "2%",
                borderRadius: "10px",
                appearance: "none",
                outline: "none",
              }}
            >
              <option selected disabled>
                Select Here...
              </option>
              <option value="netflix">Netflix</option>
              <option value="spotify">Spotify</option>
              <option value="hbomax">HBO Max</option>
              <option value="hulu">Hulu</option>
            </select>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              top: "50%",
            }}
          >
            <input
              type="text"
              placeholder="Username"
              style={{
                width: "20%",
                background: "#C4C4C4",
                border: "none",
                padding: "1%",
                borderRadius: "10px",
                appearance: "none",
                outline: "none",
                margin: "1%",
              }}
            />
            <input
              type="text"
              placeholder="Password"
              style={{
                width: "20%",
                background: "#C4C4C4",
                border: "none",
                padding: "1%",
                borderRadius: "10px",
                appearance: "none",
                outline: "none",
                margin: "1%",
              }}
            />
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              top: "20%",
              paddingLeft: "20%",
              paddingRight: "20%",
              marginTop: "1%",
              marginBottom: "1%",
            }}
          >
            <p>Total number of Subscriptions Available:</p>
            <input
              type="text"
              placeholder="Enter Amount"
              style={{
                width: "20%",
                background: "#C4C4C4",
                border: "none",
                padding: "1%",
                borderRadius: "10px",
                appearance: "none",
                outline: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              top: "20%",
              paddingLeft: "20%",
              paddingRight: "20%",
              marginTop: "2%",
              marginBottom: "2%",
            }}
          >
            <p>Subscription Rate for 1 Person:</p>
            <input
              type="text"
              placeholder="$"
              style={{
                width: "20%",
                background: "#C4C4C4",
                border: "none",
                padding: "1%",
                borderRadius: "10px",
                appearance: "none",
                outline: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              top: "20%",
              paddingLeft: "20%",
              paddingRight: "20%",
              marginTop: "2%",
              marginBottom: "2%",
            }}
          >
            <p>Is this account public or private?</p>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
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
              justifyContent: "space-between",
              width: "100%",
              top: "20%",
              paddingLeft: "20%",
              paddingRight: "20%",
              marginTop: "2%",
              marginBottom: "2%",
            }}
          >
            <p>Payment Date:</p>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              sx={{ backgroundColor: "pink" }}
            >
              <DatePicker
                label="Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              top: "20%",
              paddingLeft: "20%",
              paddingRight: "20%",
              marginTop: "2%",
              marginBottom: "2%",
            }}
          >
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <p>
              By checking this box, I acknowledge that I am responsible for
              managing all financial transactions for individuals in this group.{" "}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button
              variant="filled"
              disableElevation
              style={{ background: "#C4C4C4", width: "30%" }}
            >
              <Link href="/afterGroup">Create Group</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
