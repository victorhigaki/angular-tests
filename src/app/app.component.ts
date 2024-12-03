import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LabelComponent } from './tests/components/label/label.component';
import { AsyncCompComponent } from './tests/components/async-comp/async-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LabelComponent, AsyncCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tests';
}
