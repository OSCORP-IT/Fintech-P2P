import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Registration from "./features/authentication/Registration";
import OtpCheck from "./features/authentication/OtpCheck";
import Join from "./features/authentication/Join";
import ProfilePic from "./features/authentication/ProfilePic";
import AboutUs from "./features/pages/about/AboutUs";
import Help from "./features/pages/help/Help";
import ProfileOverview from "./features/user/ProfileOverview";
import Portfolio from "./features/user/Portfolio";
import ProfessionalInfo from "./features/user/ProfessionalInfo";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/otp_confirm",
        element: <OtpCheck />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/profile_picture",
        element: <ProfilePic />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/user/profile",
        element: <ProfileOverview />,
      },
      {
        path: "/user/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/user/portfolio/professional",
        element: <ProfessionalInfo />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
