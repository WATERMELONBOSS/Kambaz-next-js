// Mock data for different assignments
const assignmentData = {
  "123": {
    name: "A1 - ENV + HTML",
    description: "The assignment is available online. Submit a link to the landing page of your Web application running on Vercel. The landing page should be the Kambaz application with a link to the Lab exercises. Lab 1 should be the landing page of the Lab exercises and should include the following:\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kambaz application\n- Links to all relevant source code repositories\nThe Kambaz application should include a link to navigate back to the landing page.",
    points: 100,
    group: "ASSIGNMENTS",
    displayGradeAs: "Points",
    submissionTypes: {
      textEntry: true,
      websiteUrl: true,
      mediaRecordings: false,
      studentAnnotation: false,
      fileUpload: false
    },
    assignTo: "Everyone",
    dueDate: "2024-05-13",
    availableFrom: "2024-05-06",
    availableUntil: "2024-05-13"
  },
  "124": {
    name: "A2 - CSS + BOOTSTRAP",
    description: "Create a responsive web application using CSS and Bootstrap. Implement a modern, mobile-first design with proper styling and layout. Include navigation, forms, and interactive elements.",
    points: 100,
    group: "ASSIGNMENTS",
    displayGradeAs: "Points",
    submissionTypes: {
      textEntry: false,
      websiteUrl: true,
      mediaRecordings: false,
      studentAnnotation: false,
      fileUpload: true
    },
    assignTo: "Everyone",
    dueDate: "2024-05-20",
    availableFrom: "2024-05-13",
    availableUntil: "2024-05-20"
  },
  "125": {
    name: "A3 - JAVASCRIPT + REACT",
    description: "Build a dynamic web application using JavaScript and React. Implement state management, component lifecycle, and user interactions. Create a single-page application with routing.",
    points: 100,
    group: "ASSIGNMENTS",
    displayGradeAs: "Points",
    submissionTypes: {
      textEntry: false,
      websiteUrl: true,
      mediaRecordings: false,
      studentAnnotation: false,
      fileUpload: true
    },
    assignTo: "Everyone",
    dueDate: "2024-05-27",
    availableFrom: "2024-05-20",
    availableUntil: "2024-05-27"
  }
};

export default async function AssignmentEditor({ 
  params 
}: { 
  params: Promise<{ cid: string; aid: string }> 
}) {
  const { cid, aid } = await params;
  
  // Get assignment data based on the assignment ID, or use default values
  const assignment = assignmentData[aid as keyof typeof assignmentData] || {
    name: `Assignment ${aid}`,
    description: "Assignment description will be loaded here.",
    points: 100,
    group: "ASSIGNMENTS",
    displayGradeAs: "Points",
    submissionTypes: {
      textEntry: true,
      websiteUrl: false,
      mediaRecordings: false,
      studentAnnotation: false,
      fileUpload: false
    },
    assignTo: "Everyone",
    dueDate: new Date().toISOString().split('T')[0],
    availableFrom: new Date().toISOString().split('T')[0],
    availableUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  };

  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Editor - Course {cid}</h2>
      <p>Assignment ID: {aid}</p>
      
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue={assignment.name} /><br /><br />
      
      <label htmlFor="wd-description">Description</label>
      <textarea 
        id="wd-description" 
        cols={50} 
        rows={10}
        defaultValue={assignment.description}
      />
      <br />
      
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input type="number" id="wd-points" defaultValue={assignment.points} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" defaultValue={assignment.group}>
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
            <select id="wd-display-grade-as" defaultValue={assignment.displayGradeAs}>
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
            <input 
              type="checkbox" 
              id="wd-text-entry" 
              defaultChecked={assignment.submissionTypes.textEntry}
            />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input 
              type="checkbox" 
              id="wd-website-url" 
              defaultChecked={assignment.submissionTypes.websiteUrl}
            />
            <label htmlFor="wd-website-url">Website URL</label><br />
            <input 
              type="checkbox" 
              id="wd-media-recordings" 
              defaultChecked={assignment.submissionTypes.mediaRecordings}
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input 
              type="checkbox" 
              id="wd-student-annotation" 
              defaultChecked={assignment.submissionTypes.studentAnnotation}
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input 
              type="checkbox" 
              id="wd-file-upload" 
              defaultChecked={assignment.submissionTypes.fileUpload}
            />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" defaultValue={assignment.assignTo} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" defaultValue={assignment.dueDate} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input type="date" id="wd-available-from" defaultValue={assignment.availableFrom} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input type="date" id="wd-available-until" defaultValue={assignment.availableUntil} />
          </td>
        </tr>
      </table>
      
      <br />
      <button type="button">Save</button>
      <button type="button">Cancel</button>
    </div>
  );
}
