import LoadingPage from './components/LoadingPage'
import Home from './components/Home'
import Service1 from './components/Service1'
import Service2 from './components/Service2'
import Portofolio from './components/Portofolio'

function App() {

  return (
    <>
      <div className="relative min-h-screen w-screen overflow-x-hidden ">
        <LoadingPage />
        <Home />
        <Service1 />
        <Service2 />
        <Portofolio />
      </div>
    </>
  )
}

export default App
