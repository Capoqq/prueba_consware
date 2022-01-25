import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loguot',
  templateUrl: './loguot.component.html',
  styleUrls: ['./loguot.component.scss']
})
export class LoguotComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    this.router.navigate(["/login"])
  }
}
