import React, { useEffect, useState } from 'react';
import { FaSearch, FaSpinner, FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { GoRepoForked, GoStar } from 'react-icons/go';

import {
  Form,
  SubmitButton,
  Notifications,
  Notification,
  Favorite,
} from './styles';
import { List, CardInfo, Content, Description } from '../../components/List';

import api from '../../services/api';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Header from '../../components/Header';

import { useRepos } from '../../context/repoContext';

type RepositoryProps = {
  id: number;
  title: string;
  description: string;
  forks: number;
  stars: number;
  favorite: boolean;
};

export default function Main() {
  const { repositories, updateFavorites, loadRepositories } = useRepos();

  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleInputChange(e) {
    setUsername(e.target.value);
    setError(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.get(`/users/${username}/repos`);

      const repos = response.data.map((repo) => {
        return {
          id: repo.id,
          title: repo.name,
          description: repo.description,
          forks: repo.forks_count,
          stars: repo.stargazers_count,
          favorite: false,
        };
      });

      setLoading(false);
      setError(false);

      loadRepositories(repos);

      setUsername('');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(false);
    }
  }

  function handleToggleFavorite(repository: RepositoryProps) {
    updateFavorites(repository);
  }

  return (
    <Container>
      <Header />

      <Form onSubmit={handleSubmit} error={error}>
        <input
          type="text"
          placeholder="Type your git username"
          value={username}
          onChange={handleInputChange}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaSearch color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repository) => (
          <li key={repository.id}>
            <CardInfo>
              <Content>
                <Favorite>
                  <Button
                    type="button"
                    onClick={() => handleToggleFavorite(repository)}
                  >
                    {repository.favorite ? <FaBookmark /> : <FaRegBookmark />}
                  </Button>
                  <span>{repository.title}</span>
                </Favorite>

                {repository.description ? (
                  <Description>
                    <span>{repository.description}</span>
                  </Description>
                ) : (
                  ''
                )}
              </Content>

              <Notifications>
                <Notification>
                  <GoStar />
                  <span>{repository.stars}</span>
                </Notification>

                <Notification>
                  <GoRepoForked />
                  <span>{repository.forks}</span>
                </Notification>
              </Notifications>
            </CardInfo>
          </li>
        ))}
      </List>
    </Container>
  );
}
