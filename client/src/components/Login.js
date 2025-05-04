import { useState } from "react";

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [tenantId, setTenantId] = useState("");
  const [diabaled, setIsDisabled] = useState(false);

  const handleLogin = () => {
    if (!userId || !tenantId) {
      alert("Please enter user ID and select tenant");
      return;
    }
    onLogin({ userId, tenantId });
    setIsDisabled(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to AI OpsGuard
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User ID
          </label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your user ID"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Tenant
          </label>
          <select
            value={tenantId}
            onChange={(e) => setTenantId(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose a Tenant --</option>
            <option value="engineering">Engineering Team</option>
            <option value="product">Product Team</option>
            <option value="default">Default</option>
          </select>
        </div>

        <button
          onClick={handleLogin}
          disabled={diabaled}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
