import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';
import "./Book.css"
export default function Books() {

    const books = [
        "The Almanack of Naval Ravikant - Eric Jorgenson",
        "Atomic Habits - James Clear",
        "Rich Dad Poor Dad - Robert Kiyosaki",
        "The Power of Your Subconscious Mind - Joseph Murphy",
        "The Psychology of Money - Morgan Housel ",
        "The $100 Startup -  Chris Guillebea",
        "The Secret - Rhonda Byrne"

      ];

      const interesting_things = [
        { text: "Naval Ravikant Blogs", url: "https://nav.al/" },
        { text: "Derek Sivers", url: "https://sive.rs/"},
        {text: "Tini Budha", url:"https://tinybuddha.com/"},
        {text: "Secret Stories" ,url:"https://www.thesecret.tv/the-secret-stories/"},

      ];
      
  return (
    <div>
     <Container >
      <h3 style={{paddingTop:"100px"}}>Books I Have Read So Far</h3>
      <ListGroup as="ol" numbered className='mt-5 border-0'>
        {books.map((book, index) => (
          <ListGroup.Item as="li" key={index} className='border-0 card'>
            {book}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <br/>
      <br/>
      <br/>
    
    </Container>
    <Container>
      <h3 style={{paddingTop:"70px"}}>Interesting things found on internet</h3>
      <ListGroup as="ol" numbered className='mt-5 border-0'>
        {interesting_things.map((thing, index) => (
          <ListGroup.Item as="li" key={index} className='border-0 card'>
            {thing.text} - <a href={thing.url} target="_blank" rel="noopener noreferrer">
            {thing.url}
          </a>
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
