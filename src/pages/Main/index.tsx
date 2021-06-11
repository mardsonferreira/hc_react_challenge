import React, { useEffect, useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
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
  Badge,
} from './styles';

interface RepositoryProps {
  id: number;
  title: string;
  description: string;
  forks: number;
  stars: number;
}

export default function Main() {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

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
            <FaPlus color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repository) => (
          <li key={repository.id}>
            <Content>
              <CardInfo>
                <span>{repository.title}</span>

                <Notifications>
                  <Notification>
                    <GoStar />
                    <Badge>{repository.stars}</Badge>
                  </Notification>

                  <Notification>
                    <GoRepoForked />
                    <Badge>{repository.forks}</Badge>
                  </Notification>
                </Notifications>
              </CardInfo>
              {repository.description ? (
                <Description>
                  <span>{repository.description}</span>
                </Description>
              ) : (
                ''
              )}
            </Content>
          </li>
        ))}
      </List>
    </Container>
  );
}
