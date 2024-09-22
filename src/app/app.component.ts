import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'billCreator';

  ngOnInit(): void {
    // this.getData();
  }

  input= [
    {"name":"Joe", "age":17}, 
    {"name":"Bob", "age":17}, 
    {"name":"Carl", "age": 35}
];

// dup:any[]=[];
// getData()
// {
//   this.input.filter((el)=>{
//     this.dup.push(el.age);
//   })
//   console.log('dup',this.dup);
//   let newDup=new Set(this.dup);
//   console.log('newDup',newDup);
// }

}
