import './App.css'
import Section from './components/Section'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <Info/>
      <Section title='About' text='Web developer with a passion for coding and a commitment to continuous improvement. Currently contributing to projects with a focus on creating user-friendly websites. I Enjoy solving challenges and making a positive impact through technology. '/>
      <Section title='Interests' text='Passionate about exploring new technologies and tackling web challenges with code. I have a keen interest in web development, and I also love video games'/>
      <Footer/>
    </div>
  )
}

export default App
