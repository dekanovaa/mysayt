import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Skills/Skills'
function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App