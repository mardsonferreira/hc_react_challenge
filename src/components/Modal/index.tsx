import React, { ReactNode } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

import { Container, Content, Header, Title, Close } from './styles';

type ModalProps = {
  children: ReactNode;
  show: boolean;
  close: () => void;
};

export default function Modal({ children, show, close }: ModalProps) {
  return (
    <Container show={show}>
      <Content>
        <Header>
          <Title>
            <FaGithubAlt />
            <span> Favorite Repositories </span>
          </Title>

          <Close>
            <GrClose size={20} onClick={close} />
          </Close>
        </Header>
        {children}
      </Content>
    </Container>
  );
}
