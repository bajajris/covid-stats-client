import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NodeserviceService {

  constructor(private http: HttpClient) {  }
  retrieveSchoolCovidSummary(){
    return this.http.get('http://127.0.0.1:8888/schoolcovidsummary/', {});
  }

  retrieveSchoolCovidTesting(){
    return this.http.get('http://127.0.0.1:8888/schoolcovidtesting/', {});
  }

  retrieveSchoolPartnersActiveCovid(){
    return this.http.get('http://127.0.0.1:8888/schoolpartnersactivecovid/', {});
  }

  retrieveCasesByStatusAndPHU(){
    return this.http.get('http://127.0.0.1:8888/casesbystatusandphu/', {});
  }

  retrieveOngoingOutbreaks(){
    return this.http.get('http://127.0.0.1:8888/ongoingoutbreaks/', {});
  }
}
