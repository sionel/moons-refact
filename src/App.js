import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Today from './Today.js'
import AddBtn from './AddBtn.js';
import List from './List';
function App() {

  let [finish, setFinish] = useState(0);
  let [todo, setTodo] = useState(0);
  let [addlist, setAddlist] = useState('');
  let [toggle, setToggle] = useState([]); //버튼누르면 토글
  let [doit, setDoit] = useState([]);

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
          {/** 배열 state만들고 state값은 0, 해당 투두리스트에 체크버튼 클릭하면 해당 인덱스의 배열state를 1로 한번더 누르면 다시 0으로
           * 투두리스트 추가하는 버튼누르면 배열state에 하나더 추가하기위해 0을 하나더 배열에 넣은 다음다시 저장해줘야함
           * className담을 state하나 만들고 useEffect써서 해당 state값이 1이면 className담을 state에 css에 미리 만들어둔 해당 스타일명을 넣어줌
           * className담을 state가 두개필요할듯? - 하나는 버튼 하나는 텍스트 글자 옅게하고 가운데 줄긋기위한
           * 
           */}
          <div>
            <AddBtn addlist={addlist} setAddlist={setAddlist} setData={setData} setToggle={setToggle} toggle={toggle}></AddBtn>
          </div>
          
          <div>
            {{data} == null ? null :
            data.map(function(a, i){
              return(
                
                <List data={data} setData={setData} i={i} key={i} doit={doit} setDoit={setDoit} setToggle={setToggle} toggle={toggle}></List>
              )
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
}

//{props.toggle == true ? props.setComplete(props.complete++) : props.setTotal(props.total++);}
//투두리스트 완료버튼누르면 toggle값을 토글시키고 그값이 트루면 complete++ 한번더 눌러서 false가 되면 total값을 ++

//체크버튼 클릭하면 해당리스트 텍스트에 줄이 그어지고 (transform사용)체크버튼의 배경색이 고정 ,한번더 누르면 그어진 줄이 지워지고 버튼 배경색 사라짐


export default App;
