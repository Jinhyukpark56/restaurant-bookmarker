import React, { useState } from "react";

import "./styles/LoginForm.css";

function LoginForm() {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState("");

  const [isSignUpMode, setSignUpMode] = useState(false);
  const [newUseremail, setNewUseremail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (useremail === "admin" && password === "password") {
      setIsLoggedIn(true);
      alert("환영합니다.");
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (newUseremail && newPassword) {
      alert("회원가입이 완료 되었습니다. 로그인하세요.");
      setSignUpMode(false);
    } else {
      alert("이메일과 비밀번호를 확인하세요.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "useremail") {
      setUseremail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSignUpInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "newUseremail") {
      setNewUseremail(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    }
  };

  const toggleSignUpMode = () => {
    setSignUpMode(!isSignUpMode);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {useremail}!</h2>
      ) : (
        <div className="form-container">
          {isSignUpMode ? (
            <>
              <h2>Sign up</h2>
              <form onSubmit={handleSignUpSubmit}>
                <label>
                  New email:
                  <input
                    type="text"
                    name="newUseremail"
                    value={newUseremail}
                    onChange={handleSignUpInputChange}
                    required
                  />
                </label>
                <br />
                <label>
                  New Password:
                  <input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={handleSignUpInputChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Check The New Password:
                  <input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={handleSignUpInputChange}
                    required
                  />
                </label>
                <br />
                <button type="submit">Sign Up</button>
                <br />
                <button onClick={toggleSignUpMode}>Back to Login</button>
              </form>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <form onSubmit={handleLoginSubmit}>
                <label>
                  Useremail:
                  <input
                    type="text"
                    name="useremail"
                    value={useremail}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <br />
                <button type="submit">Login</button>
                <br />
                <button onClick={toggleSignUpMode}>Sign Up</button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginForm;
