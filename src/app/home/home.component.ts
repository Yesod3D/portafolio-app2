import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listdeVideos:any = []

  constructor(private RestService:RestService){

  }

  ngOnInit(): void {
    //this.cargarData();   
    this.cargarEmptyData();
  }

  public cargarData(){
    this.RestService.get(`http://localhost:3000/posts`)
    .subscribe(respuesta => {
      this.listdeVideos = respuesta;
      
    })
  }

  private cargarEmptyData() {
    this.listdeVideos = [
      {
        title: 'Video 1',
        subtitle: 'Subtitle video 1',
        img:'https://i.ytimg.com/vi/23h0HhkndYM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzKmBuFel7pZJ_kSE23gIKJxAC7g'
      },
      {
        title: 'Video 2',
        subtitle: 'Subtitle video 2',
        img:'https://i.ytimg.com/vi/23h0HhkndYM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzKmBuFel7pZJ_kSE23gIKJxAC7g'
      },
      {
        title: 'Video 3',
        subtitle: 'Subtitle video 3',
        img:'https://i.ytimg.com/vi/23h0HhkndYM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzKmBuFel7pZJ_kSE23gIKJxAC7g'
      }
    ]
  }
}
