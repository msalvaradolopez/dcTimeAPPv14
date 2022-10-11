import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  _menu: any;
  activarMenu: boolean = false;

  constructor(private _servicios: ServiciosService) { }

  ngOnInit(): void {
    let activar: boolean = Boolean(sessionStorage.getItem("activarMenu"));
    if(activar != null)
      this.activarMenu = activar;

    this._menu = this._servicios.menu$
    .subscribe(resp => {
      resp ?  this.activarMenu = true : this.activarMenu = false;
      sessionStorage.setItem("activarMenu", String(this.activarMenu) );
    });
  }

  ngOnDestroy(): void {
    this._menu.unsubscribe();
    sessionStorage.clear();
  }
}
