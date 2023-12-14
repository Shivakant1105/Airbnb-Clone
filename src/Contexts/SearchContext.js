import React, { useState } from "react";

export const SearchContext = React.createContext();

function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  return (
    <SearchContext.Provider value={{search, setSearch,input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
}
export default SearchProvider;
