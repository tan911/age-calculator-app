import styled from 'styled-components';

const Block = styled.main`
  max-width: 53.125rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 0.15px rgba(0, 0, 0, 0.05);
  padding: ${({ theme }) => theme.space[6]}px;
  border-radius: 30px 30px 200px 30px;

  @media only screen and ${({ theme }) => theme.device.tablet} {
    max-width: 43.75rem;
    width: 90%;
    padding: ${({ theme }) => theme.space[6]}px ${({ theme }) => theme.space[5]}px;
    margin: 0 auto;
  }

  @media only screen and ${({ theme }) => theme.device.mobileL} {
    padding: ${({ theme }) => theme.space[6]}px ${({ theme }) => theme.space[4]}px;
    border-radius: 30px 30px 150px 30px;
  }

  @media only screen and ${({ theme }) => theme.device.mobileM} {
    border-radius: 30px 30px 100px 30px;
  }
`;

export { Block };
