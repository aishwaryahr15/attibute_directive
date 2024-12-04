import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttriDriComponent } from "./components/directive/attri-dri/attri-dri.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuralDirectiveComponent, AttriDriComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_LP';
}
