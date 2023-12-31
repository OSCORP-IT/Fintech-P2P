import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="h-screen">
      <Header />
      <div className="w-full h-[88px]"></div>
      <main className="h-full leading-tight">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;
