// src/components/Dashboard.js

import React from "react";
import PromptForm from "./PromptForm";
import ResponseViewer from "./ResponseViewer";
import ApprovalsWidget from "./ApprovalsWidget";

export default function Dashboard({
  user,
  login,
  logout,
  prompt,
  setPrompt,
  handlePromptSubmit,
  setResponse,
  response,
  isAdminView,
  setIsAdminView,
  isAdminUser = false, // pass this from App based on user role
}) {
  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">
            AI OpsGuard Dashboard
          </h1>
          {user ? (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          )}
        </div>

        {user && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Side - Prompt Generator */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Generate Content
              </h2>
              <PromptForm
                prompt={prompt}
                setPrompt={setPrompt}
                onSubmit={handlePromptSubmit}
                onResponse={setResponse}
              />
              <ResponseViewer response={response} />
            </div>

            {/* Admin Side - Tools */}
            {true && (
              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Admin Tools
                </h2>
                <button
                  onClick={() => setIsAdminView(!isAdminView)}
                  className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  {isAdminView ? "Hide Approvals" : "Show Approvals"}
                </button>
                {isAdminView && <ApprovalsWidget />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
