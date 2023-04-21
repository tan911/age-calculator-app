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
  const [isError, setIsError] = useState({});

  const inputs = [
    {
      id: 'day',
      name: 'day',
      label: 'day',
      value: day || '',
      placeholder: 'DD',
      errorID: 'error-message-day',
      errorMessage: isError.day,
      pattern: '^[0-9]{1,2}$',
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

    const validateMonth = /\b([1-9]|1[0-2])\b/;
    const validateDays = /\b([1-9]|[12][0-9]|3[01])\b/;
    const validateYear = /^\d{4}$/;

    const inputs = {
      day: day,
      month: month,
      year: year
    };

    if (
      isError.day === '' &&
      isError.month === '' &&
      isError.year === '' &&
      validateDays.test(inputs.day) &&
      validateMonth.test(inputs.month) &&
      validateYear.test(inputs.year)
    ) {
      const now = new Date();

      let DAY_VALUE, MONTH_VALUE, YEAR_VALUE;

      const YEAR_INPUT = inputs.year;
      const MONTH_INPUT = inputs.month;
      const DAY_INPUT = inputs.day;

      let YEAR = now.getFullYear();
      let MONTH = now.getMonth() + 1;
      let DAY = now.getDate();

      if (DAY < DAY_INPUT) {
        DAY_VALUE = DAY - DAY_INPUT + 30;
        MONTH -= 1;
      } else {
        DAY_VALUE = DAY - DAY_INPUT;
      }

      if (MONTH < MONTH_INPUT) {
        MONTH_VALUE = MONTH - MONTH_INPUT + 12;
        YEAR -= 1;
      } else {
        MONTH_VALUE = MONTH - MONTH_INPUT;
      }

      YEAR_VALUE = YEAR - YEAR_INPUT;

      dispatch(calculate({ year: YEAR_VALUE, month: MONTH_VALUE, day: DAY_VALUE }));
    } else {
      setIsError(Validate(inputs));
    }

    console.log(isError);
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <div className="field-group">{renderedInputs}</div>
        <div className="btn-field">
          <button type="submit" className="button">
            <ArrowDown className="arrow-down" aria-hidden="true" />
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default AgeForm;
