import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/rejister/Register";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/Admin/pages/AdminDashboard";
import AddEbokForm from "./pages/Admin/component/AddEboks Form/EbookForm";
import AddPYQForm from "./pages/Admin/component/Pyq Form/AddPYQForm";
import AddStudyMaterialForm from "./pages/Admin/component/studyMaterialForm/AddStudyMaterialForm";
import Ebooks from "./pages/Ebooks/Ebooks";
import Pyqquestion from "./pages/PYQ/pages/Pyqquestion";
import ResourcePage from "./pages/studyMaterial/ResourcePage";
import toast, { Toaster } from "react-hot-toast";
import MyState from "./components/context/myState";
import { useContext } from "react";
import myContext from "./components/context/myContext";
import { useState, useEffect } from "react";
import ForgotPassword from "./pages/forgot Password/ForgotPassword";
import AddUniversity from "./pages/Admin/component/Add University/AddUniversity";
import AddCourse from "./pages/Admin/component/Add Course/AddCourse";
import Video from "../src/pages/videos/Video.jsx"
import AddVideoForm from "./pages/Admin/component/Add Video/AddVideoForm.jsx";
import Team from "./pages/OurTeam/pages/Team.jsx";
import { BASE_URL } from "../Helper.jsx";
import AddTeamForm from "./pages/Admin/component/Add Team/component/AddTeamForm.jsx";

function App() {
  return (
    <div className="w-full h-[100vh] bg-gray-600 relative">
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/rejister" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ebooks" element={<Ebooks />} />
            <Route path="/pyq" element={<Pyqquestion />} />
            <Route path="/video" element={<Video/>}  />
            <Route path="/study" element={<ResourcePage />} />
            <Route path="/forgot-password" element = {<ForgotPassword/>} />

            <Route
              path="/admindashboard"
              element={
                <AdminRouteProtected>
                  <AdminDashboard />
                </AdminRouteProtected>
              }
            />
            <Route
              path="/addebookform"
              element={
                <AdminRouteProtectedSecond>
                  <AddEbokForm />
                </AdminRouteProtectedSecond>
              }
            />
            <Route
              path="/addpyqform"
              element={
                <AdminRouteProtectedSecond>
                  <AddPYQForm />
                </AdminRouteProtectedSecond>
              }
            />
            <Route
              path="/addvideoform"
              element={
                <AdminRouteProtectedSecond>
                  <AddVideoForm/>
                 </AdminRouteProtectedSecond>
              }
            />
            <Route
              path="/addteamform"
              element={
                <AdminRouteProtectedSecond>
                  <AddTeamForm/>
                 </AdminRouteProtectedSecond>
              }
            />
            <Route
              path="/adduniversityname"
              element={
                <AdminRouteProtectedSecond>
                  <AddUniversity/>
                </AdminRouteProtectedSecond>
              }
            />
            <Route
              path="/addcoursename"
              element={
                <AdminRouteProtectedSecond>
                 <AddCourse/>
                </AdminRouteProtectedSecond>
              }
            />
            <Route
              path="/addstudymaterialform"
              element={
                <AdminRouteProtectedSecond>
                  <AddStudyMaterialForm />
                </AdminRouteProtectedSecond>
              }
            />
          </Routes>
        </Router>
      </MyState>
      <Toaster />
    </div>
  );
}

export default App;

export const AdminRouteProtected = ({ children }) => {
  const context = useContext(myContext);
  const { isAdmin, setIsAdmin, isLogin, setIsLogin } = context;
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const datavalue = JSON.parse(localStorage.getItem("user"));
        const accessToken = datavalue?.accessToken;

        // console.log(accessToken);

        if (!accessToken) {
          setIsAuthorized(false);
          setIsAdmin(false);
          return;
        }

        const response = await fetch(
          `${BASE_URL}/collegebuddy/api/v1/users/admin`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data);
        console.log(response.status);

        if (response.status === 401) {
          setIsAuthorized(false);
          setIsAdmin(false);
          return;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response");
        }

        // const data = await response.json();
        console.log(data);
        setIsAdmin(true);
        setIsAuthorized(!!data);
      } catch (error) {
        console.log("Admin protected error", error);
        toast.error("Access denied");
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthorization();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
};

export const AdminRouteProtectedSecond = ({ children }) => {
  const context = useContext(myContext);
  const { isAdmin } = context;
  return isAdmin == true ? children : <Navigate to="/login" />;
};
