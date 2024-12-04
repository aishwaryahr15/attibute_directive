import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attri-dri',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attri-dri.component.html',
  styleUrl: './attri-dri.component.css'
})
export class AttriDriComponent {
div1Bgcolor:string="bg-primary";
isdiv2Active:boolean=false;
num1:string="";
num2: string="";

isactive: boolean=false;
customStyle:any={
  'color':'white',
  'background-color':'red',
  'width':'200px',
  'height':'200px',
  'border-radius':'50%',
};

studentList: any[]=[
  {studentid:1,totalmarks:91, gender:'F', name:'aaa',city:'Pune',isactive:false},
  {studentid:2,totalmarks:89, gender:'M',name:'bbb',city:'Mumbai',isactive:false},
  {studentid:3,totalmarks:82, gender:'M',name:'ccc',city:'Nagpur',isactive:true},
  {studentid:4,totalmarks:92, gender:'F',name:'ddd',city:'Thane',isactive:false},
];

addRedClass(){
this.div1Bgcolor="bg-danger"
}
addBlueClass(){
this.div1Bgcolor="bg-primary"
}
toggleDiv2class(){
  this.isdiv2Active=!this.isdiv2Active;
}


}
