import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieService } from '../../services/movie.service';
import { HttpClient } from '@angular/common/http';

interface Movie {
  id: Number;
  title: string;
  release_date: string;
  vote_average: string;
  poster_path: string;
  backdrop_path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  topMovies: Movie[] = [];
  soonMovies: Movie[] = [];
  movieList: any[] = [];
  currentPage = 1;
  imageBaseUrl = 'http://image.tmdb.org/t/p';

  constructor(
    private movieService: MovieService,
    private loadingCtrl: LoadingController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  // Method for Searchbar
  searchMovies(event: any) {
    const searchTerm = event.target.value;
    if (searchTerm && searchTerm.trim() !== null || '') {
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

  // Code for Segment and display of Available/Unavailable movies

  selectedSegment: string = 'comingSoon';

  segmentChanged(event: CustomEvent) {
    this.selectedSegment = event.detail.value;
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.movieService.getAvailableMovies(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        this.topMovies.push(...res.results);

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

    this.movieService.getUpcomingMovies(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        this.soonMovies.push(...res.results);

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
