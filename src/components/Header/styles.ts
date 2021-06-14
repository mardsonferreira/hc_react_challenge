import styled from 'styled-components';
import colors from '../../styles/colors';

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
    cursor: pointer;
  }
`;

export const Notifications = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 16px;
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 2px;
  }
`;

export const Favorite = styled.div`
  span {
    color: ${colors.hc_black};
    font-size: 18px;
    font-weight: bold;
    margin-left: 8px;
  }
`;

export const Delete = styled.span`
  cursor: pointer;
`;
