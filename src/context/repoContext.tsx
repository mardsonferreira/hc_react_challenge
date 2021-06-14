import React, { createContext, useState, useContext, ReactNode } from 'react';

type RepoContextData = {
  totalRepos: number;
  updateTotalRepos: (total: number) => void;
};

type RepoContextProviderProps = {
  children: ReactNode;
};

export const RepoContext = createContext({} as RepoContextData);

export function RepoContextProvider({ children }: RepoContextProviderProps) {
  const [totalRepos, setTotalRepos] = useState(0);

  function updateTotalRepos(total: number) {
    setTotalRepos(total);
  }

  return (
    <RepoContext.Provider
      value={{
        totalRepos,
        updateTotalRepos,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}

export const useRepos = () => {
  return useContext(RepoContext);
};
