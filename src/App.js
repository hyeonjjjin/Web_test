import logo from './logo.svg';
import EnSlogo from './EnSlogo.png';

import './App.css';

function App() {
  

  let posts = '서버에서 가져온 방명록';
  function 함수(){
    return '리턴'
  }
  
  let designLogo = {color: 'white', fontSize: '25px'};

  return (
    // html 그냥 여기다 적으면 돼
    <div className="App">
      {/* JSX 문법 */}
      <div className="black-nav">
        {/* style 속성은 무조건 중괄호 */}
        <div className={posts} style={designLogo}>E&S Lab</div>
     </div>
     <img src={EnSlogo} id='logo'/>

     <h4> {posts} </h4>
     <h4> {함수()} </h4>
    </div>

  );
}

export default App;
