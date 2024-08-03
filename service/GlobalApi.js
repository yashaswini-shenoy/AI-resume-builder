import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data) => axiosClient.post("/user-resumes", data);

const GetUserResumes = (userEmail) =>
  axiosClient.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);

const UpdateResumeDetail = (id, data) =>
  axiosClient.put("/user-resumes/" + id, data);

const GetResumeById = (id, email) =>
  axiosClient.get(
    "/user-resumes?filters[userEmail][$eq]=" +
      email +
      "&filters[id][$eq]=" +
      id +
      "&populate[sectionPositions][populate]=*&populate=*"
  );

const DeleteResumeById = (id) => axiosClient.delete("/user-resumes/" + id);

const getByUUID = (uuid) =>
  axiosClient.get(`/user-resumes?filters[resumeId][$eq]=${uuid}&populate=*`);

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
  getByUUID,
};
