import React from 'react'
import "./app.css";
import Sidebar from './Components/Sidebar';
import Body from './Components/Body'
function App() {
  return (
    <>
    <div className='container'>
    <Sidebar/>
    <Body/>
    </div>
    </>
  )
}

export default App