var task = document.getElementById("inp");
var btn = document.getElementById("butn");
var newTask = document.querySelector("#quick_reply");
var txtArea = document.getElementById("tasks");


btn.onclick = function () {
    txtArea.innerHTML = txtArea.innerHTML + '' + task.value + '';
  }



  
      