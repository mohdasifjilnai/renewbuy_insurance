import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiConstants } from '../../utilis/api.constant';
import { ApiService } from '../../utilis/service/api.service';
import { ElementRef, ViewChild } from '@angular/core';
import { ToastService } from '../../utilis/service/toast.service';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  currentIndex = 0;
  tabWidth = 108;
  tags: any;
  blogs: any;
  activeTagIndex = 0; // Default to the first tag
  podcats: any;
  faq_tags: any;
  faqs_data: any;
  home_sponsored: any;
  activeTagId: number | null = null; // Track the active tag ID
  email: any;
  tags_length: number = 0;
  @ViewChild('tabsContainer') tabsContainer!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private apiService: ApiService,
    private toasterService: ToastService
  ) {
    const header = new HttpHeaders({
      Authorization: `Bearer ${environment['bearerToken']}`,
    });
    let url = `${environment['strapiDomain']}${ApiConstants['FAQ_tags']}`;
    let sponsored = `${environment['strapiDomain']}${ApiConstants['Home']}`;
    this.apiService.getRequestedResponse(url, header).subscribe((response) => {
      this.faq_tags = response?.data;
      this.tags_length = this.faq_tags?.length;
      this.faqs_data = response?.data[0]?.attributes?.faqs?.data;
      this.activeTagId = response?.data[0]?.id;
    });

    this.apiService
      .getRequestedResponse(sponsored, header)
      .subscribe((response) => {
        this.home_sponsored = response.data.attributes;
      });
  }

  scrollTabs(direction: number): void {
    const maxIndex = this.tabsContainer.nativeElement.children.length - 3;
    this.tags_length = maxIndex;
    this.currentIndex = Math.max(
      0,
      Math.min(this.currentIndex + direction, maxIndex)
    );
    this.tabsContainer.nativeElement.style.transform = `translateX(-${
      this.currentIndex * this.tabWidth
    }px)`;
  }
  // Function to handle tab switching
  showTab(tag: any): void {
    this.activeTagId = tag?.id;
    this.faqs_data = tag?.attributes?.faqs?.data;
  }

  // Function to handle FAQ question toggle
  toggleAnswer(event: Event): void {
    const clickedQuestion = event.currentTarget as HTMLElement;
    const clickedAnswer = clickedQuestion.nextElementSibling as HTMLElement;
    const clickedIcon = clickedQuestion.querySelector(
      '.toggle-icon img'
    ) as HTMLImageElement;
    if (clickedQuestion) {
      const isCurrentlyActive = clickedQuestion?.classList.contains('active');

      // Collapse other answers
      const questions = document.querySelectorAll('.faq-question');
      const answers = document.querySelectorAll('.faq-answer');
      const icons = document.querySelectorAll('.toggle-icon img');

      questions.forEach((question, index) => {
        const answer = answers[index] as HTMLElement;
        const icon = icons[index] as HTMLImageElement;

        if (question !== clickedQuestion) {
          answer.style.display = 'none';
          question?.classList.remove('active');
          icon.src = '../../../rb_assets/assets/images/faq-dropdown.svg';
        }
      });

      // Toggle the clicked  answer
      if (isCurrentlyActive) {
        clickedAnswer.style.display = 'none';
        clickedQuestion?.classList.remove('active');
        clickedQuestion?.classList.add('inactive'); // Add this line to add the 'inactive' class
        clickedIcon.src = '../../../rb_assets/assets/images/faq-dropdown.svg';
      } else {
        clickedAnswer.style.display = 'block';
        clickedQuestion?.classList.remove('inactive'); // Remove the 'inactive' class
        clickedQuestion?.classList.add('active');
        clickedIcon.src = '../../../rb_assets/assets/images/dropdown-icon.svg';
      }
      
    }
  }
  subscribe_email(email: any) {
    if (isPlatformBrowser(this.platformId)) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailPattern.test(email) == true) {
        let url = `${environment.unicornDomain}${ApiConstants.subscribe_email}?email=${email}`;
        this.apiService.getpostRequest(url, '', '').subscribe(
          (res) => {
            this.toasterService.toastError(
              'Thank you for subscribing to our newsletter!',
              'success'
            );
          },
          (error) => {
            this.toasterService.toastError(error?.error?.message, 'error');
          }
        );
      } else {
        this.toasterService.toastError('Please enter valid email.', 'error');
      }
    }
  }
}
