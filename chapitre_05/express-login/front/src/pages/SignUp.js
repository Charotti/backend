import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
export default function Signup() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePwd = (e) => {
    setPwd(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let body = { name: name, password: pwd };
    axios({
      method: "post",
      url: "http://localhost:8001/signup",
      data: body,
    });
  };
  return (
    <>
      <div>Signup</div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Username: </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="username"
              onChange={onChangeName}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={onChangePwd}
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
