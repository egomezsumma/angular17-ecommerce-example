import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-empty-space-card',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './empty-space-card.component.html'
})
export class EmptySpaceCardComponent {
  @Input() title?:string;
  @Input() subtitle?:string;
  @Input() description?:string;
}
