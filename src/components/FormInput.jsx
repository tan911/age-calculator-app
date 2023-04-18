import { useDispatch } from 'react-redux';
import { changeDay, changeMonth, changeYear } from '../store';

import { InputContainer } from '../layout/Content';

function FormInput(props) {
  const dispatch = useDispatch();
  const { id, placeholder, errorMessage, errorID, label, type, name, value } = props;

  const inputChangeHandler = (value, id) => {
    const intValue = parseInt(value) || 0;
    switch (id) {
      case 'day':
        dispatch(changeDay(intValue));
        break;
      case 'month':
        dispatch(changeMonth(intValue));
        break;
      case 'year':
        dispatch(changeYear(intValue));
        break;
      default:
        console.log('no');
    }
  };

  return (
    <InputContainer $error={errorMessage ? 'error' : ''}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        className="input"
        id={id}
        type={type}
        name={name}
        value={value}
        aria-describedby={errorID}
        placeholder={placeholder}
        onChange={(e) => inputChangeHandler(e.target.value, id)}
      />
      {errorMessage && (
        <span id={errorID} aria-live="polite">
          {errorMessage}
        </span>
      )}
    </InputContainer>
  );
}

export default FormInput;
