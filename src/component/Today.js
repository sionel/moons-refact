function Today(props){
  let date = new Date()
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  
  let toggle = props.toggle;
  let completeTodolist = toggle.filter( toggle => toggle == 'doit') //완료개수
  let willbe = toggle.filter( toggle => toggle == '') //남은 개수

  return(
    <div>
      <h3 style={{paddingTop : '5px'}}>{year}년 {month}월 {day}일 To Do List</h3>
      <h4>{completeTodolist.length}개 완료</h4>
      <h4 style={{ color : 'green'}}>할일 {willbe.length}개 남음</h4>
    </div>
  )
}

export default Today