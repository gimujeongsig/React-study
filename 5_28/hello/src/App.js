// 특정 파일을 불러오는 코드
// import logo from './logo.svg';
// import './App.css';
import { Fragment } from "react";
const name = '리액트'
const number = 0;
const test = undefined;

const style = {
  backGroundColor : 'black',
  color : 'aqua',
  fontSize : '40px',
  padding : 16
};
//javascript XML
function App() {
  return (
    //  test ||
    <Fragment>
      {/*{ { 조건부 연산자
       {name === '리액트' ? (
        <h1>리액트입니다.</h1>
       ) : (
         <h1>리액트가 아닙니다.</h1>
       )}}
      {name === '리액트' && <h1>리액트입니다.</h1>} }*/ }
      {/* {test} */}
      <div style={style}>{name}</div>
    </Fragment>
  );
}

export default App;
