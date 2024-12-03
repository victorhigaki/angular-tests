import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-async-comp',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './async-comp.component.html',
  styleUrl: './async-comp.component.scss',
})
export class AsyncCompComponent {
  private apiService = inject(ApiService);

  protected fruits$ = this.apiService.getFruits();
}
