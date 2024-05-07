import React from 'react'
import Navbar from './component/Navbar'
import Section from './component/Navbar'

function App() {
  return (
    <div className='background'>
      <Navbar/>
      <div className='nav_bottam'>
        <img className='big_img' src="https://www.wingsup.media/assets/assets/img/1_TGM_Blog_Banner_Influencer_Marketing.png" alt="img" />
      </div>
      <Section/>
    </div>
  )
}

export default App