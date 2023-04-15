import styled from 'styled-components';

const Block = styled.div`
  max-width: 53.125rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 0.15px rgba(0, 0, 0, 0.05);
  padding: ${({ theme }) => theme.space[6]}px;
`;

export { Block };
