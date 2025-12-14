import { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [sweets, setSweets] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ---------------- LOGIN ----------------
  const login = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // IMPORTANT
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } catch (err) {
      setError("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- LOAD SWEETS ----------------
  const loadSweets = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/sweets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setSweets(data);
    } catch (err) {
      console.log(err);
    }
  };

  // AUTO LOAD SWEETS AFTER LOGIN
  useEffect(() => {
    if (token) {
      loadSweets();
    }
  }, [token]);

  // ---------------- LOGOUT ----------------
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setSweets([]);
  };

  // ---------------- LOGIN UI ----------------
  if (!token) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button onClick={login} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }

  // ---------------- SWEETS UI ----------------
  return (
    <div style={{ padding: 20 }}>
      <h2>Sweets List</h2>

      <button onClick={loadSweets}>Refresh</button>
      <button onClick={logout} style={{ marginLeft: 10 }}>
        Logout
      </button>

      <ul>
        {sweets.map((s) => (
          <li key={s.id}>
            {s.name} – ₹{s.price} (Qty: {s.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
