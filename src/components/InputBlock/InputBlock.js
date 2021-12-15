import './InputBlock.css';
const InputBlock = ({title, inputHint, inputValue}) => {
  return (
    <div className="inputBlock">
      <span>
        {title} :
      </span>
      <input 
        className="inputBlock-input"
        type="text" 
        name={title} 
        placeholder={inputHint}
        value={inputValue}
      />
    </div>
  );
}

export default InputBlock;
