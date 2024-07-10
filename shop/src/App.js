import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js'
import { useState } from 'react';

function App() {
  let [shose] = useState(data)
  return (
    <div className="Main">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav ClassName="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
          <Card shose={shose[0]} i={1}></Card>
          <Card shose={shose[1]} i={2}></Card>
          <Card shose={shose[2]}>i={3}</Card>
        </div>
      </div>
    </div>
  );
}
function Card(props) {
  return(
    <div className='col-md-4'>
      <img src={process.env.PUBLIC_URL + '/shoe'+props.i+'.png'} width="80%"></img>4
      <h4>{props.shose.title}</h4>
      <p>{props.shose.price}</p>
    </div>
  )
}
export default App;
