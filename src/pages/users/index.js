import React from "react";

import Layout from "@/components/Layout";
import TableFilter from "@/components/table/tableFilter/TableFilter";
import TablePagination from "@/components/table/TablePagination";
import CustomTable from "@/components/table/CustomTable";
import { UserFilterProvider } from "@/context/UserFilter";
import { UsersListInfos } from "constants/data";

// ====================================================

const UsersList = () => {
  return (
    <UserFilterProvider initialData={UsersListInfos}>
      <Layout>
        <div className="pb-5 ml-4 bg-white rounded-lg">
          <div className="rounded-xl">
            <div className="mb-4">
              <TableFilter placeholder="Search user" />
            </div>
            <CustomTable />
            <div className="my-6">
              <TablePagination />
            </div>
          </div>
        </div>
      </Layout>
    </UserFilterProvider>
  );
};

export default UsersList;
