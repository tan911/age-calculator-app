import { useSelector } from 'react-redux';

function AgeCalc() {
  const age = useSelector((state) => {
    return state.calc.calcAge;
  });

  // console.log(age.map((a) => a.day));
  return (
    <div>
      <div>
        <span>{age.map((a) => a.year)}</span>:years
      </div>
      <div>
        <span>{age.map((a) => a.month)}</span>:months
      </div>
      <div>
        <span>{age.map((a) => a.day)}</span>:days
      </div>
    </div>
  );
}

export default AgeCalc;
