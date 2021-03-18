import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NodeserviceService } from 'src/app/nodeservice.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  title: string = "Schools COVID-19 Data"
  covidSummary: any = []
  covidTesting: any = []
  covidPartnersActive: any = []
  constructor(private nodeService: NodeserviceService) { }

  displaySchoolCovidSummary(){
    this.nodeService.retrieveSchoolCovidSummary().subscribe(data=>{
      this.covidSummary = data;
      console.log(data);
    },(err:HttpErrorResponse)=>{
      console.log(err.message)
    })
    console.log(this.covidSummary)
  }

  displaySchoolCovidTesting(){
    this.nodeService.retrieveSchoolCovidTesting().subscribe(data=>{
      this.covidTesting = data;
    },(err:HttpErrorResponse)=>{
      console.log(err.message)
    })
    console.log(this.covidTesting)

  }

  displaySchoolPartnersActiveCovid(){
    this.nodeService.retrieveSchoolPartnersActiveCovid().subscribe(data=>{
      console.log(data)
      this.covidPartnersActive = data;
    },(err:HttpErrorResponse)=>{
      console.log(err.message)
    })
    console.log(this.covidPartnersActive)
  }
  ngOnInit() {
  }

}
