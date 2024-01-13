import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieService } from '../services/movie.service';
import { environment } from 'src/environments/environment';

interface Movie {
  id: Number;
  title: string;
  release_date: string;
  vote_average: string;
  poster_path: string;
}

@Component({
  selector: 'app-trendgrid',
  templateUrl: './trendgrid.component.html',
  styleUrls: ['./trendgrid.component.scss'],
})
export class TrendgridComponent implements OnInit {
  movies: Movie[] = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(
    private movieService: MovieService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.movieService.getTopRatedMovies(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        this.movies.push(...res.results);

        event?.target.complete();
        if (event) {
          event.target.disabled = res.total_pages === this.currentPage;
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}
