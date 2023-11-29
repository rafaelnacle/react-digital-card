import '../styles/Footer.css'
import IconButton from './IconButton'

function Footer( ) {
  return (
    <footer>
      <IconButton 
        iconImg='./src/assets/twitter-icon.svg'
        link="https://twitter.com/rafanacle"
      />
      <IconButton 
        iconImg='./src/assets/facebook-icon.svg'
      />
      <IconButton 
        iconImg='./src/assets/instagram-icon.svg'
      />
      <IconButton 
        iconImg='./src/assets/github-icon.svg'
        link='https://github.com/rafaelnacle'
      />
    </footer>
  ) 
}

export default Footer