import './TextButton.css'

const TextButton = ({isSubmit, title, clickEvent}) => {
  const styleVariant = `button textButton`;
  const buttonType = isSubmit ? "submit" : "button";

  return (
    <button type={buttonType} className={styleVariant} onClick={clickEvent}>
      {title}
    </button>
  );
}

export default TextButton;
