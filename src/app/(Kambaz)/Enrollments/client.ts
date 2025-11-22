import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const ENV_HTTP = process.env.NEXT_PUBLIC_HTTP_SERVER;
const HTTP_SERVER = ENV_HTTP || (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "");
const BASE_API = HTTP_SERVER ? HTTP_SERVER : "";
const COURSES_API = `${BASE_API}/api/courses`;
const ENROLLMENTS_API = `${BASE_API}/api/enrollments`;

export const findEnrollmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/enrollments`);
  return data;
};

export const enrollUserInCourse = async (courseId: string, userId: string) => {
  const { data } = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/enrollments`, { user: userId });
  return data;
};

export const deleteEnrollment = async (enrollmentId: string) => {
  const { data } = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return data;
};

export const unenrollUserFromCourse = async (courseId: string, userId: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/enrollments`, { data: { user: userId } });
  return data;
};
