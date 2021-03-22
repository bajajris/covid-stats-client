import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NodeserviceService } from 'src/app/nodeservice.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  outbreaks: any = []
  constructor(private nodeService: NodeserviceService) { }

  ngOnInit() {
    this.nodeService.retrieveOngoingOutbreaks().subscribe(data => {
      this.outbreaks = data;
      console.log(data);
    }, (err: HttpErrorResponse) => {
      console.log(err.message)
    })
    console.log(this.outbreaks)
  }
}

