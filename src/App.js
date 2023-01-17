import './App.css';
import { useEffect, useState } from 'react';
import Today from './component/Today.js'
import AddBtn from './component/AddBtn.js';
import List from './component/List';

function App() {

  let [addlist, setAddlist] = useState('');
  let [toggle, setToggle] = useState([]); //투두리스트 완료버튼 클릭 시 p태그 클래스명
  let [com, setCom] = useState([]); //투두리스트 완료버튼 클릭 시 버튼 클래스명

  //로컬스토리지에 투두리스트 목록을 넣을 배열 생성
  useEffect(()=>{
    if(localStorage.getItem('todolist') == null){
      localStorage.setItem('todolist', JSON.stringify( [] ), [])
    }
  })

  let [data, setData] = useState(JSON.parse(localStorage.getItem('todolist')));
  
  return (
    <div className="App">
      <div className="grey-bg">
        <div className="white-bg">
          <Today toggle={toggle}></Today>
          <hr></hr>
          <div>
            <AddBtn addlist={addlist} setAddlist={setAddlist} setData={setData} setToggle={setToggle} toggle={toggle}
            com={com} setCom={setCom}></AddBtn>
          </div>
          <div>
            {{data} == null ? null :
            data.map(function(a, i){
              return(
                <List data={data} setData={setData} i={i} key={i}
                com={com} setCom={setCom} setToggle={setToggle} toggle={toggle}></List>
              )
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
}


export default App;
