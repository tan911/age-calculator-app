function Inputs(valdationErrors, day, month, year) {
  const inputs = [
    {
      id: 'day',
      name: 'day',
      label: 'day',
      value: day || '',
      placeholder: 'DD',
      errorID: 'error-message-day',
      errorMessage: valdationErrors.day,
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
      errorMessage: valdationErrors.month,
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
      errorMessage: valdationErrors.year,
      required: true,
      type: 'number'
    }
  ];

  return inputs;
}

export default Inputs;
