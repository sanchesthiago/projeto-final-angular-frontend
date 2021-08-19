import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent implements OnInit {

 
 
  dateToday = moment().format('YYYY/MM/DD');


  userForm = new FormGroup({
    name: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required]),
    password: new FormControl('',[Validators.required]),
    inclusionDate: new FormControl (this.dateToday),
    validateUser: new FormControl(true),
    img: new FormControl('')

  });



  constructor(private userService: UserService, private router: Router, fileInput: ElementRef) {
    
  }

 
  
  ngOnInit(): void {
    this.userForm.controls.inclusionDate.disable();
    

  }

  onSubmit(userForm: FormGroup) {
    const formValue = userForm.value;
    formValue.inclusionDate = this.dateToday;
    formValue.validRegistration = true;
    this.userService.createUser(formValue)
    alert('Usuario adicionado com sucesso!');
    this.router.navigateByUrl('/user');
    }; 


    // @ViewChild('fileInput') fileInput: ElementRef | undefined;
    // fileAttr = 'Choose File';
  
  
    // uploadFileEvt(imgFile: any) {
    //     // HTML5 FileReader API
    //     let reader = new FileReader();
    //     reader.onload = (e: any) => {
    //       let image = new Image();
    //       image.src = e.target.result;
    //       image.onload = rs => {
    //         let imgBase64Path = e.target.result;
    //       };
    //     };
    //     reader.readAsDataURL(imgFile.target.files[0]);
        
    //     console.log;
        
    // }

}
