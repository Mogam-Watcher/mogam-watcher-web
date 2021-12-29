import React, { useState } from 'react';
import './Form.css'

const Form = ({identification, title, type, dataSet, formHint, formValue, isDisabled}) => {
  const defaultValue = (type==='select' && typeof formValue==='undefined') ? 'default' : formValue;
  const [value, setValue] = useState(defaultValue);

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

  const formBlock = (type) => {
    switch (type) {
      case 'select':
        return (
          <select 
            id={identification}
            value={value}
            onChange={handleChange}
            className='form-block form-block-arrow'
            disabled={isDisabled}
          >
            <option key='0' value='default' disabled hidden>
              {formHint}
            </option>
            {dataSet.map(optionData)}
          </select>
        );
      case 'text':
        return (
          <input 
            className='form-block'
            id={identification} 
            type={type}
            name={title} 
            placeholder={formHint}
            value={value}
            onChange={handleChange}
            disabled={isDisabled}
          />
        );
    }
  }  

  return (
    <div className='form'>
      <label htmlFor={identification} className='form-label'>
        {title} :
      </label>
      {formBlock(type)}
    </div>
  );
}

export default Form;
