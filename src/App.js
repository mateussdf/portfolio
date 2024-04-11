import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/section/Navbar'
import Presentation from './componentes/section/Presentation';
import Skills from './componentes/section/Skills';
import Project from './componentes/section/Project';
import Footer from './componentes/section/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
