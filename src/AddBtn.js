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
          props.setData(items);

          let copytoggle = [...props.toggle];
          copytoggle.push('');
          props.setToggle(copytoggle);
          console.log(props.toggle);

        }}
      >
        +
      </button>
    </div>
  );
}
export default AddBtn