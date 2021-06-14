import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;

  span:first-of-type {
    margin-right: 8px;
  }

  svg {
    margin-right: 2px;
  }
`;
