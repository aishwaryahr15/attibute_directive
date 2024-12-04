import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
isDiv1Visible:boolean=true;
isDiv2Visible:boolean=true;
num1:string ="";
num2:string ="";
isActive:boolean = true;
selectedState:string="";

cityArray: string []=['Pune','Mumbai','Nagpur','Thane'];
studentList: any[]=[
  {studentid:1,name:'aaa',city:'Pune',isActive:false},
  {studentid:2,name:'bbb',city:'Mumbai',isActive:false},
  {studentid:3,name:'ccc',city:'Nagpur',isActive:true},
  {studentid:4,name:'ddd',city:'Thane',isActive:false},

  
];

showDiv1(){
  this.isDiv1Visible=true;
}
hideDiv1(){
  this.isDiv1Visible=false;
}
toggleDiv2(){
  this.isDiv2Visible=!this.isDiv2Visible;
  // if(this.isDiv2Visible==true){
  //   this.isDiv2Visible=false;  long code of the above
  // }else{
  //   this.isDiv2Visible=true;
  // }
}
}
