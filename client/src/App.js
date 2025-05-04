import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import permit, { LoginMethod } from "@permitio/permit-js";
import Login from "./components/Login";
import Header from "./components/Header";
import AIAgentCard from "./components/AIAgent";
import RequestAccess from "./components/RequestAccess";
import DocumentList from "./components/DocumentsList";
import ApprovalsWidget from "./components/ApprovalsWidget";
import getUserDetails from "./utils/getUserDetails";

// ⛔️ DON'T use useNavigate here!

// ✅ Wrap AppRoutes inside <Router>
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

// ✅ Now use useNavigate safely
function AppRoutes() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = getUserDetails().userId;
    const storedTenant = getUserDetails().tenantId;
    if (storedUser && storedTenant) {
      setUser({ userId: storedUser, tenantId: storedTenant });
    }
  }, []);

  const handleLogin = async (event) => {
    try {
      const session = await permit.elements.login({
        loginUrl: `${process.env.REACT_APP_SERVER_URL}/api/user-login?userId=${event.userId}&tenantId=${event.tenantId}`,
        loginMethod: LoginMethod.cookie,
      });

      localStorage.setItem("userId", event.userId);
      localStorage.setItem("tenantId", event.tenantId);
      setUser({ userId: event.userId, tenantId: event.tenantId });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await permit.elements.logout();
      localStorage.removeItem("userId");
      localStorage.removeItem("tenantId");
      setUser(null);
      Cookies.remove("permit_session", { path: "/" });
      navigate("/"); // Safe to use here
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {user && <Header user={user} logout={handleLogout} />}
      <Routes>
        {!user ? (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        ) : (
          <>
            <Route path="/" element={<Navigate to="/agent" />} />
            <Route path="/agent" element={<AIAgentCard />} />
            <Route path="/request-access" element={<RequestAccess />} />
            <Route path="/documents" element={<DocumentList />} />
            <Route path="/approvals" element={<ApprovalsWidget />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
