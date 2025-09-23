export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/123" className="wd-assignment-link">
            A1 - ENV + HTML
          </a>
          <br />
          <span>Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/124" className="wd-assignment-link">
            A2 - CSS + BOOTSTRAP
          </a>
          <br />
          <span>Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/125" className="wd-assignment-link">
            A3 - JAVASCRIPT + REACT
          </a>
          <br />
          <span>Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</span>
        </li>
      </ul>
      
      <h3 id="wd-quizzes-title">
        QUIZZES 10% of Total <button>+</button>
      </h3>
      <ul id="wd-quiz-list">
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Quizzes/123" className="wd-assignment-link">
            Q1 - HTML
          </a>
          <br />
          <span>Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 30 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Quizzes/124" className="wd-assignment-link">
            Q2 - CSS
          </a>
          <br />
          <span>Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 30 pts</span>
        </li>
      </ul>
      
      <h3 id="wd-exams-title">
        EXAMS 20% of Total <button>+</button>
      </h3>
      <ul id="wd-exam-list">
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Exams/123" className="wd-assignment-link">
            Midterm
          </a>
          <br />
          <span>Not available until May 27 at 12:00am | Due May 28 at 11:59pm | 100 pts</span>
        </li>
      </ul>
      
      <h3 id="wd-project-title">
        PROJECT 30% of Total <button>+</button>
      </h3>
      <ul id="wd-project-list">
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Projects/123" className="wd-assignment-link">
            Final Project
          </a>
          <br />
          <span>Not available until May 6 at 12:00am | Due June 3 at 11:59pm | 100 pts</span>
        </li>
      </ul>
    </div>
  );
}
