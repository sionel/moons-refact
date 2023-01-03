import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Today from './Today.js'
import AddBtn from './AddBtn.js';
function App() {

  let [finish, setFinish] = useState(0);
  let [todo, setTodo] = useState(0);
  let [addlist, setAddlist] = useState('');

  //로컬스토리지에 투두리스트 목록을 넣을 배열 생성
  useEffect(()=>{
    if(localStorage.getItem('todolist') == null){
      localStorage.setItem('todolist', JSON.stringify( [] ), [])
    }
  })


  let [data, setData] = useState(JSON.parse(localStorage.getItem('todolist'))) 
  
  return (
    <div className="App">
      <div className="grey-bg">
        <div className="white-bg">
          <Today></Today>

          <hr></hr>
          
          <div>
            {{data} == null ? null :
            data.map(function(a, i){
              return(
                <List data={data} i={i} key={i}></List>
              )
            })}
          </div>

          <hr></hr>

          <AddBtn addlist={addlist} setAddlist={setAddlist} setData={setData}></AddBtn>

        </div>
      </div>
    </div>
  );
}

function List(props){
  return(
    <div style={{display : 'flex'}}>
      <button>☐	</button>
      <p>{props.data[props.i]}</p>

    </div>
  )
  
}

export default App;
