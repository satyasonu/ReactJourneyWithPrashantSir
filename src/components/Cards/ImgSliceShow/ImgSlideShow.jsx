import React from 'react'
import styles from './ImgSlideShow.module.css'

const ImgSlideShow = ({data}) => {
  return (
    <div>
      <img
          alt="deviceimage"
          src={data.thumbnail}
          width="220"
          height={130}
        />
    </div>
  )
}

export default ImgSlideShow