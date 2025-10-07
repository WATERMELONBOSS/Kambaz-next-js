"use client";

import { Button, FormControl, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import Link from "next/link";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdArrowDropDown } from "react-icons/md";

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

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            ASSIGNMENTS
            <div className="ms-auto d-flex align-items-center">
              <span className="badge rounded-pill bg-light text-dark me-3">40% of Total</span>
              <ModuleControlButtons />
            </div>
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div className="wd-assignment-icon me-3">
                  <i className="fas fa-file-alt fa-2x text-success"></i>
                </div>
                <div className="flex-grow-1">
                  <Link href="/Courses/1234/Assignments/1" className="text-decoration-none text-dark">
                    <h5 className="mb-1">A1 - ENV + HTML</h5>
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules | <strong>Not available until</strong> Sep 6 at 12:00am | <strong>Due</strong> Sep
                    18 at 11:59pm | 100 pts
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div className="wd-assignment-icon me-3">
                  <i className="fas fa-file-alt fa-2x text-success"></i>
                </div>
                <div className="flex-grow-1">
                  <Link href="/Courses/1234/Assignments/2" className="text-decoration-none text-dark">
                    <h5 className="mb-1">A2 - CSS + BOOTSTRAP</h5>
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules | <strong>Not available until</strong> Sep 6 at 12:00am | <strong>Due</strong> Sep
                    18 at 11:59pm | 100 pts
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div className="wd-assignment-icon me-3">
                  <i className="fas fa-file-alt fa-2x text-success"></i>
                </div>
                <div className="flex-grow-1">
                  <Link href="/Courses/1234/Assignments/3" className="text-decoration-none text-dark">
                    <h5 className="mb-1">A3 - JAVASCRIPT + REACT</h5>
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules | <strong>Not available until</strong> Sep 6 at 12:00am | <strong>Due</strong> Sep
                    18 at 11:59pm | 100 pts
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            Quizzes
            <div className="ms-auto d-flex align-items-center">
              <span className="badge rounded-pill bg-light text-dark me-3">10% of Total</span>
              <ModuleControlButtons />
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
              <ModuleControlButtons />
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
              <ModuleControlButtons />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
