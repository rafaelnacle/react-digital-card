import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button({iconImg, text, link, backgroundColor, color, onClick}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color
  }

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return(
    <button className='button' style={buttonStyle} onClick={handleClick}>
          {iconImg && <img src={iconImg} alt="Button icon" className='button-img'/>}
          <p>{text}</p>
    </button>
  )
}

Button.propTypes = {
  iconImg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button