import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  movieList: any[] = [];
  imageBaseUrl = 'http://image.tmdb.org/t/p';

  constructor(private http: HttpClient) {}

  // Method for Searchbar
  searchMovies(event: any) {
    const searchTerm = event.target.value;
    if ((searchTerm && searchTerm.trim() !== null) || '') {
      this.http
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=becbdef455e97340e5d0b1b5e5570c2d&query=${searchTerm}`
        )
        .subscribe((res: any) => {
          this.movieList = res.results;
        });
    } else {
      this.movieList = [];
    }
  }

  ngOnInit() {}
}
