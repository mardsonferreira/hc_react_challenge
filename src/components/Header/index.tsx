import React, { useState } from 'react';
import { FaGithubAlt, FaBookmark } from 'react-icons/fa';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';

import { Container, Info, Delete } from './styles';
import { List, CardInfo, Content, Description } from '../List';

import { useRepos } from '../../context/repoContext';
import Modal from '../Modal';

export default function Header() {
  const { totalRepos, favoriteRepos, removeFromFavorites } = useRepos();

  const [showModal, setShowModal] = useState(false);

  function displayFavoritesRepos() {
    setShowModal(!showModal);
  }

  function closeModal() {
    setShowModal(!showModal);
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Info>
        <RiGitRepositoryFill />
        <span>{totalRepos}</span>

        <FaBookmark onClick={displayFavoritesRepos} />
        <span>{favoriteRepos.length}</span>
      </Info>
      <Modal show={showModal} close={closeModal}>
        <List>
          {favoriteRepos.map((repository) => (
            <li key={repository.id}>
              <CardInfo>
                <Content>
                  <h2>{repository.title}</h2>
                  {repository.description ? (
                    <Description>
                      <span>{repository.description}</span>
                    </Description>
                  ) : (
                    ''
                  )}
                </Content>

                <Delete>
                  <MdDelete
                    size={20}
                    onClick={() => removeFromFavorites(repository.id)}
                  />
                </Delete>
              </CardInfo>
            </li>
          ))}
        </List>
      </Modal>
    </Container>
  );
}
