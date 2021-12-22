import React, { useState } from 'react';
import './Form.css'

const Form = ({identification, title, type, dataSet, formHint, formValue}) => {
  const defaultValue = (type==='select' && typeof formValue==='undefined') ? 'default' : formValue;
  const [selectedValue, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const optionData = (data) => {
      return (
        <option key={data.key} value={data.contents}>
          {data.contents}
        </option>
      )
  };

  const formBlock = (type==='select') ? (
      <select id={identification} value={selectedValue} onChange={handleChange} className='form form-block'>
        <option key='0' value='default' disabled hidden>{formHint}</option>
        {dataSet.map(optionData)}
      </select>
      ) : (
      <input 
        className="form form-block"
        id={identification} 
        type={type}
        name={title} 
        placeholder={formHint}
        value={selectedValue}
        onChange={handleChange}
      />);

  return (
    <div className='form'>
      <label htmlFor={identification} className='form form-label'>
        {title} :
      </label>
      {formBlock}
    </div>
  );
}

export default Form;
