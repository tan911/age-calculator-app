import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as ArrowDown } from '../assets/images/icon-arrow.svg';
import { changeDay, changeMonth, changeYear, calculate } from '../store';
import { Wrapper } from '../layout/Content';

function AgeForm() {
  const { day, month, year } = useSelector((state) => {
    return {
      day: state.form.day,
      month: state.form.month,
      year: state.form.year
    };
  });
  const dispatch = useDispatch();

  const dayChangeHandler = (event) => {
    const dayInput = parseInt(event.target.value) || 0;
    dispatch(changeDay(dayInput));
  };

  const monthChangeHandler = (event) => {
    const monthInput = parseInt(event.target.value) || 0;
    dispatch(changeMonth(monthInput));
  };

  const yearChangeHandler = (event) => {
    const yearInput = parseInt(event.target.value) || 0;
    dispatch(changeYear(yearInput));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(calculate({ year: year, month: month, day: day }));
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="day" className="label">
              day
            </label>
            <input
              className="input"
              id="day"
              type="number"
              value={day || ''}
              onChange={dayChangeHandler}
            />
          </div>
          <div className="field">
            <label htmlFor="month" className="label">
              month
            </label>
            <input
              className="input"
              id="month"
              type="number"
              value={month || ''}
              onChange={monthChangeHandler}
            />
          </div>
          <div className="field">
            <label htmlFor="year" className="label">
              year
            </label>
            <input
              className="input"
              id="year"
              type="number"
              value={year || ''}
              onChange={yearChangeHandler}
            />
          </div>
        </div>
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
