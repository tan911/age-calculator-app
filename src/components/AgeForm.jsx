import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as ArrowDown } from '../assets/images/icon-arrow.svg';
import { calculate } from '../store';
import FormInput from './FormInput';
import { Wrapper } from '../layout/Content';

import Inputs from './inputs';
import Calculate from './calculateAge';
import Validate from './validate';

function AgeForm() {
  const { day, month, year } = useSelector((state) => {
    return {
      day: state.form.day,
      month: state.form.month,
      year: state.form.year
    };
  });
  const dispatch = useDispatch();
  const [validationErrors, setValidationErrors] = useState({});

  const INPUTS = Inputs(validationErrors, day, month, year);

  const renderedInputs = INPUTS.map((input) => {
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
      validationErrors.day === '' &&
      validationErrors.month === '' &&
      validationErrors.year === '' &&
      validateDays.test(inputs.day) &&
      validateMonth.test(inputs.month) &&
      validateYear.test(inputs.year)
    ) {
      const { _year_calculated, _month_calculated, _day_calculated } = Calculate(inputs);

      dispatch(
        calculate({ year: _year_calculated, month: _month_calculated, day: _day_calculated })
      );
    } else {
      setValidationErrors(Validate(inputs));
    }
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
