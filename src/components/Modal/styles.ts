import styled from 'styled-components';

export const Container = styled.div.attrs((props) => ({
  show: props.show,
}))`
  display: ${(props) => (props.show ? 'block' : 'none')};

  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  background-color: #fff;
  margin: 16% auto;
  padding: 16px;
  border: 1px solid #eee;
  width: 64%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;

  svg {
    margin: 0;
  }
`;

export const Title = styled.h1`
  gap: 8px;
`;

export const Close = styled.span`
  cursor: pointer;
`;
