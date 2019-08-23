import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

	nuevasCanciones: any[] = [];
  loading: boolean;

  constructor( private spotifyService :  SpotifyService) { 

    this.loading = true;
   
    this.spotifyService.getNuevaMusica()
        .subscribe( (data: any) =>{
         this.nuevasCanciones = data;
         this.loading = false;
         console.log(data);
        })
  
  }



}
