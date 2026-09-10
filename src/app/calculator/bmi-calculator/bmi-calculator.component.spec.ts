/// <reference types="jasmine" />

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';

import { BmiCalculatorComponent } from './bmi-calculator.component';

describe('BmiCalculatorComponent', () => {
  let component: BmiCalculatorComponent;
  let fixture: ComponentFixture<BmiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmiCalculatorComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark the form as touched and stop when the form is invalid', () => {
    const determineBMICategorySpy = spyOn(component, 'determineBMICategory');
    const updateGaugeSpy = spyOn(component, 'updateGauge');

    component.bmiForm.reset({
      name: '',
      mobile_number: '',
      height: 180,
      weight: 70
    });

    component.calculateBMI();

    expect(component.bmiForm.touched).toBeTrue();
    expect(determineBMICategorySpy).not.toHaveBeenCalled();
    expect(updateGaugeSpy).not.toHaveBeenCalled();
  });

  it('should calculate BMI and update the category and gauge for valid input', () => {
    const determineBMICategorySpy = spyOn(component, 'determineBMICategory');
    const updateGaugeSpy = spyOn(component, 'updateGauge');

    component.bmiForm.setValue({
      name: 'Amit Kumar',
      mobile_number: '9876543210',
      height: 180,
      weight: 70
    });

    component.calculateBMI();

    expect(component.bmiValue).toBe(21.6);
    expect(determineBMICategorySpy).toHaveBeenCalled();
    expect(updateGaugeSpy).toHaveBeenCalled();
  });

  it('should classify a BMI below 18.5 as underweight', () => {
    component.bmiValue = 17;

    component.determineBMICategory();

    expect(component.bmiCategory).toBe('Underweight');
    expect(component.bmiPercentage).toBeCloseTo((17 / 18.5) * 20, 5);
  });

  it('should classify a BMI from 18.5 to below 24.9 as normal weight', () => {
    component.bmiValue = 21.6;

    component.determineBMICategory();

    expect(component.bmiCategory).toBe('Normal Weight');
    expect(component.bmiPercentage).toBeCloseTo(34.53125, 5);
  });

  it('should classify a BMI from 25 to below 29.9 as overweight', () => {
    component.bmiValue = 27;

    component.determineBMICategory();

    expect(component.bmiCategory).toBe('Overweight');
    expect(component.bmiPercentage).toBeCloseTo(60.2040816, 5);
  });

  it('should classify a BMI of 30 or higher as obese', () => {
    component.bmiValue = 32;

    component.determineBMICategory();

    expect(component.bmiCategory).toBe('Obese');
    expect(component.bmiPercentage).toBe(80);
  });

  it('should initialize the gauge during after-view initialization', () => {
    const initializeGaugeSpy = spyOn(component, 'initializeGauge');

    component.ngAfterViewInit();

    expect(initializeGaugeSpy).toHaveBeenCalled();
  });

  it('should leave the chart unset when the gauge canvas is unavailable', () => {
    spyOn(document, 'getElementById').and.returnValue(null);

    component.initializeGauge();

    expect(component.chart).toBeNull();
  });

  it('should update the chart when a chart exists', () => {
    const updateSpy = jasmine.createSpy('update');
    component.chart = { update: updateSpy } as unknown as Chart;

    component.updateGauge();

    expect(updateSpy).toHaveBeenCalled();
  });

  it('should do nothing when updating the gauge without a chart', () => {
    component.chart = null;

    expect(() => component.updateGauge()).not.toThrow();
  });
});
