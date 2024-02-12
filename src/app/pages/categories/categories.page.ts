import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  title: string;
  poster_path: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})

export class CategoriesPage implements OnInit {
  genres: Genre[] = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 27, name: 'Horror' },
    { id: 53, name: 'Thriller' },
  ];
  beginMovies: Movie[] = [];
  imageBaseUrl = 'http://image.tmdb.org/t/p';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.fetchFirstMovies();
  }

  fetchFirstMovies() {
    // Loop through each genre and fetch the first movie for each genre
    this.genres.forEach((genre) => {
      this.movieService.getMovieByGenre(genre.id).subscribe(
        (res) => {
          // Store the first movie for each genre using the genre's ID as the key
          if (res.results.length > 0) {
            this.beginMovies[genre.id] = res.results[0];
          }
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
