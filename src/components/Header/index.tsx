import React, { useState } from 'react';
import { FaGithubAlt, FaBookmark } from 'react-icons/fa';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';

import { Container, Info, Delete, Emoji, Empty } from './styles';
import { List, CardInfo, Content, Description } from '../List';

import { useRepos } from '../../context/repoContext';
import Modal from '../Modal';

const emojis = {
  sad: '🙁',
};

export default function Header() {
  const { totalRepos, favoriteRepos, updateFavorites } = useRepos();

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
        {favoriteRepos.length > 0 ? (
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
                      onClick={() => updateFavorites(repository)}
                    />
                  </Delete>
                </CardInfo>
              </li>
            ))}
          </List>
        ) : (
          <Empty>
            <Emoji>{emojis.sad}</Emoji>
            <span> You do not have favorites repositories. </span>
          </Empty>
        )}
      </Modal>
    </Container>
  );
}
