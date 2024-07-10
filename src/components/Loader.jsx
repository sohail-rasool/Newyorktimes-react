import React from 'react'
import LoaderImg from '../assets/images/loading.gif'

const Loader = () => {
  return (
    <div className='loader-wrapper d-flex justify-content-center align-items-center'>
        <img src={LoaderImg} alt="LoaderImg" className='loading-img' />
    </div>
  )
}

export default Loader