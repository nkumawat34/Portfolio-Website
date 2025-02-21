import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';
import "./Interests.css"
export default function Interests() {

    const songs = [
        "Admirin You - Karan Aujla",
        "Excuses - AP Dhillon | Gurinder Gill | Intense",
        "One Love - Shubh",
        "G.O.A.T. - Diljit Dosanjh",
        "Cheques  - Shubh  ",

      ];

    const items= [
        "Exercise",
        "Journalling",
        "Reading books",
        "Dancing",
        "Listening Music",
        "Watching Documentaries",
        "Reading technical blogs",
        "Watching Kid shows",


    ]  
  return (
    <div>
      <Container >
      <h3 style={{paddingTop:"100px"}}>Songs</h3>
      <ListGroup as="ul" className='mt-3 border-0'>
        {songs.map((book, index) => (
          <ListGroup.Item as="li" key={index} className='border-0 card'>
            {book}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <br/>
      <br/>
      <br/>
    
    </Container>
    <Container >
      <h3 style={{paddingTop:"30px"}}>Things which I love to do</h3>
      <ListGroup as="ul" className='mt-3 border-0'>
        {items.map((book, index) => (
          <ListGroup.Item as="li" key={index} className='border-0 card'>
            {book}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <br/>
      <br/>
      <br/>
    
    </Container>
    </div>
  )
}
