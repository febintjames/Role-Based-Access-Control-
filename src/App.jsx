import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sample credentials
  const users = [
    { id: 1, name: "Alice", email: "teacher@example.com", password: "teacher123", role: "Teacher" },
    { id: 2, name: "Bob", email: "student@example.com", password: "student123", role: "Student" },
  ];

  // Authentication function
  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      setEmail("");
      setPassword("");
    } else {
      alert("Invalid credentials!");
    }
  };

  // Logout function
  const handleLogout = () => setCurrentUser(null);

  // Role-based dashboard
  const Dashboard = () => {
    if (currentUser.role === "Teacher") {
      return (
        <div>
          <h2>Welcome, Teacher {currentUser.name}</h2>
          <p>You can manage student grades and assignments here.</p>
        </div>
      );
    } else if (currentUser.role === "Student") {
      return (
        <div>
          <h2>Welcome, Student {currentUser.name}</h2>
          <p>You can view your grades and submit assignments here.</p>
        </div>
      );
    }
    return <p>Access Denied</p>;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Role-Based Access Control (RBAC) System</h1>

      {!currentUser ? (
        <div>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: "block", margin: "10px 0", padding: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", margin: "10px 0", padding: "10px" }}
          />
          <button
            onClick={handleLogin}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <Dashboard />
          <button
            onClick={handleLogout}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#DC3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
