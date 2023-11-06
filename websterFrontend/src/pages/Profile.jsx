import React from 'react'
import Navbar from '../Components/Navbar'

export default function Profile(){
    return <div>
        <Navbar></Navbar>
        <div className='temp'>
        <div className="main-container">
        <div className='image-container'>
            <h1>image comes here</h1>
        </div>
        <div className='primary-description'>
            <p> name of the user</p>
            <p>something..</p>
            <p>something...</p>
        </div>
      </div>
      <div className='secondary-description'>
        <p>something more....</p>
        <p>something more.....</p>
      </div>
    </div>
    </div>
}