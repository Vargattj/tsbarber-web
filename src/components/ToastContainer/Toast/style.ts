import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const ToastVariations = {
  info: css`
    color: #3172b7;
    background: #ebf8ff;
  `,
  success: css`
    background: #e6ffea;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  position: relative;
  display: flex;

  width: 360px;
  padding: 16px 30px 16px 16px;

  background: #ebf8ff;
  border-radius: 15px;

  & + div {
    margin-top: 8px;
  }

  ${(props) => ToastVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;

    border: 0;
    background: transparent;

    color: inherit;
    opacity: 0.6;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
