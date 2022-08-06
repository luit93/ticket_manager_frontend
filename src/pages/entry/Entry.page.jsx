import React, { useState } from "react";
import "./entry.css";
import { Card } from "react-bootstrap";
import Login from "../../components/login/Login.comp";
import ResetPass from "../../components/login/ResetPass.comp";
export const Entry = () => {
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };
  const switchForm = (frmType) => {
    setFrmLoad(frmType);
  };
  return (
    <div className="entry-page">
      <Card style={{ width: "19rem" }} className="form-box">
        {frmLoad === "login" && (
          <Login
            switchForm={switchForm}
          />
        )}
        {frmLoad === "reset" && (
          <ResetPass
            handleOnResetSubmit={handleOnResetSubmit}
            switchForm={switchForm}
          />
        )}
      </Card>
    </div>
  );
};
