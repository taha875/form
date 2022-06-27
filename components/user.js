import React, { useState, useEffect } from "react";

function user() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem("formData");
    if (data) {
      setUser(JSON.parse(data));
    }
  });

  return (
    <div className="h-screen bg-black opacity-50 absolute top-0 w-full flex items-center justify-center z-0">
      <div className="h-96 bg-slate-200 p-6">
        <p className="text-black font-bold mb-6">FILL FORM TO SEE DATA</p>
        <div className="flex items-center justify-center">
          <div className="w-24">Name :</div>
          <div className="w-1/2">
            {user.firstName} {user.lastName}
          </div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="w-24">Email :</div>
          <div className="w-1/2">{user.email}</div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="w-24">Country :</div>
          <div className="w-1/2">{user.country}</div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="w-24">State :</div>
          <div className="w-1/2">{user.state}</div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="w-24">Address :</div>
          <div className="w-1/2 break-normal">{user.streetAddress}</div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="w-24">Zip :</div>
          <div className="w-1/2">{user.zip}</div>
        </div>
      </div>
    </div>
  );
}

export default user;
