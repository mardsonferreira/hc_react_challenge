import React, { createContext, useState, useContext } from 'react';

import { Repository, RepoContextData, RepoContextProviderProps } from './types';

export const RepoContext = createContext({} as RepoContextData);

export function RepoContextProvider({ children }: RepoContextProviderProps) {
  const [totalRepos, setTotalRepos] = useState(0);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [favoriteRepos, setFavoriteRepos] = useState<Repository[]>([]);

  function loadRepositories(repos: Repository[]) {
    setRepositories(repos);
    setTotalRepos(repos.length);
  }

  function updateFavorites(repository: Repository) {
    const index = repositories.findIndex((repo) => {
      return repo.id === repository.id;
    });

    const newRepos = [...repositories];

    if (index !== -1) {
      newRepos[index] = {
        ...repository,
        favorite: !repository.favorite,
      };

      setRepositories(newRepos);
    }

    if (!repository.favorite) {
      setFavoriteRepos((oldRepos) => [...oldRepos, newRepos[index]]);
    } else {
      const newFavorites = favoriteRepos.filter(
        (repo) => repo.id !== repository.id
      );
      setFavoriteRepos(newFavorites);
    }
  }

  return (
    <RepoContext.Provider
      value={{
        totalRepos,
        repositories,
        favoriteRepos,
        loadRepositories,
        updateFavorites,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}

export const useRepos = () => {
  return useContext(RepoContext);
};
