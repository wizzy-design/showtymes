import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/movie/popular?page=${page}&api_key=${environment.apiKey}`
    );
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  getAvailableMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/movie/now_playing?api_key=${environment.apiKey}`
    );
  }

  getUpcomingMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/movie/upcoming?api_key=${environment.apiKey}`
    );
  }
}
