import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule }  from '@asymmetrik/ngx-leaflet';
import { Map, map } from 'leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsmMapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    OsmMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
