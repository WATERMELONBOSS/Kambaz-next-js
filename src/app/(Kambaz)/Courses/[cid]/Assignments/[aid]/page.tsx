"use client";

import { Button, Col, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignment-editor">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <i className="fas fa-times text-danger me-2"></i>
          <span className="fw-bold">Assignment Name</span>
        </div>
        <div>
          <Button variant="light" className="me-2">Edit</Button>
          <Button variant="light">Cancel</Button>
        </div>
      </div>
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Assignment Description</Form.Label>
          <Form.Control as="textarea" rows={5} defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:" />
        </Form.Group>
        
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" defaultValue="100" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Assignment Group</Form.Label>
              <Form.Select defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Display Grade as</Form.Label>
              <Form.Select defaultValue="Percentage">
                <option>Percentage</option>
                <option>Points</option>
                <option>Letter Grade</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Submission Type</Form.Label>
              <Form.Select defaultValue="Online">
                <option>Online</option>
                <option>Offline</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group className="mb-3">
          <Form.Label>Assign</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" />
        </Form.Group>
        
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Due</Form.Label>
              <Form.Control type="date" defaultValue="2024-12-31" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Available from</Form.Label>
              <Form.Control type="date" defaultValue="2024-01-01" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" defaultValue="2024-12-31" />
            </Form.Group>
          </Col>
        </Row>
        
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="success">Save</Button>
        </div>
      </Form>
    </div>
  );
}