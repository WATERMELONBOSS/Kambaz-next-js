"use client";

import { useEffect, useState } from "react";
import { FaUserCircle, FaPencilAlt, FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FormControl } from "react-bootstrap";
import * as client from "../../../Account/client";

export default function PeopleDetails({ uid, onClose }: { uid: string | null; onClose: () => void }) {
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loginId, setLoginId] = useState("");
  const [section, setSection] = useState("");
  const [totalActivity, setTotalActivity] = useState("");
  useEffect(() => {
    if (!uid) return;
    async function load() {
      try {
        const id = uid as string;
        const u = await client.findUserById(id);
        setUser(u || {});
        setName(`${(u?.firstName || "").trim()} ${(u?.lastName || "").trim()}`.trim());
        setEmail(u?.email || "");
        setRole(u?.role || "");
        setLoginId(u?.loginId || "");
        setSection(u?.section || "");
        setTotalActivity(u?.totalActivity || "");
      } catch (e) {
        console.error("failed to load user", e);
      }
    }
    load();
  }, [uid]);
  if (!uid) return null;

  const deleteUser = async (id: string) => {
    try {
      await client.deleteUser(id);
    } catch (e) {
      console.error("failed to delete user", e);
    }
    onClose();
  };

  const saveUser = async () => {
    const parts = (name || "").trim().split(/\s+/);
    const firstName = parts.length ? parts[0] : "";
    const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";
    const updatedUser = { ...user, firstName, lastName, email, role, loginId, section, totalActivity };
    try {
      await client.updateUser(updatedUser);
      setUser(updatedUser);
      setEditing(false);
      onClose();
    } catch (e) {
      console.error("failed to save user", e);
    }
  };

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={onClose} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" />{" "}
      </button>
      <div className="text-center mt-2">
        {" "}
        <FaUserCircle className="text-secondary me-2 fs-1" />{" "}
      </div>
      <hr />
      <div className="text-danger fs-4">
        {!editing && <FaPencilAlt onClick={() => setEditing(true)} className="float-end fs-5 mt-2 wd-edit" />}
        {editing && <FaCheck onClick={() => saveUser()} className="float-end fs-5 mt-2 me-2 wd-save" />}
        {!editing && (
          <div className="wd-name" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {editing && (
          <FormControl
            className="w-50 wd-edit-name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") saveUser();
            }}
          />
        )}
      </div>

      <div className="mt-2">
        <b>Email:</b>{" "}
        {!editing ? (
          <span className="wd-email">{user.email}</span>
        ) : (
          <FormControl type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} className="w-50" />
        )}
      </div>

      <div className="mt-2">
        <b>Role:</b>{" "}
        {!editing ? (
          <span className="wd-roles">{user.role}</span>
        ) : (
          <select className="form-select w-50" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="STUDENT">STUDENT</option>
            <option value="TA">TA</option>
            <option value="FACULTY">FACULTY</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        )}
      </div>

      <div className="mt-2">
        <b>Login ID:</b>{" "}
        {!editing ? (
          <span className="wd-login-id"> {user.loginId || "-"} </span>
        ) : (
          <FormControl className="w-50" value={loginId} onChange={(e: any) => setLoginId(e.target.value)} />
        )}
      </div>
      <div className="mt-2">
        <b>Section:</b>{" "}
        {!editing ? (
          <span className="wd-section"> {user.section || "-"} </span>
        ) : (
          <FormControl className="w-50" value={section} onChange={(e: any) => setSection(e.target.value)} />
        )}
      </div>
      <div className="mt-2">
        <b>Total Activity:</b>{" "}
        {!editing ? (
          <span className="wd-total-activity">{user.totalActivity || "-"}</span>
        ) : (
          <FormControl className="w-50" value={totalActivity} onChange={(e: any) => setTotalActivity(e.target.value)} />
        )}
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <button onClick={() => uid && deleteUser(uid)} className="btn btn-danger float-end wd-delete">
          Delete
        </button>
        <button onClick={onClose} className="btn btn-secondary float-end me-2 wd-cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}
