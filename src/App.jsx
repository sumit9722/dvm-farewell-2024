import './App.css'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import BottomPlayer from './components/BottomPlayer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <Navbar />
      <MainBody />
      <BottomPlayer />
      <Footer />
    </div>
  )
}

export default App
