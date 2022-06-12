import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = 'a very cute tracker for ya!';
  
  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTask(){
    alert('toggle')
  }
}
