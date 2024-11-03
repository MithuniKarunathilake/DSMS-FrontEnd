import { Component,OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  ngOnInit(){
    AOS.init();
  }

}
