import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-motor',
  templateUrl: './faq-motor.component.html',
  styleUrl: './faq-motor.component.scss'
})
export class FaqMotorComponent {
  questionList=[
    {question:'How is Motor Insurance Premium calculated?'},
    {question:'What is the validity period of a Motor Insurance Policy?'},
    {question:'What documents are needed to file a Motor Insurance Claim?'},
    {question:'If I lose my Vehicle Insurance Policy, can I get a duplicate one?'},
    {question:'Is Motor Insurance Renewal possible online?'},
    {question:'Is GST levied on Motor Insurance Premiums?'},
    {question:'What is IDV (Insured Declared Value)?'},
    {question:'Is GST levied on Motor Insurance Premiums?'},
    {question:'How can I get a discount on my Motor Insurance Policy Premium?'},
    {question:'Is it beneficial to buy Motor Insurance Online?'},
    {question:'For how long is the NCB on a policy valid?'}
  ]
}
