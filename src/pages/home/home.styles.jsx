import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const HomeContainer = styled.div`
  position: absolute;
  margin: 50px 5%;
`;

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.fontSize_lg};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-weight: 700;
  margin-bottom: 50px;
  text-rendering: optimizeLegibility;
`;

export const Player = styled(ReactPlayer)`
  width: 640px;
  height: 480px;
  margin-bottom: 50px;
`;

export const HomeBody = styled.p`
  font-size: ${({ theme }) => theme.font.fontSize_md};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-weight: 600;
  text-rendering: optimizeLegibility;
  line-height: 1.9em;
  width: 50vw;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
`;
