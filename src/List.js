import { useEffect } from 'react';


function List(props){

  useEffect(()=>{
    if (props.toggle == true){
      props.setDoit("doit");
    }
    else{
      props.setDoit("");
    }
  })


  //완료한 것들을 저장할 false배열을 만들고
  //해당 버튼 클릭 시 해당 props.i의 false를 true로 바꾼다
  //todolist를 추가하는 버튼을 누르면 완료저장하는 flase배열에 마지막 위치에 flase를 하나 더 추가해준다
  return(
    <div className='listDisplay' style={{display : 'flex'}}>
      <button className='checkBtn' onClick={()=>{
        let copytoggle = [...props.toggle];
        //copytoggle[props.i] = "doit";
        {copytoggle[props.i] == "" ? copytoggle[props.i] = "doit" : copytoggle[props.i] = ""}
        props.setToggle(copytoggle);
        //console.log(props.toggle)
      }}>✔️</button>
      
      <p className={`grow ${props.toggle[props.i]}`} style={{paddingLeft : '5px'}}>{props.data[props.i]}</p>
      
      <button className='delBtn' onClick={()=>{
        let items = localStorage.getItem("todolist");
        items = JSON.parse(items);
        //local에 있는 데이터가 삭제버튼누른 데이터와 일치하면 false를 주고 다르면 true를 주기 때문에 일치하는 것은 삭제됨
        //삭제버튼 누른 데이터와 일치하지 않는것만 반환(필터링)
        let changeitems= items.filter( items => items !== props.data[props.i])
        //items = new Set(items);
        //items = Array.from(items);
        localStorage.setItem("todolist", JSON.stringify(changeitems), []);
        props.setData(changeitems);
      }}>x</button>

    </div>
  )
}
export default List