import { Component, Input } from "@angular/core";

@Component({
  selector: "app-faq-motor",
  templateUrl: "./faq-motor.component.html",
  styleUrl: "./faq-motor.component.scss",
})
export class FaqMotorComponent {
  @Input() questionList: any;
  expandedQuestions: boolean[] = [];
  expandedQuestionIndex: number | null = null;
  constructor() {}
  ngOnChanges() {
    // console.log(this.questionList, "questionList");
    this.expandedQuestions = this.questionList.map(() => false);
  }
  toggleAnswer(index: number): void {
    if (this.expandedQuestionIndex === index) {
      this.expandedQuestionIndex = null;
    } else {
      this.expandedQuestionIndex = index;
    }
  }
  isAnswerVisible(index: number): boolean {
    return this.expandedQuestionIndex === index;
  }
}
