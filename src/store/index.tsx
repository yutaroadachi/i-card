import React, { createContext, useReducer } from 'react';
import {
  ProfileState,
  profileReducer,
  initialProfileState,
} from 'store/reducers';

type StoreState = {
  profile: ProfileState;
};

const initialState: StoreState = {
  profile: initialProfileState,
};

export const Store = createContext<StoreState | any>(initialState);

export const StoreProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    initialProfileState,
  );

  const state = {
    profile: profileState,
  };

  const dispatch = {
    profile: profileDispatch,
  };

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
