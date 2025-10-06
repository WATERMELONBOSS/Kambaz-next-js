import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <Form.Control placeholder="username" className="wd-username mb-2"/><br/>
      <Form.Control placeholder="password" type="password" className="wd-password mb-2"/><br/>
      <Form.Control placeholder="verify password" type="password" className="wd-password-verify mb-2"/><br/>
      <Link href="/Account/Profile" className="btn btn-primary w-100 mb-2">Sign up</Link><br />
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}


