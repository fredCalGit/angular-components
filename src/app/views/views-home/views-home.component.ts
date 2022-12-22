import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  stats = [
    {
      value: 22, label: '# of Users'
    },
    {
      value: 900, label: 'revenue'
    },
    {
      value: 57, label: 'Reviews'
    },
  ]

  items = [
    {
      imageUrl: 'assets/image.png',
      header: 'First Item',
      description: 'This is a description',
      details: 'A few details'
    },
    {
      imageUrl: 'assets/image.png',
      header: 'Second Item',
      description: 'Here goes some more description',
      details: "Description wasn't enough, here's some more details"
    },
    {
      imageUrl: 'assets/image.png',
      header: 'Third Item',
      description: 'Yet another description',
      details: 'You do really appreciate describing things'
    },
  ]
}
