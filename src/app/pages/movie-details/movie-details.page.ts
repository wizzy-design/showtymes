import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

interface MovieInfo {
  // id: string,
  title: string;
}

// interface Backdrop {
//   aspect_ratio: number;
//   height: number;
//   iso_639_1?: string;
//   file_path: string;
//   vote_average: number;
//   vote_count: number;
//   width: number;
// }

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: MovieInfo | any;
  // image: Backdrop | any;
  imageBaseUrl = environment.images;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe((res) => {
      console.log(res);
      this.movie = res;
    });

    // this.movieService.getImageDetails(id).subscribe((res) => {
    //   console.log(res);
    //   this.image = res;
    // });
  }
}
