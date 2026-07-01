import axios from "axios";

const API_URL = "https://apcompany1-backend.onrender.com/api/users";

// Register User
export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData
  );

  return response.data;
};