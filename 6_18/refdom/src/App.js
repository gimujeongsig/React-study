import { Component } from 'react';
import ValidationSample from './validationSample';
import ScrollBox from './ScrollBox';


class App extends Component{
  render() {
    return (
        <div>
         <ScrollBox ref={(ref) => this.scrollBox=ref}/>
         <button onClick={() => this.scrollBox.scrollToBottom()}>
         맨 밑으로
        </button>
      </div>
      // <div className="App">
      //   <h1>비밀번호를 맞추세요 (4자리 숫자)</h1>
      //   <h3>힌트 - F12</h3>
      //   {/* 비밀번호는 000 */}
        // <ValidationSample/>
       // </div>
   );
  }
}

export default App;