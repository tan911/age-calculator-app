function Calculate(inputs) {
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

  const calculatedAge = {
    _year_calculated: YEAR_VALUE,
    _month_calculated: MONTH_VALUE,
    _day_calculated: DAY_VALUE
  };

  return calculatedAge;
}

export default Calculate;
