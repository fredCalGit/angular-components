import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  toggleModal = false
  items = [
    {
      title: 'What is your favorite color?',
      content: 'Orange is my favorite color'
    },
    {
      title: 'What does an orange tastes like?',
      content: 'An orange tastes like a cat'
    },
    {
      title: 'What color is that cat?',
      content: 'That cat is an orange color'
    },
  ]
  onClick() {
    this.toggleModal = !this.toggleModal
  }
}
