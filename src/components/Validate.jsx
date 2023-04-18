function Validate(isData) {
  const yearTest = /^\d{4}$/;

  const errors = {};
  const err_mess = {
    required: 'This field is required!',
    inValidMess: 'Must be a valid',
    inValidYear: 'Must be in the past'
  };
  const now = new Date();
  let MONTH = now.getMonth() + 1;
  let YEAR = now.getFullYear();

  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // Days
  if (!isData.day) {
    errors.day = err_mess.required;
  } else if (isData.day > getDays(YEAR, MONTH)) {
    errors.day = `${err_mess.inValidMess} day`;
  } else {
    errors.day = '';
  }

  //Month
  if (!isData.month) {
    errors.month = err_mess.required;
  } else if (isData.month < 1 || isData.month > 12) {
    errors.month = `${err_mess.inValidMess} month`;
  } else {
    errors.month = '';
  }

  // Year
  if (!isData.year) {
    errors.year = err_mess.required;
  } else if (isData.year > YEAR || !yearTest.test(isData.year)) {
    errors.year = err_mess.inValidYear;
  } else {
    errors.year = '';
  }

  return errors;
}

export default Validate;
