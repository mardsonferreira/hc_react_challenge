import React, { createContext, useState, useContext, ReactNode } from 'react';

type Repository = {
  id: number;
  title: string;
  description: string;
  forks: number;
  stars: number;
  favorite: boolean;
};

type RepoContextData = {
  totalRepos: number;
  favoriteRepos: Repository[];
  updateTotalRepos: (total: number) => void;
  addToFavorites: (repository: Repository) => void;
  removeFromFavorites: (repoId: number) => void;
};

type RepoContextProviderProps = {
  children: ReactNode;
};

export const RepoContext = createContext({} as RepoContextData);

export function RepoContextProvider({ children }: RepoContextProviderProps) {
  const [totalRepos, setTotalRepos] = useState(0);
  const [favoriteRepos, setFavoriteRepos] = useState<Repository[]>([]);

  function updateTotalRepos(total: number) {
    setTotalRepos(total);
  }

  function addToFavorites(repository: Repository) {
    const index = favoriteRepos.findIndex((repo) => {
      return repo.id === repository.id;
    });

    if (index === -1) {
      setFavoriteRepos((oldRepos) => [...oldRepos, repository]);
    }
  }

  function removeFromFavorites(repoId: number) {
    const newFavoritesRepos = favoriteRepos.filter(
      (repo) => repo.id !== repoId
    );

    setFavoriteRepos(newFavoritesRepos);
  }

  return (
    <RepoContext.Provider
      value={{
        totalRepos,
        favoriteRepos,
        updateTotalRepos,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}

export const useRepos = () => {
  return useContext(RepoContext);
};
