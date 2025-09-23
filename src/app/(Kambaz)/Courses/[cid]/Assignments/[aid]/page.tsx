export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online. Submit a link to the landing page of your Web application running on Vercel. The landing page should be the Kambaz application with a link to the Lab exercises. Lab 1 should be the landing page of the Lab exercises and should include the following:
        - Your full name and section
        - Links to each of the lab assignments
        - Link to the Kambaz application
        - Links to all relevant source code repositories
        The Kambaz application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Points">Points</option>
              <option value="Percentage">Percentage</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <input type="checkbox" id="wd-text-entry" checked />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input type="checkbox" id="wd-website-url" checked />
            <label htmlFor="wd-website-url">Website URL</label><br />
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" value="2024-05-13" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input type="date" id="wd-available-from" value="2024-05-06" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input type="date" id="wd-available-until" value="2024-05-13" />
          </td>
        </tr>
      </table>
    </div>
  );
}
