import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

export const findEnrollmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/enrollments`);
  return data;
};

export const enrollUserInCourse = async (courseId: string, userId: string) => {
  const { data } = await axios.post(`${COURSES_API}/${courseId}/enrollments`, { user: userId });
  return data;
};

export const deleteEnrollment = async (enrollmentId: string) => {
  const { data } = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return data;
};

export const unenrollUserFromCourse = async (courseId: string, userId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}/enrollments`, { data: { user: userId } });
  return data;
};
