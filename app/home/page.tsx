import DashboardTabs from "@/components/authenticated/dashboard-tabs";
import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="bg-primary bg-cover bg-no-repeat w-full p-8 bg-opacity-5 ">
        <div className="flex items-center gap-4">
          <Card className=" p-4 border-white">
            <div className="flex justify-center items-center">
              <Building2 />
            </div>
          </Card>
          <div className="">
            <p className="font-bold">Hello User!</p>
            <p className="text-xs text-muted-foreground">Demo Account</p>
          </div>
        </div>
      </div>
      <DashboardTabs />
    </div>
  );
};

export default Page;
