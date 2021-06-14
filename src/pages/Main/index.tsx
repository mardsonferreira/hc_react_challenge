import React, { useEffect, useState } from 'react';
import {
  FaGithubAlt,
  FaSearch,
  FaSpinner,
  FaRegBookmark,
  FaBookmark,
} from 'react-icons/fa';
import { GoRepoForked, GoStar } from 'react-icons/go';

import api from '../../services/api';
import Container from '../../components/Container';
import {
  Form,
  SubmitButton,
  List,
  Content,
  Description,
  CardInfo,
  Notifications,
  Notification,
  Button,
  Favorite,
} from './styles';

interface RepositoryProps {
  id: number;
  title: string;
  description: string;
  forks: number;
  stars: number;
  favorite: boolean;
}

export default function Main() {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [favoriteRepos, setFavoriteRepos] = useState<RepositoryProps[]>([]);

  function handleInputChange(e) {
    setUsername(e.target.value);
    setError(false);
  }

  function handleToggleFavorite(repoId) {
    const updatedRepositories = repositories.map((repo) => {
      if (repo.id === repoId) {
        return {
          ...repo,
          favorite: !repo.favorite,
        };
      }

      return repo;
    });

    setRepositories(updatedRepositories);
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

      setRepositories(repos);

      setUsername('');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(false);
    }
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Form onSubmit={handleSubmit} error={error}>
        <input
          type="text"
          placeholder="Type your git username"
          value={username}
          onChange={handleInputChange}
        />
        <SubmitButton loading={loading}>
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
                    onClick={() => handleToggleFavorite(repository.id)}
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
