import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media only screen and ${({ theme }) => theme.device.tablet} {
    margin-bottom: 4rem;
  }

  .field-group {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;

    @media only screen and ${({ theme }) => theme.device.tablet} {
      margin-bottom: 3rem;
    }

    @media only screen and ${({ theme }) => theme.device.mobileL} {
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
  }

  .btn-field {
    position: relative;
    border-bottom: 2px solid ${({ theme }) => theme.colors.offWhite};
    width: 100%;
  }

  .button {
    position: absolute;
    right: -50px;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.purple};
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.offBlack};
    }

    @media only screen and ${({ theme }) => theme.device.tablet} {
      width: 80px;
      height: 80px;
      right: 0;
      left: 50%;
      bottom: 0;
      top: 0;
    }

    @media only screen and ${({ theme }) => theme.device.mobileL} {
      width: 60px;
      height: 60px;

      .arrow-down {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

const InputContainer = styled.div`
  width: 20%;
  margin-bottom: 2rem;

  @media only screen and ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }

  .label {
    display: block;
    margin-bottom: 0.3rem;
    color: ${(props) =>
      props.$error === 'error' ? props.theme.colors.red : props.theme.colors.smokeyGrey};
    font-family: 'Poppins-Regular';
    font-size: 0.9rem;
    font-weight: ${({ theme }) => theme.fontWeights[7]};
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .input {
    width: 100%;
    font-family: 'Poppins-Bold';
    padding: 0.5rem 1.5rem;
    border: 1px solid
      ${(props) =>
        props.$error === 'error' ? props.theme.colors.red : props.theme.colors.offWhite};
    border-radius: ${({ theme }) => theme.radii[2]};
    outline: none;
    margin-bottom: 0.5rem;

    @media only screen and ${({ theme }) => theme.device.tablet} {
      padding: 0.5rem 1rem;
    }

    @media only screen and ${({ theme }) => theme.device.mobileL} {
      padding: 0.5rem 0.8rem;
    }

    &:focus {
      outline: ${(props) => (props.$error === 'error' ? 'none' : props.theme.colors.purple)} solid
        0.5px;
    }

    &[type='number'] {
      font-size: clamp(1.13rem, calc(0.6rem + 2.64vw), 2rem);
      font-weight: ${({ theme }) => theme.fontWeights[7]};
      -moz-appearance: textfield;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  span {
    font-size: 0.8rem;
    font-family: 'Poppins-Italic';
    color: ${({ theme }) => theme.colors.red};

    @media only screen and ${({ theme }) => theme.device.tablet} {
      padding: 0.5rem 1rem;
      font-size: clamp(0.8rem, calc(1.36rem + -1.16vw), 1.13rem);
      padding: 0;
    }

    @media only screen and ${({ theme }) => theme.device.mobileL} {
      font-size: clamp(0.57rem, calc(1.16rem + -1.12vw), 0.94rem);
    }

    @media only screen and ${({ theme }) => theme.device.mobileS} {
      font-size: clamp(0.4rem, calc(1.01rem + -1.15vw), 0.78rem);
    }
  }
`;

export { Wrapper, InputContainer };
