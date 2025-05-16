import React, { useState } from 'react';
import UserContext from './UserContext';
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); //access the data user and setUser and others too and render the children prop or comp
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
