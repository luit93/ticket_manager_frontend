import React, { useState } from "react";

import { Card } from "react-bootstrap";
import RegisterForm from "../../components/login/RegisterForm";

 const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "name":
        setName(value);
        break;
      case "dob":
        setDob(value);
        break;
      default:
        break;
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password ||!name || !dob) {
      return alert("fill all the blanks");
    }
    console.log(email, password,name,dob);
    //call API for submitting form
  };


  return (
    <div className="entry-page">
      <Card style={{ width: "19rem" }} className="form-box">
       <RegisterForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} email={email}
            pass={password} name={name} dob={dob} />
      </Card>
    </div>
  );
};

export default RegisterPage