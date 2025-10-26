import { useState } from 'react'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import AlertSection from './Components/Main_Body/AlertSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Footer />
     <AlertSection />
    </>
  )
}

export default App
