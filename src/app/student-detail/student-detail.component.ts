import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [MatStepperModule,ReactiveFormsModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent implements OnInit{
  profileFormGroup!: FormGroup;
  addressFormGroup!: FormGroup;
  studentData: any = {};
  isSaved: boolean = false; 

  constructor(private fb : FormBuilder){}

  ngOnInit(){
    this.profileFormGroup = this.fb.group({
      firstName : ['',[Validators.required, Validators.minLength(2)]],
      lastName : ['']
    });
    this.addressFormGroup = this.fb.group({
      address : ['']
    })
  }

  saveData() {
    debugger;
    this.studentData = {
      profile: this.profileFormGroup.value,
      address: this.addressFormGroup.value
    };
    console.log('Form Data:', this.studentData);
    this.isSaved = true;
  }
}
