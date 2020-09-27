import styled, { css } from 'styled-components';
import ToolTip from '../ToolTip';

interface ContainerInterface {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerInterface>`
  background: #232129;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #e53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 10px;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030;
    }
  }
`;
