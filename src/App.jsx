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
import BankDetails from "./features/user/BankDetails";
import Guarantor from "./features/user/Guarantor";
import Dashboard from "./features/user/Dashboard";
import BasicInfo from "./features/businessLoan/basicInfo/BasicInfo";
import BusinessInfo from "./features/businessLoan/businessInfo/BusinessInfo";
import Contact from "./features/pages/contact/contact";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Help />,
      },
      {
        path: "/user/profile",
        element: <ProfileOverview />,
      },
      {
        path: "/user/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/portfolio/personal",
        element: <Portfolio />,
      },
      {
        path: "/user/portfolio/professional",
        element: <ProfessionalInfo />,
      },
      {
        path: "/user/portfolio/bank_details",
        element: <BankDetails />,
      },
      {
        path: "/user/portfolio/guarantor",
        element: <Guarantor />,
      },
      {
        path: "/user/business_loan/basicInfo",
        element: <BasicInfo />,
      },
      {
        path: "/user/business_loan/businessInfo",
        element: <BusinessInfo />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
