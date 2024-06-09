import Navbar from './components/NavBar/Navbar'
import './App.css'
import About from './components/About/About'
import Summary from './components/Summary/Summary'
import WorkingStack from './components/WorkingStack/WorkingStack'
import Experienece from './components/Experience/Experienece'
import Projects from './components/Experience/Projects'
import Contacts from './components/Contacts/Contacts'

const App = () => {
  return (
    <div className='mainDiv'>
      <div className='innerMainChlid'>
      <div className='backgroundImage'></div>
      </div>
      <div className='container'>
      <Navbar/>
      <About/>
      <Summary/>
      <WorkingStack/>
      <Experienece/>
      <Projects/>
      <Contacts/>
    </div>
    </div>
    
  )
}

export default App