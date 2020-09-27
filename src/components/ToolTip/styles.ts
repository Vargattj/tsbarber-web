import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    background-color: #ff9000;

    width: 160px;
    padding: 8px;
    border-radius: 4px;

    font-weight: 500;
    font-size: 14px;
    color: #312e38;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;
    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
