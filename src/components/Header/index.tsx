import React from 'react';
import { FaGithubAlt, FaBookmark } from 'react-icons/fa';
import { RiGitRepositoryFill } from 'react-icons/ri';

import { Container, Info } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Info>
        <RiGitRepositoryFill />
        <span>10</span>

        <FaBookmark />
        <span>10</span>
      </Info>
    </Container>
  );
}
