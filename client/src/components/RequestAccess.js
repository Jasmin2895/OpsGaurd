import React, { useState, useEffect } from "react";

const RequestAccess = () => {
  const [iFrameUrl, setIFrameUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTenantKey = async () => {
      try {
        const tenantKey = localStorage.getItem("tenantId");

        if (!tenantKey) {
          throw new Error("Tenant Key is missing.");
        }

        const url = `${process.env.REACT_APP_REQUEST_RESOURCE_ACCESS_URL}${tenantKey}`;

        setIFrameUrl(url);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTenantKey();
  }, []);

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Error Loading Access Request
        </h2>
        <p className="text-center text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Request Access to Resources
      </h2>
      <div className="flex items-center justify-center">
        {iFrameUrl && (
          <iframe
            title="Permit.io Approval Requests"
            src={iFrameUrl}
            className="w-full h-full rounded-lg border border-gray-300 mt-8"
            style={{ height: "600px" }}
          />
        )}
      </div>
    </div>
  );
};

export default RequestAccess;
