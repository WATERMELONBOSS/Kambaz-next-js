"use client";

import { useEffect, useState } from "react";
import { Table, Button, Form, FormControl } from "react-bootstrap";
import { findAllUsers, findUsersByPartialName, findUsersByRole, createUser as createUserClient } from "../client";
import PeopleDetails from "../../Courses/[cid]/People/Details";
import { FaPlus } from "react-icons/fa";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    try {
      const data = await findAllUsers();
      setUsers(data || []);
    } catch (e) {
      console.error("failed to load users", e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filterUsersByRole = async (r: string) => {
    setRole(r);
    if (r) {
      try {
        const data = await findUsersByRole(r);
        setUsers(data || []);
      } catch (e) {
        console.error("failed to filter users by role", e);
      }
    } else {
      await fetchUsers();
    }
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      if (!query) {
        await fetchUsers();
        return;
      }
      const data = await findUsersByPartialName(query);
      setUsers(data || []);
    } catch (err) {
      console.error("search failed", err);
    }
  };

  const filterUsersByName = async (n: string) => {
    setName(n);
    if (n) {
      try {
        const data = await findUsersByPartialName(n);
        setUsers(data || []);
      } catch (e) {
        console.error("failed to filter users by name", e);
      }
    } else {
      await fetchUsers();
    }
  };

  const createUser = async () => {
    try {
      const user = await createUserClient({
        firstName: "New",
        lastName: `User${users.length + 1}`,
        username: `newuser${Date.now()}`,
        password: "password123",
        email: `email${users.length + 1}@neu.edu`,
        section: "S101",
        role: "STUDENT"
      });
      setUsers([...users, user]);
    } catch (e) {
      console.error("failed to create user", e);
    }
  };

  return (
    <div className="wd-users-page">
      <h3>
        Users
        <Button onClick={createUser} className="float-end btn btn-danger wd-add-people">
          <FaPlus className="me-2" /> New
        </Button>
      </h3>
      <div className="mb-3 d-flex">
        <FormControl
          onChange={(e: any) => filterUsersByName(e.target.value)}
          placeholder="Search people"
          className="float-start w-25 me-2 wd-filter-by-name"
          value={name}
        />
        <select
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select float-start w-25 wd-select-role me-3">
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
        <Form onSubmit={handleSearch} className="d-flex flex-grow-1">
          <Form.Control placeholder="Search by name" value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button type="submit" className="ms-2">
            Search
          </Button>
          <Button
            variant="secondary"
            className="ms-2"
            onClick={() => {
              setQuery("");
              setRole("");
              fetchUsers();
            }}>
            Reset
          </Button>
        </Form>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>
                {u.firstName} {u.lastName}
              </td>
              <td>{u.username}</td>
              <td>{u.role}</td>
              <td>
                <Button size="sm" onClick={() => setExpanded(expanded === u._id ? null : u._id)}>
                  {expanded === u._id ? "Close" : "Details"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {expanded ? (
        <div className="mt-3">
          <PeopleDetails
            uid={expanded}
            onClose={() => {
              setExpanded(null);
              fetchUsers();
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
