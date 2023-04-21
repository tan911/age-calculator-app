import styled from 'styled-components';

const Output = styled.div`
  p {
    font-size: clamp(1.13rem, calc(-2.42rem + 17.74vw), 7.00rem);
    font-family: 'Poppins-ExtraBoldItalic';
    color: ${({ theme }) => theme.colors.offBlack};
    padding: 0;
    line-height: ${({ theme }) => theme.lineHeights[0]};


    @media only screen and ${({theme}) => theme.device.tablet} {
      font-size: clamp(1.13rem, calc(-3.07rem + 20.98vw), 7.00rem);
    }
  }

  span {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export { Output };
