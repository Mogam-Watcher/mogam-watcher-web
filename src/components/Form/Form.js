import React, { useState } from 'react';
import './Form.css'

const Form = ({identification, title, type, dataSet, formHint, formValue}) => {
  const defaultValue = (type==='select') ? 'default' : formValue;
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const optionData = (data) => {
      return (
        <option className='form-block-seletor' key={data.key} value={data.contents}>
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
            className='form form-block'
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
            className='form form-block'
            id={identification} 
            type={type}
            name={title} 
            placeholder={formHint}
            value={value}
            onChange={handleChange}
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
