"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const doSignup = async () => {
    setError(null);
    if (!username || !password) {
      setError("Provide username and password");
      return;
    }
    if (password !== verify) {
      setError("Passwords do not match");
      return;
    }
    try {
      const user = await client.signup({ username, password });
      if (user) {
        dispatch(setCurrentUser(user));
        router.push("/Dashboard");
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || err.message || "Signup failed");
    }
  };

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form.Control
        placeholder="username"
        className="wd-username mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <Form.Control
        placeholder="password"
        type="password"
        className="wd-password mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Form.Control
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2"
        value={verify}
        onChange={(e) => setVerify(e.target.value)}
      />
      <br />
      <Button onClick={doSignup} className="w-100 mb-2">
        Sign up
      </Button>
      <br />
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}
