const getUserDetails = () => {
  return {
    userId: localStorage.getItem("userId"),
    tenantId: localStorage.getItem("tenantId"),
  };
};

export default getUserDetails;
