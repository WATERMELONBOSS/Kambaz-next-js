/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { Button, FormControl, InputGroup, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import * as client from "./client";
import { RootState } from "../../../store";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  useEffect(() => {
    async function load() {
      if (!cid) return;
      try {
        const mods = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(mods));
      } catch (e) {
        console.error("Failed to load assignments", e);
      }
    }
    load();
  }, [cid, dispatch]);

  const handleDeleteClick = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (assignmentToDelete) {
      try {
        await client.deleteAssignment(cid as string, assignmentToDelete);
        dispatch(deleteAssignment(assignmentToDelete));
      } catch (e) {
        console.error("Failed to delete assignment", e);
      }
    }
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  };

  const handleAddAssignment = () => {
    router.push(`/Courses/${cid}/Assignments/new`);
  };
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="w-50">
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <FormControl placeholder="Search for Assignment" />
          </InputGroup>
        </div>
        <div className="d-flex">
          <Button variant="outline-secondary" className="me-2">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" onClick={handleAddAssignment}>
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            ASSIGNMENTS
            <div className="ms-auto d-flex align-items-center">
              <span className="badge rounded-pill bg-light text-dark me-3">40% of Total</span>
            </div>
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {courseAssignments.map((assignment: any) => (
              <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <div className="wd-assignment-icon me-3">
                    <i className="fas fa-file-alt fa-2x text-success"></i>
                  </div>
                  <div className="flex-grow-1">
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="text-decoration-none text-dark">
                      <h5 className="mb-1">{assignment.title}</h5>
                    </Link>
                    <div className="text-muted small">
                      Multiple Modules | <strong>Not available until</strong> {assignment.availableFrom || "N/A"} |{" "}
                      <strong>Due</strong> {assignment.dueDate || "N/A"} | {assignment.points || 100} pts
                    </div>
                  </div>
                  {currentUser?.role === "FACULTY" && (
                    <div className="d-flex">
                      <FaTrash
                        className="text-danger me-3"
                        onClick={() => handleDeleteClick(assignment._id)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  )}
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            Quizzes
            <div className="ms-auto d-flex align-items-center">
              <span className="badge rounded-pill bg-light text-dark me-3">10% of Total</span>
            </div>
          </div>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            Exams
            <div className="ms-auto d-flex align-items-center">
              <span className="badge rounded-pill bg-light text-dark me-3">20% of Total</span>
            </div>
          </div>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            Projects
            <div className="ms-auto d-flex align-items-center">
              <span className="badge rounded-pill bg-light text-dark me-3">30% of Total</span>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
