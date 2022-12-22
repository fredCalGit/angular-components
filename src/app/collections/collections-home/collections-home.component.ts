import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
    {
      name: 'James', age: 25, job: 'Designer', employed: 'Yes'
    },
    {
      name: 'Jill', age: 27, job: 'Engineer', employed: 'Yes'
    },
    {
      name: 'Fred', age: 35, job: 'Engineer', employed: 'No'
    },
    {
      name: 'Bob', age: 27, job: 'Engineer', employed: 'Yes'
    },
    {
      name: 'Richard', age: 35, job: 'Engineer', employed: 'Yes'
    },
  ]
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job?' },
  ]
}
