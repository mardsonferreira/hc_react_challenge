import styled, { keyframes, css } from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form.attrs()`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: ${(props) => (props.error ? '2px solid red' : '1px solid #eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: ${colors.hc_blue};
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

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

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 64px;
`;

export const Description = styled.div`
  border-radius: 5px;
  padding: 8px 0;
  width: 100%;
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  span {
    color: ${colors.hc_black};
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Notifications = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Notification = styled.span`
  position: relative;
  display: inline-block;
`;

export const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
`;

export const Button = styled.button.attrs((props) => ({
  type: 'button',
  disabled: props.loading,
}))`
  background: none;
  border: none;
  margin-right: 5px;

  svg {
    margin: 0;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Favorite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
