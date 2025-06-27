let task = JSON.parse(localStorage.getItem("tasks")) || [];
showall();

// let task = [];

function taskadd() {
    const doing = document.getElementById('task').value.trim();

    if (doing) {
        task.push({ doing, completed: false });
        document.getElementById('hold_task').innerHTML = `<p> Today, you have to do task  ${doing}.</p>`;
        document.getElementById('task').value = '';
        // showall();
        localStorage.setItem("tasks", JSON.stringify(task));


    }
}

function showall() {
    if (task.length === 0) {
        document.getElementById('hold_task').innerHTML = `<p>No task have to do.</p>`
        return;
    }
    let tasks = "<h3> Task List:</h3> ";
    task.forEach((t, i) => {
        // tasks += `<li> ${i + 1}. Today you have to doing ${t.doing}. </li>`;
        tasks += ` 
        <div class = "showall">
         <li style= "text-decoration: ${t.completed ? 'line-through' : 'none'}">
          <input class = "checkbox" type= "checkbox"  onclick="markDone(${i})" ${t.completed} ? 'checked' :''}>
          ${i + 1}.${t.doing}
          <button class = "delete" onclick="deleteTask(${i})" >❌</button>
         </li>
       </div> `;
    });
    tasks += "";
    document.getElementById('hold_task').innerHTML = tasks;

}
function deleteTask(index) {
    task.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(task));
    showall();
}


function markDone(index) {
    task[index].completed = !task[task].completed;
    localStorage.setItem("tasks", JSON.stringify(task));
}




