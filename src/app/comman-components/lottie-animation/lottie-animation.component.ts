import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-animation',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './lottie-animation.component.html',
  styleUrl: './lottie-animation.component.scss',
})
export class LottieAnimationComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: '../../../rb_assets/assets/animations/unlock-earning.json',
    loop: true,
    autoplay: true,
  };

  // Capture the animation instance
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  // Play animation on hover
  playAnimation(): void {
    if (this.animationItem) {
      this.animationItem.play();
    }
  }

  // Stop animation when mouse leaves
  stopAnimation(): void {
    if (this.animationItem) {
      this.animationItem.stop();
    }
  }
  navigateUrl() {
    // Replace with your desired URL
    window.location.href = 'https://partners.renewbuy.com/v2/';
  }
}
