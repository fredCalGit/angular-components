import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() close = new EventEmitter()

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement)
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove()
  }
  onCloseClick() {
    this.close.emit()
  }
}
