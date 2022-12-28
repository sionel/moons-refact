import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let date = new Date()
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  
  let [finish, setFinish] = useState(0);
  let [todo, setTodo] = useState(0);
  let [addlist, setAddlist] = useState('');
  
  //로컬스토리지에 투두리스트 목록을 넣을 배열 생성
  useEffect(()=>{
    if(localStorage.getItem('todolist') == null){
      localStorage.setItem('todolist', JSON.stringify( [] ), [])
    }
  })

  return (
    <div className="App">
      <div className="grey-bg">
        <div className="white-bg">
          <div>
            <h3>{year}년 {month}월 {day}일</h3>
            <h4>완료 : {finish}개 할일 : {todo}개 남음</h4>
          </div>

          <hr></hr>
          
          <div>
            여기는 리스트들
          </div>

          <hr></hr>

          <div>
            <input placeholder='할일 입력' onChange={(e)=>{setAddlist(e.target.value)}}></input>
            <button onClick={()=>{
              let items = localStorage.getItem("todolist");
              items = JSON.parse(items);
              items.push(addlist);
              items = new Set(items);
              items = Array.from(items);
              localStorage.setItem('todolist', JSON.stringify(items), [])
            }}>+</button>
          </div>

        </div>
      </div>
    </div>
  );
}

// function list(){
  
//   return (

//   )
// }

export default App;
