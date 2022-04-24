import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../component/navbar/Navbar';
function Home() {
  const navigate=useNavigate();
  return (
    <div className='container-fluid'>
      <Navbar/>
      {/* <div className='row header'>
      <div className='btn-primary col-1' onClick={()=>{navigate('/dashboard')}}><FontAwesomeIcon icon={faArrowCircleLeft} className='icon'/></div>
      <div className='col-11'>
      <h1><strong>SPIKEWELL INDIA PVT</strong></h1>
      </div>
      </div> */}
    </div>
  );
}

export default Home;
