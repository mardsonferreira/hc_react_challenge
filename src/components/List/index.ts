import styled from 'styled-components';
import colors from '../../styles/colors';

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid ${colors.hc_gray_medium};
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 16px;
`;

export const Description = styled.p`
  padding-top: 8px;
  padding-bottom: 8px;
`;
