import styled, { css } from 'styled-components';

const styleForPlaying = css``;

export const OutlinedButton = styled.button`
  min-width: 120px;
  width: 100%;
  position: relative;

  text-align: center;
  text-transform: uppercase;

  padding: 10px 15px;
  margin: 20px 10px;

  border-radius: 10px;
  border: 1px solid white;
  background: transparent;
  color: ${({ theme }) => theme.color.primary};

  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: ${({ theme }) => theme.font.fontSize_md};

  &:hover {
    cursor: pointer;
    &::before {
      border: 0px;
    }
    background: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
    color: white;
    transition: all 0.5s ease;
  }

  &:focus {
    outline: none;
  }

  ${styleForPlaying}
`;
