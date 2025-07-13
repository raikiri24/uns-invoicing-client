import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardTabs = () => {
  return (
    <div className="py-2">
      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="announcements">Annoucements</TabsTrigger>
          <TabsTrigger value="recent-updates">Recent Updates</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard"></TabsContent>
        <TabsContent value="annoucements"></TabsContent>
        <TabsContent value="recent-updates"></TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardTabs;
