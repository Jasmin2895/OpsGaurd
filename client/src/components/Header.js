import { Link } from "react-router-dom";

const Header = ({ logout }) => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-bold">OpsGuard AI</h1>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/agent" className="hover:underline">
              AI Agent
            </Link>
          </li>
          <li>
            <Link to="/request-access" className="hover:underline">
              Request Access
            </Link>
          </li>
          <li>
            <Link to="/documents" className="hover:underline">
              Documents
            </Link>
          </li>
          <li>
            <Link to="/approvals" className="hover:underline">
              Approvals
            </Link>
          </li>
        </ul>
      </div>

      <button
        onClick={logout}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Header;
