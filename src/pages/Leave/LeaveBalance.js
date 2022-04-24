import React from 'react'
import Card from '../Card'
// import {Card,Button} from 'react-bootstrap'
const LeaveBalance = () => {
  return (
      <>
      <div style={{fontSize:"40px"}}>Leave Balance</div>
      <div style={{display:"flex"}}>
          {/* <h1 justify content>Leave Balance</h1> */}
          {/* <Card style={{ width: '18rem' }}> */}
         
           <Card type="Loss of pay" leaveCount=" Granted 1"/> 
          <Card type="Earned leave" leaveCount="Granted 0"/>
          <Card type="Comp-off" leaveCount="Granted 1"/>
          <Card type="Bravement leave" leaveCount="Granted 2"/>
           
      </div>
      <div style={{display:"flex"}}>
           <Card type="Casual leave" leaveCount=" Granted 1" /> 
          <Card type="Covid leave" leaveCount="Granted 1"/>
          <Card type="Work from Home" leaveCount="Granted 2"/>
          <Card type="Marriage leave" leaveCount=" Granted 3"/> 
      </div>
      <div style={{display:"flex"}}>
           <Card type="petarnity leave" leaveCount=" Granted 1" /> 
          <Card type="Election leave" leaveCount="Granted 1"/>
          <Card type="On-duty" leaveCount="Granted 3"/>
          <Card type="Earned leave" leaveCount="Granted 3"/> 
      </div>
      </>
      
  )
}

export default LeaveBalance