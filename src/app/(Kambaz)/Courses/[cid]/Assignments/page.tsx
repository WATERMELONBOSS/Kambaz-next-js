"use client";

import { Button, FormControl, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Assignments() {
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
          <Button variant="danger">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>
      
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-item">
          <div className="d-flex align-items-center">
            <div className="wd-assignment-icon me-3">
              <i className="fas fa-file-alt fa-2x text-muted"></i>
            </div>
            <div className="flex-grow-1">
              <Link href="/Courses/1234/Assignments/1" className="text-decoration-none">
                <h5 className="mb-1">A1 - ENV + HTML</h5>
              </Link>
              <div className="text-muted small">
                Multiple Modules | Not available until Sep 6 at 12:00am | Due Sep 18 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="wd-assignment-actions">
              <Button variant="outline-secondary" size="sm" className="me-1">⋯</Button>
            </div>
          </div>
        </ListGroupItem>
        
        <ListGroupItem className="wd-assignment-item">
          <div className="d-flex align-items-center">
            <div className="wd-assignment-icon me-3">
              <i className="fas fa-file-alt fa-2x text-muted"></i>
            </div>
            <div className="flex-grow-1">
              <Link href="/Courses/1234/Assignments/2" className="text-decoration-none">
                <h5 className="mb-1">A2 - CSS + BOOTSTRAP</h5>
              </Link>
              <div className="text-muted small">
                Multiple Modules | Not available until Sep 6 at 12:00am | Due Sep 18 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="wd-assignment-actions">
              <Button variant="outline-secondary" size="sm" className="me-1">⋯</Button>
            </div>
          </div>
        </ListGroupItem>
        
        <ListGroupItem className="wd-assignment-item">
          <div className="d-flex align-items-center">
            <div className="wd-assignment-icon me-3">
              <i className="fas fa-file-alt fa-2x text-muted"></i>
            </div>
            <div className="flex-grow-1">
              <Link href="/Courses/1234/Assignments/3" className="text-decoration-none">
                <h5 className="mb-1">A3 - JAVASCRIPT + REACT</h5>
              </Link>
              <div className="text-muted small">
                Multiple Modules | Not available until Sep 6 at 12:00am | Due Sep 18 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="wd-assignment-actions">
              <Button variant="outline-secondary" size="sm" className="me-1">⋯</Button>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}