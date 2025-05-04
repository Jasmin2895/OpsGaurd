import React, { useState } from "react";

const ResponseViewer = ({ response }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!response) return null;

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-700">AI Response</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-blue-600 hover:underline"
        >
          {isExpanded ? "Hide" : "Show"}
        </button>
      </div>

      {isExpanded && (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 shadow-sm overflow-auto max-h-64 whitespace-pre-wrap text-sm font-mono text-gray-800">
          {typeof response === "string"
            ? response
            : JSON.stringify(response, null, 2)}
        </div>
      )}
    </div>
  );
};

export default ResponseViewer;
