/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { RootState } from "../../../../store";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

  const [assignment, setAssignment] = useState({
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid
  });

  useEffect(() => {
    if (aid && aid !== "new") {
      const existingAssignment = assignments.find((a: any) => a._id === aid);
      if (existingAssignment) {
        setAssignment({
          _id: existingAssignment._id,
          title: existingAssignment.title || "",
          description: (existingAssignment as any).description || "",
          points: (existingAssignment as any).points || 100,
          dueDate: (existingAssignment as any).dueDate || "",
          availableFrom: (existingAssignment as any).availableFrom || "",
          availableUntil: (existingAssignment as any).availableUntil || "",
          course: existingAssignment.course || cid
        });
      }
    }
  }, [aid, assignments, cid]);

  const handleSave = () => {
    if (aid && aid !== "new") {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };
  return (
    <div id="wd-assignment-editor">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <i className="fas fa-times text-danger me-2"></i>
          <span className="fw-bold">{aid && aid !== "new" ? "Edit Assignment" : "New Assignment"}</span>
        </div>
      </div>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Assignment Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPoints">
          <Form.Label column sm={3} className="text-end">
            Points
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="number"
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDue">
          <Form.Label column sm={3} className="text-end">
            Due Date
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="datetime-local"
              value={assignment.dueDate}
              onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAvailableFrom">
          <Form.Label column sm={3} className="text-end">
            Available from
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="datetime-local"
              value={assignment.availableFrom}
              onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formUntil">
          <Form.Label column sm={3} className="text-end">
            Until
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="datetime-local"
              value={assignment.availableUntil}
              onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
            />
          </Col>
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
