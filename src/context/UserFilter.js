import React, { createContext, useContext, useState } from "react";

const UserFilterContext = createContext();

export const UserFilterProvider = ({ children, initialData }) => {
  const [users, setUsers] = useState(initialData);
  const [filteredUsers, setFilteredUsers] = useState(initialData);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsersId, setSelectedUsersId] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const filterByName = (searchText) => {
    const filteredData = users.filter((data) =>
      data.user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  const filterByRole = ({ role, status }) => {
    const filtered = users.filter((user) => {
      if (role && status) {
        return user.role === role && user.status === status;
      } else if (role) {
        return user.role === role;
      } else if (status) {
        return user.status === status;
      }

      return true;
    });

    setFilteredUsers(filtered);
  };

  const resetFilter = () => {
    setFilteredUsers(users);
  };

  const deleteUser = () => {
    // Filter out selected users from the users array
    const updatedUsers = users.filter(
      (user) => !selectedUsersId.includes(user.id)
    );

    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedUsersId([]); // Clear selected users
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  // Calculate the range of items to display based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <UserFilterContext.Provider
      value={{
        users,
        setUsers,
        filteredUsers,
        setFilteredUsers,
        itemsPerPage,
        setItemsPerPage,
        currentPage,
        setCurrentPage,
        selectedUsersId,
        setSelectedUsersId,
        selectAllChecked,
        setSelectAllChecked,

        filterByName,
        filterByRole,
        resetFilter,
        deleteUser,
        paginatedUsers,
        handleItemsPerPageChange,
      }}>
      {children}
    </UserFilterContext.Provider>
  );
};

export const useUserFilter = () => {
  return useContext(UserFilterContext);
};
