import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WeatherApiService } from './weather-api.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showTextBox1: boolean = false;
  cityName1: {};
  pannel1Error: boolean;
  pannel1Img: string = "assets/weather.png"
  showTextBox2: boolean = false;
  cityName2: {};
  pannel2Error: boolean;
  pannel2Img: string = "assets/weather.png"
  showTextBox3: boolean = false;
  cityName3: {};
  pannel3Error: boolean;
  pannel3Img: string = "assets/weather.png"
  showTextBox4: boolean = false;
  cityName4: {};
  pannel4Error: boolean;
  pannel4Img: string = "assets/weather.png"
  showTextBox5: boolean = false;
  cityName5: {};
  pannel5Error: boolean;
  pannel5Img: string = "assets/weather.png"
  showTextBox6: boolean = false;
  cityName6: {};
  pannel6Error: boolean;
  pannel6Img: string = "assets/weather.png"
  showTextBox7: boolean = false;
  cityName7: {};
  pannel7Error: boolean;
  pannel7Img: string = "assets/weather.png"
  showTextBox8: boolean = false;
  cityName8: {};
  pannel8Error: boolean;
  pannel8Img: string = "assets/weather.png"
  showTextBox9: boolean = false;
  cityName9: {};
  pannel9Error: boolean;
  pannel9Img: string = "assets/weather.png"

  constructor(private http: HttpClient, private weatherApiService: WeatherApiService) { }
  ngOnInit() {
    setInterval(()=>{
      this.automaticRefresh() 
    },300000) // Refresh once in 5 mins
    this.checkInternetConnectivity();


  }
  getWeather(pannelId: number, textBoxValue) {
    this.weatherApiService.getWeatherDetails(textBoxValue.value).subscribe(
      (successData) => {
        console.log(successData);
        this.panelData(pannelId, successData)
      },
      (err) => {
        this.pannelErrorData(pannelId)
      }
    )
  }

  panelData(id, dataObject) {
    if (id == 1) {
      this.cityName1 = dataObject;
      localStorage.setItem("cityName1", JSON.stringify(dataObject));
      let panelImg = dataObject.weather[0].icon;
      this.pannel1Img = "http://openweathermap.org/img/wn/" + panelImg + "@2x.png"
      this.showTextBox1 = false;
      this.pannel1Error = false;
    } else if (id == 2) {
      this.cityName2 = dataObject;
      localStorage.setItem("cityName2", JSON.stringify(dataObject));
      let panelImg = dataObject.weather[0].icon;
      this.pannel2Img = "http://openweathermap.org/img/wn/" + panelImg + "@2x.png"
      this.showTextBox2 = false;
      this.pannel2Error = false;
    } else if (id == 3) {
      this.cityName3 = dataObject;
      localStorage.setItem("cityName3", JSON.stringify(dataObject));
      let panelImg = dataObject.weather[0].icon;
      this.pannel3Img = "http://openweathermap.org/img/wn/" + panelImg + "@2x.png"
      this.showTextBox3 = false;
      this.pannel3Error = false;
    } else if (id == 4) {
      this.cityName4 = dataObject;
      localStorage.setItem("cityName4", JSON.stringify(dataObject));
      let panelImg = dataObject.weather[0].icon;
      this.pannel4Img = "http://openweathermap.org/img/wn/" + panelImg + "@2x.png"
      this.showTextBox4 = false;
      this.pannel4Error = false;
    } else if (id == 5) {
      this.cityName5 = dataObject;
      localStorage.setItem("cityName5", JSON.stringify(dataObject));
      let panelImg = dataObject.weather[0].icon;
      this.pannel5Img = "http://openweathermap.org/img/wn/" + panelImg + "@2x.png"
      this.showTextBox5 = false;
      this.pannel5Error = false;
    } else if (id == 6) {
      this.cityName6 = dataObject;
      localStorage.setItem("cityName6", JSON.stringify(dataObject));
      let panelImg = dataObject.weather[0].icon;
      this.pannel6Img = "http://openweathermap.org/img/wn/" + panelImg + "@2x.png"
      this.showTextBox6 = false;
      this.pannel6Error = false;
    } else if (id == 7) {
      this.cityName7 = dataObject;
      localStorage.setItem("cityName7", JSON.stringify(dataObject));
      let panelImg = dataObject.weather[0].icon;
      this.pannel7Img = "http://openweathermap.org/img/wn/" + panelImg + "@2x.png"
      this.showTextBox7 = false;
      this.pannel7Error = false;
    } else if (id == 8) {
      this.cityName8 = dataObject;
      localStorage.setItem("cityName8", JSON.stringify(dataObject));
      let panelImg = dataObject.weather[0].icon;
      this.pannel8Img = "http://openweathermap.org/img/wn/" + panelImg + "@2x.png"
      this.showTextBox8 = false;
      this.pannel8Error = false;
    } else if (id == 9) {
      this.cityName9 = dataObject;
      localStorage.setItem("cityName9", JSON.stringify(dataObject));
      let panelImg = dataObject.weather[0].icon;
      this.pannel9Img = "http://openweathermap.org/img/wn/" + panelImg + "@2x.png"
      this.showTextBox9 = false;
      this.pannel9Error = false;
    }
  }

  pannelErrorData(id) {
    if (id == 1)
      this.pannel1Error = true;
    else if (id == 2)
      this.pannel2Error = true;
    else if (id == 3)
      this.pannel3Error = true;
    else if (id == 4)
      this.pannel4Error = true;
    else if (id == 5)
      this.pannel5Error = true;
    else if (id == 6)
      this.pannel6Error = true;
    else if (id == 7)
      this.pannel7Error = true;
    else if (id == 8)
      this.pannel8Error = true;
    else if (id == 9)
      this.pannel9Error = true;
  }

  automaticRefresh() {
    if(window.navigator.onLine) {
    if (this.cityName1 != undefined) {
      let cityName = this.cityName1["name"];
      let obj = { value: cityName }
      this.getWeather(1, obj)
    } if (this.cityName2 != undefined) {
      let cityName = this.cityName2["name"];
      let obj = { value: cityName }
      this.getWeather(2, obj)
    } if (this.cityName3 != undefined) {
      let cityName = this.cityName3["name"];
      let obj = { value: cityName }
      this.getWeather(3, obj)
    } if (this.cityName4 != undefined) {
      let cityName = this.cityName4["name"];
      let obj = { value: cityName }
      this.getWeather(4, obj)
    } if (this.cityName5 != undefined) {
      let cityName = this.cityName5["name"];
      let obj = { value: cityName }
      this.getWeather(5, obj)
    } if (this.cityName6 != undefined) {
      let cityName = this.cityName6["name"];
      let obj = { value: cityName }
      this.getWeather(6, obj)
    } if (this.cityName7 != undefined) {
      let cityName = this.cityName7["name"];
      let obj = { value: cityName }
      this.getWeather(7, obj)
    } if (this.cityName8 != undefined) {
      let cityName = this.cityName8["name"];
      let obj = { value: cityName }
      this.getWeather(8, obj)
    } if (this.cityName9 != undefined) {
      let cityName = this.cityName9["name"];
      let obj = { value: cityName }
      this.getWeather(9, obj)
    }
  }
  }
  checkInternetConnectivity() {
    if (!window.navigator.onLine) {
      if (localStorage.getItem("cityName1")) {
        let data = JSON.parse(localStorage.getItem("cityName1"));
        this.panelData(1, data)
      } if (localStorage.getItem("cityName2")) {
        let data = JSON.parse(localStorage.getItem("cityName2"));
        this.panelData(2, data)
      } if (localStorage.getItem("cityName3")) {
        let data = JSON.parse(localStorage.getItem("cityName3"));
        this.panelData(3, data)
      } if (localStorage.getItem("cityName4")) {
        let data = JSON.parse(localStorage.getItem("cityName4"));
        this.panelData(4, data)
      } if (localStorage.getItem("cityName5")) {
        let data = JSON.parse(localStorage.getItem("cityName5"));
        this.panelData(5, data)
      } if (localStorage.getItem("cityName6")) {
        let data = JSON.parse(localStorage.getItem("cityName6"));
        this.panelData(6, data)
      } if (localStorage.getItem("cityName7")) {
        let data = JSON.parse(localStorage.getItem("cityName7"));
        this.panelData(7, data)
      } if (localStorage.getItem("cityName8")) {
        let data = JSON.parse(localStorage.getItem("cityName8"));
        this.panelData(8, data)
      } if (localStorage.getItem("cityName9")) {
        let data = JSON.parse(localStorage.getItem("cityName9"));
        this.panelData(9, data)
      }

    }
  }
}
