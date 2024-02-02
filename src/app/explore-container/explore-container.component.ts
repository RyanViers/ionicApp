import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  standalone: true,
  template: `
    <div class="text-center absolue left-0 right-0 top-[50%] [transform:_translateY(-50%)]" id="container">
      <strong class="text-xl">{{ name }}</strong>
      <p class="text-base text-[#8c8c8c] m-0">
        Explore
        <a
          class="text"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
          >UI Components</a
        >
      </p>
    </div>
  `,
})

export class ExploreContainerComponent {
  @Input() name?: string;
}
