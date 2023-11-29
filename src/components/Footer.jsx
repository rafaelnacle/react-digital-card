import '../styles/Footer.css'
import IconButton from './IconButton'

import twitterIcon from '../assets/twitter-icon.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import githubIcon from '../assets/github-icon.svg'

function Footer( ) {
  return (
    <footer>
      <IconButton 
        iconImg={twitterIcon}
        link="https://twitter.com/rafanacle"
      />
      <IconButton 
        iconImg={facebookIcon}
      />
      <IconButton 
        iconImg={instagramIcon}
      />
      <IconButton 
        iconImg={githubIcon}
        link='https://github.com/rafaelnacle'
      />
    </footer>
  ) 
}

export default Footer