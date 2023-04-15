import { useSelector, useDispatch } from 'react-redux';
import { changeDay, changeMonth, changeYear, calculate } from '../store';

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

    dispatch(calculate({year: year, month: month, day: day}));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor="day">day</label>
            <input id="day" type="number" value={day || ''} onChange={dayChangeHandler} />
          </div>
          <div>
            <label htmlFor="month">month</label>
            <input id="month" type="number" value={month || ''} onChange={monthChangeHandler} />
          </div>
          <div>
            <label htmlFor="year">year</label>
            <input id="year" type="number" value={year || ''} onChange={yearChangeHandler} />
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AgeForm;
