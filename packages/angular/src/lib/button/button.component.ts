import { Component, input } from '@angular/core';

@Component({
    selector: 'facil-button',
    standalone: true,
    template: `
    <button
      type="button"
      [attr.data-variant]="variant()"
      [disabled]="disabled()"
    >
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
    variant = input<'primary' | 'secondary'>('primary');
    disabled = input(false);
}