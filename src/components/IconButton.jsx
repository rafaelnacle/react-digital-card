import PropTypes from 'prop-types'
import '../styles/IconButton.css'

function IconButton({iconImg, link, onClick}) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <a className='icon-btn-wrapper' onClick={handleClick}>
      {iconImg && <img src={iconImg} alt="Icon" className='icon-btn-img'/>}
    </a>
  )

}

IconButton.propTypes = {
  iconImg: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default IconButton