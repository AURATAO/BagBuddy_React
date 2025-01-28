import Footer from '../src/components/Footer.jsx';
import Navbar from './components/NavBar.jsx';
import Slogan from './components/Slogan.jsx';
import Premade from './components/Premade.jsx';
import Getaway from './components/Getaway.jsx';

function App() {

  return (
    <div className="bg-mobile bg-cover bg-no-repeat w-full sm:bg-desktop">
      <Navbar/>
      <div className="container w-full m-auto"> 
        <Slogan/>
        <Premade/>
        <Getaway/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
