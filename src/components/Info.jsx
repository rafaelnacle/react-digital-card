import '../styles/Info.css'
import Button from '../components/Button';

import mailIcon from '../assets/Mail.svg'
import LinkedInIcon from '../assets/LinkedIn.svg'

function Info() {
  return (
    <header className="info">
      <img className="profile-img" src="./src/assets/me.jpg" alt="profile picture of Rafael" />
      <h1>Rafael Nacle</h1>
      <h3>Web Developer</h3>
      <a href='#'>rafaelnacle.website</a>

      <nav className="nav">
        <Button 
          iconImg={mailIcon} 
          text='Mail'
          link="rafaelnacle@gmail.com"
          backgroundColor='#FFFFFF'
          color='#374151'
        />
        <Button 
          iconImg={LinkedInIcon} 
          text='LinkedIn'
          link='https://www.linkedin.com/in/rafael-nacle/'
          backgroundColor="#5093E2"
          color='#FFFFFF'
        />
      </nav>
    </header>
  )
}

export default Info;