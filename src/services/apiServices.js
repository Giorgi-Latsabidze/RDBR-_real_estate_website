import axiosInstance from './axiosConfig';  // Import the Axios instance

// Fetch all real estates
export const fetchRealEstates = () => {
  return axiosInstance.get('/real-estates')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching real estates:', error);
      throw error;
    });
};

// Add a new real estates
export const addRealEstate = (realEstateData) => {
  return axiosInstance.post('/real-estates', realEstateData)
    .then(response => response.data)
    .catch(error => {
      console.error('Error adding real estate:', error);
      throw error;
    });
};

// Fetch a specific real estate by ID
export const fetchRealEstateById = (id) => {
  return axiosInstance.get(`/real-estates/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching real estate by ID:', error);
      throw error;
    });
};

// Delete a real estate by ID
export const deleteRealEstateById = (id) => {
  return axiosInstance.delete(`/real-estates/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting real estate:', error);
      throw error;
    });
};

// Fetch all cities
export const fetchCities = () => {
  return axiosInstance.get('/cities')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching cities:', error);
      throw error;
    });
};

// Fetch all regions
export const fetchRegions = () => {
  return axiosInstance.get('/regions')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching regions:', error);
      throw error;
    });
};

// Fetch all agents
export const fetchAgents = () => {
  return axiosInstance.get('/agents')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching agents:', error);
      throw error;
    });
};

// Add a new agent
export const addAgent = (agentData) => {
  return axiosInstance.post('/agents', agentData)
    .then(response => response.data)
    .catch(error => {
      console.error('Error adding agent:', error);
      throw error;
    });
};
