import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Navbar() {
  const user = auth.currentUser;
  const router = useRouter();
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("log out successful");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClick = () => {
    router.push("/");
  };

  if (user) {
    return (
      <div className="navbar">
        <div className="logo">
          <Image
            src="/logo.jpeg"
            width="200%"
            height="50%"
            onClick={handleClick}
          ></Image>
        </div>
        <div className="bar">
          <Link href="/subscriptions">
            <p>Explore</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>

          <p onClick={logout}>Log Out</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div className="logo">
          <Image
            src="/logo.jpeg"
            width="200%"
            height="50%"
            onClick={handleClick}
          ></Image>
        </div>
        <div className="bar">
          <Link href="/subscriptions">
            <p>Explore</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/createAccount">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    );
  }
}
