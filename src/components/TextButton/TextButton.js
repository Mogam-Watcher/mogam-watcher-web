import './TextButton.css'

const TextButton = ({isSubmit, title, onClick}) => {
  const styleVariant = `button textButton`;
  const buttonType = isSubmit ? "submit" : "button";

  return (
    <button type={buttonType} className={styleVariant} onClick={onClick}>
      {title}
    </button>
  )
}

export default TextButton;
