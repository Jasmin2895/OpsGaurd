import React from "react";

const PromptForm = ({ prompt, setPrompt, onSubmit, response }) => {
  const handleChange = (e) => setPrompt(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-xl font-semibold">Generate Content with AI</h2>
      <textarea
        value={prompt}
        onChange={handleChange}
        rows={4}
        placeholder="Ask the AI to perform an action..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Generate Content
      </button>

      {response && (
        <button
          type="button"
          onClick={() => onSubmit(true)} // `true` flag for save
          className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Save to Document
        </button>
      )}
    </form>
  );
};

export default PromptForm;
