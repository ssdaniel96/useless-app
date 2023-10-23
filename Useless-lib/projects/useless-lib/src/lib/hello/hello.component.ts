import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input() name: string | null = null;
}
