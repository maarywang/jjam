import React, { useState } from "react";
import Button from "@mui/material/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";

export default function LogIn() {
  const [suEmail, setsuEmail] = useState("");
  const [suPass, setsuPass] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, suEmail, suPass)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10%",
      }}
    >
      <input
        type="text"
        placeholder="Email"
        style={{
          width: "360px",
          padding: "1%",
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
          padding: "1%",
          borderRadius: "5px",
          border: "1px solid gray",
          margin: "1%",
        }}
        onChange={(e) => {
          setsuPass(e.target.value);
        }}
      />
      <Button
        variant="filled"
        style={{
          margin: "1%",
          width: "25%",
          color: "white",
          backgroundColor: "#0066FF",
          borderRadius: "100px",
        }}
        onClick={handleSubmit}
      >
        LOG IN
      </Button>
    </div>
  );
}
