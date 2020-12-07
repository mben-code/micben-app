import styled, { css } from 'styled-components';

const floatAnimation = css`
  opacity: 1;
  padding-left: 0;
  transform: scale(0.75) translateY(-100%) translateX(-12.5%);
`;

const inputStyle = css`
  padding: 10px;
  margin: 0;
  background: transparent;
  border: 1px solid white;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.font.fontFamily};
  display: block;
  width: 100%;

  &,
  &::after,
  &::before {
    box-sizing: border-box;
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
    outline: none;
    transition: border-color 0.3s ease;
  }
`;

export const InputComp = styled.input`
  ${inputStyle}
`;

export const TextareaComp = styled.textarea`
  ${inputStyle}
`;

export const FloatLabel = styled.span`
  padding: 10px;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0.5;
  font-family: ${({ theme }) => theme.font.fontFamily};

  input:focus + &,
  input:not(:placeholder-shown) + & {
    ${floatAnimation}
  }

  textarea:focus + &,
  textarea:not(:placeholder-shown) + & {
    ${floatAnimation}
  }
`;

export const InputWrap = styled.label`
  margin: 20px 10px;
  position: relative;
  display: inline-block;
  width: 100%;
`;
