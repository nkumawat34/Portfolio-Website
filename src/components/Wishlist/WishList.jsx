import React from 'react'
import { ListGroup,Container } from 'react-bootstrap';
import "./WishList.css"
export default function WishList() {
    const list = [
        "Travel to foreign country with parents",
        "Full freedom where to live and flexible hours",
        "Financillay free",
        "Have own a independet business",
        "Good Pysique like have muscles",
        "Own Full customized PC with high specs",
        "Learn Boxing and Karate",
    

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
