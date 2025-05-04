import React, { useState } from "react";
import getUserDetails from "../utils/getUserDetails";

const AIAgentCard = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/agent-action`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: getUserDetails().userId,
            tenantId: getUserDetails().tenantId,
            prompt,
          }),
        }
      );

      const data = await res.json();
      setResponse(JSON.stringify(data.data, null, 2));
    } catch (err) {
      setResponse("❌ Failed to get a response from AI.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveResponse = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/documents/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: getUserDetails().userId,
        tenantId: getUserDetails().tenantId,
        prompt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.info("save document response", data);
        alert("Response saved successfully!");
      })
      .catch((err) => {
        console.error("Error fetching documents:", err);
        alert("You do not have access please request access.");
      });
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        🧠 AI Agent Assistant
      </h2>

      <form onSubmit={handlePromptSubmit} className="mb-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          placeholder="Ask the AI to perform an action..."
          className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-3 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          {loading ? "Thinking..." : "Submit to AI Agent"}
        </button>
      </form>

      {response && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            🔎 AI Response:
          </h3>
          <p className="text-gray-800 whitespace-pre-wrap">{response}</p>

          <button
            onClick={handleSaveResponse}
            className="mt-4 px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition"
          >
            📄 Save This Response
          </button>
        </div>
      )}
    </div>
  );
};

export default AIAgentCard;
