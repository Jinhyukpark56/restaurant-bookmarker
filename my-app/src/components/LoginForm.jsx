import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./styles/LoginForm.css";

function LoginForm() {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isSignUpMode, setSignUpMode] = useState(false);
  const [newUseremail, setNewUseremail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (useremail === "admin" && password === "password") {
      setIsLoggedIn(true);
      alert("환영합니다.");
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (newUseremail && newPassword && newPassword === confirmPassword) {
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
    } else if (name === "cofrimPassword") {
      setConfirmPassword(value);
    }
  };

  const toggleSignUpMode = () => {
    setSignUpMode(!isSignUpMode);
  };

  if (isLoggedIn) {
    return <Redirect to="/MainPage" />;
  }

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
                  Confirm Password:
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
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
