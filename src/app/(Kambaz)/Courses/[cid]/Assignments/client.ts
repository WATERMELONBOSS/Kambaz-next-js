import axios from "axios";
const ENV_HTTP = process.env.NEXT_PUBLIC_HTTP_SERVER;
const HTTP_SERVER = ENV_HTTP || (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "");
const BASE_API = HTTP_SERVER ? HTTP_SERVER : "";
const COURSES_API = `${BASE_API}/api/courses`;
const ASSIGNMENTS_API = `${BASE_API}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const { data } = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};
