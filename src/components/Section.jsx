import PropTypes from 'prop-types'
import "../styles/Section.css"

function Section({title, text}) {
  return (
    <main className='section'>
      <h2>{title}</h2>
      <p>{text}</p>
    </main>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Section