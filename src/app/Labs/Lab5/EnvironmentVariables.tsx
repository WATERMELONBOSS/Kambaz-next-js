"use client";
const ENV_HTTP = process.env.NEXT_PUBLIC_HTTP_SERVER;
const HTTP_SERVER = ENV_HTTP || (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "");
export default function EnvironmentVariables() {
  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {HTTP_SERVER || "(not set)"}</p>
      <hr />
    </div>
  );
}
