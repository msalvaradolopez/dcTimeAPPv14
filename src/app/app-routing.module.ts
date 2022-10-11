import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenTimeComponent } from './almacen-time/almacen-time.component';
import { MostradorTimeComponent } from './mostrador-time/mostrador-time.component';
import { WebappComponent } from './webapp/webapp.component';

const routes: Routes = [
  {path: "almacenTime", component: AlmacenTimeComponent},
  {path: "mostradorTime", component: MostradorTimeComponent},
  {path: "webapp", component: WebappComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
