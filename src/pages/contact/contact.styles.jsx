import styled from 'styled-components';

export const ContactContainer = styled.div`
  position: absolute;
  margin: 50px 5%;
  width: 70%;
`;

export const ContactTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.fontSize_lg};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-weight: 700;
  margin-bottom: 50px;
  text-rendering: optimizeLegibility;
`;

export const ContactBody = styled.div`
  display: flex;
`;

export const ContactForm = styled.form`
  flex: 1;
`;

export const ContactInfo = styled.div`
  flex: 1;
  padding-left: 10%;
  font-family: ${({ theme }) => theme.font.fontFamily};

  color: white;
`;

export const InfoTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.fontSize_lg};
`;

export const InfoBody = styled.p`
  font-size: ${({ theme }) => theme.font.fontSize_md};
`;
