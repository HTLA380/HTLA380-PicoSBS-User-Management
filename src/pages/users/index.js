import React, { useState } from "react";

import { UsersListInfos } from "constants/data";

import Layout from "@/components/Layout";
import TableFilter from "@/components/table/tableFilter/TableFilter";
import TablePagination from "@/components/table/TablePagination";
import CustomTable from "@/components/table/CustomTable";

const tableHeader = ["User", "Username", "Role", "Status"];

// ====================================================

const UsersList = () => {
  const [filteredUsers, setFilteredUsers] = useState(UsersListInfos);

  const handleFilterChange = (searchText) => {
    const filteredData = UsersListInfos.filter((data) =>
      data.user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  return (
    <Layout>
      <div className="pb-5 ml-4 bg-white rounded-lg">
        <div className="rounded-xl">
          <div className="mb-4">
            <TableFilter
              placeholder="Search user"
              onChange={handleFilterChange}
            />
          </div>
          <CustomTable tableHeader={tableHeader} rowData={filteredUsers} />
          <div className="my-6">
            <TablePagination />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UsersList;
