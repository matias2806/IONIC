import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-primera-pagina',
  templateUrl: './primera-pagina.page.html',
  styleUrls: ['./primera-pagina.page.scss'],
})
export class PrimeraPaginaPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  lindo(){
    this.router.navigate([`/linda`]);
  }

  feo(){
    this.router.navigate([`/fea`]);
  }

}
