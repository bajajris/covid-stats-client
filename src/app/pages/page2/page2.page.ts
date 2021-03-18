import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NodeserviceService } from 'src/app/nodeservice.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  phu: any= []
  constructor(private nodeService: NodeserviceService) { }

  ngOnInit() {
    this.nodeService.retrieveCasesByStatusAndPHU().subscribe(data=>{
      this.phu = data;
      console.log(data);
    },(err:HttpErrorResponse)=>{
      console.log(err.message)
    })
    console.log(this.phu)
  }

}
