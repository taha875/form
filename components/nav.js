import React from "react";
import Router from "next/router";
import Link from "next/link";
function Nav() {
  // funtion to clear local storage
  function clearLocalStorage() {
    localStorage.clear();
    window.location.reload();
    Router.push("/");
  }
  // function to check if local storage is empty

  return (
    <>
      <div className="bg-black py-3 w-full flex items-center justify-center relative z-20">
        <ul className="gap-x-6 text-white text-base flex items-center justify-center">
          <Link href="/">
            {" "}
            <li className="cursor-pointer">Form</li>
          </Link>

          <Link href="/user">
            <li className="cursor-pointer">User</li>
          </Link>

          <li onClick={() => clearLocalStorage()} className="cursor-pointer">
            Clear Local Storage
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
