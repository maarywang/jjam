import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">
          <p>Logo</p>
        </Link>
      </div>
      <div className="bar">
        <Link href="/subscriptions">
          <p>Subscription</p>
        </Link>
        <Link href="/about">
          <p>About</p>
        </Link>
        <Link href="">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
}
