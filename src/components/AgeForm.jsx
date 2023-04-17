import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as ArrowDown } from '../assets/images/icon-arrow.svg';
import { calculate } from '../store';
import FormInput from './FormInput';
import { Wrapper } from '../layout/Content';

import Validate from './Validate';

function AgeForm() {
  const { day, month, year } = useSelector((state) => {
    return {
      day: state.form.day,
      month: state.form.month,
      year: state.form.year
    };
  });
  const dispatch = useDispatch();

  //TODO
  // VALIDATION
  const [ isError, setIsError ] = useState({
    day: '',
    month: '',
    year: '',
  });

  const inputs = [
    {
      id: 'day',
      name: 'day',
      label: 'day',
      value: day || '',
      placeholder: 'DD',
      errorID: 'error-message-day',
      errorMessage: isError.day,
      pattern: "^[0-9]{1,2}$",
      required: true,
      type: 'number'
    },
    {
      id: 'month',
      name: 'month',
      value: month || '',
      label: 'month',
      placeholder: 'MM',
      errorID: 'error-message-month',
      errorMessage: isError.month,
      required: true,
      type: 'number'
    },
    {
      id: 'year',
      name: 'year',
      value: year || '',
      label: 'year',
      placeholder: 'YY',
      errorID: 'error-message-year',
      errorMessage: isError.year,
      required: true,
      type: 'number'
    }
  ];

  const renderedInputs = inputs.map((input) => {
    return <FormInput key={input.id} {...input} />;
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const inputs = {
        day: day,
        month: month,
        year: year,
    }
    
    //TODO
    // VALIDATIONS
    
    dispatch(calculate({day, month, year}))

  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <div className="field-group">{renderedInputs}</div>
        <div className="btn-field">
          <button className="button">
            <ArrowDown />
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default AgeForm;
