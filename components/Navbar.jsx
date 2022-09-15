import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{ maxWidth: "600px" }} className="mx-auto">
      <div className="d-flex justify-content-center gap-5 fs-4 ">
        <Link href="/">
          <a className="mt-3">Home</a>
        </Link>
        <Link href="/exp">
          <a className="mt-3">Experience</a>
        </Link>
        <Link href="/cont">
          <a className="mt-3">Contact</a>
        </Link>
        <Link href="/lab-07">
          <a className="mt-3">TodoList</a>
        </Link>
      </div>
      <hr style={{ color: "#F7DC6F" }} />
    </div>
  );
}
