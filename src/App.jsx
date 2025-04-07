import LoadingPage from './components/LoadingPage'
import Home from './components/Home'
import Service1 from './components/Service1'
import Service2 from './components/Service2'
import Portofolio from './components/Portofolio'
import DynamicBackground from './components/DynamicBackground'

function App() {

  return (
    <>
      <div className="relative min-h-screen w-screen overflow-scroll ">
        <LoadingPage />
        <Home className="z-10"/>
        <Service1 />
        <Service2 />
        <Portofolio />
        {/* <DynamicBackground /> */}
      </div>
    </>
  )
}

export default App
