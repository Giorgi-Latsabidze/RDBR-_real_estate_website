import axios from 'axios';

// Create an instance of Axios with default settings
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL||'https://api.real-estate-manager.redberryinternship.ge/api',  // Use the base URL from environment variables
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,  // Use the API token from environment variables
  },
});



export default axiosInstance;

