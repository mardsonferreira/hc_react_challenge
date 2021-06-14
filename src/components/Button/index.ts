import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  type: 'button',
  disabled: props.loading,
}))`
  background: none;
  border: none;

  svg {
    margin: 0;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default Button;
