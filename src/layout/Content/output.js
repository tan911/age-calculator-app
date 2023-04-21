import styled from 'styled-components';

const Output = styled.div`
  p {
    font-size: clamp(1.13rem, calc(-3.07rem + 20.98vw), 7rem);
    font-family: 'Poppins-ExtraBoldItalic';
    color: ${({ theme }) => theme.colors.offBlack};
    padding: 0;
    line-height: ${({ theme }) => theme.lineHeights[0]};

    @media only screen and ${({ theme }) => theme.device.tablet} {
      font-size: clamp(1.35rem, calc(-3.81rem + 25.81vw), 9.9rem);
    }

    @media only screen and ${({ theme }) => theme.device.mobileL} {
      font-size: clamp(1.62rem, calc(-5.85rem + 37.36vw), 14rem);
    }

    @media only screen and ${({ theme }) => theme.device.mobileS} {
      font-size: clamp(2.33rem, calc(-13.15rem + 77.44vw), 27.98rem);
    }
  }

  span {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export { Output };
