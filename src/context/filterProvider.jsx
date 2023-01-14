import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, dispatch] = useReducer(reducer, initialState);
  console.log(filter);
  return (
    <FilterContext.Provider value={{ filter, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
