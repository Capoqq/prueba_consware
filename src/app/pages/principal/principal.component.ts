import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private router:Router) { }
  listaTareas:any[] = []
  ngOnInit(): void {
    if(localStorage.getItem("tasks")){
      this.listaTareas = JSON.parse(localStorage.getItem("tasks")!)
    } else{
      this.listaTareas = []
    }
  }
  seeMore(id:number){
    this.router.navigate(["principal/tarea", id])
  }
}
