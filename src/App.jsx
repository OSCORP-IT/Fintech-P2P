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
import BasicInfo from "./features/businessLoan/basicInfo/BasicInfo";
import BusinessInfo from "./features/businessLoan/businessInfo/BusinessInfo";
import Contact from "./features/pages/contact/contact";
import DashboarLayout from "./features/user-v2/DashboarLayout";
import Loans from "./features/user-v2/Loans";
import Transaction from "./features/user-v2/Transaction";
import PortfolioContainer from "./features/user-v2/portfolio/PortfolioContainer";

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
        path: "/user/business_loan/basicInfo",
        element: <BasicInfo />,
      },
      {
        path: "/user/business_loan/businessInfo",
        element: <BusinessInfo />,
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: <DashboarLayout />,
  },
  {
    path: "/user/loans",
    element: <Loans />,
  },
  {
    path: "/user/portfolio/:infoStep",
    element: <PortfolioContainer />,
  },
  {
    path: "/user/transactions",
    element: <Transaction />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
