import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { LoadingComponent } from './componentes/shared/loading/loading.component';

//RUTAS
import { ROUTES } from './app.routes';


//SERIVICIOS
import { SpotifyService } from './service/spotify.service';

//PIPES
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
   SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
