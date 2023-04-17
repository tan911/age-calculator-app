import styled from 'styled-components';

const Output = styled.div`
  p {
    font-size: 7rem;
    font-family: 'Poppins-ExtraBoldItalic';
    color: ${({ theme }) => theme.colors.offBlack};
    padding: 0;
    line-height: ${({ theme }) => theme.lineHeights[0]};
  }

  span {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export { Output };
