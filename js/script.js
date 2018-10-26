 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {


             let element = document.createElement("li");
             /*element.innerText = task;*/
             let div  = document.createElement('div')
             let p  = document.createElement('p')
             p.innerText = task;
             element.appendChild(div);
             div.appendChild(p);

             let marcar =document.createElement('input');
             marcar.type = 'button'
             marcar.value = 'Realizado'; 
             div.appendChild(marcar);

             let finalizado = document.createElement('input');
             finalizado.type = 'button'
             finalizado.value = 'borrar';
             div.appendChild(finalizado);

             finalizado.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });
             marcar.addEventListener("click", ()=>{
                p.style.textDecoration ='line-through';
             });
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }