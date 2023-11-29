import '../styles/Info.css'
import Button from '../components/Button';

function Info() {
  return (
    <header className="info">
      <img className="profile-img" src="./src/assets/me.jpg" alt="profile picture of Rafael" />
      <h1>Rafael Nacle</h1>
      <h3>Web Developer</h3>
      <a href='#'>rafaelnacle.website</a>

      <nav className="nav">
        <Button 
          iconImg={'/src/assets/Mail.svg'} 
          text='Mail'
          link="rafaelnacle@gmail.com"
          backgroundColor='#FFFFFF'
          color='#374151'
        />
        <Button 
          iconImg={'/src/assets/LinkedIn.svg'} 
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