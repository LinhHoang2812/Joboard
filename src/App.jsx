import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/AuthPageComponents/Login";
import Signup from "./components/AuthPageComponents/Signup";
import { loader as signupLoader } from "./components/AuthPageComponents/Signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  SearchJobsPage,
  AuthPage,
  LandingPage,
  DashboardPage,
  JobboardPage,
  Profile,
} from "./pages";
import ProtectedRoute from "./layout/protectedRoute";
import ShareLayout from "./layout/ShareLayout";
import { loader as adzunaLoader } from "./pages/SearchJobsPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "landing",
        element: <LandingPage />,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <ShareLayout />
          </ProtectedRoute>
        ),
        children: [
          { path: "search", element: <SearchJobsPage />, loader: adzunaLoader },
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          { index: true, element: <JobboardPage /> },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "auth",
        element: <AuthPage />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
            loader: signupLoader,
          },
        ],
      },
    ],
    {
      basename: "/Joboard",
    }
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
