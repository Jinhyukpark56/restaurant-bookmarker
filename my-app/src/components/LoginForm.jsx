import React, { useState } from "react";

function LoginForm() {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (useremail === "admin" && password === "password") {
      setIsLoggedIn(true);
      alert("setIsLoggedIn");
    } else {
      alert("사용자의 이메일 또는 비밀번호가 잘못되었습니다. 다시 입력하세요.");
    }
  };
  const handleInputChange = (event) => {
    const { email, value } = event.target;
    if (email === "password") {
      setUseremail(value);
    } else if (email === "password") {
      setPassword(value);
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {useremail}!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
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
        </form>
      )}
    </div>
  );
}

export default LoginForm;
