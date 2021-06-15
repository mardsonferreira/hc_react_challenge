import React, { ReactNode } from 'react';

export type Repository = {
  id: number;
  title: string;
  description: string;
  forks: number;
  stars: number;
  favorite: boolean;
};

export type RepoContextData = {
  totalRepos: number;
  repositories: Repository[];
  favoriteRepos: Repository[];
  updateFavorites: (repository: Repository) => void;
  loadRepositories: (repositories: Repository[]) => void;
};

export type RepoContextProviderProps = {
  children: ReactNode;
};
