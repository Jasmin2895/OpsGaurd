import React from "react";

const ApprovalsWidget = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md ">
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Request Access to Resources
      </h2>
      <div className="flex items-center justify-center ">
        <iframe
          title="Permit Element user-management"
          src={process.env.REACT_APP_USER_MANAGEMENT_URL}
          width="100%"
          className="w-full h-full rounded-lg border border-gray-300 mt-8"
          style={{ height: "600px" }}
        />
      </div>
    </div>
  );
};

export default ApprovalsWidget;
