/* eslint-disable */
import React, {useState} from 'react';
import EnSlogo from './EnSlogo.png';

import './App.css';

function App() {
  

  // destructuring 이라는 문법임. array, object에 있던 자료를 변수에 쉽게 담고싶을 때
  // var [a, b] = [10, 100];

  let [글제목, 글제목변경] = useState(['방문했어영', '22', '가나다']);
  let [likes, likesFunChange] = useState(0);

  let [modal, modal변경] = useState(false); // 모달창을 켜고닫는 스위치 

  var arr = [2,3,4];

  //map 함수, 반복문. 결과가 새로운 array로 반환  
  var newarr = arr.map(function(a){
    return a*2
  })




  let posts = '서버에서 가져온 방명록';
  let date = '작성일 2022.01.05'

  function 제목바꾸기(){
    //state는 직접 건들지마셈!
    // react적인 관습! 복사하고 수정하는 것 근데 deep copy를 해야해. deep copy: 값공유말고 서로 독립적인 값을 갖는 복사
    // var newArray = 글제목; == reference data type. 값 공유의 의미
    var newArray =[...글제목]; //괄호를 없앴다가 다시만듦. 별개의 array 
    newArray[1]='바꾼방명로옥';
    글제목변경(newArray);
  } 

  function 순서바꾸기(){
    var newArray =[...글제목]; 
    newArray.sort();
    글제목변경(newArray);
  } 

  function 함수(){
    return '리턴'
  }
  
  function Modal창띄우기(){
    {
      modal == false
      ? modal변경(true)
      : modal변경(false)

      modal == true 
      ? <Modaltest/> 
      : null

    }
  }

  let designLogo = {color: 'white', fontSize: '25px'};


    // html 그냥 여기다 적으면 돼
  return (
    <div className="App">
      {/* JSX 문법 */}
      <div className="black-nav">
        {/* style 속성은 무조건 중괄호 */}
        <div className={posts} style={designLogo}>E&S Lab</div>
     </div>

     <img src={EnSlogo} id='logo'/>
    
     {
      //  a에는 리스트 요소 하나하나가 들어감
       글제목.map(function(a){
         return (
          <div className="list">
            <h3 onClick={()=>{modal == false? modal변경(true):modal변경(false)}}>{a}   </h3>
            <span onClick={()=>{likesFunChange(likes+1)}}>👍</span>{likes} 
            <p>{date}</p>
            <hr/>
          </div>
         )
       })
     }


      {/* 안에 if는 쓸 수 없음 */}
     {
       modal == true
       ? <Modal/>
       : null
     }
     <button  onClick={제목바꾸기}>제목 수정버튼</button>
     <button  onClick={순서바꾸기}>순서 재배치버튼</button>
     <button  onClick={Modal창띄우기}>Modal창 띄우기 버튼</button>
    </div>

  );
}


function Modaltest (){
  return(
    <div>
      <h2>글제목</h2>
      <p>날짜ㅏㅏㅏ</p>
      <p>내ㅐㅐ용</p>
    </div>
  )
  
}

// component만들고 원하는 HTML담기 관습적으로 대문자로 시작.
function Modal(){
  return(
    // return 안에 <div>를 병렬적으로 쓸 수 없음. 쓰려면 <div> 로 묶어야하는데 의미없는 div를 쓰고싶지 않다면 <></>로 묶을 수 있음
  <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
</div>

  )
}


export default App;
