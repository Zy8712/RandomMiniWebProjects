import Logo from "./components/Logo"
import ImageBox from "./components/ImageBox"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="w-full min-h-screen h-full flex flex-col items-center relative">
        <Logo />
        <ImageBox />
        <Footer />
      </div>
    </>
  )
}

export default App
