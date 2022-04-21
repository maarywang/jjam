import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src="/logo.jpeg" width="200%" height="50%"></Image>
      </div>
      <div className="bar">
        <Link href="/subscriptions">
          <p>Explore</p>
        </Link>
        <Link href="/about">
          <p>About</p>
        </Link>
        <Link href="/">
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  );
}
