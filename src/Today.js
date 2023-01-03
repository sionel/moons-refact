

function Today(){
  let date = new Date()
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return(
    <div>
      <h3>{year}년 {month}월 {day}일</h3>
      <h4>완료 : 완료한 갯수 할일 : 남은거갯수 남음</h4>
    </div>
  )
}

export default Today