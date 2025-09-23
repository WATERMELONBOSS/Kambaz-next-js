import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p>Milan Srinivas</p>
      <p>Section: CS5610 Web Development Section 04</p>
      <a href="https://github.com/WATERMELONBOSS/Kambaz-next-js" id="wd-github">
        GitHub Repository
      </a>
      <br />
      <br />
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz Application
          </Link>
        </li>
      </ul>
    </div>
  );
}