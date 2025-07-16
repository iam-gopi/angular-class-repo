import {
  Component,
  EventEmitter,
  Output,
  output,
  input,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {
  // emiter = output<string>();

  // fromparent = input<string>();

  // older method
  @Output()
  emiter: EventEmitter<string> = new EventEmitter();

  @Input() fromparent: string = '';

  emitData() {
    this.emiter.emit('from child');
  }
}
