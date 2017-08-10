//VARIABLES GLOBALES
var Tareas = [];
var btnSave = document.getElementById("save");
var btnDesplegar = document.getElementById("addList");
var lista = document.getElementById("lista");
var desplegar = document.getElementById("desplegar");
var btnListar = document.getElementById("addList");
var imgClose = document.getElementById("close");

//OBJETO
function Tarea(nameTask) {
  this.nameTask = nameTask;
 // this.taskID = taskID;

}

//BOTON PARA MOSTRAR AÑADIR TAREA
btnDesplegar.onclick = function () {
  desplegar.style.display = "block";
  btnListar.style.display = "none";
}

//BOTON AÑADIR TAREA
btnSave.onclick = function () {
  var crearLista = document.getElementById("resultado");
  var inputTask = document.getElementById("task").value;
  var NombreLista = inputTask;

  var another = document.getElementById("buttonList2");
  another.style.display = "block";

  //creamos un DIV para la lista creada
  var divLista = document.createElement("div");
  divLista.setAttribute("class", "NombreLista");

  //ocultar div anterior y mostrar el boton primero al costado
  desplegar.style.display = "none";

  var btnAddTask = document.createElement("button");
  btnAddTask.setAttribute("class", "ADDTask");
  btnAddTask.textContent = "Add Task.."

  //creamos los elementos del Div
  var H1 = document.createElement("h1");
  H1.textContent = NombreLista;

  divLista.appendChild(H1);
  divLista.appendChild(btnAddTask);
  resultado.appendChild(divLista);

  btnAddTask.onclick = function () {
    var txtAddTask = document.createElement("input");
    txtAddTask.setAttribute("type", "text");
    txtAddTask.setAttribute("class", "NewTask");

    /*var btnok = document.createElement("img");
    btnok.setAttribute("class", "imagenOk");
    btnok.src = "assets/img/visto.png";
    divLista.appendChild(btnok);
    */
    divLista.appendChild(txtAddTask);
  
    if(txtAddTask.blur()){
       var task = new Tarea(txtAddTask.value);
       Tareas.push(task);
       console.log(task.nameTask);
    }
  }
  

}

//Eliminar
imgClose.onclick = function () {
  desplegar.style.display = "none";
  btnListar.style.display = "block";

}




