import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  .field-group {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
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
  }
`;

const InputContainer = styled.div`
  width: 20%;
  margin-bottom: 2rem;

  .label {
    display: block;
    margin-bottom: 0.3rem;
    color: ${({ theme }) => theme.colors.smokeyGrey};
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
    border: 1px solid ${({ theme }) => theme.colors.offWhite};
    border-radius: ${({ theme }) => theme.radii[2]};
    outline: none;
    margin-bottom: 0.5rem;

    &:focus {
      outline: ${({ theme }) => theme.colors.purple} solid 0.5px;
    }

    &[type='number'] {
      font-size: 2rem;
      font-weight: ${({ theme }) => theme.fontWeights[7]};
      -moz-appearance: textfield;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:invalid ~ span {
      display: block;
    }
  }

  span {
    font-size: 0.8rem;
    font-family: 'Poppins-Italic';
    color: ${({theme}) => theme.colors.red};
    display: none;
  }
`;

export { Wrapper, InputContainer };
