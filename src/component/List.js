import { useEffect } from 'react';


function List(props){

  return(
    <div className='listDisplay' style={{display : 'flex'}}>
      <button className={`checkBtn ${props.com[props.i]}`} onClick={()=>{
        let copytoggle = [...props.toggle];
        let copycom = [...props.com];
        // eslint-disable-next-line no-lone-blocks
        {copytoggle[props.i] == "" ? copytoggle[props.i] = "doit" : copytoggle[props.i] = ""} //완료버튼 클릭 시 toggle을 doit으로 아니면 ''
        // eslint-disable-next-line no-lone-blocks
        {copycom[props.i] == "" ? copycom[props.i] = "final" : copycom[props.i] = ""} //완료버튼 클릭 시 com을 final로 아니면 ''
        props.setToggle(copytoggle);
        props.setCom(copycom);
      }}>✔️</button>
      
      <p className={`grow ${props.toggle[props.i]}`} style={{paddingLeft : '5px'}}>{props.data[props.i]}</p>
      
      <button className='delBtn' onClick={()=>{
        let items = localStorage.getItem("todolist");
        items = JSON.parse(items);
    
        //todolist에 저장된 것들 중 삭제버튼을 누른 데이터를 제외하고 필터링
        let changeitems= items.filter( items => items !== props.data[props.i])
        localStorage.setItem("todolist", JSON.stringify(changeitems), []);
        props.setData(changeitems); //다시저장

        let copytoggle = [...props.toggle];
        copytoggle.splice(props.i, 1); //투두리스트 삭제버튼 클릭시 toggle값도 같이 삭제
        
        let copycom = [...props.com];
        copycom.splice(props.i , 1); //투두리스트 삭제버튼 클릭시 com값도 같이 삭제
        
        props.setToggle(copytoggle);
        props.setCom(copycom);
      }}>x</button>

    </div>
  )
}
export default List