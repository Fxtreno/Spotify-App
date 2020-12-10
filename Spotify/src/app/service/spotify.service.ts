import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//test

export class SpotifyService {

  constructor( private http : HttpClient  ) {
    console.log('SPotify Servicio Listo.!');
   }

   getQuery( query: string ){

     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
     'Authorization' : 'Bearer BQADdbDITg4tOQ-Vh60irGHCpAxJlHV030meJ0UJIN2M8bOSFC-IQ4Ek9yG7nJ6miN0wgzwMYG4QdsUmd38'
     });

     return this.http.get(url, { headers });

   }

   getNuevaMusica(){

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items));
   }


   getArtistas( termino : string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=50`)
               .pipe( map(data => data['artists'].items));
    
   }


    getArtista( id : string ){

    return this.getQuery(`artists/${ id }`);
               //.pipe( map(data => data['artists'].items));
    
   }


    getTopTracks( id : string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
               .pipe( map(data => data['tracks']));
    
   }

   
} 



