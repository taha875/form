import React, { useEffect,useState } from "react";
import Router from "next/router";
function nav() {
  const [active, setActive] = useState(false);
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
          <a href="/">
            {" "}
            <li className="cursor-pointer">Form</li>
          </a>

          <a href="/user">
            <li className="cursor-pointer">User</li>
          </a>

          <li onClick={() => clearLocalStorage()} className="cursor-pointer">
            Clear Local Storage
          </li>
        </ul>
      </div>
    </>
  );
}

export default nav;
