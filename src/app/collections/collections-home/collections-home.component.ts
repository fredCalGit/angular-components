import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
    {
      name: 'James', age: 25, job: 'Designer', employed: true
    },
    {
      name: 'Jill', age: 27, job: 'Engineer', employed: true
    },
    {
      name: 'Elyse', age: 21, job: 'Engineer', employed: false
    },
  ]
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job?' },
  ]
}
