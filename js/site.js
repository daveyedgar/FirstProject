let count = 0;

function addTask() {
  count++;
  let Tasktemplate = `<li  class="item  list-group-item">To Do  ${count}</li>`;
  let element = document.getElementById("list");
  element.innerHTML += Tasktemplate;
}
