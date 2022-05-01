document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e)=> {
    e.preventDefault()
    handletodo(e.target.new_task_description.value)
  })


});



function handletodo(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handledelete)
  btn.textContent = 'x'
  li.textContent = `${todo}   `
  li.style.color = 'white'
  li.style.fontSize = '25px'
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}
function handledelete(e){
 e.target.parentNode.remove()
}