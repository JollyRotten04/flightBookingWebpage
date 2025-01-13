import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Header from './components/Header'
import HomeMain from './components/HomeMain'

function App() {

  return (
    <>
      {/* Main Background */}
      <div className="bg-orange-500 h-screen w-screen flex justify-center items-center overflow-hidden">
        <div className="bg-slate-50 h-4/5 w-4/5 landscape:rounded-3xl portrait:bg-transparent -3xl portrait:h-full portrait:w-full">  

          {/* Header */}
          <Header></Header>

          {/* Master Content Container */}
          <div id="mainContentContainer" className="h-full w-full flex flex-col">
            <HomeMain></HomeMain>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
