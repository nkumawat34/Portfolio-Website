import React from 'react'
import { ListGroup,Container } from 'react-bootstrap';
import "./WishList.css"
export default function WishList() {
  const list = [
    "Travel to a foreign country with parents",
    "Full freedom to choose where to live and flexible hours",
    "Financially free",
    "Own an independent business",
    "Good physique with muscles",
    "Own a fully customized PC with high specs",
    "Learn boxing and karate",
  ];
  
  return (
    <div>
      <Container >
      <h3 style={{paddingTop:"100px"}}>Things which I want to do before die</h3>
      <ListGroup as="ul" className='mt-3 border-0'>
        {list.map((book, index) => (
          <ListGroup.Item as="li" key={index} className='border-0 card'>
            {book}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <br/>
      <br/>
      <h3>More coming soon</h3>
      <br/>
    
    </Container>
    </div>
  )
}
