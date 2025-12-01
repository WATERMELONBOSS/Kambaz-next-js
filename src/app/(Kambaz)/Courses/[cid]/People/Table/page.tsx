"use client";

import { Table, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import * as client from "../../../../Enrollments/client";
import { findAllUsers } from "../../../../Account/client";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import PeopleDetails from "../Details";

export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers?: () => void }) {
  const { cid } = useParams();
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [internalUsers, setInternalUsers] = useState<any[]>(users || []);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      if ((users && users.length) || internalUsers.length) return;
      try {
        const u = await findAllUsers();
        setInternalUsers(u || []);
      } catch (e) {
        console.error("failed to load users", e);
      }
    }
    loadUsers();

    async function load() {
      if (!cid) return;
      try {
        const data = await client.findEnrollmentsForCourse(cid as string);
        setEnrollments(data || []);
      } catch (e) {
        console.error("failed to fetch enrollments", e);
      }
    }
    load();
  }, [cid, users, internalUsers.length]);

  const isEnrolled = (userId: string) => enrollments.some((e) => e.user === userId && e.course === cid);

  const handleEnrollToggle = async (userId: string) => {
    try {
      if (isEnrolled(userId)) {
        await client.unenrollUserFromCourse(cid as string, userId);
      } else {
        await client.enrollUserInCourse(cid as string, userId);
      }
      const data = await client.findEnrollmentsForCourse(cid as string);
      setEnrollments(data || []);
    } catch (e) {
      console.error("failed to toggle enrollment", e);
    }
  };

  return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            if (fetchUsers) fetchUsers();
          }}
        />
      )}
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {(users && users.length ? users : internalUsers)
            .filter((usr) => enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid))
            .map((user) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <span
                    className="text-decoration-none"
                    onClick={() => {
                      setShowDetails(true);
                      setShowUserId(user._id);
                    }}>
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>{" "}
                    <span className="wd-last-name">{user.lastName}</span>
                  </span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
                <td>
                  {currentUser?.role === "FACULTY" ? (
                    <Button
                      size="sm"
                      onClick={async () => {
                        await handleEnrollToggle(user._id);
                        if (fetchUsers) fetchUsers();
                      }}>
                      {isEnrolled(user._id) ? "Unenroll" : "Enroll"}
                    </Button>
                  ) : isEnrolled(user._id) ? (
                    "Enrolled"
                  ) : (
                    "Not Enrolled"
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
