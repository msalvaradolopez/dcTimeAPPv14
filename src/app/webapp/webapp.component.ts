import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.css']
})
export class WebappComponent implements OnInit {

  constructor(private _servicios: ServiciosService, private _router: Router, private _query: ActivatedRoute) {}

  ngOnInit(): void {
    this._query.queryParams.subscribe(params => {
      if (params["id"] == "M") {
        this._router.navigate(["/mostradorTime"]);
        this._servicios.menuAccion(false);
      }else if(params["id"] == "A") {
        this._router.navigate(["/almacenTime"]);
        this._servicios.menuAccion(false);
      }else if(params["id"] == "ADM") {
          this._router.navigate(["/consultas"]);
          this._servicios.menuAccion(true);
      }else if(params["id"] == "T") {
        this._router.navigate(["/almacenTablet"]);
        this._servicios.menuAccion(false);
    }
    });

    if(this._query.snapshot.queryParams["id"] == "M"){
      this._router.navigate(["/mostradorTime"]);
      this._servicios.menuAccion(false);
    }
    else if(this._query.snapshot.queryParams["id"] == "A"){
      this._router.navigate(["/almacenTime"]);
      this._servicios.menuAccion(false);
    }
    else if(this._query.snapshot.queryParams["id"] == "ADM") {
      this._router.navigate(["/consultas"]);
      this._servicios.menuAccion(true);
    }else if(this._query.snapshot.queryParams["id"] == "T") {
      this._router.navigate(["/mostradorTablet"]);
      this._servicios.menuAccion(false);
    }
  }

}
