import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import BoltIcon from "@mui/icons-material/Bolt";
import LockIcon from "@mui/icons-material/Lock";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { useRouter } from "next/router";

// too lazy to make the credit card portion actual inputs.. come back and fix if time later

export default function CreateAccount() {
  const [suEmail, setsuEmail] = useState("");
  const [suPass, setsuPass] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, suEmail, suPass)
      .then((userCredential) => {
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          height: "100%",
          position: "relative",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "300%", width: "50%", padding: "1%" }}>
          Create an account.
        </h1>
        <div
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <LockIcon></LockIcon>
          <p style={{ marginLeft: "5%" }}>
            Secure payments with reliable users near you
          </p>
        </div>
        <div
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <BoltIcon></BoltIcon>
          <p style={{ marginLeft: "5%" }}>Automated transfers</p>
        </div>
        <div
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <AccessibilityNewIcon></AccessibilityNewIcon>
          <p style={{ marginLeft: "5%" }}>Accessible to all</p>
        </div>
        <div
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <ThumbUpIcon></ThumbUpIcon>
          <p style={{ marginLeft: "5%" }}>Convenient</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          height: "100%",
          position: "relative",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Email"
          style={{
            width: "360px",
            padding: "2.5%",
            borderRadius: "5px",
            border: "1px solid gray",
            margin: "1%",
          }}
          onChange={(e) => {
            setsuEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          style={{
            width: "360px",
            padding: "2.5%",
            borderRadius: "5px",
            border: "1px solid gray",
            marginTop: "2%",
          }}
          onChange={(e) => {
            setsuPass(e.target.value);
          }}
        />
        <Image src="/card.svg" width="360%" height="360%"></Image>
        <Button
          variant="filled"
          style={{
            width: "30%",
            color: "white",
            backgroundColor: "#0066FF",
            borderRadius: "100px",
          }}
          onClick={handleSubmit}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}
