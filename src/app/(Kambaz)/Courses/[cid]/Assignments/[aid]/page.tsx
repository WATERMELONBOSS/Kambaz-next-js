"use client";

import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import Link from "next/link";
import { link } from "fs";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a) => a._id === aid && a.course === cid);
  return (
    <div id="wd-assignment-editor">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <i className="fas fa-times text-danger me-2"></i>
          <span className="fw-bold">Assignment Name</span>
        </div>
        <div>
          <Button variant="light" className="me-2">
            Edit
          </Button>
          <Button variant="light">Cancel</Button>
        </div>
      </div>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment?.title} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Assignment Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:"
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPoints">
          <Form.Label column sm={3} className="text-end">
            Points
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="number" defaultValue="100" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAssignmentGroup">
          <Form.Label column sm={3} className="text-end">
            Assignment Group
          </Form.Label>
          <Col sm={9}>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option>ASSIGNMENTS</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDisplayGrade">
          <Form.Label column sm={3} className="text-end">
            Display Grade as
          </Form.Label>
          <Col sm={9}>
            <Form.Select defaultValue="Percentage">
              <option>Percentage</option>
              <option>Points</option>
              <option>Letter Grade</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formSubmissionType">
          <Form.Label column sm={3} className="text-end">
            Submission Type
          </Form.Label>
          <Col sm={9}>
            <Form.Select defaultValue="Online">
              <option>Online</option>
              <option>Offline</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAssign">
          <Form.Label column sm={3} className="text-end">
            Assign
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" defaultValue="Everyone" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDue">
          <Form.Label column sm={3} className="text-end">
            Due
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="date" defaultValue="2024-12-31" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAvailableFrom">
          <Form.Label column sm={3} className="text-end">
            Available from
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="date" defaultValue="2024-01-01" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formUntil">
          <Form.Label column sm={3} className="text-end">
            Until
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="date" defaultValue="2024-12-31" />
          </Col>
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" href={`/Courses/${cid}/Assignments/`}>
            Cancel
          </Button>
          <Button variant="success" href={`/Courses/${cid}/Assignments/`}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
