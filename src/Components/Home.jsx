import React from 'react'
import HomeBody from './HomeBody'

const Home = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='mb-5 font-bold'>Home</div>
        <div>
          <HomeBody />
          <HomeBody />
          <HomeBody />
          <HomeBody />
          <HomeBody />
        </div>
      </div>
    </section>
  )
}

export default Home