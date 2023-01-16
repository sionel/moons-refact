

function Today(props){
  let date = new Date()
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  
  let toggle = props.toggle;
  let completeTodolist = toggle.filter( toggle => toggle == 'doit')
  let willbe = toggle.filter( toggle => toggle == '')

  return(
    <div>
      <h3>{year}년 {month}월 {day}일</h3>
      <h4 style={{ color : 'green'}}>할일 {willbe.length}개 남음</h4>
      <h4>{completeTodolist.length}개 완료</h4>
    </div>
  )
}

export default Today