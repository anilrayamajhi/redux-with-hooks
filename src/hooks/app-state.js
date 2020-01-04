import React, { createContext, useReducer, useContext } from "react";
import { useCombinedReducers } from ".";

import { cmsReducer } from "../reducer";

const Context = createContext();

export function StoreProvider({ initialState = {}, children }) {
  const [state, dispatch] = useCombinedReducers({
    cms: useReducer(cmsReducer, initialState)
  });

  return <Context.Provider value={{ state, dispatch }} children={children} />;
}

export const useStore = () => useContext(Context);
