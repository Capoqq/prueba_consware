import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  arrayTask:any[] = [];
  edicion:boolean = false
  estadosTarea:any[] = [
    {
      descripcion:"Terminado",
      value:1
    },
    {
      descripcion:"Pendiente",
      value:2
    }
  ]
  form = new FormGroup({
    descripcion: new FormControl("", [Validators.required]),
    informador: new FormControl("", [Validators.required]),
    estado:new FormControl("", [])

  })
  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get("id")){
      this.edicion = true;
      this.arrayTask = JSON.parse(localStorage.getItem("tasks")!)
      this.arrayTask.forEach((element)=>{
        if(element.id == this.route.snapshot.paramMap.get("id") ){
          this.form.controls["descripcion"].setValue(element.descripcion)
          this.form.controls["informador"].setValue(element.informador)
          this.form.controls["estado"].setValue(element.estado)
        }
      })
    }
  }
  createTask(){
    if(localStorage.getItem("tasks")){
      this.arrayTask = JSON.parse(localStorage.getItem("tasks")!)
    }
    if(this.form.controls["descripcion"].value != "" && this.form.controls["informador"].value != ""){
     this.arrayTask.push({
       id:this.getRandomArbitrary(0,100),
       descripcion: this.form.controls["descripcion"].value,
       informador:this.form.controls["informador"].value,
       estado:2,
       estadoTexto:"Pendiente"
     })
     localStorage.setItem("tasks", JSON.stringify(this.arrayTask))
     this.router.navigate(["principal"])
    }
  }
  updateTask(){
    let estadoTexto = "";
    if(this.form.controls["estado"].value == 1){
      estadoTexto = "Terminado"
    } else{
      estadoTexto = "Pendiente"
    }
    if(this.form.controls["descripcion"].value != "" && this.form.controls["informador"].value != ""){
      var index = this.arrayTask.findIndex(i => i.id == this.route.snapshot.paramMap.get("id"));
      this.arrayTask[index] = {
        id:this.route.snapshot.paramMap.get("id"),
        descripcion: this.form.controls["descripcion"].value,
        informador:this.form.controls["informador"].value,
        estadoTexto,
        estado:this.form.controls["estado"].value
      }
      localStorage.setItem("tasks", JSON.stringify(this.arrayTask))
      this.router.navigate(["principal"])
     }
  }
   getRandomArbitrary(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  deleteTask(){
    var index = this.arrayTask.findIndex(i => i.id == this.route.snapshot.paramMap.get("id"));
    this.arrayTask.splice(index,1)
    console.log(index,this.arrayTask)
    localStorage.setItem("tasks", JSON.stringify(this.arrayTask))
    this.router.navigate(["principal"])

  }
}
