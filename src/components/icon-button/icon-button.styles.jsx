import styled from 'styled-components';

export const LinkButton = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.fontSize_lg};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    transition: all 0.5s ease;
  }
`;
