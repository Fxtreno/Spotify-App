import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})

export class ArtistaComponent {

  artista: any = {};
  TopTracks:  any[] = [];
  loading: boolean;

  constructor( private route :  ActivatedRoute,
               private spotify :  SpotifyService
             ) { 
   
   this.route.params.subscribe( respuesta =>{
   	this.getArtista( respuesta['id'] );
    this.getTopTracks( respuesta['id'] );
   });

  }

  getArtista( id: string ){

    this.loading = true;

  	this.spotify.getArtista( id )
  	    .subscribe( artista =>{
  	    	console.log(artista);
          this.artista = artista;
          this.loading = false;
  	    });

  }


  getTopTracks( id: string ){

    this.spotify.getTopTracks( id )
        .subscribe( musica =>{
          console.log(musica);
          this.TopTracks =  musica;
        });
  }



}
