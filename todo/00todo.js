function xbtnclick(e){
    pnode = e.target.parentNode;
    list = document.getElementById('todolist')
    list.remonveChild(pnode)



}
function addItem() {
   console.log('addItem 함수 호출됨')

      todo = document.getElementById('item')
      list = document.getElementById('todolist')

      listitem = document.createElement('li')
      listitem.innerText = todo.value
      listitem.className = 'list-group-item list-group-item-action list-group-item-warning';


xbtn = document.createElement('button')
xbtn.innerHTML = "&times"
//onclick 지원방법 1.함수 적용
//xbtn.onclick = xbtnclick;
//지원방법 2 - 익명함수
//xbtn.onclick = function(e){
   // pnode = e.target.parentNode
 // list.remonveChild(pnode)
//}
//지원방법 3 - 화살표함수 적용

xbtn.onclick = (e)=> {
    let pnode = e.target.parentNode
    list.removeChild(pnode)
}

xbtn.className = 'close'
listitem.appendChild(xbtn)


      list.appendChild(listitem)


      dbtn = document.createElement('button')
      dbtn.innerHTML = "&#33"
      
      dbtn.onclick = (e)=> {
          pnode = e.target.parentNode
          pnode.style.textDecoration = "line-through"
      }
      
      dbtn.className = 'close'
      listitem.appendChild(dbtn)
      
      list.appendChild(listitem)







      todo.value = ""
      todo.focus()
}





