import React from 'react'
import { Card, Col, Container, FloatingLabel, Row } from 'react-bootstrap'
import './Signup.css'

const Signup = () => {
  return (
      <Card className='card'>
<Row>
<Col>
<label>Start Date</label>
<input type="date"/>
</Col>
<Col>
<label>End Date</label>
<input type="date"/>
</Col>
</Row>
      </Card>
      
      
  
  )
}

export default Signup
