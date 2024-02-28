import { createContext, useContext, useState } from "react";

const UserFilterContext = createContext();

export const UserFilterProvider = ({ children, initialData }) => {
  const [users, setUsers] = useState(initialData);
  const [filteredUsers, setFilteredUsers] = useState(initialData);

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

  return (
    <UserFilterContext.Provider
      value={{ filteredUsers, filterByName, filterByRole, resetFilter }}>
      {children}
    </UserFilterContext.Provider>
  );
};

export const useUserFilter = () => {
  return useContext(UserFilterContext);
};
