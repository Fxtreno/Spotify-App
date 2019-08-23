import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

	artistas: any[] = [];
  loading: boolean;

  constructor( private spotifyService :  SpotifyService  ) { }


  buscar( termino:string ){

    this.loading = true;
    
    console.log(termino);

    this.spotifyService.getArtistas( termino )
        .subscribe( (data : any) => {
        	console.log(data);
        	this.artistas = data;
          this.loading = false;
        });
  }

}
