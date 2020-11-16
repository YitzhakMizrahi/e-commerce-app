import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 400px) {
    padding: 0 30px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
