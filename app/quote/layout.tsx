import React from "react";
import AuthenticatedNavigation from "@/components/authenticated/navigation";
import { AuthenticatedSidebar } from "@/components/authenticated/sidebar";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <AuthenticatedSidebar>
      <div className="w-full">
        <AuthenticatedNavigation />
        {children}
      </div>
    </AuthenticatedSidebar>
  );
};

export default Layout;
