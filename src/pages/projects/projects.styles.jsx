import styled from 'styled-components';

export const ProjectContainer = styled.div`
  position: absolute;
  font-family: ${({ theme }) => theme.font.fontFamily};
  margin: 50px 5%;
`;

export const ProjectTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.fontSize_lg};
  font-weight: 700;
  margin-bottom: 50px;
  text-rendering: optimizeLegibility;
`;

export const ProjectItem = styled.div`
  margin-bottom: 40px;
`;

export const ItemTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.fontSize_xl};
  margin-bottom: 30px;
  text-rendering: optimizeLegibility;
`;

export const ItemBody = styled.p`
  font-size: ${({ theme }) => theme.font.fontSize_md};
  line-height: 15px;
`;

export const ItemLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  cursor: pointer;
`;
