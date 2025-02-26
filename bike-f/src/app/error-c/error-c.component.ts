import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-c',
  imports: [],
  templateUrl: './error-c.component.html',
  styleUrl: './error-c.component.css'
})
export class ErrorCComponent {
  private msg:string = "Notika nepaskaidrota kļūda!";

  @Input() message:string = this.msg;

}
