import axios from "axios";

const JASON_SERVER_HOST = "http://localhost:4000";

export const getPosts = async () => {
  try {
    const response = await axios.get(`${JASON_SERVER_HOST}/posts`);
    return response.data;
  } catch (error) {
    alert("뭔가 잘못됨.");
  }
};
