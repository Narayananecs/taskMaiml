import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http : HttpClient) { }

  getWeatherDetails(cityName) {
    let url = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=f9bdd0ac48377e1349c3cac6b4f1f48a"
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse){
    return throwError(error);
  }
}
