import React, { useEffect, useState } from "react";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/documents/fetch`)
      .then((res) => res.json())
      .then((data) => {
        setDocuments(data);
      })
      .catch((err) => console.error("Error fetching documents:", err));
  }, []);

  const getTenantName = (tenantId) => {
    switch (tenantId) {
      case "engineering":
        return "Engineering Team";
      case "product":
        return "Product Team";
      default:
        return "Unknown Tenant";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Saved Documents</h2>
      {documents.length === 0 ? (
        <p className="text-gray-500">No documents found.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {documents.map((doc, index) => (
            <li key={doc._id} className="py-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {doc.name || `Document #${index + 1}`}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{doc.content}</p>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>
                      <strong>User:</strong> {doc.userId}
                    </p>
                    <p>
                      <strong>Tenant:</strong> {getTenantName(doc.tenantId)}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(doc.createdAt).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DocumentList;
