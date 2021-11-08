import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../config";
import "./style.css";
export function FormEnter() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlChangeInput(e) {
    setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  function signIn() {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("user", user);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <div style={{ width: "200px", marginLeft: "auto", marginRight: "auto" }}>
      {isVisible ? (
        <div className="form-enter">
          <p>Email</p>
          <input
            className="form-addCard__input"
            onChange={handlChangeInput}
            type="email"
          />
          <p>Password</p>
          <input
            className="form-addCard__input"
            onChange={handleChangePassword}
            type="password"
          />
          <button className="form-addCard__add-btn" onClick={signIn}>
            Sign In
          </button>
        </div>
      ) : (
        <button onClick={() => setIsVisible(true)} className="btn-add">
          Registration
        </button>
      )}
    </div>
  );
}
