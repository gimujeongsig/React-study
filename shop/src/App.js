import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js'
import { createContext, useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, json } from 'react-router-dom';
import Detail from './routes/Detal.js';
import Cart from './routes/Cart.js';
import axios from 'axios';

export let 재고Context = createContext()

function App() {
  let [shoes, setShoes] = useState(data)
  let [재고, 재고변경] = useState([10,11,12]);
  let navigate = useNavigate();

  // useEffect(()=> {
  //   localStorage.setItem('watched', JSON.stringify([]))
  // }, [])





  return (
    <div className="Main">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav ClassName="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=> {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
                console.log(결과.data);
                let copy = [...shoes,...결과.data]
                setShoes(copy)
              })
              .catch(()=>{console.log('가져오기 실패!!!!')})
              }}>가져오기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <WatchedItems></WatchedItems>
      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
            <div className="container">
            <div className='row'>
              { shoes.map((a,i) => {
                return (<Card shoes={shoes[i]}  i={i} key={i}></Card>)
              })}
            </div>
          </div>
          </>
        }></Route>
        <Route path="/detail/:id" element={
          <재고Context.Provider value ={ {재고,shoes}}>
            <Detail shoes={shoes}/>
            </재고Context.Provider>
          }>
          </Route>
        <Route path="*" element={<div>없는 페이지입니다 404 Error</div>}></Route>
        <Route path="/about" element={ <About/>}>
          <Route path="member" element={<div>멤버입니다</div>}></Route>
          <Route path="location" element={<About/>}></Route>
        </Route>
        <Route path='/event' element={<EventPage></EventPage>}>
          <Route path='one' element={<p>첫 주문시 신발 1+1 이벤트</p>}></Route>
          <Route path='two' element={<p>생일 기념 쿠폰 발급하기</p>}></Route>
        </Route>
        <Route path="/cart" element={<Cart/>} />
      </Routes>

    </div>
  );  
}
function About () {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function EventPage() {
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoe'+props.i+'.png'} width="70%"></img>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
          </div>
  )
}
function WatchedItems() {
  let [watchedItems, setWatchedItems ] = useState([]);
  useEffect(() => {
    let watched = JSON.parse(localStorage.getItem('watched'));
    setWatchedItems(watched)
  }, []);
  return (
    <div>
      <h4>최근 본 항목</h4>
      <ul>
        {watchedItems.map((id, index) => (
          <li key={index}>상품 ID : {id}</li>
        ))}
      </ul>
    </div>
  )
}
export default App;