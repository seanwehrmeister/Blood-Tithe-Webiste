import React from 'react'
import Music from '../components/Music'

const HomePage = props => {

  return(
    <div className="home-page">
      <h1 className='index-title'></h1>
      <div className="main-row">
        <div className="columns small-12 medium-7 tile-background">
          <Music/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
