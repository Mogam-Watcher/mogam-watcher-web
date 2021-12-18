import './SelectorBlock.css'

const SelectorBlock = ({identification, title, dataSet}) => {
  const optionData = (data) => {
      return (
        <option key={data.key} value={data.contents}>
          {data.contents}
        </option>
      )
  };

  return (
    <>
      <label htmlFor={identification} className='selector-block selector-block-label'>
        {title} :
      </label>
      <select id={identification} className='selector-block selector-block-select'>
        <option value='default' disabled hidden>선택하세요</option>
        {dataSet.map(optionData)}
      </select>
    </>
  );
}

export default SelectorBlock;
