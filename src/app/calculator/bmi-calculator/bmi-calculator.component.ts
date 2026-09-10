import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss'],
})
export class BmiCalculatorComponent implements AfterViewInit {
  bmiForm: FormGroup;
  bmiValue: number = 0;
  bmiCategory: string = '';
  bmiPercentage: number = 0; // Position for the gauge
  chart: Chart | null = null;

  calculatorHeader = [
    {
      title: `Body Mass Index (BMI) Calculator`,
      subTitle: `Your Body Mass Index (BMI) is a key indicator of your overall health. Our BMI Calculator evaluates your height and weight to determine if you're underweight, normal, overweight, or obese. It also provides health tips based on your results to help you achieve a balanced lifestyle. Track your progress and take steps toward a healthier you.`,
      image: `./rb_assets/assets/calculator/retirement_cal.svg`,
    },
  ];

  sliders = [
    { id: 'name', label: 'Full Name', type: 'text', formControlName: 'name', minlength: 3, maxlength: 20 },
    { id: 'mobile_number', label: 'Contact Number', type: 'number', formControlName: 'mobile_number', minlength: 10, maxlength: 10 },
    {
      id: 'height',
      label: 'Height (cm)*',
      min: 30,
      max: 250,
      value: 180,
      type: 'range',
      formControlName: 'height',
    },
    {
      id: 'weight',
      label: 'Weight (kg)*',
      min: 3,
      max: 300,
      value: 70,
      type: 'range',
      formControlName: 'weight',
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.bmiForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      mobile_number: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9][0-9]{9}$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      height: [180, [Validators.required]],
      weight: [70, [Validators.required]],
    });
  }

  ngAfterViewInit() {
    this.initializeGauge();
  }

  calculateBMI() {
    if (this.bmiForm.invalid) {
      this.bmiForm.markAllAsTouched();
      return;
    }

    const weight = this.bmiForm.get('weight')?.value;
    const heightCm = this.bmiForm.get('height')?.value;
    const heightM = heightCm / 100;

    if (weight && heightM) {
      this.bmiValue = parseFloat((weight / (heightM * heightM)).toFixed(1));
      this.determineBMICategory();
      this.updateGauge();
    }
  }

  determineBMICategory() {
    if (this.bmiValue < 18.5) {
      this.bmiCategory = 'Underweight';
      this.bmiPercentage = (this.bmiValue / 18.5) * 20;
    } else if (this.bmiValue >= 18.5 && this.bmiValue < 24.9) {
      this.bmiCategory = 'Normal Weight';
      this.bmiPercentage = 20 + ((this.bmiValue - 18.5) / (24.9 - 18.5)) * 30;
    } else if (this.bmiValue >= 25 && this.bmiValue < 29.9) {
      this.bmiCategory = 'Overweight';
      this.bmiPercentage = 50 + ((this.bmiValue - 25) / (29.9 - 25)) * 25;
    } else if (this.bmiValue >= 30) {
      this.bmiCategory = 'Obese';
      this.bmiPercentage = 75 + ((this.bmiValue - 30) / 10) * 25;
    }
  }

  initializeGauge() {
    const canvas = document.getElementById('bmiGauge') as HTMLCanvasElement;

    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'doughnut',
        data: {
          labels: ['Underweight', 'Normal', 'Overweight', 'Obese'],
          datasets: [
            {
              data: [25, 25, 25, 25],
              backgroundColor: ['#8BC34A', '#4CAF50', '#FFC107', '#F44336'],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          rotation: -90,
          circumference: 180,
          cutout: '80%',
          plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
          },
        },
        plugins: [
          {
            id: 'needle',
            afterDatasetDraw: (chart) => {
              const { ctx, chartArea } = chart;
              const centerX = (chartArea.left + chartArea.right) / 2;
              const centerY = chartArea.bottom;
              const angle = Math.PI * (this.bmiPercentage / 100);
              const needleLength = 200;

              // Draw the needle
              ctx.save();
              ctx.translate(centerX, centerY);
              ctx.rotate(angle);
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(needleLength, 0);
              ctx.lineWidth = 2;
              ctx.strokeStyle = '#000';
              ctx.stroke();
              ctx.restore();

              // Draw the needle base
              ctx.beginPath();
              ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
              ctx.fillStyle = '#000';
              ctx.fill();
            },
          },
        ],
      });
    }
  }

  updateGauge() {
    if (this.chart) {
      this.chart.update();
    }
  }
}
