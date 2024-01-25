import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    theme: new FormControl("", [Validators.required])
  })

  submit(){
    if(this.contactForm.status === "VALID"){
      console.log(this.contactForm.value);
      this.contactForm.reset({ theme: "" });
    } else {
      alert("Preencha os campos corretamente.")
    }
  }
}
