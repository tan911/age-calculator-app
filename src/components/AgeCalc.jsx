import { useSelector } from 'react-redux';

import { Output } from '../layout/Content';

function AgeCalc() {
  const age = useSelector((state) => {
    return state.calc.calcAge;
  });

  const year = age.map((a) => a.year);
  const month = age.map((a) => a.month);
  const day = age.map((a) => a.day);

  const logYear = year.length !== 0 ? year : '--';
  const logMonth = month.length !== 0 ? month : '--';
  const logDay = day.length !== 0 ? day : '--';

  return (
    <Output>
      <p>
        <span>{logYear} </span>
        years
      </p>
      <p>
        <span>{logMonth} </span>
        months
      </p>
      <p>
        <span>{logDay} </span>
        days
      </p>
    </Output>
  );
}

export default AgeCalc;
