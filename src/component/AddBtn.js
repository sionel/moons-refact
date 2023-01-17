import { useEffect, useState } from 'react';


function AddBtn(props){

  return (
    <div>
      <input className='addInput'
        placeholder="할일 입력"
        onChange={(e) => {
          props.setAddlist(e.target.value);
        }}
      ></input>

      <button className='add'
        onClick={() => {
          let items = localStorage.getItem("todolist");
          items = JSON.parse(items);
          items.push(props.addlist);
          items = new Set(items);
          items = Array.from(items);
          localStorage.setItem("todolist", JSON.stringify(items), []);
          props.setData(items); //투두리스트 데이터 저장

          let copytoggle = [...props.toggle];
          copytoggle.push('');
          props.setToggle(copytoggle);
          let copycom = [...props.com];
          copycom.push('');
          props.setCom(copycom); //toggle과 com에 배열 추가
        }}
      >
        ADD
      </button>
    </div>
  );
}
export default AddBtn