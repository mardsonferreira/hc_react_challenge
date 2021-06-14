import React from 'react';
import { FaGithubAlt, FaBookmark } from 'react-icons/fa';
import { RiGitRepositoryFill } from 'react-icons/ri';

import { Container, Info } from './styles';

import { useRepos } from '../../context/repoContext';

export default function Header() {
  const { totalRepos } = useRepos();

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Info>
        <RiGitRepositoryFill />
        <span>{totalRepos}</span>

        <FaBookmark />
        <span>10</span>
      </Info>
    </Container>
  );
}
