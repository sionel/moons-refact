import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Today from './Today.js'
import AddBtn from './AddBtn.js';
function App() {

  let [finish, setFinish] = useState(0);
  let [todo, setTodo] = useState(0);
  let [addlist, setAddlist] = useState('');
  let [toggle, setToggle] = useState(false); //버튼누르면 토글
  //let [total, setTotal] = useState(0);
  //let [complete,setComplete] = useState(0);

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
                
                <List data={data} setData={setData} i={i} key={i} setToggle={setToggle} toggle={toggle}></List>
              )
            })}
          </div>

          <hr></hr>
          
          <div className='bottom'>
            <AddBtn addlist={addlist} setAddlist={setAddlist} setData={setData}></AddBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

//{props.toggle == true ? props.setComplete(props.complete++) : props.setTotal(props.total++);}
//투두리스트 완료버튼누르면 toggle값을 토글시키고 그값이 트루면 complete++ 한번더 눌러서 false가 되면 total값을 ++


function List(props){
  return(
    <div style={{display : 'flex'}}>
      <button className='checkBtn' onClick={()=>{
        props.setToggle(!props.toggle);
      }}>✔️</button>
      
      <p className='grow'>{props.data[props.i]}</p>
      
      <button className='delBtn' onClick={()=>{
        let items = localStorage.getItem("todolist");
        items = JSON.parse(items);
        //local에 있는 데이터가 삭제버튼누른 데이터와 일치하면 false를 주고 다르면 true를 주기 때문에 일치하는 것은 삭제됨
        let changeitems= items.filter( items => items !== props.data[props.i])
        //items = new Set(items);
        //items = Array.from(items);
        localStorage.setItem("todolist", JSON.stringify(changeitems), []);
        props.setData(changeitems);
      }}>x</button>
    </div>
  )
  
}

export default App;
