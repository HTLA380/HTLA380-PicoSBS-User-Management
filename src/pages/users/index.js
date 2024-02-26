import React from "react";

import { UsersListInfos } from "constants/data";

import Layout from "@/components/Layout";
import TableFilter from "@/components/table/tableFilter/TableFilter";
import TablePagination from "@/components/table/TablePagination";
import CustomTable from "@/components/table/CustomTable";

const tableHeader = ["User", "Username", "Role", "Status"];

// ====================================================

const UsersList = () => {
  return (
    <Layout>
      <div className="pb-5 ml-4 bg-white rounded-lg">
        <div className="rounded-xl">
          <div className="mb-4">
            <TableFilter placeholder="Search user" />
          </div>
          <CustomTable tableHeader={tableHeader} rowData={UsersListInfos} />
          <div className="my-6">
            <TablePagination />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UsersList;
