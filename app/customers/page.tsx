import CustomerHeader from "@/components/authenticated/customer-header";
import CustomersTable from "@/components/authenticated/customers-table";
import React from "react";
const Page = () => {
  return (
    <div>
      <CustomerHeader />

      <CustomersTable />
    </div>
  );
};

export default Page;
