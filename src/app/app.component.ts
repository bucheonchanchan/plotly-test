import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  graph: any = {
    data: [],
    layout: {width: 300, height: 300, title: 'A Fancy Plot'}
};

  ngAfterViewInit(){
    let x: any = [];
    let y: any = [];
    let z: any = [];

    for(let i=0;i<10;i++) {
      var a_ = Math.random(); 
      x.push(a_);
      
      var b_ = Math.random(); 
      y.push(b_);
      
      var c_ = Math.random(); 
      z.push(c_);
    };
      
    this.graph.data = [
      {
        opacity:0.8,
        color:'rgb(300,100,200)',
        type: 'mesh3d',
        x,
        y,
        z,
      }
    ];
  }
}
