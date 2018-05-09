import React from 'react'
import AboutUs from '../components/AboutUs'

const HomePage = props => {

  return(
    <div className="home-page">
      <h1 className='index-title'></h1>
      <div className="main-row">
        <div className="columns small-12 medium-7 tile-background">
          <AboutUs/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
