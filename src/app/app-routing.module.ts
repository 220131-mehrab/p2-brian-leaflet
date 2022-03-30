import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), LeafletModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
