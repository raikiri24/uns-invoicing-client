import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import React from "react";
const Page = () => {
  return (
    <div className="bg-[url('/images/background.png')] shadow-xs bg-cover bg-no-repeat w-full p-10 bg-opacity-5">
      <div className="flex">
        <Card className="bg-white p-4">
          <Building2 />
        </Card>
      </div>
    </div>
  );
};

export default Page;
