import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

interface MovieInfo {
  title: string;
}

interface Genre {
  id: number | string;
  name: string;
}

interface Movie {
  id: Number;
  title: string;
  release_date: string;
  vote_average: string;
  poster_path: string;
  backdrop_path: string;
}

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.page.html',
  styleUrls: ['./categories-details.page.scss'],
})
export class CategoriesDetailsPage implements OnInit {
  movie: MovieInfo | any;
  genreName: string = '';
  genreMovies: Movie[] = [];
  imageBaseUrl = 'http://image.tmdb.org/t/p';

  genres: Genre[] = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 27, name: 'Horror' },
    { id: 53, name: 'Thriller' },
  ];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieByGenre(id).subscribe((res) => {
      this.movie = res;
      this.genreMovies.push(...res.results);
    });

    // To help display name of Genre
    this.genres.forEach((genre: Genre) => {
      if (genre.id == id) {
        this.genreName = genre.name;
      }
    });
  }
}
