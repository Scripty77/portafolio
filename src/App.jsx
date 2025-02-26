import  Books  from './components/Books'
import  Proyects  from './components/Proyects'
import  Perfile  from './components/Perfile'
import  Tecnologies  from './components/Tecnologies'
import './App.css'

function App() {

  return (
    <>
      <div className="container-group">
      <Books/>
      <Proyects/>
      </div>
      <Perfile/>
      <Tecnologies/>
    </>
  )
}

export default App
