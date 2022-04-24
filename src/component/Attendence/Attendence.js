import React from 'react'
import Navbar from '../navbar/Navbar'
import style from '../Dashboard.module.css';
import Time from '../Time/Time'

function Attendence() {
  return (
    <div className={style.container}>
        <Navbar/>
        <Time />

    </div>
  )
}

export default Attendence