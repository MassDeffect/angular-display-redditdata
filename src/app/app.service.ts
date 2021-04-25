import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAngularInfos() {
    return this.http.get("https://www.reddit.com/r/angular.json");
  }

  getDotnetInfos() {
    return this.http.get("https://www.reddit.com/r/dotnet.json");
  }

  getSqlInfos() {
    return this.http.get("https://www.reddit.com/r/sql.json");
  }
}
