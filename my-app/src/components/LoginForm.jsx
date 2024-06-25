import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/LoginForm.css";

function LoginForm() {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpMode, setSignUpMode] = useState(false);
  const [newUseremail, setNewUseremail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const trimmedUseremail = useremail.trim();
    const storedUser = localStorage.getItem(trimmedUseremail);
    console.log("Stored user retrieved:", storedUser); // 디버깅 로그

    if (storedUser) {
      const userData = JSON.parse(storedUser);
      console.log("Parsed user data:", userData); // 디버깅 로그

      if (userData.password === password) {
        alert("환영합니다.");
        console.log("Navigating to /mainpage"); // 디버깅 로그
        navigate("/mainpage"); // 절대 경로 사용
      } else {
        alert(
          "사용자의 이메일 또는 비밀번호가 잘못되었습니다. 다시 입력하세요."
        );
      }
    } else {
      alert("사용자의 이메일 또는 비밀번호가 잘못되었습니다. 다시 입력하세요.");
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const trimmedNewUseremail = newUseremail.trim();
    if (trimmedNewUseremail && newPassword) {
      localStorage.setItem(
        trimmedNewUseremail,
        JSON.stringify({ password: newPassword })
      );
      console.log("New user registered:", {
        newUseremail: trimmedNewUseremail,
        newPassword,
      }); // 디버깅 로그
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
            <button type="submit">Sign Up</button>
            <br />
            <button type="button" onClick={toggleSignUpMode}>
              Back to Login
            </button>
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
            <button type="button" onClick={toggleSignUpMode}>
              Sign Up
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default LoginForm;
