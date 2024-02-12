import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Genres {
  title: string;
  posterPath: string;
}

export interface ApiResult {
  pages: number;
  results: any[];
  total_pages: number;
  total_results: number;
  maximum: string;
  minimum: string;
  page: number;
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  length: number;
  [key: number]: Genres;
}

// const API_KEY: any = environment.apiKey;
// const BASE_URL: any = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=becbdef455e97340e5d0b1b5e5570c2d`
    );
  }

  getMovieDetails(id: string | null): Observable<any> {
    return this.http.get<ApiResult>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=becbdef455e97340e5d0b1b5e5570c2d`
    );
  }

  getAvailableMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=becbdef455e97340e5d0b1b5e5570c2d`
    );
  }

  getUpcomingMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=becbdef455e97340e5d0b1b5e5570c2d`
    );
  }

  getMovieByGenre(id: any ): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `https://api.themoviedb.org/3/discover/movie?api_key=becbdef455e97340e5d0b1b5e5570c2d&with_genres=${id}`
    );
  }
}
