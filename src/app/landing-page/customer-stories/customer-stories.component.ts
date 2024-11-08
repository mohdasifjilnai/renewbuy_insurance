import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { ShareService } from '../../utilis/service/share.service';
declare var $: any; // Declare jQuery to use it

@Component({
  selector: 'app-customer-stories',
  templateUrl: './customer-stories.component.html',

  styleUrl: './customer-stories.component.scss',
})
export class CustomerStoriesComponent {
  @ViewChildren('video1, video2,video3') videos!: QueryList<HTMLVideoElement>;
  @ViewChild('video3') video3Ref!: ElementRef<HTMLVideoElement>;
  @ViewChild('video1', { static: false }) video1!: ElementRef;
  @ViewChild('video2', { static: false }) video2!: ElementRef;
  @ViewChild('video3', { static: false }) video3!: ElementRef;
  currentIndex: number = 0;
  i: number = 0;
  isExpanded = false;
  insurer_partner: any;
  custome_stories: any;
  banner: any;
  isSign: boolean = false;
  videoNumber = 0;
  girdClassName = 'cs-grid-2';
  currentPlayingVideo: HTMLVideoElement | null = null;

  login() {
    this.isSign = true;
  }
  close(event: any) {
    this.isSign = event;
  }
  constructor(private shareService: ShareService) {
    this.shareService.customersShareData$.subscribe((data) => {
      this.getAllDataForlandingPage(data);
    });
  }

  // currentPlayingVideo: HTMLVideoElement | null = null;

  // videoNumber: number = 2;
  // girdClassName: string = 'cs-grid-2';

  /**+
   * This function handles the video grid layout and video playback.//+
   * It updates the video number, grid class, and expands the video section.//+
   * If a different video is clicked, it pauses the currently playing video and plays the clicked video.//+
   **/
  // increaseWidth(
  //   count: number,
  //   gridClass: string,
  //   videoElement: HTMLVideoElement
  // ) {
  //   this.videoNumber = count;
  //   this.girdClassName = gridClass;
  //   this.isExpanded = true;

  //   if (this.currentPlayingVideo && this.currentPlayingVideo !== videoElement) {
  //     this.currentPlayingVideo.pause();
  //     this.resetVideo(this.videoNumber); // Call reset for the previous video
  //     this.currentPlayingVideo.currentTime = 0; // Optionally reset the video
  //   }

  //   if (this.currentPlayingVideo == videoElement) {
  //     videoElement.play();
  //     videoElement.poster = ''; // Remove poster while playing
  //   }

  //   // Set the clicked video as the currently playing video
  //   this.currentPlayingVideo = videoElement;
  //   this.updatePosters();
  // }
  ngOnInit() {}
  /**
   *  Retrieves and processes data for the landing page.//+
   * Fetches the home page data from the API using the `ShareService` and populates the necessary variables.//+
   * @returns {void}
   * */
  getAllDataForlandingPage(response: any) {
    if (response) {
      this.custome_stories = response;
    }
  }
  ngAfterViewInit(): void {
    this.currentPlayingVideo = this.video3Ref?.nativeElement;
    this.addVideoEventListeners(this.video1.nativeElement, 1);
    this.addVideoEventListeners(this.video2.nativeElement, 2);
    this.addVideoEventListeners(this.video3.nativeElement, 3);
  }
  trackById(index: number, item: any): any {
    return item?.id;
  }

  increaseWidth(
    count: number,
    gridClass: string,
    videoElement: HTMLVideoElement
  ) {
    this.videoNumber = count;
    this.girdClassName = gridClass;
    this.isExpanded = true;

    if (this.currentPlayingVideo && this.currentPlayingVideo !== videoElement) {
      this.currentPlayingVideo.pause();
      this.showPoster(this.currentPlayingVideo);
    }

    if (this.currentPlayingVideo !== videoElement) {
      videoElement.play();
      videoElement.poster = '';
      this.currentPlayingVideo = videoElement;
    }

    this.updatePosters();
  }

  showPoster(video: HTMLVideoElement) {
    if (video === this.video1.nativeElement) {
      video.poster = '../../../rb_assets/assets/images/4_1.png';
    } else if (video === this.video2.nativeElement) {
      video.poster = '../../../rb_assets/assets/images/2_1.png';
    } else if (video === this.video3.nativeElement) {
      video.poster = '../../../rb_assets/assets/images/1_1.png';
    }
  }

  resetVideo(count: number): void {
    let video: HTMLVideoElement;
    if (count === 1) {
      video = this.video1.nativeElement;
    } else if (count === 2) {
      video = this.video2.nativeElement;
    } else if (count === 3) {
      video = this.video3.nativeElement;
    } else {
      return;
    }

    // Ensure the video is paused and reset
    video.pause();
    this.showPoster(video);
    video.currentTime = 0;
    video.load();
  }

  updatePosters() {
    const videos = [
      this.video1.nativeElement,
      this.video2.nativeElement,
      this.video3.nativeElement,
    ];

    videos.forEach((video: HTMLVideoElement) => {
      if (video === this.currentPlayingVideo) {
        video.poster = ''; // Hide poster of the currently playing video
      } else {
        // Show posters for the paused videos
        this.showPoster(video);
      }
    });
  }

  addVideoEventListeners(videoElement: HTMLVideoElement, count: number) {
    videoElement.addEventListener('ended', () => {
      this.resetVideo(count);
      this.currentPlayingVideo = null;
      this.updatePosters();
    });

    videoElement.addEventListener('pause', () => {
      this.resetVideo(count);
      this.currentPlayingVideo = null;
      this.updatePosters();
    });
  }
  stopVideo(count: number, gridClass: string, videoElement: HTMLVideoElement) {
    this.videoNumber = count;
    this.girdClassName = gridClass;
    this.isExpanded = true;

    videoElement.pause();
    this.showPoster(videoElement);
  }
}
