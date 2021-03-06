import styled from 'styled-components';

export const SkillsContainer = styled.div`
  position: absolute;
  margin: 50px 5%;
`;

export const SkillsTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.fontSize_lg};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-weight: 700;
  margin-bottom: 50px;
  text-rendering: optimizeLegibility;
`;
