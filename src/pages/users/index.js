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

  const handleSearchChange = (searchText) => {
    const filteredData = UsersListInfos.filter((data) =>
      data.user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  const handleFilterChange = ({ role, status }) => {
    const filtered = UsersListInfos.filter((user) => {
      if (role && status) {
        return user.role === role && user.status === status;
      } else if (role) {
        return user.role === role;
      } else if (status) {
        return user.status === status;
      }

      return true;
    });
    console.log(filtered);

    setFilteredUsers(filtered);
  };

  return (
    <Layout>
      <div className="pb-5 ml-4 bg-white rounded-lg">
        <div className="rounded-xl">
          <div className="mb-4">
            <TableFilter
              placeholder="Search user"
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
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
